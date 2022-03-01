/**
 * The sounds library provides functions for constructing and playing sounds.
 *
 * A wave is a function that takes in a number `t` and returns
 * a number representing the amplitude at time `t`.
 * The amplitude should fall within the range of [-1, 1].
 *
 * A Sound is a pair(wave, duration) where duration is the length of the sound in seconds.
 * The constructor make_sound and accessors get_wave and get_duration are provided.
 *
 * Sound Discipline:
 * For all sounds, the wave function applied to and time `t` beyond its duration returns 0, that is:
 * `(get_wave(sound))(get_duration(sound) + x) === 0` for any x >= 0.
 *
 * Two functions which combine Sounds, `consecutively` and `simultaneously` are given.
 * Additionally, we provide sound transformation functions `adsr` and `phase_mod`
 * which take in a Sound and return a Sound.
 *
 * Finally, the provided `play` function takes in a Sound and plays it using your
 * computer's sound system.
 *
 * @module sound
 * @author Koh Shang Hui
 * @author Samyukta Sounderraman
 */

/* eslint-disable @typescript-eslint/naming-convention, @typescript-eslint/no-use-before-define, @typescript-eslint/no-unused-vars */
import {
  Wave,
  Sound,
  SoundProducer,
  SoundTransformer,
  List,
  AudioPlayed,
} from './types';
import {
  pair,
  head,
  tail,
  list,
  length,
  is_null,
  is_pair,
  accumulate,
} from './list';
import { RIFFWAVE } from './riffwave';

// Global Constants and Variables
let audioElement: HTMLAudioElement;
const FS: number = 44100; // Output sample rate
const fourier_expansion_level: number = 5; // fourier expansion level
export const audioPlayed: AudioPlayed[] = [];

// Singular audio context for all playback functions
let audioplayer: AudioContext;

// Track if a sound is currently playing
let isPlaying: boolean;

// Instantiates new audio context
function init_audioCtx(): void {
  audioplayer = new window.AudioContext();
  // audioplayer = new (window.AudioContext || window.webkitAudioContext)();
}

// linear decay from 1 to 0 over decay_period
function linear_decay(decay_period: number): (t: number) => number {
  return (t) => {
    if (t > decay_period || t < 0) {
      return 0;
    }
    return 1 - t / decay_period;
  };
}

// // ---------------------------------------------
// // Microphone Functionality
// // ---------------------------------------------

// permission initially undefined
// set to true by granting microphone permission
// set to false by denying microphone permission
let permission: boolean | undefined;

let recorded_sound: Sound | undefined;

// check_permission is called whenever we try
// to record a sound
function check_permission() {
  if (permission === undefined) {
    throw new Error(
      `Call init_record(); to obtain permission to use microphone`
    );
  } else if (permission === false) {
    throw new Error(`Permission has been denied.\n
		    Re-start browser and call init_record();\n
		    to obtain permission to use microphone.`);
  } // (permission === true): do nothing
}

let globalStream: any;

function rememberStream(stream: any) {
  permission = true;
  globalStream = stream;
}

function setPermissionToFalse() {
  permission = false;
}

function start_recording(mediaRecorder: MediaRecorder) {
  const data: any[] = [];
  // eslint-disable-next-line no-param-reassign
  mediaRecorder.ondataavailable = (e) => e.data.size && data.push(e.data);
  mediaRecorder.start();
  // eslint-disable-next-line no-param-reassign
  mediaRecorder.onstop = () => process(data);
}

// there is a beep signal at the beginning and end
// of each recording
const recording_signal_duration_ms = 100;

function play_recording_signal() {
  play(sine_sound(1200, recording_signal_duration_ms / 1000));
}

function process(data) {
  const audioContext = new AudioContext();
  const blob = new Blob(data);

  convertToArrayBuffer(blob)
    .then((arrayBuffer) => audioContext.decodeAudioData(arrayBuffer))
    .then(save);
}

// Converts input microphone sound (blob) into array format.
function convertToArrayBuffer(blob: Blob): Promise<ArrayBuffer> {
  const url = URL.createObjectURL(blob);
  return fetch(url).then((response) => response.arrayBuffer());
}

function save(audioBuffer: AudioBuffer) {
  const array = audioBuffer.getChannelData(0);
  const duration = array.length / FS;
  recorded_sound = make_sound((t) => {
    const index = t * FS;
    const lowerIndex = Math.floor(index);
    const upperIndex = lowerIndex + 1;
    const ratio = index - lowerIndex;
    const upper = array[upperIndex] ? array[upperIndex] : 0;
    const lower = array[lowerIndex] ? array[lowerIndex] : 0;
    return lower * (1 - ratio) + upper * ratio;
  }, duration);
}

/**
 * Initialize recording by obtaining permission
 * to use the default device microphone
 *
 * @returns string "obtaining recording permission"
 */
export function init_record(): string {
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(rememberStream, setPermissionToFalse);
  return 'obtaining recording permission';
}

/**
 * takes a <CODE>buffer</CODE> duration (in seconds) as argument, and
 * returns a nullary stop function <CODE>stop</CODE>. A call
 * <CODE>stop()</CODE> returns a sound promise: a nullary function
 * that returns a sound. Example: <PRE><CODE>init_record();
 * const stop = record(0.5);
 * // record after 0.5 seconds. Then in next query:
 * const promise = stop();
 * // In next query, you can play the promised sound, by
 * // applying the promise:
 * play(promise());</CODE></PRE>
 * @param buffer - pause before recording, in seconds
 * @returns nullary <CODE>stop</CODE> function;
 * <CODE>stop()</CODE> stops the recording and
 * returns a sound promise: a nullary function that returns the recorded sound
 */
export function record(buffer: number): () => () => Sound {
  check_permission();
  const mediaRecorder = new MediaRecorder(globalStream);
  setTimeout(() => {
    play_recording_signal();
    start_recording(mediaRecorder);
  }, recording_signal_duration_ms + buffer * 1000);
  return () => {
    mediaRecorder.stop();
    play_recording_signal();
    return () => {
      if (recorded_sound === undefined) {
        throw new Error('recording still being processed');
      } else {
        return recorded_sound;
      }
    };
  };
}

/**
 * Records a sound of given <CODE>duration</CODE> in seconds, after
 * a <CODE>buffer</CODE> also in seconds, and
 * returns a sound promise: a nullary function
 * that returns a sound. Example: <PRE><CODE>init_record();
 * const promise = record_for(2, 0.5);
 * // In next query, you can play the promised sound, by
 * // applying the promise:
 * play(promise());</CODE></PRE>
 * @param duration duration in seconds
 * @param buffer pause before recording, in seconds
 * @return <CODE>promise</CODE>: nullary function which returns the recorded sound
 */
export function record_for(duration: number, buffer: number): () => Sound {
  recorded_sound = undefined;
  const duration_ms = duration * 1000;
  check_permission();
  const mediaRecorder = new MediaRecorder(globalStream);
  setTimeout(() => {
    play_recording_signal();
    start_recording(mediaRecorder);
    setTimeout(() => {
      mediaRecorder.stop();
      play_recording_signal();
    }, duration_ms);
  }, recording_signal_duration_ms + buffer * 1000);
  return () => {
    if (recorded_sound === undefined) {
      throw new Error('recording still being processed');
    } else {
      return recorded_sound;
    }
  };
}

// =============================================================================
// Module's Exposed Functions
//
// This file only includes the implementation and documentation of exposed
// functions of the module. For private functions dealing with the browser's
// graphics library context, see './webGL_curves.ts'.
// =============================================================================

// Core functions

/**
 * Makes a Sound with given wave function and duration.
 * The wave function is a function: number -> number
 * that takes in a non-negative input time and returns an amplitude
 * between -1 and 1.
 *
 * @param wave wave function of the sound
 * @param duration duration of the sound
 * @return with wave as wave function and duration as duration
 * @example const s = make_sound(t => Math_sin(2 * Math_PI * 440 * t), 5);
 */
export function make_sound(wave: Wave, duration: number): Sound {
  return pair((t: number) => (t >= duration ? 0 : wave(t)), duration);
}

/**
 * Accesses the wave function of a given Sound.
 *
 * @param sound given Sound
 * @return the wave function of the Sound
 * @example get_wave(make_sound(t => Math_sin(2 * Math_PI * 440 * t), 5)); // Returns t => Math_sin(2 * Math_PI * 440 * t)
 */
export function get_wave(sound: Sound): Wave {
  return head(sound);
}

/**
 * Accesses the duration of a given Sound.
 *
 * @param sound given Sound
 * @return the duration of the Sound
 * @example get_duration(make_sound(t => Math_sin(2 * Math_PI * 440 * t), 5)); // Returns 5
 */
export function get_duration(sound: Sound): number {
  return tail(sound);
}

/**
 * Checks if the argument is a Sound
 *
 * @param x input to be checked
 * @return true if x is a Sound, false otherwise
 * @example is_sound(make_sound(t => 0, 2)); // Returns true
 */
export function is_sound(x: any): boolean {
  return (
    is_pair(x) &&
    typeof get_wave(x) === 'function' &&
    typeof get_duration(x) === 'number'
  );
}

/**
 * Plays the given Sound using the computer’s sound device.
 * The sound is only played if no other sounds are currently being played.
 *
 * @param sound the sound to play
 * @return the given sound
 * @example play(sine_sound(440, 5));
 */
export function play(sound: Sound): AudioPlayed {
  // Type-check sound
  if (!is_sound(sound)) {
    throw new Error(`play is expecting sound, but encountered ${sound}`);
    // If a sound is already playing, terminate execution.
  } else if (isPlaying) {
    throw new Error('play: audio system still playing previous sound');
  } else if (get_duration(sound) < 0) {
    throw new Error('play: duration of sound is negative');
  } else {
    // Instantiate audio context if it has not been instantiated.
    if (!audioplayer) {
      init_audioCtx();
    }

    // Create mono buffer
    const channel: number[] = [];
    const len = Math.ceil(FS * get_duration(sound));

    let temp: number;
    let prev_value = 0;

    const wave = get_wave(sound);
    for (let i = 0; i < len; i += 1) {
      temp = wave(i / FS);
      // clip amplitude
      // channel[i] = temp > 1 ? 1 : temp < -1 ? -1 : temp;
      if (temp > 1) {
        channel[i] = 1;
      } else if (temp < -1) {
        channel[i] = -1;
      } else {
        channel[i] = temp;
      }

      // smoothen out sudden cut-outs
      if (channel[i] === 0 && Math.abs(channel[i] - prev_value) > 0.01) {
        channel[i] = prev_value * 0.999;
      }

      prev_value = channel[i];
    }

    // quantize
    for (let i = 0; i < channel.length; i += 1) {
      channel[i] = Math.floor(channel[i] * 32767.999);
    }

    const riffwave = new RIFFWAVE([]);
    riffwave.header.sampleRate = FS;
    riffwave.header.numChannels = 1;
    riffwave.header.bitsPerSample = 16;
    riffwave.Make(channel);
    const audio = new Audio(riffwave.dataURI);
    const source2 = audioplayer.createMediaElementSource(audio);
    source2.connect(audioplayer.destination);

    // Connect data to output destination
    isPlaying = true;
    audio.play();
    audio.onended = () => {
      source2.disconnect(audioplayer.destination);
      isPlaying = false;
    };

    const soundToPlay = {
      toReplString: () => `<AudioPlayed>`,
      init: (audio_elem) => {
        audioElement = audio_elem;
        if (!audioElement) {
          throw new Error('Audio element cannot be null.');
        }
        audioElement.src = riffwave.dataURI;
        return true;
      },
    };
    audioPlayed.push(soundToPlay);
    return soundToPlay;
  }
}

/**
 * Plays the given Sound using the computer’s sound device
 * on top of any sounds that are currently playing.
 *
 * @param sound the sound to play
 * @example play_concurrently(sine_sound(440, 5));
 */
export function play_concurrently(sound: Sound): void {
  // Type-check sound
  if (!is_sound(sound)) {
    throw new Error(
      `play_concurrently is expecting sound, but encountered ${sound}`
    );
  } else if (get_duration(sound) <= 0) {
    // Do nothing
  } else {
    // Instantiate audio context if it has not been instantiated.
    if (!audioplayer) {
      init_audioCtx();
    }

    // Create mono buffer
    const theBuffer = audioplayer.createBuffer(
      1,
      Math.ceil(FS * get_duration(sound)),
      FS
    );
    const channel = theBuffer.getChannelData(0);

    let temp: number;
    let prev_value = 0;

    const wave = get_wave(sound);
    for (let i = 0; i < channel.length; i += 1) {
      temp = wave(i / FS);
      // clip amplitude
      if (temp > 1) {
        channel[i] = 1;
      } else if (temp < -1) {
        channel[i] = -1;
      } else {
        channel[i] = temp;
      }

      // smoothen out sudden cut-outs
      if (channel[i] === 0 && Math.abs(channel[i] - prev_value) > 0.01) {
        channel[i] = prev_value * 0.999;
      }

      prev_value = channel[i];
    }

    // Connect data to output destination
    const source = audioplayer.createBufferSource();
    source.buffer = theBuffer;
    source.connect(audioplayer.destination);
    isPlaying = true;
    source.start();
    source.onended = () => {
      source.disconnect(audioplayer.destination);
      isPlaying = false;
    };
  }
}

/**
 * Stops all currently playing sounds.
 */
export function stop(): void {
  audioplayer.close();
  isPlaying = false;
}

// Primitive sounds

/**
 * Makes a noise sound with given duration
 *
 * @param duration the duration of the noise sound
 * @return resulting noise sound
 * @example noise_sound(5);
 */
export function noise_sound(duration: number): Sound {
  return make_sound((t) => Math.random() * 2 - 1, duration);
}

/**
 * Makes a silence sound with given duration
 *
 * @param duration the duration of the silence sound
 * @return resulting silence sound
 * @example silence_sound(5);
 */
export function silence_sound(duration: number): Sound {
  return make_sound((t) => 0, duration);
}

/**
 * Makes a sine wave sound with given frequency and duration
 *
 * @param freq the frequency of the sine wave sound
 * @param duration the duration of the sine wave sound
 * @return resulting sine wave sound
 * @example sine_sound(440, 5);
 */
export function sine_sound(freq: number, duration: number): Sound {
  return make_sound((t) => Math.sin(2 * Math.PI * t * freq), duration);
}

/**
 * Makes a square wave sound with given frequency and duration
 *
 * @param freq the frequency of the square wave sound
 * @param duration the duration of the square wave sound
 * @return resulting square wave sound
 * @example square_sound(440, 5);
 */
export function square_sound(f: number, duration: number): Sound {
  function fourier_expansion_square(t: number) {
    let answer = 0;
    for (let i = 1; i <= fourier_expansion_level; i += 1) {
      answer += Math.sin(2 * Math.PI * (2 * i - 1) * f * t) / (2 * i - 1);
    }
    return answer;
  }
  return make_sound(
    (t) => (4 / Math.PI) * fourier_expansion_square(t),
    duration
  );
}

/**
 * Makes a triangle wave sound with given frequency and duration
 *
 * @param freq the frequency of the triangle wave sound
 * @param duration the duration of the triangle wave sound
 * @return resulting triangle wave sound
 * @example triangle_sound(440, 5);
 */
export function triangle_sound(freq: number, duration: number): Sound {
  function fourier_expansion_triangle(t: number) {
    let answer = 0;
    for (let i = 0; i < fourier_expansion_level; i += 1) {
      answer +=
        ((-1) ** i * Math.sin((2 * i + 1) * t * freq * Math.PI * 2)) /
        (2 * i + 1) ** 2;
    }
    return answer;
  }
  return make_sound(
    (t) => (8 / Math.PI / Math.PI) * fourier_expansion_triangle(t),
    duration
  );
}

/**
 * Makes a sawtooth wave sound with given frequency and duration
 *
 * @param freq the frequency of the sawtooth wave sound
 * @param duration the duration of the sawtooth wave sound
 * @return resulting sawtooth wave sound
 * @example sawtooth_sound(440, 5);
 */
export function sawtooth_sound(freq: number, duration: number): Sound {
  function fourier_expansion_sawtooth(t: number) {
    let answer = 0;
    for (let i = 1; i <= fourier_expansion_level; i += 1) {
      answer += Math.sin(2 * Math.PI * i * freq * t) / i;
    }
    return answer;
  }
  return make_sound(
    (t) => 1 / 2 - (1 / Math.PI) * fourier_expansion_sawtooth(t),
    duration
  );
}

// Composition Operators

/**
 * Makes a new Sound by combining the sounds in a given list
 * where the second sound is appended to the end of the first sound,
 * the third sound is appended to the end of the second sound, and
 * so on. The effect is that the sounds in the list are joined end-to-end
 *
 * @param list_of_sounds given list of sounds
 * @return the combined Sound
 * @example consecutively(list(sine_sound(200, 2), sine_sound(400, 3)));
 */
export function consecutively(list_of_sounds: List): Sound {
  function consec_two(ss1: Sound, ss2: Sound) {
    const wave1 = get_wave(ss1);
    const wave2 = get_wave(ss2);
    const dur1 = get_duration(ss1);
    const dur2 = get_duration(ss2);
    const new_wave = (t: number) => (t < dur1 ? wave1(t) : wave2(t - dur1));
    return make_sound(new_wave, dur1 + dur2);
  }
  return accumulate(consec_two, silence_sound(0), list_of_sounds);
}

/**
 * Makes a new Sound by combining the sounds in a given list
 * where all the sounds are overlapped on top of each other.
 *
 * @param list_of_sounds given list of sounds
 * @return the combined Sound
 * @example simultaneously(list(sine_sound(200, 2), sine_sound(400, 3)))
 */
export function simultaneously(list_of_sounds: List): Sound {
  function simul_two(ss1: Sound, ss2: Sound) {
    const wave1 = get_wave(ss1);
    const wave2 = get_wave(ss2);
    const dur1 = get_duration(ss1);
    const dur2 = get_duration(ss2);
    // new_wave assumes sound discipline (ie, wave(t) = 0 after t > dur)
    const new_wave = (t: number) => wave1(t) + wave2(t);
    // new_dur is higher of the two dur
    const new_dur = dur1 < dur2 ? dur2 : dur1;
    return make_sound(new_wave, new_dur);
  }

  const mushed_sounds = accumulate(simul_two, silence_sound(0), list_of_sounds);
  const normalised_wave = (t: number) =>
    head(mushed_sounds)(t) / length(list_of_sounds);
  const highest_duration = tail(mushed_sounds);
  return make_sound(normalised_wave, highest_duration);
}

/**
 * Returns an envelope: a function from Sound to Sound.
 * When the adsr envelope is applied to a Sound, it returns
 * a new Sound with its amplitude modified according to parameters
 * The relative amplitude increases from 0 to 1 linearly over the
 * attack proportion, then decreases from 1 to sustain level over the
 * decay proportion, and remains at that level until the release
 * proportion when it decays back to 0.
 * @param attack_ratio proportion of Sound in attack phase
 * @param decay_ratio proportion of Sound decay phase
 * @param sustain_level sustain level between 0 and 1
 * @param release_ratio proportion of Sound in release phase
 * @return Envelope a function from Sound to Sound
 * @example adsr(0.2, 0.3, 0.3, 0.1)(sound);
 */
export function adsr(
  attack_ratio: number,
  decay_ratio: number,
  sustain_level: number,
  release_ratio: number
): SoundTransformer {
  return (sound) => {
    const wave = get_wave(sound);
    const duration = get_duration(sound);
    const attack_time = duration * attack_ratio;
    const decay_time = duration * decay_ratio;
    const release_time = duration * release_ratio;
    return make_sound((x) => {
      if (x < attack_time) {
        return wave(x) * (x / attack_time);
      }
      if (x < attack_time + decay_time) {
        return (
          ((1 - sustain_level) * linear_decay(decay_time)(x - attack_time) +
            sustain_level) *
          wave(x)
        );
      }
      if (x < duration - release_time) {
        return wave(x) * sustain_level;
      }
      return (
        wave(x) *
        sustain_level *
        linear_decay(release_time)(x - (duration - release_time))
      );
    }, duration);
  };
}

/**
 * Returns a Sound that results from applying a list of envelopes
 * to a given wave form. The wave form is a Sound generator that
 * takes a frequency and a duration as arguments and produces a
 * Sound with the given frequency and duration. Each envelope is
 * applied to a harmonic: the first harmonic has the given frequency,
 * the second has twice the frequency, the third three times the
 * frequency etc. The harmonics are then layered simultaneously to
 * produce the resulting Sound.
 * @param waveform function from pair(frequency, duration) to Sound
 * @param base_frequency frequency of the first harmonic
 * @param duration duration of the produced Sound, in seconds
 * @param envelopes – list of envelopes, which are functions from Sound to Sound
 * @return Sound resulting Sound
 * @example stacking_adsr(sine_sound, 300, 5, list(adsr(0.1, 0.3, 0.2, 0.5), adsr(0.2, 0.5, 0.6, 0.1), adsr(0.3, 0.1, 0.7, 0.3)));
 */
export function stacking_adsr(
  waveform: SoundProducer,
  base_frequency: number,
  duration: number,
  envelopes: List
): Sound {
  function zip(lst: List, n: number) {
    if (is_null(lst)) {
      return lst;
    }
    return pair(pair(n, head(lst)), zip(tail(lst), n + 1));
  }

  return simultaneously(
    accumulate(
      (x: any, y: any) =>
        pair(tail(x)(waveform(base_frequency * head(x), duration)), y),
      null,
      zip(envelopes, 1)
    )
  );
}

/**
 * Returns a SoundTransformer which uses its argument
 * to modulate the phase of a (carrier) sine wave
 * of given frequency and duration with a given Sound.
 * Modulating with a low frequency Sound results in a vibrato effect.
 * Modulating with a Sound with frequencies comparable to
 * the sine wave frequency results in more complex wave forms.
 *
 * @param freq the frequency of the sine wave to be modulated
 * @param duration the duration of the output soud
 * @param amount the amount of modulation to apply to the carrier sine wave
 * @return function which takes in a Sound and returns a Sound
 * @example phase_mod(440, 5, 1)(sine_sound(220, 5));
 */
export function phase_mod(
  freq: number,
  duration: number,
  amount: number
): SoundTransformer {
  return (modulator: Sound) =>
    make_sound(
      (t) => Math.sin(2 * Math.PI * t * freq + amount * get_wave(modulator)(t)),
      duration
    );
}

// MIDI conversion functions

/**
 * Converts a letter name to its corresponding MIDI note.
 * The letter name is represented in standard pitch notation.
 * Examples are "A5", "Db3", "C#7".
 * Refer to <a href="https://i.imgur.com/qGQgmYr.png">this mapping from
 * letter name to midi notes.
 *
 * @param letter_name given letter name
 * @return the corresponding midi note
 * @example letter_name_to_midi_note("C4"); // Returns 60
 */
export function letter_name_to_midi_note(note: string): number {
  let res = 12; // C0 is midi note 12
  const n = note[0].toUpperCase();
  switch (n) {
    case 'D':
      res += 2;
      break;

    case 'E':
      res += 4;
      break;

    case 'F':
      res += 5;
      break;

    case 'G':
      res += 7;
      break;

    case 'A':
      res += 9;
      break;

    case 'B':
      res += 11;
      break;

    default:
      break;
  }

  if (note.length === 2) {
    res += parseInt(note[1], 10) * 12;
  } else if (note.length === 3) {
    switch (note[1]) {
      case '#':
        res += 1;
        break;

      case 'b':
        res -= 1;
        break;

      default:
        break;
    }
    res += parseInt(note[2], 10) * 12;
  }
  return res;
}

/**
 * Converts a MIDI note to its corresponding frequency.
 *
 * @param note given MIDI note
 * @return the frequency of the MIDI note
 * @example midi_note_to_frequency(69); // Returns 440
 */
export function midi_note_to_frequency(note: number): number {
  // A4 = 440Hz = midi note 69
  return 440 * 2 ** ((note - 69) / 12);
}

/**
 * Converts a letter name to its corresponding frequency.
 *
 * @param letter_name given letter name
 * @return the corresponding frequency
 * @example letter_name_to_frequency("A4"); // Returns 440
 */
export function letter_name_to_frequency(note: string): number {
  return midi_note_to_frequency(letter_name_to_midi_note(note));
}

// Instruments

/**
 * returns a Sound reminiscent of a bell, playing
 * a given note for a given duration
 * @param note MIDI note
 * @param duration duration in seconds
 * @return Sound resulting bell Sound with given pitch and duration
 * @example bell(40, 1);
 */
export function bell(note: number, duration: number): Sound {
  return stacking_adsr(
    square_sound,
    midi_note_to_frequency(note),
    duration,
    list(
      adsr(0, 0.6, 0, 0.05),
      adsr(0, 0.6618, 0, 0.05),
      adsr(0, 0.7618, 0, 0.05),
      adsr(0, 0.9071, 0, 0.05)
    )
  );
}

/**
 * returns a Sound reminiscent of a cello, playing
 * a given note for a given duration
 * @param note MIDI note
 * @param duration duration in seconds
 * @return Sound resulting cello Sound with given pitch and duration
 * @example cello(36, 5);
 */
export function cello(note: number, duration: number): Sound {
  return stacking_adsr(
    square_sound,
    midi_note_to_frequency(note),
    duration,
    list(adsr(0.05, 0, 1, 0.1), adsr(0.05, 0, 1, 0.15), adsr(0, 0, 0.2, 0.15))
  );
}

/**
 * returns a Sound reminiscent of a piano, playing
 * a given note for a given duration
 * @param note MIDI note
 * @param duration duration in seconds
 * @return Sound resulting piano Sound with given pitch and duration
 * @example piano(48, 5);
 */
export function piano(note: number, duration: number): Sound {
  return stacking_adsr(
    triangle_sound,
    midi_note_to_frequency(note),
    duration,
    list(adsr(0, 0.515, 0, 0.05), adsr(0, 0.32, 0, 0.05), adsr(0, 0.2, 0, 0.05))
  );
}

/**
 * returns a Sound reminiscent of a trombone, playing
 * a given note for a given duration
 * @param note MIDI note
 * @param duration duration in seconds
 * @return Sound resulting trombone Sound with given pitch and duration
 * @example trombone(60, 2);
 */
export function trombone(note: number, duration: number): Sound {
  return stacking_adsr(
    square_sound,
    midi_note_to_frequency(note),
    duration,
    list(adsr(0.2, 0, 1, 0.1), adsr(0.3236, 0.6, 0, 0.1))
  );
}

/**
 * returns a Sound reminiscent of a violin, playing
 * a given note for a given duration
 * @param note MIDI note
 * @param duration duration in seconds
 * @return Sound resulting violin Sound with given pitch and duration
 * @example violin(53, 4);
 */
export function violin(note: number, duration: number): Sound {
  return stacking_adsr(
    sawtooth_sound,
    midi_note_to_frequency(note),
    duration,
    list(
      adsr(0.35, 0, 1, 0.15),
      adsr(0.35, 0, 1, 0.15),
      adsr(0.45, 0, 1, 0.15),
      adsr(0.45, 0, 1, 0.15)
    )
  );
}
