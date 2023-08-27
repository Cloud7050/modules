// =============================================================================
//
// Cloud's Pokemon Theme
//
// Turn your volume back up a bit!
// Please give it about 15s to process after hitting run.
//
// Absolutely rip token count, but I hope you enjoy it as much as I did.
// Based on https://youtu.be/9wVXa6UB1io.
//
// Too busy/laggy to do:
// • Violin vibrato - varying ease-into delay & rate
// • Different reverb on bass, snare, violin etc
// • The remaining 22s of the loop, including the smooth part without percussion
//
// =============================================================================



function sounds_contest_entry() {
    const BPM = 132;
    const CROTCHET = 60 / BPM;
    const C = CROTCHET;

    const QUAVER = C / 2;
    const TRIPLET = C / 3;
    const SEMIQUAVER = C / 4;
    const DOTTED_CROTCHET = C * 1.5;
    const MINIM = C * 2;
    const SEMIBREVE = C * 4;
    const Q = QUAVER;
    const T = TRIPLET;
    const S = SEMIQUAVER;
    const D = DOTTED_CROTCHET;
    const M = MINIM;
    const B = SEMIBREVE;

    const $4 = letter_name_to_midi_note("C4");

    const $__1 = $4 - 12 - 12 - 5;
    const $__1S = $4 - 12 - 12 - 4;
    const $__2 = $4 - 12 - 12 - 3;
    const $__2S = $4 - 12 - 12 - 2;
    const $__3 = $4 - 12 - 12 - 1;
    const $__4 = $4 - 12 - 12;
    const $__4S = $4 - 12 - 11;
    const $__5 = $4 - 12 - 10;
    const $__5S = $4 - 12 - 9;
    const $__6 = $4 - 12 - 8;
    const $__6S = $4 - 12 - 7;
    const $__7 = $4 - 12 - 6;
    const $_1 = $4 - 12 - 5;
    const $_1S = $4 - 12 - 4;
    const $_2 = $4 - 12 - 3;
    const $_2S = $4 - 12 - 2;
    const $_3 = $4 - 12 - 1;
    const $_4 = $4 - 12;
    const $_4S = $4 - 11;
    const $_5 = $4 - 10;
    const $_5S = $4 - 9;
    const $_6 = $4 - 8;
    const $_6S = $4 - 7;
    const $_7 = $4 - 6;
    const $1 = $4 - 5;
    const $1S = $4 - 4;
    const $2 = $4 - 3;
    const $2S = $4 - 2;
    const $3 = $4 - 1;
    const $4S = $4 + 1;
    const $5 = $4 + 2;
    const $5S = $4 + 3;
    const $6 = $4 + 4;
    const $6S = $4 + 5;
    const $7 = $4 + 6;
    const $1_ = $4 + 7;
    const $1S_ = $4 + 8;
    const $2_ = $4 + 9;
    const $2S_ = $4 + 10;
    const $3_ = $4 + 11;
    const $4_ = $4 + 12;
    const $4S_ = $4 + 12 + 1;
    const $5_ = $4 + 12 + 2;
    const $5S_ = $4 + 12 + 3;
    const $6_ = $4 + 12 + 4;
    const $6S_ = $4 + 12 + 5;
    const $7_ = $4 + 12 + 6;
    const $1__ = $4 + 12 + 7;
    const $1S__ = $4 + 12 + 8;
    const $2__ = $4 + 12 + 9;
    const $2S__ = $4 + 12 + 10;
    const $3__ = $4 + 12 + 11;
    const $4__ = $4 + 12 + 12;
    const $4S__ = $4 + 12 + 12 + 1;
    const $5__ = $4 + 12 + 12 + 2;
    const $5S__ = $4 + 12 + 12 + 3;
    const $6__ = $4 + 12 + 12 + 4;
    const $6S__ = $4 + 12 + 12 + 5;
    const $7__ = $4 + 12 + 12 + 6;
    const $1___ = $4 + 12 + 12 + 7;

    function equalise_volume(sound) {
        const wave = get_wave(sound);
        const duration = get_duration(sound);
        function find_furthest_amplitude(progressing_t, changing_highest_amplitude) {
            if (progressing_t > duration) {
                return changing_highest_amplitude;
            } else {}

            const potential_highest_amplitude = math_abs(wave(progressing_t));
            const new_highest_amplitude = potential_highest_amplitude > changing_highest_amplitude ? potential_highest_amplitude : changing_highest_amplitude;
            return find_furthest_amplitude(progressing_t + 0.001, new_highest_amplitude);
        }

        const furthest_amplitude = find_furthest_amplitude(0, 0);
        return furthest_amplitude <= 0
            ? sound
            : make_sound(
                t => (wave(t) / furthest_amplitude) * 0.2,
                duration
            );
    }

    function equalised_instrument(instrument) {
        return (note, duration) => equalise_volume(
            instrument(note, duration)
        );
    }

    function volumed_instrument(equalised_instrument, volume) {
        return (note, duration) => adsr(
            0,
            0,
            volume,
            0
        )(
            equalised_instrument(note, duration)
        );
    }

    const blend = volumed_instrument(equalised_instrument(trombone), 0.5);
    const bright = volumed_instrument(equalised_instrument(cello), 0.5);
    const far = equalised_instrument(violin);
    const pluck = volumed_instrument(equalised_instrument(piano), 0.5);
    const sharp = volumed_instrument(equalised_instrument(bell), 0.5);
    const l = blend;
    const b = bright;
    const f = far;
    const p = pluck;
    const s = sharp;

    const ls = volumed_instrument(l, 0.75);
    const bs = volumed_instrument(b, 0.75);
    const fs = volumed_instrument(f, 0.75);
    const ps = volumed_instrument(p, 0.75);
    const ss = volumed_instrument(s, 0.75);
    const lss = volumed_instrument(l, 0.5);
    const bss = volumed_instrument(b, 0.5);
    const fss = volumed_instrument(f, 0.5);
    const pss = volumed_instrument(p, 0.5);
    const sss = volumed_instrument(s, 0.5);
    const lsss = volumed_instrument(l, 0.25);
    const bsss = volumed_instrument(b, 0.25);
    const fsss = volumed_instrument(f, 0.25);
    const psss = volumed_instrument(p, 0.25);
    const ssss = volumed_instrument(s, 0.25);

    function rest(duration) {
        return silence_sound(duration);
    }

    const _ = rest;

    function snare(duration) {
        return equalise_volume(
            adsr(0.05, 0.2, 1, 0.7)(
                noise_sound(duration)
            )
        );
    }

    const $ = snare;

    function snare_roll(hits, total_duration, individual_duration) {
        const hit_delay = total_duration / hits;
        const individual_sound = $(individual_duration);
        function helper(hits_remaining, current_delay, list_sounds) {
            return hits_remaining <= 0
                ? simultaneously(list_sounds)
                : helper(
                    hits_remaining - 1,
                    current_delay + hit_delay,
                    pair(
                        make_sound(
                            t => {
                                const adjusted_t = t - current_delay;
                                return adjusted_t <= 0
                                    ? 0
                                    : get_wave(individual_sound)(adjusted_t);
                            },
                            current_delay + individual_duration
                        ),
                        list_sounds
                    )
                );
        }

        const roll_sound = helper(hits, 0, list());
        return equalise_volume(
            make_sound(
                t => get_wave(roll_sound)(t),
                total_duration
            )
        );
    }

    const $$ = snare_roll;

    function cymbals(duration) {
        return equalise_volume(
            adsr(0.05, 0, 1, 0.9)(
                noise_sound(duration)
            )
        );
    }

    const Y = cymbals;

    function loop(times, list_sounds) {
        const sound = consecutively(list_sounds);
        const list_looped_sounds = build_list(index => sound, times);
        return consecutively(list_looped_sounds);
    }



    const main_strings = consecutively(list(
        // /*

        // -3
        b($1, S),
        b($3, S),
        b($5, S),
        b($7, S),

        // -2
        b($1_, C),

        b($1_, C),

        _(Q),
        b($1_, S),
        b($1_, S),

        b($1_, C),

        // -1
        b($1_, C),

        b($1_, C),

        b($6S, T),
        b($6S, T),
        b($6S, T),

        b($6S, T),
        b($6S, T),
        b($7, T),

        // 1
        f($1_, D),
        f($3_, Q),

        f($5_, M),

        // 2
        _(M),

        f($6S_, D),
        f($6_, S),
        f($5S_, S),

        // 3
        f($5_, M + C),

        _(C),

        // 4
        _(B),

        // 5
        f($1_, D),
        f($3_, Q),

        f($5_, M),

        // 6
        _(M),

        f($4_, M / 3),
        f($3_, M / 3),
        f($4_, M / 3),

        // 7
        f($5_, M + C),

        _(C),

        // 8
        _(M),

        _(C),

        f($3_, S),
        f($4_, S),
        f($5_, S),
        f($7_, S),

        // 9
        f($1__, D),
        f($3__, Q),

        f($5__, M),

        // 10
        _(M),

        f($6S__, D),
        f($6__, S),
        f($5S__, S),

        // 11
        f($5__, M + C),

        _(C),

        // 12
        _(B)

        /**/
    ));

    const secondary_strings = consecutively(list(
        // /*

        // -3
        _(C),

        // -2
        _(B),

        // -1
        _(B),

        // 1-12
        loop(3, list(
            // 1
            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            // 2
            fss($4, S),
            _(S),
            fss($4, S),
            _(S),

            fss($4, S),
            _(S),
            fss($4, S),
            _(S),

            fss($4, S),
            _(S),
            fss($4, S),
            _(S),

            fss($4, S),
            _(S),
            fss($4, S),
            _(S),

            // 3
            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            // 4
            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S),

            fss($5, S),
            _(S),
            fss($5, S),
            _(S)
        ))

        /**/
    ));

    const woodwinds = consecutively(list(
        // /*

        // -3
        _(C),

        // -2
        _(C),

        _(C),

        _(C),

        _(Q),
        _(S),
        l($5_, S / 3),
        l($6_, S / 3),
        l($7_, S / 3),

        // -1
        l($1__, S),
        _(S),
        _(Q),

        _(C),

        _(C),

        _(C),

        // 1
        _(B),

        // 2
        bs($2_, C),

        bs($2_, Q),
        bs($6S, Q),

        bsss($6S, M),

        // 3
        bsss($6, S / 2),
        bsss($5S, S / 2),
        bsss($5, M - S),

        bs($6S, D),
        bs($6, S),
        bs($5S, S),

        // 4
        bs($5, M),

        bs($4, M / 3),
        bs($3, M / 3),
        bs($4, M / 3),

        // 5
        bs($5, B),

        // 6
        bs($2_, C),

        bs($2_, Q),
        bs($6S, Q),

        bss($6S, M / 3),
        bss($6, M / 3),
        bss($6S, M / 3),

        // 7
        bss($1_, M),

        bs($6S, M / 3),
        bs($6, M / 3),
        bs($4, M / 3),

        // 8
        bs($5, M + C),

        _(C),

        // 9
        _(M),

        lsss($5__, S),
        lsss($6__, S),
        lsss($5__, S),
        lsss($4__, S),

        lsss($2S__, S),
        lsss($4__, S),
        lsss($2S__, S),
        lsss($2__, S),

        // 10
        lsss($6S_, S),
        lsss($1__, S),
        lsss($6S_, S),
        _(S),

        _(C),

        _(M),

        // 11
        _(M),

        lsss($1__, S),
        lsss($2__, S),
        lsss($3__, S),
        lsss($4__, S),

        lsss($5__, S),
        lsss($4__, S),
        lsss($3__, S),
        lsss($2__, S),

        // 12
        lsss($1__, S),
        _(S),
        lsss($1__, S),
        lsss($1__, S),

        lsss($1__, S),
        _(S),
        lsss($3__, S),
        lsss($3__, S),

        lsss($4__, S),
        _(S),
        lsss($3__, S),
        lsss($3__, S),

        lsss($4__, S),
        _(S),
        lsss($2__, S),
        lsss($2__, S)

        /**/
    ));

    const brass_other = consecutively(list(
        // /*

        // -3
        _(C),

        // -2
        _(B),

        // -1
        _(B),

        // 1
        _(B),

        // 2
        _(B),

        // 3
        _(B),

        // 4
        _(B),

        // 5
        _(B),

        // 6
        _(B),

        // 7
        bsss($3, M),

        _(M),

        // 8
        _(M),

        _(C),

        lsss($1, Q / 7),
        lsss($2, Q / 7),
        lsss($3, Q / 7),
        lss($4, Q / 7),
        lss($5, Q / 7),
        lss($6, Q / 7),
        lss($7, Q / 7),
        lss($1_, Q / 7),
        lss($2_, Q / 7),
        lss($3_, Q / 7),
        lss($4_, Q / 7),
        ls($5_, Q / 7),
        ls($6_, Q / 7),
        ls($7_, Q / 7),

        // 9
        lss($1_, D),
        lss($1_, Q),

        lss($1_, M),

        // 10
        bsss($2_, C),

        bsss($2_, Q),
        bsss($6S, Q),

        lss($2_, M),

        // 11
        lss($1_, M),

        l($6S, D),
        l($6, S),
        l($5S, S),

        // 12
        l($5, M + C),
        _(C)

        /**/
    ));

    const upper_bass = consecutively(list(
        // /*

        // -3
        lss($_1, S),
        lss($_3, S),
        lss($_5, S),
        lss($_7, S),

        // -2
        ls($1, Q),
        _(Q),

        ls($1, Q),
        _(Q),

        _(Q),
        ls($1, S),
        ls($1, S),

        ls($1, Q),
        _(Q),

        // -1
        ls($1, Q),
        _(Q),

        ls($1, Q),
        _(Q),

        ls($_6S, C / 3),
        lss($_6S, C / 3),
        lss($_6S, C / 3),

        ls($_6S, C / 3),
        lss($_6S, C / 3),
        lss($_7, C / 3),

        // 1-12
        loop(3, list(
            // 1
            ls($1, Q),
            _(Q),

            ls($_5, Q),
            _(Q),

            ls($1, Q),
            _(Q),

            ls($_5, Q),
            _(Q),

            // 2
            ls($_6S, Q),
            _(Q),

            ls($_4, Q),
            _(Q),

            ls($_6S, Q),
            _(Q),

            ls($_4, Q),
            _(Q),

            // 3
            ls($1, Q),
            _(Q),

            ls($_5, Q),
            _(Q),

            ls($1, Q),
            _(Q),

            ls($_5, Q),
            _(Q),

            // 4
            ls($1, Q),
            _(Q),

            ls($_5, Q),
            _(Q),

            ls($1, Q),
            _(Q),

            ls($_5, Q),
            _(Q)
        ))

        /**/
    ));

    const lower_bass = consecutively(list(
        // /*

        // -3
        _(C),

        // -2
        l($_1, Q),
        _(Q),

        l($_1, Q),
        _(Q),

        _(Q),
        l($_1, S),
        l($_1, S),

        l($_1, Q),
        _(Q),

        // -1
        l($_1, Q),
        _(Q),

        l($_1, Q),
        _(Q),

        l($__6S, Q),
        _(Q),

        l($__6S, Q),
        _(Q),

        // 1-12
        loop(3, list(
            // 1
            lsss($_1, Q),
            _(Q),

            lsss($__5, Q),
            _(Q),

            lsss($_1, Q),
            _(Q),

            lsss($__5, Q),
            _(Q),

            // 2
            lsss($__6S, Q),
            _(Q),

            lsss($__4, Q),
            _(Q),

            lsss($__6S, Q),
            _(Q),

            lsss($__4, Q),
            _(Q),

            // 3
            lsss($_1, Q),
            _(Q),

            lsss($__5, Q),
            _(Q),

            lsss($_1, Q),
            _(Q),

            lsss($__5, Q),
            _(Q),

            // 4
            lsss($_1, Q),
            _(Q),

            lsss($__5, Q),
            _(Q),

            lsss($_1, Q),
            _(Q),

            lsss($__5, Q),
            _(Q)
        ))

        /**/
    ));

    const main_percussion = adsr(0, 0, 0.15, 0)(consecutively(list(
        // /*

        // -3
        _(C),

        // -2
        $(S),
        _(S),
        _(Q),

        $(S),
        _(S),
        _(Q),

        _(Q),
        $(S),
        $(S),

        $(S),
        _(S),
        _(Q),

        // -1
        $(S),
        _(S),
        _(Q),

        $(C),

        $(C / 3),
        $(C / 3),
        $(C / 3),

        $(C / 3),
        $(C / 3),
        $(C / 3),

        // 1-7
        loop(7, list(
            $(S),
            _(S),
            _(Q),

            _(Q),
            $(S),
            $(S),

            $(S),
            _(S),
            _(Q),

            $$(12, C, S)
        )),

        // 8
        $(S),
        _(S),
        _(Q),

        $(S),
        $(S),
        $(S),
        $(S),

        $(S),
        _(S),
        $(S),
        $(S),

        $$(12, C, S),

        // 9-12
        loop(4, list(
            $(S),
            _(S),
            $(S),
            $(S),

            $(S),
            _(S),
            $(S),
            $(S),

            $(S),
            _(S),
            $(S),
            $(S),

            $$(6, Q, S),
            $(S),
            $(S)
        ))

        /**/
    )));

    const secondary_percussion = adsr(0, 0, 0.4, 0)(consecutively(list(
        // /*

        // -3
        _(C),

        // -2
        _(B),

        // -1
        _(B),

        // 1
        _(B),

        // 2
        _(B),

        // 3
        _(B),

        // 4
        _(B),

        // 5
        _(B),

        // 6
        _(B),

        // 7
        _(B),

        // 8
        _(B),

        // 9
        Y(C),

        _(C),

        _(M),

        // 10
        _(B),

        // 11
        _(B),

        // 12
        _(B)

        /**/
    )));

    /*
    // Default sound sampler
    return consecutively(list(
        l($4, C),
        b($4, C),
        f($4, C),
        p($4, C),
        s($4, C)
    ));
    /**/

    return equalise_volume(simultaneously(list(
        main_strings,
        secondary_strings,
        woodwinds,
        brass_other,
        upper_bass,
        lower_bass,
        main_percussion,
        secondary_percussion
    )));
}



play(sounds_contest_entry());
