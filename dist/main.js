/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/game-view */ \"./src/scripts/game-view.js\");\n/* harmony import */ var _scripts_enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./scripts/moving-object */ \"./src/scripts/moving-object.js\");\n\n\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\nwindow.Enemy = _scripts_enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n\n// backgroundImg.onload = function() {\n//     ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n// }\n\n// function moveEnemy() {\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\n//     ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n//     enemy.move();\n//     enemy.draw(ctx);\n// }\n\n// setInterval(moveEnemy, 10);\n\nconst gameview = new _scripts_game_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\ngameview.start();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUEyQztBQUNQO0FBQ2U7QUFDbkRHLE1BQU0sQ0FBQ0QsWUFBWSxHQUFHQSw4REFBWTtBQUNsQ0MsTUFBTSxDQUFDRixLQUFLLEdBQUdBLHNEQUFLOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLE1BQU1HLFFBQVEsR0FBRyxJQUFJSiwwREFBUSxDQUFDLENBQUM7QUFDL0JJLFFBQVEsQ0FBQ0MsS0FBSyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlweS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lVmlldyBmcm9tIFwiLi9zY3JpcHRzL2dhbWUtdmlld1wiO1xyXG5pbXBvcnQgRW5lbXkgZnJvbSBcIi4vc2NyaXB0cy9lbmVteVwiO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL3NjcmlwdHMvbW92aW5nLW9iamVjdFwiO1xyXG53aW5kb3cuTW92aW5nT2JqZWN0ID0gTW92aW5nT2JqZWN0O1xyXG53aW5kb3cuRW5lbXkgPSBFbmVteTtcclxuXHJcbi8vIGJhY2tncm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbi8vICAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmRJbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbi8vIH1cclxuXHJcbi8vIGZ1bmN0aW9uIG1vdmVFbmVteSgpIHtcclxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgIGVuZW15Lm1vdmUoKTtcclxuLy8gICAgIGVuZW15LmRyYXcoY3R4KTtcclxuLy8gfVxyXG5cclxuLy8gc2V0SW50ZXJ2YWwobW92ZUVuZW15LCAxMCk7XHJcblxyXG5jb25zdCBnYW1ldmlldyA9IG5ldyBHYW1lVmlldygpO1xyXG5nYW1ldmlldy5zdGFydCgpOyJdLCJuYW1lcyI6WyJHYW1lVmlldyIsIkVuZW15IiwiTW92aW5nT2JqZWN0Iiwid2luZG93IiwiZ2FtZXZpZXciLCJzdGFydCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/scripts/moving-object.js\");\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.vel = [1, 0];\n    options.color = \"#2F739A\";\n    super(options);\n    this.vel = this.randomVel();\n    this.pos = this.randomPos();\n    this.radius = this.randomRadius();\n    this.startEnemyPos = this.pos[0];\n  }\n  randomRadius() {\n    const validRadius = [2, 6, 6, 10, 10, 18, 18, 26, 26, 40];\n    let index = Math.floor(Math.random() * validRadius.length);\n    return validRadius[index];\n  }\n  randomPos() {\n    const startX = [-50, 1050];\n    let startY = Math.floor(Math.random() * 660);\n    let index = Math.floor(Math.random() * 2);\n    const pos = [startX[index], startY];\n    return pos;\n  }\n  randomVel() {\n    const validVel = [1, 1.1, 1.2, 1.3, 1.4, 1.5, 1.6, 1.7, 1.8, 2, 2.5, 3];\n    let index = Math.floor(Math.random() * validVel.length);\n    const vel = [validVel[index], 0];\n    return vel;\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIm1hcHBpbmdzIjoiOztBQUE4QztBQUU5QyxNQUFNQyxLQUFLLFNBQVNELHlEQUFZLENBQUM7RUFFN0JFLFdBQVdBLENBQUNDLE9BQU8sRUFBQztJQUNoQkEsT0FBTyxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCRCxPQUFPLENBQUNFLEtBQUssR0FBRyxTQUFTO0lBQ3pCLEtBQUssQ0FBQ0YsT0FBTyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFDakMsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSSxDQUFDSixHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQ3BDO0VBRUFHLFlBQVlBLENBQUEsRUFBRztJQUNYLE1BQU1FLFdBQVcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUN6RCxJQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLFdBQVcsQ0FBQ0ssTUFBTSxDQUFDO0lBRTFELE9BQU9MLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO0VBQzdCO0VBRUFMLFNBQVNBLENBQUEsRUFBRztJQUNSLE1BQU1VLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMxQixJQUFJQyxNQUFNLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRTVDLElBQUlILEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTVQsR0FBRyxHQUFHLENBQUNXLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDLEVBQUVNLE1BQU0sQ0FBQztJQUVuQyxPQUFPWixHQUFHO0VBQ2Q7RUFFQUQsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTWMsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDeEUsSUFBSVAsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSSxRQUFRLENBQUNILE1BQU0sQ0FBQztJQUV2RCxNQUFNYixHQUFHLEdBQUcsQ0FBQ2dCLFFBQVEsQ0FBQ1AsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLE9BQU9ULEdBQUc7RUFDZDtBQUVKO0FBQUM7QUFHRCwrREFBZUgsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvZW5lbXkuanM/ZTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZy1vYmplY3QuanNcIjtcclxuXHJcbmNsYXNzIEVuZW15IGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuICAgICAgICBvcHRpb25zLnZlbCA9IFsxLCAwXTtcclxuICAgICAgICBvcHRpb25zLmNvbG9yID0gXCIjMkY3MzlBXCI7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnJhbmRvbVZlbCgpO1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5yYW5kb21Qb3MoKTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMucmFuZG9tUmFkaXVzKCk7XHJcbiAgICAgICAgdGhpcy5zdGFydEVuZW15UG9zID0gdGhpcy5wb3NbMF07XHJcbiAgICB9O1xyXG5cclxuICAgIHJhbmRvbVJhZGl1cygpIHtcclxuICAgICAgICBjb25zdCB2YWxpZFJhZGl1cyA9IFsyLCA2LCA2LCAxMCwgMTAsIDE4LCAxOCwgMjYsIDI2LCA0MF07XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRSYWRpdXMubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHZhbGlkUmFkaXVzW2luZGV4XTtcclxuICAgIH07XHJcblxyXG4gICAgcmFuZG9tUG9zKCkge1xyXG4gICAgICAgIGNvbnN0IHN0YXJ0WCA9IFstNTAsIDEwNTBdO1xyXG4gICAgICAgIGxldCBzdGFydFkgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiA2NjApO1xyXG5cclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAyKTtcclxuICAgICAgICBjb25zdCBwb3MgPSBbc3RhcnRYW2luZGV4XSwgc3RhcnRZXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHBvcztcclxuICAgIH07XHJcblxyXG4gICAgcmFuZG9tVmVsKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkVmVsID0gWzEsIDEuMSwgMS4yLCAxLjMsIDEuNCwgMS41LCAgMS42LCAxLjcsIDEuOCwgMiwgMi41LCAzXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFZlbC5sZW5ndGgpO1xyXG5cclxuICAgICAgICBjb25zdCB2ZWwgPSBbdmFsaWRWZWxbaW5kZXhdLCAwXTtcclxuICAgICAgICByZXR1cm4gdmVsO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbmVteTsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRW5lbXkiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJ2ZWwiLCJjb2xvciIsInJhbmRvbVZlbCIsInBvcyIsInJhbmRvbVBvcyIsInJhZGl1cyIsInJhbmRvbVJhZGl1cyIsInN0YXJ0RW5lbXlQb3MiLCJ2YWxpZFJhZGl1cyIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic3RhcnRYIiwic3RhcnRZIiwidmFsaWRWZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/game-view.js":
/*!**********************************!*\
  !*** ./src/scripts/game-view.js ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game */ \"./src/scripts/game.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\n\nclass GameView {\n  constructor() {\n    this.game = new _game__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n    this.canvas = document.getElementById('background-canvas');\n    this.ctx = this.canvas.getContext('2d');\n  }\n  start() {\n    setInterval(() => {\n      this.game.moveObjects();\n      this.game.drawGame(this.ctx);\n    }, 10);\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GameView);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTBCO0FBQ0E7QUFFMUIsTUFBTUUsUUFBUSxDQUFDO0VBRVhDLFdBQVdBLENBQUEsRUFBRztJQUNWLElBQUksQ0FBQ0MsSUFBSSxHQUFHLElBQUlKLDZDQUFJLENBQUMsQ0FBQztJQUN0QixJQUFJLENBQUNLLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7SUFDMUQsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSSxDQUFDSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFDM0M7RUFFQUMsS0FBS0EsQ0FBQSxFQUFJO0lBQ0xDLFdBQVcsQ0FBQyxNQUFNO01BQ2QsSUFBSSxDQUFDUCxJQUFJLENBQUNRLFdBQVcsQ0FBQyxDQUFDO01BQ3ZCLElBQUksQ0FBQ1IsSUFBSSxDQUFDUyxRQUFRLENBQUMsSUFBSSxDQUFDTCxHQUFHLENBQUM7SUFDaEMsQ0FBQyxFQUFFLEVBQUUsQ0FBQztFQUNWO0FBRUo7QUFBQztBQUVELCtEQUFlTixRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy9nYW1lLXZpZXcuanM/YzZhNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lXCI7XHJcbmltcG9ydCBTaGlwIGZyb20gXCIuL3NoaXBcIjtcclxuXHJcbmNsYXNzIEdhbWVWaWV3IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdhbWUgPSBuZXcgR2FtZSgpXHJcbiAgICAgICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1jYW52YXMnKTtcclxuICAgICAgICB0aGlzLmN0eCA9IHRoaXMuY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbiAgICB9O1xyXG5cclxuICAgIHN0YXJ0ICgpIHtcclxuICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2FtZS5tb3ZlT2JqZWN0cygpO1xyXG4gICAgICAgICAgICB0aGlzLmdhbWUuZHJhd0dhbWUodGhpcy5jdHgpO1xyXG4gICAgICAgIH0sIDEwKTtcclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR2FtZVZpZXc7Il0sIm5hbWVzIjpbIkdhbWUiLCJTaGlwIiwiR2FtZVZpZXciLCJjb25zdHJ1Y3RvciIsImdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiY3R4IiwiZ2V0Q29udGV4dCIsInN0YXJ0Iiwic2V0SW50ZXJ2YWwiLCJtb3ZlT2JqZWN0cyIsImRyYXdHYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/game-view.js\n");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object */ \"./src/scripts/moving-object.js\");\n/* harmony import */ var _enemy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ \"./src/scripts/ship.js\");\n\n\n\nclass Game extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor() {\n    super();\n    this.ship = new _ship__WEBPACK_IMPORTED_MODULE_2__[\"default\"]({});\n    this.enemies = [], this.addEnemies();\n    this.backgroundImg = new Image();\n\n    // this.backgroundImg.src = '../media/orange-test.webp';\n    // this.backgroundImg.src = '../media/background_02.jpeg';\n    this.backgroundImg.src = '../media/background_01.jpeg';\n  }\n  drawGame(ctx) {\n    ctx.clearRect(0, 0, 1000, 660);\n    ctx.drawImage(this.backgroundImg, 0, 0, 1000, 660);\n    this.enemies.forEach(enemy => {\n      enemy.drawObject(ctx);\n    });\n  }\n  addEnemies() {\n    for (let index = 0; index < 10; index++) {\n      const enemy = new _enemy__WEBPACK_IMPORTED_MODULE_1__[\"default\"]({});\n      this.enemies.push(enemy);\n    }\n    ;\n  }\n  moveObjects() {\n    this.enemies.forEach(enemy => {\n      if (enemy.startEnemyPos === -50) {\n        enemy.move();\n      } else {\n        enemy.moveLeft();\n      }\n      ;\n    });\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9nYW1lLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBMkM7QUFDZjtBQUNGO0FBRTFCLE1BQU1HLElBQUksU0FBU0gsc0RBQVksQ0FBQztFQUU1QkksV0FBV0EsQ0FBQSxFQUFHO0lBQ1YsS0FBSyxDQUFDLENBQUM7SUFDUCxJQUFJLENBQUNDLElBQUksR0FBRyxJQUFJSCw2Q0FBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3hCLElBQUksQ0FBQ0ksT0FBTyxHQUFHLEVBQUUsRUFDakIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztJQUNqQixJQUFJLENBQUNDLGFBQWEsR0FBRyxJQUFJQyxLQUFLLENBQUMsQ0FBQzs7SUFFaEM7SUFDQTtJQUNBLElBQUksQ0FBQ0QsYUFBYSxDQUFDRSxHQUFHLEdBQUcsNkJBQTZCO0VBQzFEO0VBRUFDLFFBQVFBLENBQUNDLEdBQUcsRUFBRTtJQUNWQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxHQUFHLENBQUM7SUFDOUJELEdBQUcsQ0FBQ0UsU0FBUyxDQUFDLElBQUksQ0FBQ04sYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLEdBQUcsQ0FBQztJQUVsRCxJQUFJLENBQUNGLE9BQU8sQ0FBQ1MsT0FBTyxDQUFFQyxLQUFLLElBQUs7TUFDNUJBLEtBQUssQ0FBQ0MsVUFBVSxDQUFDTCxHQUFHLENBQUM7SUFDekIsQ0FBQyxDQUFDO0VBRU47RUFFQUwsVUFBVUEsQ0FBQSxFQUFHO0lBQ1QsS0FBSyxJQUFJVyxLQUFLLEdBQUcsQ0FBQyxFQUFFQSxLQUFLLEdBQUcsRUFBRSxFQUFFQSxLQUFLLEVBQUUsRUFBRTtNQUNyQyxNQUFNRixLQUFLLEdBQUcsSUFBSWYsOENBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUMzQixJQUFJLENBQUNLLE9BQU8sQ0FBQ2EsSUFBSSxDQUFDSCxLQUFLLENBQUM7SUFDNUI7SUFBQztFQUNMO0VBRUFJLFdBQVdBLENBQUEsRUFBRztJQUVWLElBQUksQ0FBQ2QsT0FBTyxDQUFDUyxPQUFPLENBQUVDLEtBQUssSUFBSztNQUM1QixJQUFJQSxLQUFLLENBQUNLLGFBQWEsS0FBSyxDQUFDLEVBQUUsRUFBRTtRQUM3QkwsS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQztNQUNoQixDQUFDLE1BQU07UUFDSE4sS0FBSyxDQUFDTyxRQUFRLENBQUMsQ0FBQztNQUNwQjtNQUFDO0lBQ0wsQ0FBQyxDQUFDO0VBQ047QUFFSjtBQUFDO0FBRUQsK0RBQWVwQixJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy9nYW1lLmpzP2NkYzAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmctb2JqZWN0XCI7XHJcbmltcG9ydCBFbmVteSBmcm9tIFwiLi9lbmVteVwiO1xyXG5pbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XHJcblxyXG5jbGFzcyBHYW1lIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc2hpcCA9IG5ldyBTaGlwKHt9KTtcclxuICAgICAgICB0aGlzLmVuZW1pZXMgPSBbXSxcclxuICAgICAgICB0aGlzLmFkZEVuZW1pZXMoKTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbiAgICAgICAgLy8gdGhpcy5iYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9vcmFuZ2UtdGVzdC53ZWJwJztcclxuICAgICAgICAvLyB0aGlzLmJhY2tncm91bmRJbWcuc3JjID0gJy4uL21lZGlhL2JhY2tncm91bmRfMDIuanBlZyc7XHJcbiAgICAgICAgdGhpcy5iYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9iYWNrZ3JvdW5kXzAxLmpwZWcnO1xyXG4gICAgfTtcclxuXHJcbiAgICBkcmF3R2FtZShjdHgpIHtcclxuICAgICAgICBjdHguY2xlYXJSZWN0KDAsIDAsIDEwMDAsIDY2MCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmJhY2tncm91bmRJbWcsIDAsIDAsIDEwMDAsIDY2MCk7XHJcblxyXG4gICAgICAgIHRoaXMuZW5lbWllcy5mb3JFYWNoKChlbmVteSkgPT4ge1xyXG4gICAgICAgICAgICBlbmVteS5kcmF3T2JqZWN0KGN0eCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfTtcclxuXHJcbiAgICBhZGRFbmVtaWVzKCkge1xyXG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCAxMDsgaW5kZXgrKykge1xyXG4gICAgICAgICAgICBjb25zdCBlbmVteSA9IG5ldyBFbmVteSh7fSk7XHJcbiAgICAgICAgICAgIHRoaXMuZW5lbWllcy5wdXNoKGVuZW15KTtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBtb3ZlT2JqZWN0cygpIHtcclxuXHJcbiAgICAgICAgdGhpcy5lbmVtaWVzLmZvckVhY2goKGVuZW15KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChlbmVteS5zdGFydEVuZW15UG9zID09PSAtNTApIHtcclxuICAgICAgICAgICAgICAgIGVuZW15Lm1vdmUoKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGVuZW15Lm1vdmVMZWZ0KCk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIkVuZW15IiwiU2hpcCIsIkdhbWUiLCJjb25zdHJ1Y3RvciIsInNoaXAiLCJlbmVtaWVzIiwiYWRkRW5lbWllcyIsImJhY2tncm91bmRJbWciLCJJbWFnZSIsInNyYyIsImRyYXdHYW1lIiwiY3R4IiwiY2xlYXJSZWN0IiwiZHJhd0ltYWdlIiwiZm9yRWFjaCIsImVuZW15IiwiZHJhd09iamVjdCIsImluZGV4IiwicHVzaCIsIm1vdmVPYmplY3RzIiwic3RhcnRFbmVteVBvcyIsIm1vdmUiLCJtb3ZlTGVmdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/game.js\n");

/***/ }),

/***/ "./src/scripts/moving-object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving-object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    // this.pos = options.pos;\n    // this.vel = options.vel;\n    // this.radius = options.radius;\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n  moveRight() {\n    this.pos[0] += this.vel[0];\n  }\n  moveLeft() {\n    this.pos[0] -= this.vel[0];\n  }\n  drawObject(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fillStyle = \"#00FF00\";\n    ctx.fill();\n    ctx.closePath();\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmctb2JqZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFFZkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCO0lBQ0E7SUFDQTtFQUFBO0VBR0pDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDNUI7RUFFQUMsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsSUFBSSxDQUFDRixHQUFHLENBQUMsQ0FBQyxDQUFDLElBQUUsSUFBSSxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDO0VBQzVCO0VBRUFFLFFBQVFBLENBQUEsRUFBRztJQUNQLElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztFQUM1QjtFQUVBRyxVQUFVQSxDQUFDQyxHQUFHLEVBQUU7SUFDWkEsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNRLE1BQU0sRUFBRSxDQUFDLEVBQUVDLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFcEVMLEdBQUcsQ0FBQ00sU0FBUyxHQUFHLFNBQVM7SUFDekJOLEdBQUcsQ0FBQ08sSUFBSSxDQUFDLENBQUM7SUFDVlAsR0FBRyxDQUFDUSxTQUFTLENBQUMsQ0FBQztFQUNuQjtBQUVKO0FBRUEsK0RBQWVqQixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy9tb3Zpbmctb2JqZWN0LmpzP2FhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aW5nT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgLy8gdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcclxuICAgICAgICAvLyB0aGlzLnZlbCA9IG9wdGlvbnMudmVsO1xyXG4gICAgICAgIC8vIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZSgpIHtcclxuICAgICAgICB0aGlzLnBvc1swXSs9dGhpcy52ZWxbMF07XHJcbiAgICAgICAgdGhpcy5wb3NbMV0rPXRoaXMudmVsWzFdO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmVSaWdodCgpIHtcclxuICAgICAgICB0aGlzLnBvc1swXSs9dGhpcy52ZWxbMF07XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZUxlZnQoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NbMF0tPXRoaXMudmVsWzBdO1xyXG4gICAgfVxyXG5cclxuICAgIGRyYXdPYmplY3QoY3R4KSB7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy5wb3NbMF0sIHRoaXMucG9zWzFdLCB0aGlzLnJhZGl1cywgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xyXG5cclxuICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBGRjAwXCI7XHJcbiAgICAgICAgY3R4LmZpbGwoKTtcclxuICAgICAgICBjdHguY2xvc2VQYXRoKCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsIm1vdmUiLCJwb3MiLCJ2ZWwiLCJtb3ZlUmlnaHQiLCJtb3ZlTGVmdCIsImRyYXdPYmplY3QiLCJjdHgiLCJiZWdpblBhdGgiLCJhcmMiLCJyYWRpdXMiLCJNYXRoIiwiUEkiLCJmaWxsU3R5bGUiLCJmaWxsIiwiY2xvc2VQYXRoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/moving-object.js\n");

/***/ }),

/***/ "./src/scripts/ship.js":
/*!*****************************!*\
  !*** ./src/scripts/ship.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object */ \"./src/scripts/moving-object.js\");\n\nclass Ship extends _moving_object__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static CANVAS = document.getElementById('background-canvas');\n  static CTX = Ship.CANVAS.getContext('2d');\n  static POS = [500, 330];\n  static VEL = [1, 1];\n  static RADIUS = 15;\n  static COLOR = \"#2F739A\";\n  constructor(options) {\n    super();\n    options.pos = Ship.POS;\n    options.vel = Ship.VEL;\n    options.radius = Ship.RADIUS;\n    options.color = Ship.COLOR;\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Ship);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9zaGlwLmpzIiwibWFwcGluZ3MiOiI7O0FBQTBDO0FBRTFDLE1BQU1DLElBQUksU0FBU0Qsc0RBQVksQ0FBQztFQUU1QixPQUFPRSxNQUFNLEdBQUdDLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0VBQzVELE9BQU9DLEdBQUcsR0FBR0osSUFBSSxDQUFDQyxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7RUFFekMsT0FBT0MsR0FBRyxHQUFHLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQztFQUN2QixPQUFPQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0VBQ25CLE9BQU9DLE1BQU0sR0FBRyxFQUFFO0VBQ2xCLE9BQU9DLEtBQUssR0FBRyxTQUFTO0VBRXhCQyxXQUFXQSxDQUFDQyxPQUFPLEVBQUU7SUFDakIsS0FBSyxDQUFDLENBQUM7SUFDUEEsT0FBTyxDQUFDQyxHQUFHLEdBQUdaLElBQUksQ0FBQ00sR0FBRztJQUN0QkssT0FBTyxDQUFDRSxHQUFHLEdBQUdiLElBQUksQ0FBQ08sR0FBRztJQUN0QkksT0FBTyxDQUFDRyxNQUFNLEdBQUdkLElBQUksQ0FBQ1EsTUFBTTtJQUM1QkcsT0FBTyxDQUFDSSxLQUFLLEdBQUdmLElBQUksQ0FBQ1MsS0FBSztFQUU5QjtBQUVKO0FBQUM7QUFFRCwrREFBZVQsSUFBSSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvc2hpcC5qcz81NTA2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nLW9iamVjdFwiXHJcblxyXG5jbGFzcyBTaGlwIGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcclxuXHJcbiAgICBzdGF0aWMgQ0FOVkFTID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtY2FudmFzJyk7XHJcbiAgICBzdGF0aWMgQ1RYID0gU2hpcC5DQU5WQVMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICBzdGF0aWMgUE9TID0gWzUwMCwgMzMwXTtcclxuICAgIHN0YXRpYyBWRUwgPSBbMSwgMV07XHJcbiAgICBzdGF0aWMgUkFESVVTID0gMTU7XHJcbiAgICBzdGF0aWMgQ09MT1IgPSBcIiMyRjczOUFcIlxyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIG9wdGlvbnMucG9zID0gU2hpcC5QT1M7XHJcbiAgICAgICAgb3B0aW9ucy52ZWwgPSBTaGlwLlZFTDtcclxuICAgICAgICBvcHRpb25zLnJhZGl1cyA9IFNoaXAuUkFESVVTO1xyXG4gICAgICAgIG9wdGlvbnMuY29sb3IgPSBTaGlwLkNPTE9SO1xyXG5cclxuICAgIH07XHJcblxyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2hpcDsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiU2hpcCIsIkNBTlZBUyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJDVFgiLCJnZXRDb250ZXh0IiwiUE9TIiwiVkVMIiwiUkFESVVTIiwiQ09MT1IiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/ship.js\n");

/***/ }),

/***/ "./src/index.scss":
/*!************************!*\
  !*** ./src/index.scss ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguc2NzcyIsIm1hcHBpbmdzIjoiO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlweS8uL3NyYy9pbmRleC5zY3NzPzk3NDUiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.scss\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
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
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	__webpack_require__("./src/index.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.scss");
/******/ 	
/******/ })()
;