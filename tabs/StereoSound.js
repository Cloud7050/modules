(function (React) {
    'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

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

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var StereoSounds=function(_super){__extends(StereoSounds,_super);function StereoSounds(props){var _this=_super.call(this,props)||this;_this.$audio=null;_this.state={};return _this}StereoSounds.prototype.componentDidMount=function(){if(this.$audio){this.props.context.result.value.init(this.$audio);}};StereoSounds.prototype.render=function(){var _this=this;return React__default['default'].createElement("div",null,React__default['default'].createElement("p",{id:"sound-default-text"},"The sound tab gives you control over your custom sounds. You can play, pause, adjust the volume and download your sounds.",React__default['default'].createElement("br",null),React__default['default'].createElement("br",null),React__default['default'].createElement("audio",{ref:function(r){_this.$audio=r;},src:"",controls:true,id:"sound-tab-player",style:{width:"100%"}}),React__default['default'].createElement("br",null)))};return StereoSounds}(React__default['default'].Component);var index = {toSpawn:function(context){function valid(value){try{return value instanceof Object&&value.init instanceof Function}catch(e){return false}}return valid(context.result.value)},body:function(context){return React__default['default'].createElement(StereoSounds,{context:context})},label:"Stereo Sounds",iconName:"music"};

    return index;

}(React));