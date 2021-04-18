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

    function repeat(func,n){return n===0?function(x){return x}:function(x){return func(repeat(func,n-1)(x))}}function twice(func){return repeat(func,2)}function thrice(func){return repeat(func,3)}

    var index = (function(){return {repeat:repeat,twice:twice,thrice:thrice}});

    return index;

}());