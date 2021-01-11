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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n\nconst canvas = document.getElementById('game-canvas');\nconst ctx = canvas.getContext('2d');\nconst player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(ctx, canvas);\n// const keys = [];\n// const player = {\n//   moving: false,\n//   speed: 5,\n//   x: 400,\n//   y: 400,\n//   width: 32,\n//   height: 48,\n//   animateX: 0,\n//   animateY: 0,\n// }\n\ncanvas.width = 800;\ncanvas.height = 500;\n\n// const character = new Image();\nconst background = new Image();\n// character.src = \"../dist/images/mandalorian2.png\"\nbackground.src = \"../dist/images/background.jpg\";\n\n// const moveChar = () => {\n//   player.moving = false;\n//   if(keys['w'] && player.y > 50){\n//     player.y -= player.speed;\n//     player.animateY = 3;\n//     player.moving = true\n//   }\n//   if(keys['a'] && player.x > 0){\n//     player.x -= player.speed;\n//     player.animateY = 1;\n//     player.moving = true\n//   }\n//   if(keys['s'] && (canvas.height - 50) - player.height > player.y ){\n//     player.y += player.speed;\n//     player.animateY = 0;\n//     player.moving = true\n//   }\n//   if(keys['d'] && canvas.width - player.width > player.x){\n//     player.x += player.speed;\n//     player.animateY = 2;\n//     player.moving = true\n//   }\n// }\n\n// const movementFrames = () => {\n//   if(player.animateX < 3 && player.moving ) {\n//     player.animateX++\n//   } else {\n//     player.animateX = 0;\n//   }\n// }\n\nfunction drawCharacter(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH){\n  ctx.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH)\n}\n\nsetInterval(() => {\n  animate()\n}, 40)\n\nconst animate = () => {\n  ctx.clearRect(0,0, canvas.width, canvas.height)\n  ctx.drawImage(background, 0, 0, canvas.width, canvas.height)\n  drawCharacter(player.char, player.width * player.animateX, player.height * player.animateY,\n                player.width, player.height, player.x, player.y, player.width, player.height);\n  // moveChar();\n  player.moveChar()\n  player.movementFrames();\n}\n\nwindow.addEventListener('keydown', e => {\n  player.keys[e.key] = true;\n});\n\nwindow.addEventListener('keyup', e => {\n  delete player.keys[e.key]\n});\n\n\n//# sourceURL=webpack://SaveShinigami/./src/index.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Player {\n  constructor(ctx, canvas){\n    const character = new Image();\n    character.src = \"../dist/images/lightyagami.png\";\n    this.char = character;\n    this.moving = false;\n    this.speed = 5;\n    this.x = 400;\n    this.y = 400;\n    this.radius = 40;\n    this.width = 32;\n    this.height = 48;\n    this.animateX = 0;\n    this.animateY = 0;\n    this.ctx = ctx;\n    this.keys = [];\n    this.canvas = canvas;\n  }\n\n  moveChar(){\n    this.movementFrames();\n\n    this.moving = false;\n    if(this.keys['w'] && this.y > 50){\n    this.y -= this.speed;\n    this.animateY = 3;\n    this.moving = true\n  }\n  if(this.keys['a'] && this.x > 0){\n    this.x -= this.speed;\n    this.animateY = 1;\n    this.moving = true\n  }\n  if(this.keys['s'] && (this.canvas.height - 50) - this.height > this.y ){\n    this.y += this.speed;\n    this.animateY = 0;\n    this.moving = true\n  }\n  if(this.keys['d'] && this.canvas.width - this.width > this.x){\n    this.x += this.speed;\n    this.animateY = 2;\n    this.moving = true\n  }\n  }\n\n  movementFrames(){\n    if(this.animateX < 3 && this.moving ){\n      this.animateX++\n    } else {\n      this.animateX = 0;\n    }\n  }\n\n//   drawCharacter(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH){\n//   this.ctx.drawImage(img, spriteX, spriteY, spriteW, spriteH, dX, dY, dW, dH)\n// }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://SaveShinigami/./src/player.js?");

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