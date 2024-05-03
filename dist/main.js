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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/moving-object */ \"./src/scripts/moving-object.js\");\n\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Enemy = _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst canvas = document.getElementById('background-canvas');\nconst ctx = canvas.getContext('2d');\nconst backgroundImg = new Image();\nbackgroundImg.onload = function () {\n  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n};\n\n// backgroundImg.src = '../media/orange-test.webp';\n// backgroundImg.src = '../media/background_02.jpeg';\nbackgroundImg.src = '../media/background_01.jpeg';\nconst enemy = new _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({});\nfunction moveEnemy() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n  enemy.move();\n  enemy.draw(ctx);\n}\nsetInterval(moveEnemy, 10);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ2U7QUFDbkRFLE1BQU0sQ0FBQ0QsWUFBWSxHQUFHQSw4REFBWTtBQUNsQ0MsTUFBTSxDQUFDRixLQUFLLEdBQUdBLHNEQUFLO0FBR3BCLE1BQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFDM0QsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFFbkMsTUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDO0FBRWpDRCxhQUFhLENBQUNFLE1BQU0sR0FBRyxZQUFXO0VBQzlCSixHQUFHLENBQUNLLFNBQVMsQ0FBQ0gsYUFBYSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUVMLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFVCxNQUFNLENBQUNVLE1BQU0sQ0FBQztBQUNuRSxDQUFDOztBQUVEO0FBQ0E7QUFDQUwsYUFBYSxDQUFDTSxHQUFHLEdBQUcsNkJBQTZCO0FBR2pELE1BQU1DLEtBQUssR0FBRyxJQUFJZixzREFBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBRTNCLFNBQVNnQixTQUFTQSxDQUFBLEVBQUc7RUFDakJWLEdBQUcsQ0FBQ1csU0FBUyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUVkLE1BQU0sQ0FBQ1MsS0FBSyxFQUFFVCxNQUFNLENBQUNVLE1BQU0sQ0FBQztFQUNoRFAsR0FBRyxDQUFDSyxTQUFTLENBQUNILGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxNQUFNLENBQUNTLEtBQUssRUFBRVQsTUFBTSxDQUFDVSxNQUFNLENBQUM7RUFDL0RFLEtBQUssQ0FBQ0csSUFBSSxDQUFDLENBQUM7RUFDWkgsS0FBSyxDQUFDSSxJQUFJLENBQUNiLEdBQUcsQ0FBQztBQUNuQjtBQUVBYyxXQUFXLENBQUNKLFNBQVMsRUFBRSxFQUFFLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zaGlweS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBFbmVteSBmcm9tIFwiLi9zY3JpcHRzL2VuZW15XCI7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vc2NyaXB0cy9tb3Zpbmctb2JqZWN0XCI7XHJcbndpbmRvdy5Nb3ZpbmdPYmplY3QgPSBNb3ZpbmdPYmplY3Q7XHJcbndpbmRvdy5FbmVteSA9IEVuZW15O1xyXG5cclxuXHJcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYWNrZ3JvdW5kLWNhbnZhcycpO1xyXG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbmNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbmJhY2tncm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmRJbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbn1cclxuXHJcbi8vIGJhY2tncm91bmRJbWcuc3JjID0gJy4uL21lZGlhL29yYW5nZS10ZXN0LndlYnAnO1xyXG4vLyBiYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9iYWNrZ3JvdW5kXzAyLmpwZWcnO1xyXG5iYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9iYWNrZ3JvdW5kXzAxLmpwZWcnO1xyXG5cclxuXHJcbmNvbnN0IGVuZW15ID0gbmV3IEVuZW15KHt9KTtcclxuXHJcbmZ1bmN0aW9uIG1vdmVFbmVteSgpIHtcclxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGN0eC5kcmF3SW1hZ2UoYmFja2dyb3VuZEltZywgMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcclxuICAgIGVuZW15Lm1vdmUoKTtcclxuICAgIGVuZW15LmRyYXcoY3R4KTtcclxufVxyXG5cclxuc2V0SW50ZXJ2YWwobW92ZUVuZW15LCAxMCk7Il0sIm5hbWVzIjpbIkVuZW15IiwiTW92aW5nT2JqZWN0Iiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kSW1nIiwiSW1hZ2UiLCJvbmxvYWQiLCJkcmF3SW1hZ2UiLCJ3aWR0aCIsImhlaWdodCIsInNyYyIsImVuZW15IiwibW92ZUVuZW15IiwiY2xlYXJSZWN0IiwibW92ZSIsImRyYXciLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/scripts/moving-object.js\");\n// import Game from \"./game.js\";\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  constructor(options) {\n    options.vel = [1, 0];\n    options.color = \"#2F739A\";\n    super(options);\n    this.vel = this.randomVel();\n    this.pos = this.randomPos();\n    this.radius = this.randomRadius();\n  }\n  randomRadius() {\n    const validRadius = [2, 5, 5, 10, 10, 20, 20, 30, 40];\n    let index = Math.floor(Math.random() * validRadius.length);\n    return validRadius[index];\n  }\n  randomPos() {\n    const startX = [-50, 1050];\n    let startY = Math.floor(Math.random() * 660);\n    let index = Math.floor(Math.random() * 2);\n    const pos = [startX[index], startY];\n    return pos;\n  }\n  randomVel() {\n    const validVel = [1, 1.5, 1.5, 2, 2, 2, 3];\n    let index = Math.floor(Math.random() * validVel.length);\n    const vel = [validVel[index], 0];\n    return vel;\n  }\n\n  // movingEnemy() {\n  //     if (this.randomPos[0] === -50) {\n  //         this.pos[0] += 1;\n  //     } else {\n  //         this.pos[0] -= 1;\n  //     }\n  // }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIm1hcHBpbmdzIjoiOztBQUFBO0FBQzhDO0FBRTlDLE1BQU1DLEtBQUssU0FBU0QseURBQVksQ0FBQztFQUU3QkUsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFDO0lBQ2hCQSxPQUFPLENBQUNDLEdBQUcsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDcEJELE9BQU8sQ0FBQ0UsS0FBSyxHQUFHLFNBQVM7SUFDekIsS0FBSyxDQUFDRixPQUFPLENBQUM7SUFDZCxJQUFJLENBQUNDLEdBQUcsR0FBRyxJQUFJLENBQUNFLFNBQVMsQ0FBQyxDQUFDO0lBQzNCLElBQUksQ0FBQ0MsR0FBRyxHQUFHLElBQUksQ0FBQ0MsU0FBUyxDQUFDLENBQUM7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsQ0FBQztFQUNyQztFQUVBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxNQUFNQyxXQUFXLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztJQUNyRCxJQUFJQyxLQUFLLEdBQUdDLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUdKLFdBQVcsQ0FBQ0ssTUFBTSxDQUFDO0lBRTFELE9BQU9MLFdBQVcsQ0FBQ0MsS0FBSyxDQUFDO0VBQzdCO0VBRUFKLFNBQVNBLENBQUEsRUFBRztJQUNSLE1BQU1TLE1BQU0sR0FBRyxDQUFDLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQztJQUMxQixJQUFJQyxNQUFNLEdBQUdMLElBQUksQ0FBQ0MsS0FBSyxDQUFDRCxJQUFJLENBQUNFLE1BQU0sQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBRTVDLElBQUlILEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDekMsTUFBTVIsR0FBRyxHQUFHLENBQUNVLE1BQU0sQ0FBQ0wsS0FBSyxDQUFDLEVBQUVNLE1BQU0sQ0FBQztJQUVuQyxPQUFPWCxHQUFHO0VBQ2Q7RUFFQUQsU0FBU0EsQ0FBQSxFQUFHO0lBQ1IsTUFBTWEsUUFBUSxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzFDLElBQUlQLEtBQUssR0FBR0MsSUFBSSxDQUFDQyxLQUFLLENBQUNELElBQUksQ0FBQ0UsTUFBTSxDQUFDLENBQUMsR0FBR0ksUUFBUSxDQUFDSCxNQUFNLENBQUM7SUFFdkQsTUFBTVosR0FBRyxHQUFHLENBQUNlLFFBQVEsQ0FBQ1AsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQ2hDLE9BQU9SLEdBQUc7RUFDZDs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtBQUVKO0FBQUM7QUFHRCwrREFBZUgsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvZW5lbXkuanM/ZTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgR2FtZSBmcm9tIFwiLi9nYW1lLmpzXCI7XHJcbmltcG9ydCBNb3ZpbmdPYmplY3QgZnJvbSBcIi4vbW92aW5nLW9iamVjdC5qc1wiO1xyXG5cclxuY2xhc3MgRW5lbXkgZXh0ZW5kcyBNb3ZpbmdPYmplY3Qge1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIG9wdGlvbnMudmVsID0gWzEsIDBdO1xyXG4gICAgICAgIG9wdGlvbnMuY29sb3IgPSBcIiMyRjczOUFcIjtcclxuICAgICAgICBzdXBlcihvcHRpb25zKTtcclxuICAgICAgICB0aGlzLnZlbCA9IHRoaXMucmFuZG9tVmVsKCk7XHJcbiAgICAgICAgdGhpcy5wb3MgPSB0aGlzLnJhbmRvbVBvcygpO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gdGhpcy5yYW5kb21SYWRpdXMoKTtcclxuICAgIH07XHJcblxyXG4gICAgcmFuZG9tUmFkaXVzKCkge1xyXG4gICAgICAgIGNvbnN0IHZhbGlkUmFkaXVzID0gWzIsIDUsIDUsIDEwLCAxMCwgMjAsIDIwLCAzMCwgNDBdO1xyXG4gICAgICAgIGxldCBpbmRleCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkUmFkaXVzLmxlbmd0aCk7XHJcblxyXG4gICAgICAgIHJldHVybiB2YWxpZFJhZGl1c1tpbmRleF07XHJcbiAgICB9O1xyXG5cclxuICAgIHJhbmRvbVBvcygpIHtcclxuICAgICAgICBjb25zdCBzdGFydFggPSBbLTUwLCAxMDUwXTtcclxuICAgICAgICBsZXQgc3RhcnRZID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNjYwKTtcclxuXHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMik7XHJcbiAgICAgICAgY29uc3QgcG9zID0gW3N0YXJ0WFtpbmRleF0sIHN0YXJ0WV07XHJcblxyXG4gICAgICAgIHJldHVybiBwb3M7XHJcbiAgICB9O1xyXG5cclxuICAgIHJhbmRvbVZlbCgpIHtcclxuICAgICAgICBjb25zdCB2YWxpZFZlbCA9IFsxLCAxLjUsIDEuNSwgMiwgMiwgMiwgM107XHJcbiAgICAgICAgbGV0IGluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRWZWwubGVuZ3RoKTtcclxuXHJcbiAgICAgICAgY29uc3QgdmVsID0gW3ZhbGlkVmVsW2luZGV4XSwgMF07XHJcbiAgICAgICAgcmV0dXJuIHZlbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyBtb3ZpbmdFbmVteSgpIHtcclxuICAgIC8vICAgICBpZiAodGhpcy5yYW5kb21Qb3NbMF0gPT09IC01MCkge1xyXG4gICAgLy8gICAgICAgICB0aGlzLnBvc1swXSArPSAxO1xyXG4gICAgLy8gICAgIH0gZWxzZSB7XHJcbiAgICAvLyAgICAgICAgIHRoaXMucG9zWzBdIC09IDE7XHJcbiAgICAvLyAgICAgfVxyXG4gICAgLy8gfVxyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbmVteTsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiRW5lbXkiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJ2ZWwiLCJjb2xvciIsInJhbmRvbVZlbCIsInBvcyIsInJhbmRvbVBvcyIsInJhZGl1cyIsInJhbmRvbVJhZGl1cyIsInZhbGlkUmFkaXVzIiwiaW5kZXgiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJsZW5ndGgiLCJzdGFydFgiLCJzdGFydFkiLCJ2YWxpZFZlbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

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