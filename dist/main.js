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

/***/ "./src/apple.js":
/*!**********************!*\
  !*** ./src/apple.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Apple\n/* harmony export */ });\nclass Apple {\n  constructor(dimensions){\n    this.dimensions = dimensions;\n    this.type = 'apple';\n\n    this.x = Math.random() * (this.dimensions.width - 20);\n    this.y = Math.random() * (this.dimensions.height - 20);\n  }\n\n  drawApple(ctx){\n    const apple = new Image();\n    apple.src = '../dist/images/apple.png'\n    ctx.drawImage(apple, this.x, this.y, 15, 15)\n  }\n\n  animate(ctx){\n    this.drawApple(ctx);\n  }\n\n}\n\n//# sourceURL=webpack://SaveShinigami/./src/apple.js?");

/***/ }),

/***/ "./src/detective.js":
/*!**************************!*\
  !*** ./src/detective.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Detective {\n  constructor(dimensions){\n    const character = new Image();\n    character.src = \"../dist/images/L.png\";\n    this.char = character;\n    this.type = 'detective'\n    this.dimensions = dimensions\n    this.following = true;\n    this.speed = 2;\n    this.x = Math.random() * this.dimensions.width - 250;\n    this.y = Math.random() * this.dimensions.height - 250;\n    this.radius = 40;\n    this.width = 32;\n    this.height = 48;\n    this.animateX = 0;\n    this.animateY = 0;\n  }\n\n  chasePlayer(playerX, playerY){\n    this.movementFrames();\n\n    if(this.x > playerX && this.following){\n      this.animateY = 1\n      this.x -= this.speed;\n    }\n    if(this.x < playerX && this.following) {\n      this.animateY = 2;\n      this.x += this.speed;\n    }\n    if(this.y > playerY && this.following){\n      this.animateY = 3\n      this.y -= this.speed;\n    }\n    if(this.y < playerY && this.following){\n      this.animateY = 0;\n      this.y += this.speed;\n    }\n    if(this.y === playerY || this.x === playerX){\n      this.following = false;\n    }\n  }\n\n  movementFrames(){\n    if(this.animateX < 3 && this.following ){\n      this.animateX++\n    } else {\n      this.animateX = 0;\n    }\n  }\n\n  animate(ctx){\n    ctx.drawImage(this.char,\n      this.width * this.animateX,\n      this.height * this.animateY,\n      this.width, this.height,\n      this.x, this.y,\n      this.width/2, this.height/2\n      )\n  }\n\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Detective);\n\n//# sourceURL=webpack://SaveShinigami/./src/detective.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ SaveShinigami\n/* harmony export */ });\n/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player */ \"./src/player.js\");\n/* harmony import */ var _apple__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apple */ \"./src/apple.js\");\n/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./map */ \"./src/map.js\");\n/* harmony import */ var _detective__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./detective */ \"./src/detective.js\");\n\n\n\n\n\nclass SaveShinigami {\n  constructor(canvas) {\n    this.ctx = canvas.getContext('2d');\n    this.dimensions = { width: canvas.width, height: canvas.height }\n    this.keys = {};\n\n    this.playing = false;\n    this.welcome = true;\n    this.score = 0;\n    this.highScore = localStorage.getItem('gameHighScore');\n\n    this.then = Date.now();\n    this.now;\n\n    this.map = new _map__WEBPACK_IMPORTED_MODULE_2__.default(this.dimensions);\n    this.detective = new _detective__WEBPACK_IMPORTED_MODULE_3__.default(this.dimensions);\n    this.map.animate(this.ctx);\n    this.lastDetectiveCollision = Date.now();\n\n    this.play = this.play.bind(this);\n    this.pause = this.pause.bind(this);\n    this.resume = this.resume.bind(this);\n    this.detectiveCollisionDetection = this.detectiveCollisionDetection.bind(this);\n    this.appleCollisionDetection = this.appleCollisionDetection.bind(this);\n    this.animate = this.animate.bind(this);\n    \n    this.handleKeys();\n  }\n\n  appleCollisionDetection(){\n    let distance = this.distance(this.player.x, this.player.y, this.apple.x, this.apple.y);\n    if(distance < this.player.width / 2) {\n      return true;\n    }\n    return false;\n  }\n\n  detectiveCollisionDetection(){\n    let distance = this.distance(this.player.x, this.player.y, this.detective.x, this.detective.y)\n    if(distance < (this.player.width / 3)) {\n      return distance;\n    } else {\n      return 0;\n    }\n  }\n\n  handleAppleCollision(){\n    const biteSound = document.getElementById('apple-sound')\n    this.apple = new _apple__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    biteSound.play();\n    this.score += 1;\n    localStorage.setItem('gameScore', this.score)\n  }\n\n  handleDetectiveCollision(distance){\n    if(distance < Math.random() * 150) {\n      this.gameOver('Yes.. I am indeed Kira himself.', localStorage.getItem('gameScore'))\n    }\n  }\n\n  handleKeys(){\n    window.addEventListener(\"keydown\", this.handleKeyDown.bind(this));\n    window.addEventListener(\"keyup\", this.handleKeyUp.bind(this));\n  }\n\n  handleKeyDown(e){\n    if(e.key === ''){\n      if(this.playing){\n        this.gameActive === true ? this.pause() : this.resume();\n      } else {\n        this.restart();\n      }\n    } else if(e.key === 'Escape' && this.playing){\n      this.gameActive === true ? this.pause() : this.resume();\n    } else {\n      this.keys[e.key] = true;\n    }\n  }\n\n  handleKeyUp(e) {\n    if(this.keys[e.key]) delete this.keys[e.key];\n    if(this.player) this.player.moving = false;\n  }\n\n  distance(x1, y1, x2, y2) {\n    return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2))\n  }\n\n  checkHighScore() {\n    let highScore = localStorage.getItem('gameHighScore') || 0;\n    if(this.score >= localStorage.getItem('gameHighScore')) {\n      document.getElementById('new-high').innerHTML = 'NEW HIGH SCORE!'\n      localStorage.setItem('gameHighScore', this.score);\n      highScore = this.score;\n      highScoreBoard.textContent = `HIGH SCORE: ${highScore}`\n    } else {\n      document.getElementById('new-high').innerHTML = ''\n    }\n  }\n\n  setScore() {\n    let gameScore = localStorage.getItem('gameScore');\n    scoreBoard.textContent = `SCORE: ${gameScore}`;\n  }\n\n  gameOver(message, score) {\n    let gameOverAudio = document.getElementById('game-over-sound')\n    let music = document.getElementById('music')\n    let applePlural;\n\n    document.getElementById('game-wrapper').style.display = 'none';\n    document.getElementById(\"game-over\").style.display = \"flex\";\n    document.getElementById(\"game-over-msg\").innerHTML = message;\n\n    if(score > +localStorage.getItem('gameHighScore')){\n      document.getElementById('new-high').innerHTML = 'NEW HIGH SCORE!'\n    }\n\n    score > 1 ? applePlural = 'apples' : applePlural = 'apple';\n\n    const gameOverScore = document.getElementById('game-over-score');\n    gameOverScore.innerHTML = `You collected ${score} ${applePlural} for Ryuk`\n\n    // music.pause();\n    gameOverAudio.play();\n    this.gameActive = false;\n    this.playing = false;\n    this.checkHighScore();\n  }\n\n  play() {\n    this.gameActive = true;\n    this.playing = true;\n    this.score = 0;\n    localStorage.setItem('gameScore', this.score)\n    highScoreBoard.textContent = `HIGH SCORE: ${localStorage.getItem('gameHighScore')}`\n    document.getElementById('start-screen').style.display = 'none';\n    document.getElementById('game-canvas').style.display = 'block';\n    document.getElementById('high-score').style.display = 'block';\n    document.getElementById('game-wrapper').style.display = 'block';\n\n    this.apple = new _apple__WEBPACK_IMPORTED_MODULE_1__.default(this.dimensions);\n    this.player = new _player__WEBPACK_IMPORTED_MODULE_0__.default(this.dimensions);\n    this.animate();\n  }\n\n  restart() {\n    this.ctx.clearRect(0, 0, this.dimensions.width, this.dimensions.height);\n    document.getElementById('game-over').style.display = 'none';\n    let music = document.getElementById('music');\n\n    this.play()\n  }\n\n  pause() {\n    let music = document.getElementById('music')\n    let keySound = document.getElementById('button-sound')\n    document.getElementById('music-unmute').style.display = 'none';\n    document.getElementById('pause').style.display = 'block';\n    this.gameActive = false;\n    keySound.play();\n    music.pause();\n  }\n\n  resume() {\n    let music = document.getElementById('music')\n    let keySound = document.getElementById('button-sound')\n\n    document.getElementById('music-mute').style.display = 'block';\n    document.getElementById('pause').style.display = 'none';\n    this.gameActive = true;\n    music.play();\n    keySound.play();\n    this.animate();\n  }\n\n  animate() {\n    this.now = Date.now();\n\n    let elapsedTime = this.now - this.then;\n\n    if(elapsedTime > 45 && this.gameActive && this.playing ) {\n      this.setScore();\n      this.then = this.now - (elapsedTime % 45);\n      this.checkHighScore();\n      if(this.appleCollisionDetection()){\n        this.handleAppleCollision.call(this);\n      }\n\n      let detectiveDistance = this.detectiveCollisionDetection()\n\n      if(detectiveDistance && this.now > 200) {\n        this.lastDetectiveCollision = this.now;\n        this.handleDetectiveCollision.call(this, detectiveDistance);\n      }\n  \n      this.map.animate(this.ctx)\n      this.apple.animate(this.ctx)\n  \n      this.detective.chasePlayer(this.player.x, this.player.y);\n      this.detective.animate(this.ctx)\n  \n      this.player.moveChar(this.keys)\n      this.player.animate(this.ctx)\n    }\n\n    requestAnimationFrame(this.animate.bind(this));\n  }\n}\n\n\n//# sourceURL=webpack://SaveShinigami/./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/game.js\");\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const canvas  = document.getElementById('game-canvas')\n  let game;\n  const music = document.getElementById('music');\n  const startBtn = document.getElementById('start-btn');\n  const instructionBtn = document.getElementById('instructions-btn');\n  const musicControls = document.getElementsByClassName('music-controls')[0];\n  const musicPlay = document.getElementById('music-unmute');\n  const musicPause = document.getElementById('music-mute');\n  const instructions = document.getElementById('instructions');\n  const buttonSound = document.getElementById('button-sound');\n  const homeBtn = document.getElementById('home-btn');\n  const gameOver =  document.getElementById('game-over');\n  const startScreen = document.getElementById('start-screen');\n  const restartBtn = document.getElementById('restart-btn');\n  const about = document.getElementById('about');\n  const profile = document.getElementById('profile');\n\n  about.addEventListener('click', () => {\n    if(profile.style.display === 'none'){\n      profile.style.display = 'block'\n      buttonSound.play();\n    } else {\n      profile.style.display = 'none'\n      buttonSound.play();\n    }\n  })\n\n  musicPlay.addEventListener('click', () => {\n      music.play();\n      musicPause.style.display = 'block'\n      musicPlay.style.display = 'none'\n  })\n\n  musicPause.addEventListener('click', () => {\n    music.pause();\n    musicPlay.style.display = 'block'\n    musicPause.style.display = 'none';\n  })\n\n  homeBtn.addEventListener('click', () => {\n    gameOver.style.display = 'none';\n    startScreen.style.display = 'block';\n    buttonSound.play();\n  })\n\n  restartBtn.addEventListener('click', () => {\n    buttonSound.play();\n    game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas)\n    game.restart();\n  })\n  \n  instructionBtn.addEventListener('click', () => {\n    if(instructions.style.display === 'none'){\n      instructions.style.display = 'block'\n      buttonSound.play();\n    } else {\n      instructions.style.display = 'none'\n      buttonSound.play();\n    }\n  })\n\n  startBtn.addEventListener('click', () => {\n    music.volume = 0.05;\n    buttonSound.play();\n    game = new _game__WEBPACK_IMPORTED_MODULE_0__.default(canvas)\n    game.play();\n  })\n})\n\n//# sourceURL=webpack://SaveShinigami/./src/index.js?");

/***/ }),

/***/ "./src/map.js":
/*!********************!*\
  !*** ./src/map.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ Map\n/* harmony export */ });\nclass Map {\n  constructor(dimensions){\n    this.dimensions = dimensions;\n  }\n\n  drawMap(ctx){\n    const map = new Image();\n    map.src = '../dist/images/background.jpg';\n    ctx.drawImage(map, 0, 0, this.dimensions.width, this.dimensions.height);\n  }\n\n  animate(ctx){\n    ctx.clearRect(0,0, this.dimensions.width, this.dimensions.height);\n    this.drawMap(ctx);\n  }\n}\n\n//# sourceURL=webpack://SaveShinigami/./src/map.js?");

/***/ }),

/***/ "./src/player.js":
/*!***********************!*\
  !*** ./src/player.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\nclass Player {\n  constructor(dimensions){\n    const character = new Image();\n    character.src = \"../dist/images/lightyagami.png\";\n    this.char = character;\n\n    this.moving = false;\n    this.speed = 3;\n    this.type = 'player'\n    this.dimensions = dimensions\n    this.x = 100;\n    this.y = 100;\n\n    this.width = 32;\n    this.height = 48;\n    this.animateX = 0;\n    this.animateY = 0;\n  }\n\n  moveChar(keys){\n    this.movementFrames();\n\n    this.moving = false;\n    if(keys['w'] && this.y > 0){\n      this.y -= this.speed;\n      this.animateY = 3;\n      this.moving = true\n    }\n    if(keys['a'] && this.x > 0){\n      this.x -= this.speed;\n      this.animateY = 1;\n      this.moving = true\n    }\n    if(keys['s'] && this.y < this.dimensions.height - (this.height * 0.5) ){\n      this.y += this.speed;\n      this.animateY = 0;\n      this.moving = true\n    }\n    if(keys['d'] && this.x < this.dimensions.width - (this.width * 0.5) ){\n      this.x += this.speed;\n      this.animateY = 2;\n      this.moving = true\n    }\n  }\n\n  movementFrames(){\n    if(this.animateX < 3 && this.moving ){\n      this.animateX++\n    } else {\n      this.animateX = 0;\n    }\n  }\n\n  animate(ctx) {\n    ctx.drawImage(this.char,\n      this.width * this.animateX,\n      this.height * this.animateY,\n      this.width,\n      this.height,\n      this.x,\n      this.y,\n      this.width * 0.5,\n      this.height * 0.5);\n  }\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);\n\n//# sourceURL=webpack://SaveShinigami/./src/player.js?");

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