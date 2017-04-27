/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vars_settings__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vars_colors__ = __webpack_require__(5);



window.GameState = {
    scores: {
        user: 0,
        computer: 0
    },

    ball: {
        xDirection: 'right',
        yDirection: 'down',

        x: 20,

        y: 200
    },

    leftPaddle: {
        x: 10,
        y: 200,
        height: 100,
        width: 10
    },

    rightPaddle: {
        x: 780,
        y: 200,
        height: 100,
        width: 10,
        speed: 5,
        detectionPadding: 35
    },

    settings: __WEBPACK_IMPORTED_MODULE_0__vars_settings__["a" /* default */],

    colors: __WEBPACK_IMPORTED_MODULE_1__vars_colors__["a" /* default */]
};

/* harmony default export */ __webpack_exports__["a"] = (window.GameState);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Canvas__ = __webpack_require__(4);


var gameCanvas = void 0;

window.onload = function () {
    gameCanvas = new __WEBPACK_IMPORTED_MODULE_0__Canvas__["a" /* default */]('gameCanvas');
};

// 
// window.onbeforeunload = function () {
//    return "Are you sure?";
// };
//
// window.unload = function () {
//     alert('closed');
// };

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__GameState__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }



var _class = function () {
    function _class(canvas) {
        _classCallCheck(this, _class);

        this.canvas = canvas;

        this.run();
    }

    _createClass(_class, [{
        key: 'run',
        value: function run() {
            this.draw();
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.canvas.color(__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].colors.ball).beginPath();
            this.canvas.context.arc(__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x, __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y, __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.size, 0, Math.PI * 2, true);
            this.canvas.context.closePath();
            this.canvas.context.fill();
        }
    }, {
        key: 'reset',
        value: function reset() {
            this.reverseBallSpeed();
            __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x = this.canvas.el.width / 2;
            __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y = this.canvas.el.height / 2;
        }
    }, {
        key: 'reverseBallSpeed',
        value: function reverseBallSpeed() {
            __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.x = -__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.x;
        }
    }, {
        key: 'collisionWithPaddle',
        value: function collisionWithPaddle(paddle) {
            paddle = paddle + 'Paddle';

            if (!__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle]) return;

            var paddleConditions = {
                leftPaddle: __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x <= __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].x + __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].width,
                rightPaddle: __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x >= __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].x - __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].width
            };

            if (paddleConditions[paddle] && __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y > __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].y && __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y < __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].y + __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */][paddle].height) {

                return true;
            }

            return false;
        }
    }, {
        key: 'move',
        value: function move() {
            __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x = __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x + __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.x;
            __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y = __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y + __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.y;

            if (this.collisionWithPaddle('left')) {
                this.reverseBallSpeed();
            }

            if (this.collisionWithPaddle('right')) {
                this.reverseBallSpeed();
            }

            if (__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x < __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.boundaries.left) {
                this.reset();

                __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].scores.computer++;
            }

            if (__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.x > this.canvas.el.width - __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.boundaries.right) {
                // GameState.settings.ball.speed.x = -GameState.settings.ball.speed.x;

                this.reset();

                __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].scores.user++;
            }

            if (__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y < __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.boundaries.top) {
                __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.y = -__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.y;
            }

            if (__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].ball.y > this.canvas.el.height - __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.boundaries.bottom) {
                __WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.y = -__WEBPACK_IMPORTED_MODULE_0__GameState__["a" /* default */].settings.ball.speed.y;
            }
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Ball__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__GameState__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }




var _class = function () {
    function _class(id) {
        _classCallCheck(this, _class);

        this.id = id;
        this.el.addEventListener('mousemove', this.changeLeftPaddleWithMouse.bind(this));
        setInterval(this.run.bind(this), 1000 / __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.fps);
    }

    _createClass(_class, [{
        key: 'run',
        value: function run() {
            this.draw();
            this.move();
        }
    }, {
        key: 'draw',
        value: function draw() {
            this.drawCanvas();
            this.drawBall();
            this.drawPaddle('left');
            this.drawPaddle('right');
        }
    }, {
        key: 'drawCanvas',
        value: function drawCanvas() {
            if (!this.el) {
                throw new Error(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.errors.canvas);
            }

            this.color(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].colors.canvasBg).fillRect(0, 0, this.el.width, this.el.height);
            this.drawNet();
            this.drawScores();
        }
    }, {
        key: 'drawNet',
        value: function drawNet() {
            for (var i = 10; i < this.el.height; i += 40) {
                this.color(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].colors.net).fillRect(this.el.width / 2 - 1, i, 2, 20);
            }
        }
    }, {
        key: 'drawScores',
        value: function drawScores() {
            this.color('#ffffff');
            this.font('15px BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif');
            this.context.fillText(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].scores.user, 50, 50);
            this.context.fillText(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].scores.computer, this.fromRight(70), 50);
        }
    }, {
        key: 'drawBall',
        value: function drawBall() {
            this.ball = new __WEBPACK_IMPORTED_MODULE_0__Ball__["a" /* default */](this);
        }
    }, {
        key: 'drawPaddle',
        value: function drawPaddle(paddle) {
            paddle = paddle + 'Paddle';

            this.color(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].colors.paddle).fillRect(__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */][paddle].x, __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */][paddle].y, __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */][paddle].width, __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */][paddle].height);
        }
    }, {
        key: 'fromRight',
        value: function fromRight(from) {
            return this.el.width - from;
        }
    }, {
        key: 'move',
        value: function move() {
            this.ball.move();
            this.movePaddle();
        }
    }, {
        key: 'movePaddle',
        value: function movePaddle() {
            var paddleMiddle = __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y + __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.height / 2;

            if (paddleMiddle < __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].ball.y - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.detectionPadding) {
                __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y += __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.speed;
            } else if (paddleMiddle < __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].ball.y + __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.detectionPadding) {
                __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y -= __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.speed;
            }

            if (__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y < __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.top) {
                __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y = __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.top;
            }

            if (__WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y > this.el.height - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.bottom - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].leftPaddle.height) {
                __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].rightPaddle.y = this.el.height - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.bottom - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].leftPaddle.height;
            }
        }
    }, {
        key: 'changeLeftPaddleWithMouse',
        value: function changeLeftPaddleWithMouse(evt) {
            var mouse = this.mouse(evt),
                halfPaddleHeight = __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].leftPaddle.height / 2,
                y = mouse.y - halfPaddleHeight;

            if (y < __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.top) {
                y = __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.top;
            } else if (y > this.el.height - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.bottom - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].leftPaddle.height) {
                y = this.el.height - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].settings.boundaries.bottom - __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].leftPaddle.height;
            }

            __WEBPACK_IMPORTED_MODULE_1__GameState__["a" /* default */].leftPaddle.y = y;
        }
    }, {
        key: 'mouse',
        value: function mouse(evt) {
            var rect = this.el.getBoundingClientRect(),
                root = document.documentElement,
                x = evt.clientX - rect.left - root.scrollLeft,
                y = evt.clientY - rect.top - root.scrollTop;

            return { x: x, y: y };
        }

        /**
         * Set the fill style and return context
         */

    }, {
        key: 'color',
        value: function color(_color) {
            this.context.fillStyle = _color;

            return this.context;
        }
    }, {
        key: 'font',
        value: function font(_font) {
            this.context.font = _font;

            return this.context;
        }
    }, {
        key: 'context',
        get: function get() {
            return this.el.getContext('2d');
        }
    }, {
        key: 'el',
        get: function get() {
            return document.getElementById(this.id);
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    canvasBg: '#000000',
    ball: '#ffffff',
    paddle: '#ffffff',
    net: '#ffffff'
});

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    fps: 30,

    ball: {
        speed: {
            x: 10,
            y: 4
        },

        size: 7.5,

        start: {
            x: 20,
            y: 200
        }
    },

    boundaries: {
        top: 5,
        right: 5,
        bottom: 5,
        left: 5
    },

    errors: {
        canvas: 'No canvas element found.'
    }
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ })
/******/ ]);