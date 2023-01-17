(function (moduleHelpers) {
  'use strict';
  var exports = {};
  (function () {
    const env = {};
    try {
      if (process) {
        process.env = Object.assign({}, process.env);
        Object.assign(process.env, env);
        return;
      }
    } catch (e) {}
    globalThis.process = {
      env: env
    };
  })();
  var __assign = function () {
    __assign = Object.assign || (function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
    });
    return __assign.apply(this, arguments);
  };
  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function (resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }
  function __generator(thisArg, body) {
    var _ = {
      label: 0,
      sent: function () {
        if (t[0] & 1) throw t[1];
        return t[1];
      },
      trys: [],
      ops: []
    }, f, y, t, g;
    return (g = {
      next: verb(0),
      "throw": verb(1),
      "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
      return this;
    }), g);
    function verb(n) {
      return function (v) {
        return step([n, v]);
      };
    }
    function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (_) try {
        if ((f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)) return t;
        if ((y = 0, t)) op = [op[0] & 2, t.value];
        switch (op[0]) {
          case 0:
          case 1:
            t = op;
            break;
          case 4:
            _.label++;
            return {
              value: op[1],
              done: false
            };
          case 5:
            _.label++;
            y = op[1];
            op = [0];
            continue;
          case 7:
            op = _.ops.pop();
            _.trys.pop();
            continue;
          default:
            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
              _ = 0;
              continue;
            }
            if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
              _.label = op[1];
              break;
            }
            if (op[0] === 6 && _.label < t[1]) {
              _.label = t[1];
              t = op;
              break;
            }
            if (t && _.label < t[2]) {
              _.label = t[2];
              _.ops.push(op);
              break;
            }
            if (t[2]) _.ops.pop();
            _.trys.pop();
            continue;
        }
        op = body.call(thisArg, _);
      } catch (e) {
        op = [6, e];
        y = 0;
      } finally {
        f = t = 0;
      }
      if (op[0] & 5) throw op[1];
      return {
        value: op[0] ? op[1] : void 0,
        done: true
      };
    }
  }
  function gameFuncs() {
    var _a = moduleHelpers.context.moduleContexts.game.state || ({}), scene = _a.scene, preloadImageMap = _a.preloadImageMap, preloadSoundMap = _a.preloadSoundMap, preloadSpritesheetMap = _a.preloadSpritesheetMap, remotePath = _a.remotePath, screenSize = _a.screenSize, createAward = _a.createAward;
    var ListenerTypes;
    (function (ListenerTypes) {
      ListenerTypes["InputPlugin"] = "input_plugin";
      ListenerTypes["KeyboardKeyType"] = "keyboard_key";
    })(ListenerTypes || (ListenerTypes = {}));
    var ListnerTypes = Object.values(ListenerTypes);
    var ObjectTypes;
    (function (ObjectTypes) {
      ObjectTypes["ImageType"] = "image";
      ObjectTypes["TextType"] = "text";
      ObjectTypes["RectType"] = "rect";
      ObjectTypes["EllipseType"] = "ellipse";
      ObjectTypes["ContainerType"] = "container";
      ObjectTypes["AwardType"] = "award";
    })(ObjectTypes || (ObjectTypes = {}));
    var ObjTypes = Object.values(ObjectTypes);
    var nullFn = function nullFn() {};
    function get_obj(obj) {
      return obj.object;
    }
    function get_game_obj(obj) {
      return obj.object;
    }
    function get_input_obj(obj) {
      return obj.object;
    }
    function get_container(obj) {
      return obj.object;
    }
    function is_type(obj, type) {
      return obj !== undefined && obj.type === type && obj.object !== undefined;
    }
    function is_any_type(obj, types) {
      for (var i = 0; i < types.length; ++i) {
        if (is_type(obj, types[i])) return true;
      }
      return false;
    }
    function set_type(object, type) {
      return {
        type: type,
        object: object
      };
    }
    function throw_error(message) {
      throw console.error(("").concat(arguments.callee.caller.name, ": ").concat(message));
    }
    function array_test(x) {
      if (Array.isArray === undefined) {
        return x instanceof Array;
      }
      return Array.isArray(x);
    }
    function pair(x, xs) {
      return [x, xs];
    }
    function is_pair(x) {
      return array_test(x) && x.length === 2;
    }
    function head(xs) {
      if (is_pair(xs)) {
        return xs[0];
      }
      throw new Error(("head(xs) expects a pair as argument xs, but encountered ").concat(xs));
    }
    function tail(xs) {
      if (is_pair(xs)) {
        return xs[1];
      }
      throw new Error(("tail(xs) expects a pair as argument xs, but encountered ").concat(xs));
    }
    function is_null(xs) {
      return xs === null;
    }
    function map(f, xs) {
      return is_null(xs) ? null : pair(f(head(xs)), map(f, tail(xs)));
    }
    function prepend_remote_url(asset_key) {
      return remotePath(asset_key);
    }
    function create_config(lst) {
      var config = {};
      map(function (xs) {
        if (!is_pair(xs)) {
          throw_error("xs is not pair!");
        }
        config[head(xs)] = tail(xs);
      }, lst);
      return config;
    }
    function create_text_config(font_family, font_size, color, stroke, stroke_thickness, align) {
      if (font_family === void 0) {
        font_family = "Courier";
      }
      if (font_size === void 0) {
        font_size = "16px";
      }
      if (color === void 0) {
        color = "#fff";
      }
      if (stroke === void 0) {
        stroke = "#fff";
      }
      if (stroke_thickness === void 0) {
        stroke_thickness = 0;
      }
      if (align === void 0) {
        align = "left";
      }
      return {
        fontFamily: font_family,
        fontSize: font_size,
        color: color,
        stroke: stroke,
        strokeThickness: stroke_thickness,
        align: align
      };
    }
    function create_interactive_config(draggable, use_hand_cursor, pixel_perfect, alpha_tolerance) {
      if (draggable === void 0) {
        draggable = false;
      }
      if (use_hand_cursor === void 0) {
        use_hand_cursor = false;
      }
      if (pixel_perfect === void 0) {
        pixel_perfect = false;
      }
      if (alpha_tolerance === void 0) {
        alpha_tolerance = 1;
      }
      return {
        draggable: draggable,
        useHandCursor: use_hand_cursor,
        pixelPerfect: pixel_perfect,
        alphaTolerance: alpha_tolerance
      };
    }
    function create_sound_config(mute, volume, rate, detune, seek, loop, delay) {
      if (mute === void 0) {
        mute = false;
      }
      if (volume === void 0) {
        volume = 1;
      }
      if (rate === void 0) {
        rate = 1;
      }
      if (detune === void 0) {
        detune = 0;
      }
      if (seek === void 0) {
        seek = 0;
      }
      if (loop === void 0) {
        loop = false;
      }
      if (delay === void 0) {
        delay = 0;
      }
      return {
        mute: mute,
        volume: volume,
        rate: rate,
        detune: detune,
        seek: seek,
        loop: loop,
        delay: delay
      };
    }
    function create_tween_config(target_prop, target_value, delay, duration, ease, on_complete, yoyo, loop, loop_delay, on_loop) {
      var _a;
      if (target_prop === void 0) {
        target_prop = "x";
      }
      if (target_value === void 0) {
        target_value = 0;
      }
      if (delay === void 0) {
        delay = 0;
      }
      if (duration === void 0) {
        duration = 1000;
      }
      if (ease === void 0) {
        ease = "Power0";
      }
      if (on_complete === void 0) {
        on_complete = nullFn;
      }
      if (yoyo === void 0) {
        yoyo = false;
      }
      if (loop === void 0) {
        loop = 0;
      }
      if (loop_delay === void 0) {
        loop_delay = 0;
      }
      if (on_loop === void 0) {
        on_loop = nullFn;
      }
      return (_a = {}, _a[target_prop] = target_value, _a.delay = delay, _a.duration = duration, _a.ease = ease, _a.onComplete = on_complete, _a.yoyo = yoyo, _a.loop = loop, _a.loopDelay = loop_delay, _a.onLoop = on_loop, _a);
    }
    function create_anim_config(anims_key, anim_frames, frame_rate, duration, repeat, yoyo, show_on_start, hide_on_complete) {
      if (frame_rate === void 0) {
        frame_rate = 24;
      }
      if (duration === void 0) {
        duration = null;
      }
      if (repeat === void 0) {
        repeat = -1;
      }
      if (yoyo === void 0) {
        yoyo = false;
      }
      if (show_on_start === void 0) {
        show_on_start = true;
      }
      if (hide_on_complete === void 0) {
        hide_on_complete = false;
      }
      return {
        key: anims_key,
        frames: anim_frames,
        frameRate: frame_rate,
        duration: duration,
        repeat: repeat,
        yoyo: yoyo,
        showOnStart: show_on_start,
        hideOnComplete: hide_on_complete
      };
    }
    function create_anim_frame_config(key, duration, visible) {
      if (duration === void 0) {
        duration = 0;
      }
      if (visible === void 0) {
        visible = true;
      }
      return {
        key: key,
        duration: duration,
        visible: visible
      };
    }
    function create_anim_spritesheet_frame_configs(key) {
      if (preloadSpritesheetMap.get(key)) {
        var configArr = scene.anims.generateFrameNumbers(key, {});
        return configArr;
      }
      throw_error(("").concat(key, " is not associated with any spritesheet"));
    }
    function create_spritesheet_config(frame_width, frame_height, start_frame, margin, spacing) {
      if (start_frame === void 0) {
        start_frame = 0;
      }
      if (margin === void 0) {
        margin = 0;
      }
      if (spacing === void 0) {
        spacing = 0;
      }
      return {
        frameWidth: frame_width,
        frameHeight: frame_height,
        startFrame: start_frame,
        margin: margin,
        spacing: spacing
      };
    }
    function get_screen_width() {
      return screenSize.x;
    }
    function get_screen_height() {
      return screenSize.y;
    }
    function get_screen_display_width() {
      return scene.scale.displaySize.width;
    }
    function get_screen_display_height() {
      return scene.scale.displaySize.height;
    }
    function load_image(key, url) {
      preloadImageMap.set(key, url);
    }
    function load_sound(key, url) {
      preloadSoundMap.set(key, url);
    }
    function load_spritesheet(key, url, spritesheet_config) {
      preloadSpritesheetMap.set(key, [url, spritesheet_config]);
    }
    function add(obj) {
      if (is_any_type(obj, ObjTypes)) {
        scene.add.existing(get_game_obj(obj));
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function play_sound(key, config) {
      if (config === void 0) {
        config = {};
      }
      if (preloadSoundMap.get(key)) {
        scene.sound.play(key, config);
      } else {
        throw_error(("").concat(key, " is not associated with any sound"));
      }
    }
    function create_anim(anim_config) {
      var anims = scene.anims.create(anim_config);
      return typeof anims !== "boolean";
    }
    function play_anim_on_image(image, anims_key) {
      if (is_type(image, ObjectTypes.ImageType)) {
        get_obj(image).play(anims_key);
        return image;
      }
      throw_error(("").concat(image, " is not of type ").concat(ObjectTypes.ImageType));
    }
    function create_image(x, y, asset_key) {
      if (preloadImageMap.get(asset_key) || preloadSpritesheetMap.get(asset_key)) {
        var image = new Phaser.GameObjects.Sprite(scene, x, y, asset_key);
        return set_type(image, ObjectTypes.ImageType);
      }
      throw_error(("").concat(asset_key, " is not associated with any image"));
    }
    function create_award(x, y, award_key) {
      return set_type(createAward(x, y, award_key), ObjectTypes.AwardType);
    }
    function create_text(x, y, text, config) {
      if (config === void 0) {
        config = {};
      }
      var txt = new Phaser.GameObjects.Text(scene, x, y, text, config);
      return set_type(txt, ObjectTypes.TextType);
    }
    function create_rect(x, y, width, height, fill, alpha) {
      if (fill === void 0) {
        fill = 0;
      }
      if (alpha === void 0) {
        alpha = 1;
      }
      var rect = new Phaser.GameObjects.Rectangle(scene, x, y, width, height, fill, alpha);
      return set_type(rect, ObjectTypes.RectType);
    }
    function create_ellipse(x, y, width, height, fill, alpha) {
      if (fill === void 0) {
        fill = 0;
      }
      if (alpha === void 0) {
        alpha = 1;
      }
      var ellipse = new Phaser.GameObjects.Ellipse(scene, x, y, width, height, fill, alpha);
      return set_type(ellipse, ObjectTypes.EllipseType);
    }
    function create_container(x, y) {
      var cont = new Phaser.GameObjects.Container(scene, x, y);
      return set_type(cont, ObjectTypes.ContainerType);
    }
    function add_to_container(container, obj) {
      if (is_type(container, ObjectTypes.ContainerType) && is_any_type(obj, ObjTypes)) {
        get_container(container).add(get_game_obj(obj));
        return container;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes, " or ").concat(container, " is not of type ").concat(ObjectTypes.ContainerType));
    }
    function destroy_obj(obj) {
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).destroy();
      } else {
        throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
      }
    }
    function set_display_size(obj, x, y) {
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setDisplaySize(x, y);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_alpha(obj, alpha) {
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setAlpha(alpha);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_interactive(obj, config) {
      if (config === void 0) {
        config = {};
      }
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setInteractive(config);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_origin(obj, x, y) {
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setOrigin(x, y);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_position(obj, x, y) {
      if (obj && is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setPosition(x, y);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_scale(obj, x, y) {
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setScale(x, y);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_rotation(obj, rad) {
      if (is_any_type(obj, ObjTypes)) {
        get_game_obj(obj).setRotation(rad);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function set_flip(obj, x, y) {
      var GameElementType = [ObjectTypes.ImageType, ObjectTypes.TextType];
      if (is_any_type(obj, GameElementType)) {
        get_obj(obj).setFlip(x, y);
        return obj;
      }
      throw_error(("").concat(obj, " is not of type ").concat(GameElementType));
    }
    function add_tween(obj, config) {
      if (config === void 0) {
        config = {};
      }
      return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
          if (is_any_type(obj, ObjTypes)) {
            scene.tweens.add(__assign({
              targets: get_game_obj(obj)
            }, config));
            return [2, obj];
          }
          throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
          return [2];
        });
      });
    }
    function add_listener(obj, event, callback) {
      if (is_any_type(obj, ObjTypes)) {
        var listener = get_game_obj(obj).addListener(event, callback);
        return set_type(listener, ListenerTypes.InputPlugin);
      }
      throw_error(("").concat(obj, " is not of type ").concat(ObjTypes));
    }
    function add_keyboard_listener(key, event, callback) {
      var keyObj = scene.input.keyboard.addKey(key);
      var keyboardListener = keyObj.addListener(event, callback);
      return set_type(keyboardListener, ListenerTypes.KeyboardKeyType);
    }
    function remove_listener(listener) {
      if (is_any_type(listener, ListnerTypes)) {
        get_input_obj(listener).removeAllListeners();
        return true;
      }
      return false;
    }
    var functions = {
      add: add,
      add_listener: add_listener,
      add_keyboard_listener: add_keyboard_listener,
      add_to_container: add_to_container,
      add_tween: add_tween,
      create_anim: create_anim,
      create_anim_config: create_anim_config,
      create_anim_frame_config: create_anim_frame_config,
      create_anim_spritesheet_frame_configs: create_anim_spritesheet_frame_configs,
      create_award: create_award,
      create_config: create_config,
      create_container: create_container,
      create_ellipse: create_ellipse,
      create_image: create_image,
      create_interactive_config: create_interactive_config,
      create_rect: create_rect,
      create_text: create_text,
      create_text_config: create_text_config,
      create_tween_config: create_tween_config,
      create_sound_config: create_sound_config,
      create_spritesheet_config: create_spritesheet_config,
      destroy_obj: destroy_obj,
      get_screen_width: get_screen_width,
      get_screen_height: get_screen_height,
      get_screen_display_width: get_screen_display_width,
      get_screen_display_height: get_screen_display_height,
      load_image: load_image,
      load_sound: load_sound,
      load_spritesheet: load_spritesheet,
      play_anim_on_image: play_anim_on_image,
      play_sound: play_sound,
      prepend_remote_url: prepend_remote_url,
      remove_listener: remove_listener,
      set_alpha: set_alpha,
      set_display_size: set_display_size,
      set_flip: set_flip,
      set_interactive: set_interactive,
      set_origin: set_origin,
      set_position: set_position,
      set_rotation: set_rotation,
      set_scale: set_scale
    };
    var finalFunctions = {};
    Object.entries(functions).forEach(function (_a) {
      var key = _a[0], fn = _a[1];
      finalFunctions[key] = !scene ? nullFn : fn;
    });
    return finalFunctions;
  }
  var _a;
  var add = (_a = gameFuncs(), _a.add), add_listener = _a.add_listener, add_keyboard_listener = _a.add_keyboard_listener, add_to_container = _a.add_to_container, add_tween = _a.add_tween, create_anim = _a.create_anim, create_anim_config = _a.create_anim_config, create_anim_frame_config = _a.create_anim_frame_config, create_anim_spritesheet_frame_configs = _a.create_anim_spritesheet_frame_configs, create_award = _a.create_award, create_config = _a.create_config, create_container = _a.create_container, create_ellipse = _a.create_ellipse, create_image = _a.create_image, create_interactive_config = _a.create_interactive_config, create_rect = _a.create_rect, create_text = _a.create_text, create_text_config = _a.create_text_config, create_tween_config = _a.create_tween_config, create_sound_config = _a.create_sound_config, create_spritesheet_config = _a.create_spritesheet_config, destroy_obj = _a.destroy_obj, get_screen_width = _a.get_screen_width, get_screen_height = _a.get_screen_height, get_screen_display_width = _a.get_screen_display_width, get_screen_display_height = _a.get_screen_display_height, load_image = _a.load_image, load_sound = _a.load_sound, load_spritesheet = _a.load_spritesheet, play_anim_on_image = _a.play_anim_on_image, play_sound = _a.play_sound, prepend_remote_url = _a.prepend_remote_url, remove_listener = _a.remove_listener, set_alpha = _a.set_alpha, set_display_size = _a.set_display_size, set_flip = _a.set_flip, set_interactive = _a.set_interactive, set_origin = _a.set_origin, set_position = _a.set_position, set_rotation = _a.set_rotation, set_scale = _a.set_scale;
  exports.add = add;
  exports.add_keyboard_listener = add_keyboard_listener;
  exports.add_listener = add_listener;
  exports.add_to_container = add_to_container;
  exports.add_tween = add_tween;
  exports.create_anim = create_anim;
  exports.create_anim_config = create_anim_config;
  exports.create_anim_frame_config = create_anim_frame_config;
  exports.create_anim_spritesheet_frame_configs = create_anim_spritesheet_frame_configs;
  exports.create_award = create_award;
  exports.create_config = create_config;
  exports.create_container = create_container;
  exports.create_ellipse = create_ellipse;
  exports.create_image = create_image;
  exports.create_interactive_config = create_interactive_config;
  exports.create_rect = create_rect;
  exports.create_sound_config = create_sound_config;
  exports.create_spritesheet_config = create_spritesheet_config;
  exports.create_text = create_text;
  exports.create_text_config = create_text_config;
  exports.create_tween_config = create_tween_config;
  exports.destroy_obj = destroy_obj;
  exports.get_screen_display_height = get_screen_display_height;
  exports.get_screen_display_width = get_screen_display_width;
  exports.get_screen_height = get_screen_height;
  exports.get_screen_width = get_screen_width;
  exports.load_image = load_image;
  exports.load_sound = load_sound;
  exports.load_spritesheet = load_spritesheet;
  exports.play_anim_on_image = play_anim_on_image;
  exports.play_sound = play_sound;
  exports.prepend_remote_url = prepend_remote_url;
  exports.remove_listener = remove_listener;
  exports.set_alpha = set_alpha;
  exports.set_display_size = set_display_size;
  exports.set_flip = set_flip;
  exports.set_interactive = set_interactive;
  exports.set_origin = set_origin;
  exports.set_position = set_position;
  exports.set_rotation = set_rotation;
  exports.set_scale = set_scale;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
  return exports;
})
