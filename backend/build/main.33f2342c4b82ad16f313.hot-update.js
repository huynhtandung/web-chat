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

/***/ "./src/validations/message.validation.ts":
/*!***********************************************!*\
  !*** ./src/validations/message.validation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
eval("\r\nexports.__esModule = true;\r\nexports.SendMessageValidation = exports.MessagesValidation = void 0;\r\nvar yup = __webpack_require__(/*! yup */ \"yup\");\r\nvar receiver = yup.string().required(\"Receiver is required!\");\r\nvar message = yup.string().required(\"Message is required!\");\r\nexports.MessagesValidation = yup.object().shape({\r\n    receiver: receiver,\r\n});\r\nexports.SendMessageValidation = yup.object().shape({\r\n    receiver: receiver,\r\n    message: message,\r\n});\r\n\n\n//# sourceURL=webpack://express-backend/./src/validations/message.validation.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("3fb64e09c83ea8d9581f")
/******/ 	})();
/******/ 	
/******/ }
;