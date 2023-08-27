/* eslint-disable no-undef */

function intervalsToNotes(startingLetter, intervals) {
	function buildScale(currentNote, remainingIntervals) {
		if (is_null(remainingIntervals)) {
			// This is the last note
			return list(currentNote);
		}

		let nextInterval = head(remainingIntervals);
		let nextNote = currentNote + nextInterval;
		let nextRemainingIntervals = tail(remainingIntervals);
		return pair(
			currentNote,
			buildScale(
				nextNote,
				nextRemainingIntervals
			)
		);
	}
	return buildScale(
		letter_name_to_midi_note(startingLetter),
		intervals
	);
}
function makeSounds(startingLetter, intervals, repeats, instrument, duration) {
	let repeater = repeat(
		(l) => append(l, intervals),
		repeats
	);
	let repeatedIntervals = repeater(intervals);

	let notes = intervalsToNotes(startingLetter, repeatedIntervals);
	let sounds = map(
		(note) => instrument(note, duration),
		notes
	);
	return sounds;
}

function start(columnSounds, minimumDelay) {
	function playAndSetNext(counter) {
		let grid = get_matrix();
		let columnCount = length(head(grid));
		let columnIndex = counter % columnCount;

		let columnStates = build_list(
			(rowIndex) => {
				let row = list_ref(grid, rowIndex);
				let columnState = list_ref(row, columnIndex);
				return columnState;
			},
			columnCount
		);

		function statesToSounds(states, referenceSounds, resultSounds) {
			if (is_null(states)) {
				return !is_null(resultSounds) ? resultSounds : list(silence_sound(minimumDelay));
			}

			let columnState = head(states);
			let remainingStates = tail(states);

			let currentSound = head(referenceSounds);
			let remainingSounds = tail(referenceSounds);

			return statesToSounds(
				remainingStates,
				remainingSounds,
				columnState ? pair(currentSound, resultSounds) : resultSounds
			);
		}
		let resultSounds = statesToSounds(columnStates, columnSounds, list());
		let resultSound = simultaneously(resultSounds);

		play_concurrently(resultSound);
		set_timeout(
			() => playAndSetNext(counter + 1),
			minimumDelay * 1000
		);
	}
	playAndSetNext(0);
}

function clear() {
	clear_all_timeout();
}

function volumedInstrument(instrument, volume) {
	return (note, duration) => {
		let envelope = adsr(
			0,
			0,
			volume,
			0
		);
		return envelope(instrument(note, duration));
	};
}



let pentatonicIntervals = list(2, 2, 3, 2, 3);
let softCello = volumedInstrument(cello, 0.1);
let sounds = makeSounds("C3", pentatonicIntervals, 3, softCello, 1);

clear();
start(sounds, 0.1);
