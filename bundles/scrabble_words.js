(function () {
    'use strict';

    (function() {
        const env = {};
        try {
            if (process) {
                process.env = Object.assign({}, process.env);
                Object.assign(process.env, env);
                return;
            }
        } catch (e) {} // avoid ReferenceError: process is not defined
        globalThis.process = { env:env };
    })();


    var index = (function(){return {scrabble_words_array:scrabble_words_array,scrabble_words_list:scrabble_words_list}});

    return index;

}());