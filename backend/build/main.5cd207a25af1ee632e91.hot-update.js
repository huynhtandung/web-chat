/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "main";
exports.ids = null;
exports.modules = {

/***/ "./src/models/friend.schema.ts":
/*!*************************************!*\
  !*** ./src/models/friend.schema.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.User = void 0;\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar FriendSchema = new mongoose_1.Schema({\r\n    _id: {\r\n        type: String,\r\n        require: true,\r\n        \"default\": function () { return _utils_1.generateUUID(); },\r\n    },\r\n    user: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n    friend: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n    lastMessage: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n});\r\nexports.User = mongoose_1.model(\"friends\", FriendSchema);\r\n\n\n//# sourceURL=webpack://express-backend/./src/models/friend.schema.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\n__exportStar(__webpack_require__(/*! ./user.schema */ \"./src/models/user.schema.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./message.schema */ \"./src/models/message.schema.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./friend.schema */ \"./src/models/friend.schema.ts\"), exports);\r\n\n\n//# sourceURL=webpack://express-backend/./src/models/index.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("53d3b4a60db564ff00fe")
/******/ 	})();
/******/ 	
/******/ }
;