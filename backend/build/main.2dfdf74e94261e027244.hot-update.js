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

/***/ "./src/resolvers/user.resolver.ts":
/*!****************************************!*\
  !*** ./src/resolvers/user.resolver.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.UserResolver = void 0;\r\nvar _models_1 = __webpack_require__(/*! @models */ \"./src/models/index.ts\");\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar _validations_1 = __webpack_require__(/*! @validations */ \"./src/validations/index.ts\");\r\nvar apollo_server_errors_1 = __webpack_require__(/*! apollo-server-errors */ \"apollo-server-errors\");\r\nexports.UserResolver = {\r\n    Query: {\r\n        me: function (_, __, _a) {\r\n            var currentUser = _a.currentUser;\r\n            return ({ currentUser: currentUser });\r\n        },\r\n        friends: function (_, __, _a) {\r\n            var currentUser = _a.currentUser;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                return __generator(this, function (_b) {\r\n                    switch (_b.label) {\r\n                        case 0: return [4 /*yield*/, _models_1.User.findOne({\r\n                                _id: currentUser._id,\r\n                            }).populate(\"users\")];\r\n                        case 1: return [2 /*return*/, _b.sent()];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n    },\r\n    Mutation: {\r\n        register: function (_, _a) {\r\n            var input = _a.input;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                var username, password, fullName, existedUser, user, _b;\r\n                var _c;\r\n                return __generator(this, function (_d) {\r\n                    switch (_d.label) {\r\n                        case 0: return [4 /*yield*/, _validations_1.UserRegisterValidation.validate(input)];\r\n                        case 1:\r\n                            _d.sent();\r\n                            username = input.username, password = input.password, fullName = input.fullName;\r\n                            return [4 /*yield*/, _models_1.User.findOne({ username: username })];\r\n                        case 2:\r\n                            existedUser = _d.sent();\r\n                            if (existedUser) {\r\n                                throw new apollo_server_errors_1.ApolloError(\"Username is already existed!\");\r\n                            }\r\n                            _b = _models_1.User.bind;\r\n                            _c = {\r\n                                username: username\r\n                            };\r\n                            return [4 /*yield*/, _utils_1.hashPassword(password)];\r\n                        case 3:\r\n                            user = new (_b.apply(_models_1.User, [void 0, (_c.password = _d.sent(),\r\n                                    _c.fullName = fullName,\r\n                                    _c)]))();\r\n                            return [4 /*yield*/, user.save()];\r\n                        case 4:\r\n                            _d.sent();\r\n                            return [2 /*return*/, user];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n        login: function (_, _a) {\r\n            var input = _a.input;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                var username, password, user, checkPass;\r\n                return __generator(this, function (_b) {\r\n                    switch (_b.label) {\r\n                        case 0: return [4 /*yield*/, _validations_1.UserLoginValidation.validate(input)];\r\n                        case 1:\r\n                            _b.sent();\r\n                            username = input.username, password = input.password;\r\n                            return [4 /*yield*/, _models_1.User.findOne({ username: username })];\r\n                        case 2:\r\n                            user = _b.sent();\r\n                            if (!user) {\r\n                                throw new apollo_server_errors_1.ApolloError(\"User is not found!\");\r\n                            }\r\n                            return [4 /*yield*/, _utils_1.comparePassword(password, user.password)];\r\n                        case 3:\r\n                            checkPass = _b.sent();\r\n                            if (!checkPass) {\r\n                                throw new apollo_server_errors_1.ApolloError(\"Incorrect password!\");\r\n                            }\r\n                            return [2 /*return*/, {\r\n                                    accessToken: _utils_1.generateToken(user),\r\n                                }];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://express-backend/./src/resolvers/user.resolver.ts?");

/***/ })

};
exports.runtime =
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ 	"use strict";
/******/ 
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("79e9f90e57bffab20688")
/******/ 	})();
/******/ 	
/******/ }
;