/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/detective.js":
/*!**************************!*\
  !*** ./src/detective.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Detective {\n  constructor(dimensions){\n    const character = new Image();\n    character.src = \"../dist/images/L.png\";\n    this.char = character;\n    this.type = 'detective'\n    this.dimensions = dimensions\n    this.following = true;\n    this.speed = 2;\n    this.x = Math.random() * dimensions.width;\n    this.y = Math.random() * dimensions.height;\n    this.radius = 40;\n    this.width = 32;\n    this.height = 48;\n    this.animateX = 0;\n    this.animateY = 0;\n    this.ctx = ctx;\n    this.canvas = canvas;\n  }\n\n  chasePlayer(playerX, playerY){\n    this.movementFrames();\n\n    if(this.x > playerX && this.following){\n      this.animateY = 1\n      this.x -= this.speed;\n    }\n    if(this.x < playerX && this.following) {\n      this.animateY = 2;\n      this.x += this.speed;\n    }\n    if(this.y > playerY && this.following){\n      this.animateY = 3\n      this.y -= this.speed;\n    }\n    if(this.y < playerY && this.following){\n      this.animateY = 0;\n      this.y += this.speed;\n    }\n    if(this.y === playerY || this.x === playerX){\n      this.following = false;\n    }\n  }\n\n  movementFrames(){\n    if(this.animateX < 3 && !this.following ){\n      this.animateX++\n    } else {\n      this.animateX = 0;\n    }\n  }\n\n  animate(ctx){\n    ctx.drawImage(this.char,\n      this.width * this.animateX,\n      this.height * this.animateY,\n      this.width, this.height,\n      this.x, this.y,\n      this.width/4, this.height/4\n      )\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detective);\n\n//# sourceURL=webpack://SaveShinigami/./src/detective.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _detective__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./detective */ \"./src/detective.js\");\n\n\nconst canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\nconst player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(ctx, canvas);\nconst detective = new _detective__WEBPACK_IMPORTED_MODULE_1__.default(ctx, canvas)\n\ncanvas.width = 800;\ncanvas.height = 500;\n\nconst background = new Image();\n\nbackground.src = \"../dist/images/background.jpg\";\n\nfunction drawCharacter(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH){\n  ctx.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH)\n}\n\nsetInterval(() => {\n  animate()\n}, 40)\n\nconst animate = () => {\n  ctx.clearRect(0,0, canvas.width, canvas.height)\n  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)\n  drawCharacter(detective.char, detective.width * detective.animateX, detective.height * detective.animateY,\n                detective.width, detective.height, detective.x, detective.y, detective.width, detective.height);\n  drawCharacter(player.char, player.width * player.animateX, player.height * player.animateY,\n                player.width, player.height, player.x, player.y, player.width, player.height);\n  player.moveChar()\n  player.movementFrames();\n  detective.chasePlayer(player.x, player.y);\n  detective.movementFrames();\n}\n\nwindow.addEventListener('keydown', e => {\n  player.keys[e.key] = true;\n});\n\nwindow.addEventListener('keyup', e => {\n  delete player.keys[e.key]\n});\n\n\n//# sourceURL=webpack://SaveShinigami/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Player {\n  constructor(dimensions){\n    const character = new Image();\n    character.src = \"../dist/images/lightyagami.png\";\n    this.char = character;\n\n    this.moving = false;\n    this.speed = 5;\n    this.type = 'player'\n    this.dimensions = dimensions\n    this.x = 400;\n    this.y = 400;\n\n    this.width = 32;\n    this.height = 48;\n    this.animateX = 0;\n    this.animateY = 0;\n\n    this.keys = [];\n  }\n\n  moveChar(keys){\n    this.movementFrames();\n\n    this.moving = false;\n    if(keys['w'] && this.y > 50){\n      this.y -= this.speed;\n      this.animateY = 3;\n      this.moving = true\n    }\n    if(keys['a'] && this.x > 0){\n      this.x -= this.speed;\n      this.animateY = 1;\n      this.moving = true\n    }\n    if(keys['s'] && this.y < this.dimensions.height - this.height ){\n      this.y += this.speed;\n      this.animateY = 0;\n      this.moving = true\n    }\n    if(keys['d'] && this.x < this.dimensions.width - this.width){\n      this.x += this.speed;\n      this.animateY = 2;\n      this.moving = true\n    }\n  }\n\n  movementFrames(){\n    if(this.animateX < 3 && this.moving ){\n      this.animateX++\n    } else {\n      this.animateX = 0;\n    }\n  }\n\n  animate(ctx) {\n    ctx.drawImage(this.char, \n      this.width * this.animateX,\n      this.height * this.animateY,\n      this.width, this.height,\n      this.x, this.y,\n      this.width, this.height\n      );\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://SaveShinigami/./src/player.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;