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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scripts/enemy */ \"./src/scripts/enemy.js\");\n/* harmony import */ var _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/moving-object */ \"./src/scripts/moving-object.js\");\n\n\nwindow.MovingObject = _scripts_moving_object__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\nwindow.Enemy = _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\nconst canvas = document.getElementById('background-canvas');\nconst ctx = canvas.getContext('2d');\nconst backgroundImg = new Image();\n\n// backgroundImg.src = '../media/orange-test.webp';\nbackgroundImg.src = '../media/background_02.jpeg';\n// backgroundImg.src = '../media/page-background.jpg';\n\nconst enemy = new _scripts_enemy__WEBPACK_IMPORTED_MODULE_0__[\"default\"]({\n  pos: [-100, 300]\n});\nbackgroundImg.onload = function () {\n  ctx.drawImage(backgroundImg, 0, 0, canvas.width, canvas.height);\n  // enemy.draw(ctx);\n};\nfunction moveEnemy() {\n  enemy.move();\n  enemy.draw(ctx);\n}\nsetInterval(moveEnemy, 1);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7O0FBQW9DO0FBQ2U7QUFDbkRFLE1BQU0sQ0FBQ0QsWUFBWSxHQUFHQSw4REFBWTtBQUNsQ0MsTUFBTSxDQUFDRixLQUFLLEdBQUdBLHNEQUFLO0FBR3BCLE1BQU1HLE1BQU0sR0FBR0MsUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7QUFDM0QsTUFBTUMsR0FBRyxHQUFHSCxNQUFNLENBQUNJLFVBQVUsQ0FBQyxJQUFJLENBQUM7QUFDbkMsTUFBTUMsYUFBYSxHQUFHLElBQUlDLEtBQUssQ0FBQyxDQUFDOztBQUVqQztBQUNBRCxhQUFhLENBQUNFLEdBQUcsR0FBRyw2QkFBNkI7QUFDakQ7O0FBRUEsTUFBTUMsS0FBSyxHQUFHLElBQUlYLHNEQUFLLENBQUM7RUFBRVksR0FBRyxFQUFFLENBQUMsQ0FBQyxHQUFHLEVBQUUsR0FBRztBQUFFLENBQUMsQ0FBQztBQUU3Q0osYUFBYSxDQUFDSyxNQUFNLEdBQUcsWUFBVztFQUM5QlAsR0FBRyxDQUFDUSxTQUFTLENBQUNOLGFBQWEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFTCxNQUFNLENBQUNZLEtBQUssRUFBRVosTUFBTSxDQUFDYSxNQUFNLENBQUM7RUFDL0Q7QUFDSixDQUFDO0FBRUQsU0FBU0MsU0FBU0EsQ0FBQSxFQUFHO0VBQ2pCTixLQUFLLENBQUNPLElBQUksQ0FBQyxDQUFDO0VBQ1pQLEtBQUssQ0FBQ1EsSUFBSSxDQUFDYixHQUFHLENBQUM7QUFDbkI7QUFFQWMsV0FBVyxDQUFDSCxTQUFTLEVBQUUsQ0FBQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvaW5kZXguanM/YjYzNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRW5lbXkgZnJvbSBcIi4vc2NyaXB0cy9lbmVteVwiO1xyXG5pbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL3NjcmlwdHMvbW92aW5nLW9iamVjdFwiO1xyXG53aW5kb3cuTW92aW5nT2JqZWN0ID0gTW92aW5nT2JqZWN0O1xyXG53aW5kb3cuRW5lbXkgPSBFbmVteTtcclxuXHJcblxyXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYmFja2dyb3VuZC1jYW52YXMnKTtcclxuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcbmNvbnN0IGJhY2tncm91bmRJbWcgPSBuZXcgSW1hZ2UoKTtcclxuXHJcbi8vIGJhY2tncm91bmRJbWcuc3JjID0gJy4uL21lZGlhL29yYW5nZS10ZXN0LndlYnAnO1xyXG5iYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9iYWNrZ3JvdW5kXzAyLmpwZWcnO1xyXG4vLyBiYWNrZ3JvdW5kSW1nLnNyYyA9ICcuLi9tZWRpYS9wYWdlLWJhY2tncm91bmQuanBnJztcclxuXHJcbmNvbnN0IGVuZW15ID0gbmV3IEVuZW15KHsgcG9zOiBbLTEwMCwgMzAwXSB9KTtcclxuXHJcbmJhY2tncm91bmRJbWcub25sb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICBjdHguZHJhd0ltYWdlKGJhY2tncm91bmRJbWcsIDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XHJcbiAgICAvLyBlbmVteS5kcmF3KGN0eCk7XHJcbn07XHJcblxyXG5mdW5jdGlvbiBtb3ZlRW5lbXkoKSB7XHJcbiAgICBlbmVteS5tb3ZlKCk7XHJcbiAgICBlbmVteS5kcmF3KGN0eCk7XHJcbn1cclxuXHJcbnNldEludGVydmFsKG1vdmVFbmVteSwgMSk7Il0sIm5hbWVzIjpbIkVuZW15IiwiTW92aW5nT2JqZWN0Iiwid2luZG93IiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImN0eCIsImdldENvbnRleHQiLCJiYWNrZ3JvdW5kSW1nIiwiSW1hZ2UiLCJzcmMiLCJlbmVteSIsInBvcyIsIm9ubG9hZCIsImRyYXdJbWFnZSIsIndpZHRoIiwiaGVpZ2h0IiwibW92ZUVuZW15IiwibW92ZSIsImRyYXciLCJzZXRJbnRlcnZhbCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/scripts/enemy.js":
/*!******************************!*\
  !*** ./src/scripts/enemy.js ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _moving_object_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moving-object.js */ \"./src/scripts/moving-object.js\");\n/* harmony import */ var _util_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util.js */ \"./src/scripts/util.js\");\n\n\nclass Enemy extends _moving_object_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"] {\n  static COLOR = \"#2F739A\";\n  static RADIUS = 30;\n  // static VEL = [50, 50];\n  // static POS = [100, 100];\n\n  constructor(options) {\n    // options.pos = Enemy.POS;\n    options.radius = Enemy.RADIUS;\n    options.vel = [1, 0];\n    options.color = Enemy.COLOR;\n    super(options);\n  }\n}\n;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Enemy);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9lbmVteS5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBOEM7QUFDWjtBQUVsQyxNQUFNRSxLQUFLLFNBQVNGLHlEQUFZLENBQUM7RUFDN0IsT0FBT0csS0FBSyxHQUFHLFNBQVM7RUFDeEIsT0FBT0MsTUFBTSxHQUFHLEVBQUU7RUFDbEI7RUFDQTs7RUFFQUMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFDO0lBQ2hCO0lBQ0FBLE9BQU8sQ0FBQ0MsTUFBTSxHQUFHTCxLQUFLLENBQUNFLE1BQU07SUFDN0JFLE9BQU8sQ0FBQ0UsR0FBRyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUNwQkYsT0FBTyxDQUFDRyxLQUFLLEdBQUdQLEtBQUssQ0FBQ0MsS0FBSztJQUMzQixLQUFLLENBQUNHLE9BQU8sQ0FBQztFQUNsQjtBQUVKO0FBQUM7QUFHRCwrREFBZUosS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL3NoaXB5Ly4vc3JjL3NjcmlwdHMvZW5lbXkuanM/ZTM2MSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTW92aW5nT2JqZWN0IGZyb20gXCIuL21vdmluZy1vYmplY3QuanNcIjtcclxuaW1wb3J0ICogYXMgVXRpbCBmcm9tIFwiLi91dGlsLmpzXCI7XHJcblxyXG5jbGFzcyBFbmVteSBleHRlbmRzIE1vdmluZ09iamVjdCB7XHJcbiAgICBzdGF0aWMgQ09MT1IgPSBcIiMyRjczOUFcIjtcclxuICAgIHN0YXRpYyBSQURJVVMgPSAzMDtcclxuICAgIC8vIHN0YXRpYyBWRUwgPSBbNTAsIDUwXTtcclxuICAgIC8vIHN0YXRpYyBQT1MgPSBbMTAwLCAxMDBdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnMpe1xyXG4gICAgICAgIC8vIG9wdGlvbnMucG9zID0gRW5lbXkuUE9TO1xyXG4gICAgICAgIG9wdGlvbnMucmFkaXVzID0gRW5lbXkuUkFESVVTO1xyXG4gICAgICAgIG9wdGlvbnMudmVsID0gWzEsIDBdXHJcbiAgICAgICAgb3B0aW9ucy5jb2xvciA9IEVuZW15LkNPTE9SO1xyXG4gICAgICAgIHN1cGVyKG9wdGlvbnMpXHJcbiAgICB9O1xyXG5cclxufTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBFbmVteTsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiVXRpbCIsIkVuZW15IiwiQ09MT1IiLCJSQURJVVMiLCJjb25zdHJ1Y3RvciIsIm9wdGlvbnMiLCJyYWRpdXMiLCJ2ZWwiLCJjb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/scripts/enemy.js\n");

/***/ }),

/***/ "./src/scripts/moving-object.js":
/*!**************************************!*\
  !*** ./src/scripts/moving-object.js ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\nclass MovingObject {\n  constructor(options) {\n    this.pos = options.pos;\n    this.vel = options.vel;\n    this.radius = options.radius;\n  }\n  draw(ctx) {\n    ctx.beginPath();\n    ctx.arc(this.pos[0], this.pos[1], this.radius, 0, Math.PI * 2, true);\n    ctx.fillStyle = \"#00FF00\";\n    ctx.fill();\n  }\n  move() {\n    this.pos[0] += this.vel[0];\n    this.pos[1] += this.vel[1];\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (MovingObject);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2NyaXB0cy9tb3Zpbmctb2JqZWN0LmpzIiwibWFwcGluZ3MiOiI7QUFBQSxNQUFNQSxZQUFZLENBQUM7RUFFZkMsV0FBV0EsQ0FBQ0MsT0FBTyxFQUFFO0lBQ2pCLElBQUksQ0FBQ0MsR0FBRyxHQUFHRCxPQUFPLENBQUNDLEdBQUc7SUFDdEIsSUFBSSxDQUFDQyxHQUFHLEdBQUdGLE9BQU8sQ0FBQ0UsR0FBRztJQUN0QixJQUFJLENBQUNDLE1BQU0sR0FBR0gsT0FBTyxDQUFDRyxNQUFNO0VBQ2hDO0VBRUFDLElBQUlBLENBQUNDLEdBQUcsRUFBRTtJQUNOQSxHQUFHLENBQUNDLFNBQVMsQ0FBQyxDQUFDO0lBQ2ZELEdBQUcsQ0FBQ0UsR0FBRyxDQUFDLElBQUksQ0FBQ04sR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0EsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQ0UsTUFBTSxFQUFFLENBQUMsRUFBRUssSUFBSSxDQUFDQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQztJQUVwRUosR0FBRyxDQUFDSyxTQUFTLEdBQUcsU0FBUztJQUN6QkwsR0FBRyxDQUFDTSxJQUFJLENBQUMsQ0FBQztFQUNkO0VBRUFDLElBQUlBLENBQUEsRUFBRztJQUNILElBQUksQ0FBQ1gsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFFLElBQUksQ0FBQ0MsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUN4QixJQUFJLENBQUNELEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBRSxJQUFJLENBQUNDLEdBQUcsQ0FBQyxDQUFDLENBQUM7RUFDNUI7QUFFSjtBQUVBLCtEQUFlSixZQUFZIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2hpcHkvLi9zcmMvc2NyaXB0cy9tb3Zpbmctb2JqZWN0LmpzP2FhN2QiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgTW92aW5nT2JqZWN0IHtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihvcHRpb25zKSB7XHJcbiAgICAgICAgdGhpcy5wb3MgPSBvcHRpb25zLnBvcztcclxuICAgICAgICB0aGlzLnZlbCA9IG9wdGlvbnMudmVsO1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gb3B0aW9ucy5yYWRpdXM7XHJcbiAgICB9XHJcblxyXG4gICAgZHJhdyhjdHgpIHtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLnBvc1swXSwgdGhpcy5wb3NbMV0sIHRoaXMucmFkaXVzLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XHJcblxyXG4gICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMwMEZGMDBcIjtcclxuICAgICAgICBjdHguZmlsbCgpO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoKSB7XHJcbiAgICAgICAgdGhpcy5wb3NbMF0rPXRoaXMudmVsWzBdO1xyXG4gICAgICAgIHRoaXMucG9zWzFdKz10aGlzLnZlbFsxXTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1vdmluZ09iamVjdDsiXSwibmFtZXMiOlsiTW92aW5nT2JqZWN0IiwiY29uc3RydWN0b3IiLCJvcHRpb25zIiwicG9zIiwidmVsIiwicmFkaXVzIiwiZHJhdyIsImN0eCIsImJlZ2luUGF0aCIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGxTdHlsZSIsImZpbGwiLCJtb3ZlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/scripts/moving-object.js\n");

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