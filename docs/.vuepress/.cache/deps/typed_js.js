import {
  __commonJS,
  init_define_CODE_COPY_LOCALES,
  init_define_CODE_COPY_OPTIONS,
  init_define_DOCSEARCH_OPTIONS,
  init_define_EXTERNAL_LINK_ICON_LOCALES,
  init_define_MZ_ZOOM_OPTIONS,
  init_define_POSTS,
  init_define_READING_TIME_LOCALES
} from "./chunk-EQAQX5IR.js";

// node_modules/typed.js/lib/typed.js
var require_typed = __commonJS({
  "node_modules/typed.js/lib/typed.js"(exports, module) {
    init_define_CODE_COPY_LOCALES();
    init_define_CODE_COPY_OPTIONS();
    init_define_POSTS();
    init_define_READING_TIME_LOCALES();
    init_define_DOCSEARCH_OPTIONS();
    init_define_EXTERNAL_LINK_ICON_LOCALES();
    init_define_MZ_ZOOM_OPTIONS();
    (function webpackUniversalModuleDefinition(root, factory) {
      if (typeof exports === "object" && typeof module === "object")
        module.exports = factory();
      else if (typeof define === "function" && define.amd)
        define([], factory);
      else if (typeof exports === "object")
        exports["Typed"] = factory();
      else
        root["Typed"] = factory();
    })(exports, function() {
      return function(modules) {
        var installedModules = {};
        function __webpack_require__(moduleId) {
          if (installedModules[moduleId])
            return installedModules[moduleId].exports;
          var module2 = installedModules[moduleId] = {
            exports: {},
            id: moduleId,
            loaded: false
          };
          modules[moduleId].call(module2.exports, module2, module2.exports, __webpack_require__);
          module2.loaded = true;
          return module2.exports;
        }
        __webpack_require__.m = modules;
        __webpack_require__.c = installedModules;
        __webpack_require__.p = "";
        return __webpack_require__(0);
      }([
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var _initializerJs = __webpack_require__(1);
          var _htmlParserJs = __webpack_require__(3);
          var Typed = function() {
            function Typed2(elementId, options) {
              _classCallCheck(this, Typed2);
              _initializerJs.initializer.load(this, options, elementId);
              this.begin();
            }
            _createClass(Typed2, [{
              key: "toggle",
              value: function toggle() {
                this.pause.status ? this.start() : this.stop();
              }
            }, {
              key: "stop",
              value: function stop() {
                if (this.typingComplete)
                  return;
                if (this.pause.status)
                  return;
                this.toggleBlinking(true);
                this.pause.status = true;
                this.options.onStop(this.arrayPos, this);
              }
            }, {
              key: "start",
              value: function start() {
                if (this.typingComplete)
                  return;
                if (!this.pause.status)
                  return;
                this.pause.status = false;
                if (this.pause.typewrite) {
                  this.typewrite(this.pause.curString, this.pause.curStrPos);
                } else {
                  this.backspace(this.pause.curString, this.pause.curStrPos);
                }
                this.options.onStart(this.arrayPos, this);
              }
            }, {
              key: "destroy",
              value: function destroy() {
                this.reset(false);
                this.options.onDestroy(this);
              }
            }, {
              key: "reset",
              value: function reset() {
                var restart = arguments.length <= 0 || arguments[0] === void 0 ? true : arguments[0];
                clearInterval(this.timeout);
                this.replaceText("");
                if (this.cursor && this.cursor.parentNode) {
                  this.cursor.parentNode.removeChild(this.cursor);
                  this.cursor = null;
                }
                this.strPos = 0;
                this.arrayPos = 0;
                this.curLoop = 0;
                if (restart) {
                  this.insertCursor();
                  this.options.onReset(this);
                  this.begin();
                }
              }
            }, {
              key: "begin",
              value: function begin() {
                var _this = this;
                this.options.onBegin(this);
                this.typingComplete = false;
                this.shuffleStringsIfNeeded(this);
                this.insertCursor();
                if (this.bindInputFocusEvents)
                  this.bindFocusEvents();
                this.timeout = setTimeout(function() {
                  if (!_this.currentElContent || _this.currentElContent.length === 0) {
                    _this.typewrite(_this.strings[_this.sequence[_this.arrayPos]], _this.strPos);
                  } else {
                    _this.backspace(_this.currentElContent, _this.currentElContent.length);
                  }
                }, this.startDelay);
              }
            }, {
              key: "typewrite",
              value: function typewrite(curString, curStrPos) {
                var _this2 = this;
                if (this.fadeOut && this.el.classList.contains(this.fadeOutClass)) {
                  this.el.classList.remove(this.fadeOutClass);
                  if (this.cursor)
                    this.cursor.classList.remove(this.fadeOutClass);
                }
                var humanize = this.humanizer(this.typeSpeed);
                var numChars = 1;
                if (this.pause.status === true) {
                  this.setPauseStatus(curString, curStrPos, true);
                  return;
                }
                this.timeout = setTimeout(function() {
                  curStrPos = _htmlParserJs.htmlParser.typeHtmlChars(curString, curStrPos, _this2);
                  var pauseTime = 0;
                  var substr = curString.substr(curStrPos);
                  if (substr.charAt(0) === "^") {
                    if (/^\^\d+/.test(substr)) {
                      var skip = 1;
                      substr = /\d+/.exec(substr)[0];
                      skip += substr.length;
                      pauseTime = parseInt(substr);
                      _this2.temporaryPause = true;
                      _this2.options.onTypingPaused(_this2.arrayPos, _this2);
                      curString = curString.substring(0, curStrPos) + curString.substring(curStrPos + skip);
                      _this2.toggleBlinking(true);
                    }
                  }
                  if (substr.charAt(0) === "`") {
                    while (curString.substr(curStrPos + numChars).charAt(0) !== "`") {
                      numChars++;
                      if (curStrPos + numChars > curString.length)
                        break;
                    }
                    var stringBeforeSkip = curString.substring(0, curStrPos);
                    var stringSkipped = curString.substring(stringBeforeSkip.length + 1, curStrPos + numChars);
                    var stringAfterSkip = curString.substring(curStrPos + numChars + 1);
                    curString = stringBeforeSkip + stringSkipped + stringAfterSkip;
                    numChars--;
                  }
                  _this2.timeout = setTimeout(function() {
                    _this2.toggleBlinking(false);
                    if (curStrPos >= curString.length) {
                      _this2.doneTyping(curString, curStrPos);
                    } else {
                      _this2.keepTyping(curString, curStrPos, numChars);
                    }
                    if (_this2.temporaryPause) {
                      _this2.temporaryPause = false;
                      _this2.options.onTypingResumed(_this2.arrayPos, _this2);
                    }
                  }, pauseTime);
                }, humanize);
              }
            }, {
              key: "keepTyping",
              value: function keepTyping(curString, curStrPos, numChars) {
                if (curStrPos === 0) {
                  this.toggleBlinking(false);
                  this.options.preStringTyped(this.arrayPos, this);
                }
                curStrPos += numChars;
                var nextString = curString.substr(0, curStrPos);
                this.replaceText(nextString);
                this.typewrite(curString, curStrPos);
              }
            }, {
              key: "doneTyping",
              value: function doneTyping(curString, curStrPos) {
                var _this3 = this;
                this.options.onStringTyped(this.arrayPos, this);
                this.toggleBlinking(true);
                if (this.arrayPos === this.strings.length - 1) {
                  this.complete();
                  if (this.loop === false || this.curLoop === this.loopCount) {
                    return;
                  }
                }
                this.timeout = setTimeout(function() {
                  _this3.backspace(curString, curStrPos);
                }, this.backDelay);
              }
            }, {
              key: "backspace",
              value: function backspace(curString, curStrPos) {
                var _this4 = this;
                if (this.pause.status === true) {
                  this.setPauseStatus(curString, curStrPos, false);
                  return;
                }
                if (this.fadeOut)
                  return this.initFadeOut();
                this.toggleBlinking(false);
                var humanize = this.humanizer(this.backSpeed);
                this.timeout = setTimeout(function() {
                  curStrPos = _htmlParserJs.htmlParser.backSpaceHtmlChars(curString, curStrPos, _this4);
                  var curStringAtPosition = curString.substr(0, curStrPos);
                  _this4.replaceText(curStringAtPosition);
                  if (_this4.smartBackspace) {
                    var nextString = _this4.strings[_this4.arrayPos + 1];
                    if (nextString && curStringAtPosition === nextString.substr(0, curStrPos)) {
                      _this4.stopNum = curStrPos;
                    } else {
                      _this4.stopNum = 0;
                    }
                  }
                  if (curStrPos > _this4.stopNum) {
                    curStrPos--;
                    _this4.backspace(curString, curStrPos);
                  } else if (curStrPos <= _this4.stopNum) {
                    _this4.arrayPos++;
                    if (_this4.arrayPos === _this4.strings.length) {
                      _this4.arrayPos = 0;
                      _this4.options.onLastStringBackspaced();
                      _this4.shuffleStringsIfNeeded();
                      _this4.begin();
                    } else {
                      _this4.typewrite(_this4.strings[_this4.sequence[_this4.arrayPos]], curStrPos);
                    }
                  }
                }, humanize);
              }
            }, {
              key: "complete",
              value: function complete() {
                this.options.onComplete(this);
                if (this.loop) {
                  this.curLoop++;
                } else {
                  this.typingComplete = true;
                }
              }
            }, {
              key: "setPauseStatus",
              value: function setPauseStatus(curString, curStrPos, isTyping) {
                this.pause.typewrite = isTyping;
                this.pause.curString = curString;
                this.pause.curStrPos = curStrPos;
              }
            }, {
              key: "toggleBlinking",
              value: function toggleBlinking(isBlinking) {
                if (!this.cursor)
                  return;
                if (this.pause.status)
                  return;
                if (this.cursorBlinking === isBlinking)
                  return;
                this.cursorBlinking = isBlinking;
                if (isBlinking) {
                  this.cursor.classList.add("typed-cursor--blink");
                } else {
                  this.cursor.classList.remove("typed-cursor--blink");
                }
              }
            }, {
              key: "humanizer",
              value: function humanizer(speed) {
                return Math.round(Math.random() * speed / 2) + speed;
              }
            }, {
              key: "shuffleStringsIfNeeded",
              value: function shuffleStringsIfNeeded() {
                if (!this.shuffle)
                  return;
                this.sequence = this.sequence.sort(function() {
                  return Math.random() - 0.5;
                });
              }
            }, {
              key: "initFadeOut",
              value: function initFadeOut() {
                var _this5 = this;
                this.el.className += " " + this.fadeOutClass;
                if (this.cursor)
                  this.cursor.className += " " + this.fadeOutClass;
                return setTimeout(function() {
                  _this5.arrayPos++;
                  _this5.replaceText("");
                  if (_this5.strings.length > _this5.arrayPos) {
                    _this5.typewrite(_this5.strings[_this5.sequence[_this5.arrayPos]], 0);
                  } else {
                    _this5.typewrite(_this5.strings[0], 0);
                    _this5.arrayPos = 0;
                  }
                }, this.fadeOutDelay);
              }
            }, {
              key: "replaceText",
              value: function replaceText(str) {
                if (this.attr) {
                  this.el.setAttribute(this.attr, str);
                } else {
                  if (this.isInput) {
                    this.el.value = str;
                  } else if (this.contentType === "html") {
                    this.el.innerHTML = str;
                  } else {
                    this.el.textContent = str;
                  }
                }
              }
            }, {
              key: "bindFocusEvents",
              value: function bindFocusEvents() {
                var _this6 = this;
                if (!this.isInput)
                  return;
                this.el.addEventListener("focus", function(e) {
                  _this6.stop();
                });
                this.el.addEventListener("blur", function(e) {
                  if (_this6.el.value && _this6.el.value.length !== 0) {
                    return;
                  }
                  _this6.start();
                });
              }
            }, {
              key: "insertCursor",
              value: function insertCursor() {
                if (!this.showCursor)
                  return;
                if (this.cursor)
                  return;
                this.cursor = document.createElement("span");
                this.cursor.className = "typed-cursor";
                this.cursor.setAttribute("aria-hidden", true);
                this.cursor.innerHTML = this.cursorChar;
                this.el.parentNode && this.el.parentNode.insertBefore(this.cursor, this.el.nextSibling);
              }
            }]);
            return Typed2;
          }();
          exports2["default"] = Typed;
          module2.exports = exports2["default"];
        },
        function(module2, exports2, __webpack_require__) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _extends = Object.assign || function(target) {
            for (var i = 1; i < arguments.length; i++) {
              var source = arguments[i];
              for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                  target[key] = source[key];
                }
              }
            }
            return target;
          };
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { "default": obj };
          }
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var _defaultsJs = __webpack_require__(2);
          var _defaultsJs2 = _interopRequireDefault(_defaultsJs);
          var Initializer = function() {
            function Initializer2() {
              _classCallCheck(this, Initializer2);
            }
            _createClass(Initializer2, [{
              key: "load",
              value: function load(self, options, elementId) {
                if (typeof elementId === "string") {
                  self.el = document.querySelector(elementId);
                } else {
                  self.el = elementId;
                }
                self.options = _extends({}, _defaultsJs2["default"], options);
                self.isInput = self.el.tagName.toLowerCase() === "input";
                self.attr = self.options.attr;
                self.bindInputFocusEvents = self.options.bindInputFocusEvents;
                self.showCursor = self.isInput ? false : self.options.showCursor;
                self.cursorChar = self.options.cursorChar;
                self.cursorBlinking = true;
                self.elContent = self.attr ? self.el.getAttribute(self.attr) : self.el.textContent;
                self.contentType = self.options.contentType;
                self.typeSpeed = self.options.typeSpeed;
                self.startDelay = self.options.startDelay;
                self.backSpeed = self.options.backSpeed;
                self.smartBackspace = self.options.smartBackspace;
                self.backDelay = self.options.backDelay;
                self.fadeOut = self.options.fadeOut;
                self.fadeOutClass = self.options.fadeOutClass;
                self.fadeOutDelay = self.options.fadeOutDelay;
                self.isPaused = false;
                self.strings = self.options.strings.map(function(s) {
                  return s.trim();
                });
                if (typeof self.options.stringsElement === "string") {
                  self.stringsElement = document.querySelector(self.options.stringsElement);
                } else {
                  self.stringsElement = self.options.stringsElement;
                }
                if (self.stringsElement) {
                  self.strings = [];
                  self.stringsElement.style.display = "none";
                  var strings = Array.prototype.slice.apply(self.stringsElement.children);
                  var stringsLength = strings.length;
                  if (stringsLength) {
                    for (var i = 0; i < stringsLength; i += 1) {
                      var stringEl = strings[i];
                      self.strings.push(stringEl.innerHTML.trim());
                    }
                  }
                }
                self.strPos = 0;
                self.arrayPos = 0;
                self.stopNum = 0;
                self.loop = self.options.loop;
                self.loopCount = self.options.loopCount;
                self.curLoop = 0;
                self.shuffle = self.options.shuffle;
                self.sequence = [];
                self.pause = {
                  status: false,
                  typewrite: true,
                  curString: "",
                  curStrPos: 0
                };
                self.typingComplete = false;
                for (var i in self.strings) {
                  self.sequence[i] = i;
                }
                self.currentElContent = this.getCurrentElContent(self);
                self.autoInsertCss = self.options.autoInsertCss;
                this.appendAnimationCss(self);
              }
            }, {
              key: "getCurrentElContent",
              value: function getCurrentElContent(self) {
                var elContent = "";
                if (self.attr) {
                  elContent = self.el.getAttribute(self.attr);
                } else if (self.isInput) {
                  elContent = self.el.value;
                } else if (self.contentType === "html") {
                  elContent = self.el.innerHTML;
                } else {
                  elContent = self.el.textContent;
                }
                return elContent;
              }
            }, {
              key: "appendAnimationCss",
              value: function appendAnimationCss(self) {
                var cssDataName = "data-typed-js-css";
                if (!self.autoInsertCss) {
                  return;
                }
                if (!self.showCursor && !self.fadeOut) {
                  return;
                }
                if (document.querySelector("[" + cssDataName + "]")) {
                  return;
                }
                var css = document.createElement("style");
                css.type = "text/css";
                css.setAttribute(cssDataName, true);
                var innerCss = "";
                if (self.showCursor) {
                  innerCss += "\n        .typed-cursor{\n          opacity: 1;\n        }\n        .typed-cursor.typed-cursor--blink{\n          animation: typedjsBlink 0.7s infinite;\n          -webkit-animation: typedjsBlink 0.7s infinite;\n                  animation: typedjsBlink 0.7s infinite;\n        }\n        @keyframes typedjsBlink{\n          50% { opacity: 0.0; }\n        }\n        @-webkit-keyframes typedjsBlink{\n          0% { opacity: 1; }\n          50% { opacity: 0.0; }\n          100% { opacity: 1; }\n        }\n      ";
                }
                if (self.fadeOut) {
                  innerCss += "\n        .typed-fade-out{\n          opacity: 0;\n          transition: opacity .25s;\n        }\n        .typed-cursor.typed-cursor--blink.typed-fade-out{\n          -webkit-animation: 0;\n          animation: 0;\n        }\n      ";
                }
                if (css.length === 0) {
                  return;
                }
                css.innerHTML = innerCss;
                document.body.appendChild(css);
              }
            }]);
            return Initializer2;
          }();
          exports2["default"] = Initializer;
          var initializer = new Initializer();
          exports2.initializer = initializer;
        },
        function(module2, exports2) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var defaults = {
            strings: ["These are the default values...", "You know what you should do?", "Use your own!", "Have a great day!"],
            stringsElement: null,
            typeSpeed: 0,
            startDelay: 0,
            backSpeed: 0,
            smartBackspace: true,
            shuffle: false,
            backDelay: 700,
            fadeOut: false,
            fadeOutClass: "typed-fade-out",
            fadeOutDelay: 500,
            loop: false,
            loopCount: Infinity,
            showCursor: true,
            cursorChar: "|",
            autoInsertCss: true,
            attr: null,
            bindInputFocusEvents: false,
            contentType: "html",
            onBegin: function onBegin(self) {
            },
            onComplete: function onComplete(self) {
            },
            preStringTyped: function preStringTyped(arrayPos, self) {
            },
            onStringTyped: function onStringTyped(arrayPos, self) {
            },
            onLastStringBackspaced: function onLastStringBackspaced(self) {
            },
            onTypingPaused: function onTypingPaused(arrayPos, self) {
            },
            onTypingResumed: function onTypingResumed(arrayPos, self) {
            },
            onReset: function onReset(self) {
            },
            onStop: function onStop(arrayPos, self) {
            },
            onStart: function onStart(arrayPos, self) {
            },
            onDestroy: function onDestroy(self) {
            }
          };
          exports2["default"] = defaults;
          module2.exports = exports2["default"];
        },
        function(module2, exports2) {
          "use strict";
          Object.defineProperty(exports2, "__esModule", {
            value: true
          });
          var _createClass = function() {
            function defineProperties(target, props) {
              for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];
                descriptor.enumerable = descriptor.enumerable || false;
                descriptor.configurable = true;
                if ("value" in descriptor)
                  descriptor.writable = true;
                Object.defineProperty(target, descriptor.key, descriptor);
              }
            }
            return function(Constructor, protoProps, staticProps) {
              if (protoProps)
                defineProperties(Constructor.prototype, protoProps);
              if (staticProps)
                defineProperties(Constructor, staticProps);
              return Constructor;
            };
          }();
          function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
              throw new TypeError("Cannot call a class as a function");
            }
          }
          var HTMLParser = function() {
            function HTMLParser2() {
              _classCallCheck(this, HTMLParser2);
            }
            _createClass(HTMLParser2, [{
              key: "typeHtmlChars",
              value: function typeHtmlChars(curString, curStrPos, self) {
                if (self.contentType !== "html")
                  return curStrPos;
                var curChar = curString.substr(curStrPos).charAt(0);
                if (curChar === "<" || curChar === "&") {
                  var endTag = "";
                  if (curChar === "<") {
                    endTag = ">";
                  } else {
                    endTag = ";";
                  }
                  while (curString.substr(curStrPos + 1).charAt(0) !== endTag) {
                    curStrPos++;
                    if (curStrPos + 1 > curString.length) {
                      break;
                    }
                  }
                  curStrPos++;
                }
                return curStrPos;
              }
            }, {
              key: "backSpaceHtmlChars",
              value: function backSpaceHtmlChars(curString, curStrPos, self) {
                if (self.contentType !== "html")
                  return curStrPos;
                var curChar = curString.substr(curStrPos).charAt(0);
                if (curChar === ">" || curChar === ";") {
                  var endTag = "";
                  if (curChar === ">") {
                    endTag = "<";
                  } else {
                    endTag = "&";
                  }
                  while (curString.substr(curStrPos - 1).charAt(0) !== endTag) {
                    curStrPos--;
                    if (curStrPos < 0) {
                      break;
                    }
                  }
                  curStrPos--;
                }
                return curStrPos;
              }
            }]);
            return HTMLParser2;
          }();
          exports2["default"] = HTMLParser;
          var htmlParser = new HTMLParser();
          exports2.htmlParser = htmlParser;
        }
      ]);
    });
  }
});

// dep:typed_js
init_define_CODE_COPY_LOCALES();
init_define_CODE_COPY_OPTIONS();
init_define_POSTS();
init_define_READING_TIME_LOCALES();
init_define_DOCSEARCH_OPTIONS();
init_define_EXTERNAL_LINK_ICON_LOCALES();
init_define_MZ_ZOOM_OPTIONS();
var typed_js_default = require_typed();
export {
  typed_js_default as default
};
/*!
 * 
 *   typed.js - A JavaScript Typing Animation Library
 *   Author: Matt Boldt <me@mattboldt.com>
 *   Version: v2.0.12
 *   Url: https://github.com/mattboldt/typed.js
 *   License(s): MIT
 * 
 */
//# sourceMappingURL=typed_js.js.map
