/* eslint-disable no-unused-vars */

import {
	noise_sound,
	sawtooth_sound,
	silence_sound,
	sine_sound,
	square_sound,
	triangle_sound,

	bell,
	cello,
	piano,
	trombone,
	violin,

	make_sound,
	get_duration,
	get_wave,
	is_sound,
	letter_name_to_frequency,
	letter_name_to_midi_note,
	midi_note_to_frequency,

	adsr,
	consecutively,
	phase_mod,
	simultaneously,
	stacking_adsr,

	init_record,
	record,
	record_for,
	stop,

	play,
	play_concurrently,
	play_wave
} from "sound";

import { repeat } from "repeat";

import {
	get_matrix,
	set_timeout,
	clear_all_timeout
} from "sound_matrix";
