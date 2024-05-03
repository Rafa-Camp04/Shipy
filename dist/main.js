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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/moving-object */ \"./src/scripts/moving-object.js\");\n\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Enemy = _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst canvas = document.getElementById('background-canvas');\nconst ctx = canvas.getContext('2d');\nconst backgroundImg = new Image();\n// backgroundImg.src = '../media/orange-test.webp';\n// backgroundImg.src = '../media/background_02.jpeg';\nbackgroundImg.src = '../media/background_01.jpeg';\nconst enemy = new _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\nfunction moveEnemy() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n  enemy.move();\n  enemy.draw(ctx);\n}\nsetInterval(moveEnemy, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ2U7QUFDbkRFLE1BQU0sQ0FBQ0QsWUFBWSxHQUFHQSw4REFBWTtBQUNsQ0MsTUFBTSxDQUFDRixLQUFLLEdBQUdBLHNEQUFLO0FBR3BCLE1BQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFDM0QsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsTUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0FBQ2pDO0FBQ0E7QUFDQUQsYUFBYSxDQUFDRSxHQUFHLEdBQUcsNkJBQTZCO0FBRWpELE1BQU1DLEtBQUssR0FBRyxJQUFJWCxzREFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTNCLFNBQVNZLFNBQVNBLENBQUEsRUFBRztFQUNqQk4sR0FBRyxDQUFDTyxTQUFTLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRVYsTUFBTSxDQUFDVyxLQUFLLEVBQUVYLE1BQU0sQ0FBQ1ksTUFBTSxDQUFDO0VBQ2hEVCxHQUFHLENBQUNVLFNBQVMsQ0FBQ1IsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVMLE1BQU0sQ0FBQ1csS0FBSyxFQUFFWCxNQUFNLENBQUNZLE1BQU0sQ0FBQztFQUMvREosS0FBSyxDQUFDTSxJQUFJLENBQUMsQ0FBQztFQUNaTixLQUFLLENBQUNPLElBQUksQ0FBQ1osR0FBRyxDQUFDO0FBQ25CO0FBRUFhLFdBQVcsQ0FBQ1AsU0FBUyxFQUFFLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL2luZGV4LmpzP2I2MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEVuZW15IGZyb20gXCIuL3NjcmlwdHMvZW5lbXlcIjtcclxuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9zY3JpcHRzL21vdmluZy1vYmplY3RcIjtcclxud2luZG93Lk1vdmluZ09iamVjdCA9IE1vdmluZ09iamVjdDtcclxud2luZG93LkVuZW15ID0gRW5lbXk7XHJcblxyXG5cclxuY29uc3QgY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tncm91bmQtY2FudmFzJyk7XHJcbmNvbnN0IGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuY29uc3QgYmFja2dyb3VuZEltZyA9IG5ldyBJbWFnZSgpO1xyXG4vLyBiYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9vcmFuZ2UtdGVzdC53ZWJwJztcclxuLy8gYmFja2dyb3VuZEltZy5zcmMgPSAnLi4vbWVkaWEvYmFja2dyb3VuZF8wMi5qcGVnJztcclxuYmFja2dyb3VuZEltZy5zcmMgPSAnLi4vbWVkaWEvYmFja2dyb3VuZF8wMS5qcGVnJztcclxuXHJcbmNvbnN0IGVuZW15ID0gbmV3IEVuZW15KHt9KTtcclxuXHJcbmZ1bmN0aW9uIG1vdmVFbmVteSgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGVuZW15Lm1vdmUoKTtcclxuICAgIGVuZW15LmRyYXcoY3R4KTtcclxufVxyXG5cclxuc2V0SW50ZXJ2YWwobW92ZUVuZW15LCAxMCk7Il0sIm5hbWVzIjpbIkVuZW15IiwiTW92aW5nT2JqZWN0Iiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kSW1nIiwiSW1hZ2UiLCJzcmMiLCJlbmVteSIsIm1vdmVFbmVteSIsImNsZWFyUmVjdCIsIndpZHRoIiwiaGVpZ2h0IiwiZHJhd0ltYWdlIiwibW92ZSIsImRyYXciLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/scripts/moving-object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\n// import Game from \"./game.js\";\n\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.vel = [1, 0];\n    options.color = \"#2F739A\";\n    super(options);\n    this.vel = this.randomVel();\n    this.pos = this.randomPos();\n    this.radius = this.randomRadius();\n  }\n  randomRadius() {\n    const validRadius = [5, 10, 20, 30, 40];\n    let index = Math.floor(Math.random() * validRadius.length);\n    return validRadius[index];\n  }\n  randomPos() {\n    const startX = [-50, 1050];\n    let startY = Math.floor(Math.random() * 660);\n    let index = Math.floor(Math.random() * 2);\n    const pos = [startX[index], startY];\n    return pos;\n  }\n  randomVel() {\n    const validVel = [1, 1, 1, 2, 2, 2, 3];\n    let index = Math.floor(Math.random() * validVel.length);\n    const vel = [validVel[index], 0];\n    return vel;\n  }\n\n  // movingEnemy() {\n  //     if (this.randomPos[0] === -50) {\n  //         this.pos[0] += 1;\n  //     } else {\n  //         this.pos[0] -= 1;\n  //     }\n  // }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUM4QztBQUNaO0FBRWxDLE1BQU1FLEtBQUssU0FBU0YseURBQVksQ0FBQztFQUU3QkcsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFDO0lBQ2hCQSxPQUFPLENBQUNDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEJELE9BQU8sQ0FBQ0UsS0FBSyxHQUFHLFNBQVM7SUFDekIsS0FBSyxDQUFDRixPQUFPLENBQUM7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUNyQztFQUVBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO0lBQ3ZDLElBQUlDLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0osV0FBVyxDQUFDSyxNQUFNLENBQUM7SUFFMUQsT0FBT0wsV0FBVyxDQUFDQyxLQUFLLENBQUM7RUFDN0I7RUFFQUosU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTVMsTUFBTSxHQUFHLENBQUMsQ0FBQyxFQUFFLEVBQUUsSUFBSSxDQUFDO0lBQzFCLElBQUlDLE1BQU0sR0FBR0wsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUM7SUFFNUMsSUFBSUgsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN6QyxNQUFNUixHQUFHLEdBQUcsQ0FBQ1UsTUFBTSxDQUFDTCxLQUFLLENBQUMsRUFBRU0sTUFBTSxDQUFDO0lBRW5DLE9BQU9YLEdBQUc7RUFDZDtFQUVBRCxTQUFTQSxDQUFBLEVBQUc7SUFDUixNQUFNYSxRQUFRLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdEMsSUFBSVAsS0FBSyxHQUFHQyxJQUFJLENBQUNDLEtBQUssQ0FBQ0QsSUFBSSxDQUFDRSxNQUFNLENBQUMsQ0FBQyxHQUFHSSxRQUFRLENBQUNILE1BQU0sQ0FBQztJQUV2RCxNQUFNWixHQUFHLEdBQUcsQ0FBQ2UsUUFBUSxDQUFDUCxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDaEMsT0FBT1IsR0FBRztFQUNkOztFQUVBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0FBRUo7QUFBQztBQUdELCtEQUFlSCxLQUFLIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy9lbmVteS5qcz9lMzYxIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGltcG9ydCBHYW1lIGZyb20gXCIuL2dhbWUuanNcIjtcclxuaW1wb3J0IE1vdmluZ09iamVjdCBmcm9tIFwiLi9tb3Zpbmctb2JqZWN0LmpzXCI7XHJcbmltcG9ydCAqIGFzIFV0aWwgZnJvbSBcIi4vdXRpbC5qc1wiO1xyXG5cclxuY2xhc3MgRW5lbXkgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIG9wdGlvbnMudmVsID0gWzEsIDBdO1xyXG4gICAgICAgIG9wdGlvbnMuY29sb3IgPSBcIiMyRjczOUFcIjtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMucmFuZG9tVmVsKCk7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLnJhbmRvbVBvcygpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5yYW5kb21SYWRpdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmFuZG9tUmFkaXVzKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUmFkaXVzID0gWzUsIDEwLCAyMCwgMzAsIDQwXTtcclxuICAgICAgICBsZXQgaW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB2YWxpZFJhZGl1cy5sZW5ndGgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdmFsaWRSYWRpdXNbaW5kZXhdO1xyXG4gICAgfTtcclxuXHJcbiAgICByYW5kb21Qb3MoKSB7XHJcbiAgICAgICAgY29uc3Qgc3RhcnRYID0gWy01MCwgMTA1MF07XHJcbiAgICAgICAgbGV0IHN0YXJ0WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDY2MCk7XHJcblxyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDIpO1xyXG4gICAgICAgIGNvbnN0IHBvcyA9IFtzdGFydFhbaW5kZXhdLCBzdGFydFldO1xyXG5cclxuICAgICAgICByZXR1cm4gcG9zO1xyXG4gICAgfTtcclxuXHJcbiAgICByYW5kb21WZWwoKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRWZWwgPSBbMSwgMSwgMSwgMiwgMiwgMiwgM107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRWZWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVsID0gW3ZhbGlkVmVsW2luZGV4XSwgMF07XHJcbiAgICAgICAgcmV0dXJuIHZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZpbmdFbmVteSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5yYW5kb21Qb3NbMF0gPT09IC01MCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvc1swXSArPSAxO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9zWzBdIC09IDE7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbmVteTsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiVXRpbCIsIkVuZW15IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwidmVsIiwiY29sb3IiLCJyYW5kb21WZWwiLCJwb3MiLCJyYW5kb21Qb3MiLCJyYWRpdXMiLCJyYW5kb21SYWRpdXMiLCJ2YWxpZFJhZGl1cyIsImluZGV4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwibGVuZ3RoIiwic3RhcnRYIiwic3RhcnRZIiwidmFsaWRWZWwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

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