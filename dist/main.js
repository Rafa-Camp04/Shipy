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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/moving-object */ \"./src/scripts/moving-object.js\");\n\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Enemy = _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst canvas = document.getElementById('background-canvas');\nconst ctx = canvas.getContext('2d');\nconst backgroundImg = new Image();\n// backgroundImg.src = '../media/orange-test.webp';\n// backgroundImg.src = '../media/background_02.jpeg';\nbackgroundImg.src = '../media/background_01.jpeg';\nconst enemy = new _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\nbackgroundImg.onload = function () {};\nfunction moveEnemy() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n  enemy.move();\n  enemy.draw(ctx);\n}\nsetInterval(moveEnemy, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ2U7QUFDbkRFLE1BQU0sQ0FBQ0QsWUFBWSxHQUFHQSw4REFBWTtBQUNsQ0MsTUFBTSxDQUFDRixLQUFLLEdBQUdBLHNEQUFLO0FBR3BCLE1BQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFDM0QsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsTUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDO0FBQ0E7QUFDQUQsYUFBYSxDQUFDRSxHQUFHLEdBQUcsNkJBQTZCO0FBRWpELE1BQU1DLEtBQUssR0FBRyxJQUFJWCxzREFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTNCUSxhQUFhLENBQUNJLE1BQU0sR0FBRyxZQUFXLENBRWxDLENBQUM7QUFFRCxTQUFTQyxTQUFTQSxDQUFBLEVBQUc7RUFDakJQLEdBQUcsQ0FBQ1EsU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVYLE1BQU0sQ0FBQ1ksS0FBSyxFQUFFWixNQUFNLENBQUNhLE1BQU0sQ0FBQztFQUNoRFYsR0FBRyxDQUFDVyxTQUFTLENBQUNULGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxNQUFNLENBQUNZLEtBQUssRUFBRVosTUFBTSxDQUFDYSxNQUFNLENBQUM7RUFDL0RMLEtBQUssQ0FBQ08sSUFBSSxDQUFDLENBQUM7RUFDWlAsS0FBSyxDQUFDUSxJQUFJLENBQUNiLEdBQUcsQ0FBQztBQUNuQjtBQUVBYyxXQUFXLENBQUNQLFNBQVMsRUFBRSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlweS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmVteSBmcm9tIFwiLi9zY3JpcHRzL2VuZW15XCI7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vc2NyaXB0cy9tb3Zpbmctb2JqZWN0XCI7XHJcbndpbmRvdy5Nb3ZpbmdPYmplY3QgPSBNb3ZpbmdPYmplY3Q7XHJcbndpbmRvdy5FbmVteSA9IEVuZW15O1xyXG5cclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLWNhbnZhcycpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbmNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuLy8gYmFja2dyb3VuZEltZy5zcmMgPSAnLi4vbWVkaWEvb3JhbmdlLXRlc3Qud2VicCc7XHJcbi8vIGJhY2tncm91bmRJbWcuc3JjID0gJy4uL21lZGlhL2JhY2tncm91bmRfMDIuanBlZyc7XHJcbmJhY2tncm91bmRJbWcuc3JjID0gJy4uL21lZGlhL2JhY2tncm91bmRfMDEuanBlZyc7XHJcblxyXG5jb25zdCBlbmVteSA9IG5ldyBFbmVteSh7fSk7XHJcblxyXG5iYWNrZ3JvdW5kSW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4gXHJcbn1cclxuXHJcbmZ1bmN0aW9uIG1vdmVFbmVteSgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGVuZW15Lm1vdmUoKTtcclxuICAgIGVuZW15LmRyYXcoY3R4KTtcclxufVxyXG5cclxuc2V0SW50ZXJ2YWwobW92ZUVuZW15LCAxMCk7Il0sIm5hbWVzIjpbIkVuZW15IiwiTW92aW5nT2JqZWN0Iiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kSW1nIiwiSW1hZ2UiLCJzcmMiLCJlbmVteSIsIm9ubG9hZCIsIm1vdmVFbmVteSIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwibW92ZSIsImRyYXciLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/scripts/moving-object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\n// import Game from \"./game.js\";\n\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.vel = [1, 0];\n    options.color = \"#2F739A\";\n    super(options);\n    this.vel = this.randomVel();\n    this.pos = this.randomPos();\n    this.radius = this.randomRadius();\n  }\n  randomRadius() {\n    const validRadius = [2, 5, 5, 10, 10, 20, 20, 30, 40];\n    let index = Math.floor(Math.random() * validRadius.length);\n    return validRadius[index];\n  }\n  randomPos() {\n    const startX = [-50, 1050];\n    let startY = Math.floor(Math.random() * 660);\n    let index = Math.floor(Math.random() * 2);\n    const pos = [startX[index], startY];\n    return pos;\n  }\n  randomVel() {\n    const validVel = [1, 1.5, 1.5, 2, 2, 2, 3];\n    let index = Math.floor(Math.random() * validVel.length);\n    const vel = [validVel[index], 0];\n    return vel;\n  }\n\n  // movingEnemy() {\n  //     if (this.randomPos[0] === -50) {\n  //         this.pos[0] += 1;\n  //     } else {\n  //         this.pos[0] -= 1;\n  //     }\n  // }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUM4QztBQUNaO0FBRWxDLE1BQU1FLEtBQUssU0FBU0YseURBQVksQ0FBQztFQUU3QkcsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFDO0lBQ2hCQSxPQUFPLENBQUNDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEJELE9BQU8sQ0FBQ0UsS0FBSyxHQUFHLFNBQVM7SUFDekIsS0FBSyxDQUFDRixPQUFPLENBQUM7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUNyQztFQUVBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNyRCxJQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLFdBQVcsQ0FBQ0ssTUFBTSxDQUFDO0lBRTFELE9BQU9MLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO0VBQzdCO0VBRUFKLFNBQVNBLENBQUEsRUFBRztJQUNSLE1BQU1TLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMxQixJQUFJQyxNQUFNLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRTVDLElBQUlILEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTVIsR0FBRyxHQUFHLENBQUNVLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDLEVBQUVNLE1BQU0sQ0FBQztJQUVuQyxPQUFPWCxHQUFHO0VBQ2Q7RUFFQUQsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTWEsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLElBQUlQLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0ksUUFBUSxDQUFDSCxNQUFNLENBQUM7SUFFdkQsTUFBTVosR0FBRyxHQUFHLENBQUNlLFFBQVEsQ0FBQ1AsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLE9BQU9SLEdBQUc7RUFDZDs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKO0FBQUM7QUFHRCwrREFBZUgsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvZW5lbXkuanM/ZTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nLW9iamVjdC5qc1wiO1xyXG5pbXBvcnQgKiBhcyBVdGlsIGZyb20gXCIuL3V0aWwuanNcIjtcclxuXHJcbmNsYXNzIEVuZW15IGV4dGVuZHMgTW92aW5nT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKXtcclxuICAgICAgICBvcHRpb25zLnZlbCA9IFsxLCAwXTtcclxuICAgICAgICBvcHRpb25zLmNvbG9yID0gXCIjMkY3MzlBXCI7XHJcbiAgICAgICAgc3VwZXIob3B0aW9ucyk7XHJcbiAgICAgICAgdGhpcy52ZWwgPSB0aGlzLnJhbmRvbVZlbCgpO1xyXG4gICAgICAgIHRoaXMucG9zID0gdGhpcy5yYW5kb21Qb3MoKTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHRoaXMucmFuZG9tUmFkaXVzKCk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhbmRvbVJhZGl1cygpIHtcclxuICAgICAgICBjb25zdCB2YWxpZFJhZGl1cyA9IFsyLCA1LCA1LCAxMCwgMTAsIDIwLCAyMCwgMzAsIDQwXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFJhZGl1cy5sZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRSYWRpdXNbaW5kZXhdO1xyXG4gICAgfTtcclxuXHJcbiAgICByYW5kb21Qb3MoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gWy01MCwgMTA1MF07XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDY2MCk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IFtzdGFydFhbaW5kZXhdLCBzdGFydFldO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfTtcclxuXHJcbiAgICByYW5kb21WZWwoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRWZWwgPSBbMSwgMS41LCAxLjUsIDIsIDIsIDIsIDNdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkVmVsLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHZlbCA9IFt2YWxpZFZlbFtpbmRleF0sIDBdO1xyXG4gICAgICAgIHJldHVybiB2ZWw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gbW92aW5nRW5lbXkoKSB7XHJcbiAgICAvLyAgICAgaWYgKHRoaXMucmFuZG9tUG9zWzBdID09PSAtNTApIHtcclxuICAgIC8vICAgICAgICAgdGhpcy5wb3NbMF0gKz0gMTtcclxuICAgIC8vICAgICB9IGVsc2Uge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvc1swXSAtPSAxO1xyXG4gICAgLy8gICAgIH1cclxuICAgIC8vIH1cclxuXHJcbn07XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRW5lbXk7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsIlV0aWwiLCJFbmVteSIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInZlbCIsImNvbG9yIiwicmFuZG9tVmVsIiwicG9zIiwicmFuZG9tUG9zIiwicmFkaXVzIiwicmFuZG9tUmFkaXVzIiwidmFsaWRSYWRpdXMiLCJpbmRleCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsImxlbmd0aCIsInN0YXJ0WCIsInN0YXJ0WSIsInZhbGlkVmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/moving-object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving-object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n  draw(ctx) {\n    // for (let index = 0; index < ctx.length; index++) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fillStyle = \"#00FF00\";\n    ctx.fill();\n    // }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmctb2JqZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFFZkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO0VBQ2hDO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDNUI7RUFFQUcsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ047SUFDSUEsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUVNLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFcEVKLEdBQUcsQ0FBQ0ssU0FBUyxHQUFHLFNBQVM7SUFDekJMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDZDtFQUNKO0FBRUo7QUFFQSwrREFBZWQsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvbW92aW5nLW9iamVjdC5qcz9hYTdkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmluZ09iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XHJcbiAgICAgICAgdGhpcy52ZWwgPSBvcHRpb25zLnZlbDtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NbMF0rPXRoaXMudmVsWzBdO1xyXG4gICAgICAgIHRoaXMucG9zWzFdKz10aGlzLnZlbFsxXTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdHgubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBGRjAwXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgLy8gfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTW92aW5nT2JqZWN0OyJdLCJuYW1lcyI6WyJNb3ZpbmdPYmplY3QiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJwb3MiLCJ2ZWwiLCJyYWRpdXMiLCJtb3ZlIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/moving-object.js\n");

/***/ }),

/***/ "./src/scripts/util.js":
/*!*****************************!*\
  !*** ./src/scripts/util.js ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   addVel: function() { return /* binding */ addVel; },\n/* harmony export */   randomVec: function() { return /* binding */ randomVec; },\n/* harmony export */   scale: function() { return /* binding */ scale; }\n/* harmony export */ });\nfunction randomVec(length) {\n  const deg = 2 * Math.PI * Math.random();\n  return scale([Math.sin(deg), Math.cos(deg)], length);\n}\nfunction scale(vec, m) {\n  return [vec[0] * m, vec[1] * m];\n}\nfunction addVel() {\n  arr[0] += 10;\n  return arr;\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy91dGlsLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFPLFNBQVNBLFNBQVNBLENBQUNDLE1BQU0sRUFBRTtFQUM5QixNQUFNQyxHQUFHLEdBQUcsQ0FBQyxHQUFHQyxJQUFJLENBQUNDLEVBQUUsR0FBR0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQztFQUN2QyxPQUFPQyxLQUFLLENBQUMsQ0FBQ0gsSUFBSSxDQUFDSSxHQUFHLENBQUNMLEdBQUcsQ0FBQyxFQUFFQyxJQUFJLENBQUNLLEdBQUcsQ0FBQ04sR0FBRyxDQUFDLENBQUMsRUFBRUQsTUFBTSxDQUFDO0FBQ3hEO0FBRU8sU0FBU0ssS0FBS0EsQ0FBQ0csR0FBRyxFQUFFQyxDQUFDLEVBQUU7RUFDMUIsT0FBTyxDQUFDRCxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUdDLENBQUMsRUFBRUQsR0FBRyxDQUFDLENBQUMsQ0FBQyxHQUFHQyxDQUFDLENBQUM7QUFDbkM7QUFFTyxTQUFTQyxNQUFNQSxDQUFBLEVBQUc7RUFDckJDLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFFO0VBQ1osT0FBT0EsR0FBRztBQUNkIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy91dGlsLmpzPzY5NGIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGZ1bmN0aW9uIHJhbmRvbVZlYyhsZW5ndGgpIHtcclxuICAgIGNvbnN0IGRlZyA9IDIgKiBNYXRoLlBJICogTWF0aC5yYW5kb20oKTtcclxuICAgIHJldHVybiBzY2FsZShbTWF0aC5zaW4oZGVnKSwgTWF0aC5jb3MoZGVnKV0sIGxlbmd0aCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzY2FsZSh2ZWMsIG0pIHtcclxuICAgIHJldHVybiBbdmVjWzBdICogbSwgdmVjWzFdICogbV07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRWZWwoKSB7XHJcbiAgICBhcnJbMF0gKz0gMTA7XHJcbiAgICByZXR1cm4gYXJyO1xyXG59Il0sIm5hbWVzIjpbInJhbmRvbVZlYyIsImxlbmd0aCIsImRlZyIsIk1hdGgiLCJQSSIsInJhbmRvbSIsInNjYWxlIiwic2luIiwiY29zIiwidmVjIiwibSIsImFkZFZlbCIsImFyciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/util.js\n");

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
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
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