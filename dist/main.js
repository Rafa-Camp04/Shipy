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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/moving-object */ \"./src/scripts/moving-object.js\");\n\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Enemy = _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n\n// backgroundImg.onload = function() {\n//     ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n// }\n\n// // backgroundImg.src = '../media/orange-test.webp';\n// // backgroundImg.src = '../media/background_02.jpeg';\n// backgroundImg.src = '../media/background_01.jpeg';\n\n// function moveEnemy() {\n//     ctx.clearRect(0, 0, canvas.width, canvas.height);\n//     ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n//     enemy.move();\n//     enemy.draw(ctx);\n// }\n\n// setInterval(moveEnemy, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ2U7QUFDbkRFLE1BQU0sQ0FBQ0QsWUFBWSxHQUFHQSw4REFBWTtBQUNsQ0MsTUFBTSxDQUFDRixLQUFLLEdBQUdBLHNEQUFLOztBQUVwQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZW15IGZyb20gXCIuL3NjcmlwdHMvZW5lbXlcIjtcclxuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9zY3JpcHRzL21vdmluZy1vYmplY3RcIjtcclxud2luZG93Lk1vdmluZ09iamVjdCA9IE1vdmluZ09iamVjdDtcclxud2luZG93LkVuZW15ID0gRW5lbXk7XHJcblxyXG4vLyBiYWNrZ3JvdW5kSW1nLm9ubG9hZCA9IGZ1bmN0aW9uKCkge1xyXG4vLyAgICAgY3R4LmRyYXdJbWFnZShiYWNrZ3JvdW5kSW1nLCAwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4vLyB9XHJcblxyXG4vLyAvLyBiYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9vcmFuZ2UtdGVzdC53ZWJwJztcclxuLy8gLy8gYmFja2dyb3VuZEltZy5zcmMgPSAnLi4vbWVkaWEvYmFja2dyb3VuZF8wMi5qcGVnJztcclxuLy8gYmFja2dyb3VuZEltZy5zcmMgPSAnLi4vbWVkaWEvYmFja2dyb3VuZF8wMS5qcGVnJztcclxuXHJcbi8vIGZ1bmN0aW9uIG1vdmVFbmVteSgpIHtcclxuLy8gICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuLy8gICAgIGVuZW15Lm1vdmUoKTtcclxuLy8gICAgIGVuZW15LmRyYXcoY3R4KTtcclxuLy8gfVxyXG5cclxuLy8gc2V0SW50ZXJ2YWwobW92ZUVuZW15LCAxMCk7Il0sIm5hbWVzIjpbIkVuZW15IiwiTW92aW5nT2JqZWN0Iiwid2luZG93Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/scripts/moving-object.js\");\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.vel = [1, 0];\n    options.color = \"#2F739A\";\n    super(options);\n    this.vel = this.randomVel();\n    this.pos = this.randomPos();\n    this.radius = this.randomRadius();\n  }\n  randomRadius() {\n    const validRadius = [2, 5, 5, 10, 10, 20, 20, 30, 40];\n    let index = Math.floor(Math.random() * validRadius.length);\n    return validRadius[index];\n  }\n  randomPos() {\n    const startX = [-50, 1050];\n    let startY = Math.floor(Math.random() * 660);\n    let index = Math.floor(Math.random() * 2);\n    const pos = [startX[index], startY];\n    return pos;\n  }\n  randomVel() {\n    const validVel = [1, 1.5, 1.5, 2, 2, 2, 3];\n    let index = Math.floor(Math.random() * validVel.length);\n    const vel = [validVel[index], 0];\n    return vel;\n  }\n  moveEnemy() {\n    ctx.clearRect(0, 0, canvas.width, canvas.height);\n    ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n    enemy.move();\n    enemy.draw(ctx);\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIm1hcHBpbmdzIjoiOztBQUE4QztBQUU5QyxNQUFNQyxLQUFLLFNBQVNELHlEQUFZLENBQUM7RUFFN0JFLFdBQVdBLENBQUNDLE9BQU8sRUFBQztJQUNoQkEsT0FBTyxDQUFDQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ3BCRCxPQUFPLENBQUNFLEtBQUssR0FBRyxTQUFTO0lBQ3pCLEtBQUssQ0FBQ0YsT0FBTyxDQUFDO0lBQ2QsSUFBSSxDQUFDQyxHQUFHLEdBQUcsSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQztJQUMzQixJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7RUFDckM7RUFFQUEsWUFBWUEsQ0FBQSxFQUFHO0lBQ1gsTUFBTUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7SUFDckQsSUFBSUMsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSixXQUFXLENBQUNLLE1BQU0sQ0FBQztJQUUxRCxPQUFPTCxXQUFXLENBQUNDLEtBQUssQ0FBQztFQUM3QjtFQUVBSixTQUFTQSxDQUFBLEVBQUc7SUFDUixNQUFNUyxNQUFNLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUM7SUFDMUIsSUFBSUMsTUFBTSxHQUFHTCxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQztJQUU1QyxJQUFJSCxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3pDLE1BQU1SLEdBQUcsR0FBRyxDQUFDVSxNQUFNLENBQUNMLEtBQUssQ0FBQyxFQUFFTSxNQUFNLENBQUM7SUFFbkMsT0FBT1gsR0FBRztFQUNkO0VBRUFELFNBQVNBLENBQUEsRUFBRztJQUNSLE1BQU1hLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUMxQyxJQUFJUCxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdJLFFBQVEsQ0FBQ0gsTUFBTSxDQUFDO0lBRXZELE1BQU1aLEdBQUcsR0FBRyxDQUFDZSxRQUFRLENBQUNQLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNoQyxPQUFPUixHQUFHO0VBQ2Q7RUFFQWdCLFNBQVNBLENBQUEsRUFBRztJQUNSQyxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFQyxNQUFNLENBQUNDLEtBQUssRUFBRUQsTUFBTSxDQUFDRSxNQUFNLENBQUM7SUFDaERKLEdBQUcsQ0FBQ0ssU0FBUyxDQUFDQyxhQUFhLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRUosTUFBTSxDQUFDQyxLQUFLLEVBQUVELE1BQU0sQ0FBQ0UsTUFBTSxDQUFDO0lBQy9ERyxLQUFLLENBQUNDLElBQUksQ0FBQyxDQUFDO0lBQ1pELEtBQUssQ0FBQ0UsSUFBSSxDQUFDVCxHQUFHLENBQUM7RUFDbkI7QUFFSjtBQUFDO0FBR0QsK0RBQWVwQixLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy9lbmVteS5qcz9lMzYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nLW9iamVjdC5qc1wiO1xyXG5cclxuY2xhc3MgRW5lbXkgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIG9wdGlvbnMudmVsID0gWzEsIDBdO1xyXG4gICAgICAgIG9wdGlvbnMuY29sb3IgPSBcIiMyRjczOUFcIjtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMucmFuZG9tVmVsKCk7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLnJhbmRvbVBvcygpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5yYW5kb21SYWRpdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmFuZG9tUmFkaXVzKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUmFkaXVzID0gWzIsIDUsIDUsIDEwLCAxMCwgMjAsIDIwLCAzMCwgNDBdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkUmFkaXVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZFJhZGl1c1tpbmRleF07XHJcbiAgICB9O1xyXG5cclxuICAgIHJhbmRvbVBvcygpIHtcclxuICAgICAgICBjb25zdCBzdGFydFggPSBbLTUwLCAxMDUwXTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjYwKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgY29uc3QgcG9zID0gW3N0YXJ0WFtpbmRleF0sIHN0YXJ0WV07XHJcblxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhbmRvbVZlbCgpIHtcclxuICAgICAgICBjb25zdCB2YWxpZFZlbCA9IFsxLCAxLjUsIDEuNSwgMiwgMiwgMiwgM107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRWZWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVsID0gW3ZhbGlkVmVsW2luZGV4XSwgMF07XHJcbiAgICAgICAgcmV0dXJuIHZlbDtcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlRW5lbXkoKSB7XHJcbiAgICAgICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgICAgICBlbmVteS5tb3ZlKCk7XHJcbiAgICAgICAgZW5lbXkuZHJhdyhjdHgpO1xyXG4gICAgfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbmVteTsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRW5lbXkiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJ2ZWwiLCJjb2xvciIsInJhbmRvbVZlbCIsInBvcyIsInJhbmRvbVBvcyIsInJhZGl1cyIsInJhbmRvbVJhZGl1cyIsInZhbGlkUmFkaXVzIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJ2YWxpZFZlbCIsIm1vdmVFbmVteSIsImN0eCIsImNsZWFyUmVjdCIsImNhbnZhcyIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwiYmFja2dyb3VuZEltZyIsImVuZW15IiwibW92ZSIsImRyYXciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/moving-object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving-object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n  draw(ctx) {\n    // for (let index = 0; index < ctx.length; index++) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fillStyle = \"#00FF00\";\n    ctx.fill();\n    ctx.closePath();\n    // }\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmctb2JqZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFFZkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO0VBQ2hDO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ0gsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDNUI7RUFFQUcsSUFBSUEsQ0FBQ0MsR0FBRyxFQUFFO0lBQ047SUFDSUEsR0FBRyxDQUFDQyxTQUFTLENBQUMsQ0FBQztJQUNmRCxHQUFHLENBQUNFLEdBQUcsQ0FBQyxJQUFJLENBQUNQLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNBLEdBQUcsQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUNFLE1BQU0sRUFBRSxDQUFDLEVBQUVNLElBQUksQ0FBQ0MsRUFBRSxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUM7SUFFcEVKLEdBQUcsQ0FBQ0ssU0FBUyxHQUFHLFNBQVM7SUFDekJMLEdBQUcsQ0FBQ00sSUFBSSxDQUFDLENBQUM7SUFDVk4sR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQztJQUNuQjtFQUNKO0FBRUo7QUFFQSwrREFBZWYsWUFBWSIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvbW92aW5nLW9iamVjdC5qcz9hYTdkIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIE1vdmluZ09iamVjdCB7XHJcblxyXG4gICAgY29uc3RydWN0b3Iob3B0aW9ucykge1xyXG4gICAgICAgIHRoaXMucG9zID0gb3B0aW9ucy5wb3M7XHJcbiAgICAgICAgdGhpcy52ZWwgPSBvcHRpb25zLnZlbDtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IG9wdGlvbnMucmFkaXVzO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NbMF0rPXRoaXMudmVsWzBdO1xyXG4gICAgICAgIHRoaXMucG9zWzFdKz10aGlzLnZlbFsxXTtcclxuICAgIH1cclxuXHJcbiAgICBkcmF3KGN0eCkge1xyXG4gICAgICAgIC8vIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjdHgubGVuZ3RoOyBpbmRleCsrKSB7XHJcbiAgICAgICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMDBGRjAwXCI7XHJcbiAgICAgICAgICAgIGN0eC5maWxsKCk7XHJcbiAgICAgICAgICAgIGN0eC5jbG9zZVBhdGgoKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBNb3ZpbmdPYmplY3Q7Il0sIm5hbWVzIjpbIk1vdmluZ09iamVjdCIsImNvbnN0cnVjdG9yIiwib3B0aW9ucyIsInBvcyIsInZlbCIsInJhZGl1cyIsIm1vdmUiLCJkcmF3IiwiY3R4IiwiYmVnaW5QYXRoIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbFN0eWxlIiwiZmlsbCIsImNsb3NlUGF0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/moving-object.js\n");

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