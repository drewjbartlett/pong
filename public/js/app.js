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
window.GameState = {
    ball: {
        direction: 'right',
        x: 20
    }
};

/* harmony default export */ __webpack_exports__["a"] = (window.GameState);

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    canvasBg: '#000000',
    ball: '#ffffff',
    paddle: '#ffffff'
});

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
    fps: 30,

    ball: {
        speed: {
            x: 5
        },

        start: {
            x: 20,
            y: 200
        }
    }
});

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Canvas__ = __webpack_require__(6);


var gameCanvas = void 0;

window.onload = function () {
    gameCanvas = new __WEBPACK_IMPORTED_MODULE_0__Canvas__["a" /* default */]('gameCanvas');
};

/***/ }),
/* 4 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vars_colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vars_settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__GameState__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }





var _class = function () {
    function _class(canvas, x, y) {
        _classCallCheck(this, _class);

        this.canvas = canvas;
        this.y = y;

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
            this.canvas.context.fillStyle = __WEBPACK_IMPORTED_MODULE_0__vars_colors__["a" /* default */].ball;

            this.canvas.context.beginPath();
            this.canvas.context.arc(__WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x, 200, 10, 0, Math.PI * 2, true);
            this.canvas.context.closePath();
            this.canvas.context.fill();
        }
    }, {
        key: 'move',
        value: function move() {
            if (__WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.direction == 'right') {
                if (__WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x < this.canvas.el.width - 50) {
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x += __WEBPACK_IMPORTED_MODULE_1__vars_settings__["a" /* default */].ball.speed.x;
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.direction = 'right';
                } else {
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x -= __WEBPACK_IMPORTED_MODULE_1__vars_settings__["a" /* default */].ball.speed.x;
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.direction = 'left';
                }
            } else {
                if (__WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x <= 50) {
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x += __WEBPACK_IMPORTED_MODULE_1__vars_settings__["a" /* default */].ball.speed.x;
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.direction = 'right';
                } else {
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.x -= __WEBPACK_IMPORTED_MODULE_1__vars_settings__["a" /* default */].ball.speed.x;
                    __WEBPACK_IMPORTED_MODULE_2__GameState__["a" /* default */].ball.direction = 'left';
                }
            }
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__vars_colors__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__vars_settings__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Ball__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__GameState__ = __webpack_require__(0);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }






var _class = function () {
    function _class(id) {
        _classCallCheck(this, _class);

        this.id = id;
        this.el = document.getElementById(id);

        setInterval(this.run.bind(this), 1000 / __WEBPACK_IMPORTED_MODULE_1__vars_settings__["a" /* default */].fps);
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
            this.drawLeftPaddle();
        }
    }, {
        key: 'drawCanvas',
        value: function drawCanvas() {
            if (!this.el) {
                throw new Error('No canvas element found');
            }

            this.context = this.el.getContext('2d');
            this.context.fillStyle = __WEBPACK_IMPORTED_MODULE_0__vars_colors__["a" /* default */].canvasBg;
            this.context.fillRect(0, 0, this.el.width, this.el.height);
        }
    }, {
        key: 'drawBall',
        value: function drawBall() {
            this.ball = new __WEBPACK_IMPORTED_MODULE_2__Ball__["a" /* default */](this, __WEBPACK_IMPORTED_MODULE_3__GameState__["a" /* default */].ball.x, 200);
        }
    }, {
        key: 'drawLeftPaddle',
        value: function drawLeftPaddle() {
            this.context.fillStyle = __WEBPACK_IMPORTED_MODULE_0__vars_colors__["a" /* default */].paddle;
            this.context.fillRect(50, 200, 10, 100);
        }
    }, {
        key: 'move',
        value: function move() {
            this.ball.move();
        }
    }]);

    return _class;
}();

/* harmony default export */ __webpack_exports__["a"] = (_class);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(3);
module.exports = __webpack_require__(4);


/***/ })
/******/ ]);