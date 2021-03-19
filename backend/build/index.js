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

/***/ "./src/configs/graphql/index.ts":
/*!**************************************!*\
  !*** ./src/configs/graphql/index.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.graphqlConfig = exports.pubSub = void 0;\r\nvar _environments_1 = __webpack_require__(/*! @environments */ \"./src/environments/index.ts\");\r\nvar _resolvers_1 = __webpack_require__(/*! @resolvers */ \"./src/resolvers/index.ts\");\r\nvar _typeDefs_1 = __webpack_require__(/*! @typeDefs */ \"./src/typeDefs/index.ts\");\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nvar graphql_subscriptions_1 = __webpack_require__(/*! graphql-subscriptions */ \"graphql-subscriptions\");\r\nexports.pubSub = new graphql_subscriptions_1.PubSub();\r\nexports.graphqlConfig = {\r\n    typeDefs: _typeDefs_1.typeDefs,\r\n    resolvers: _resolvers_1.resolvers,\r\n    // schemaDirectives,\r\n    context: function (_a) {\r\n        var req = _a.req, connection = _a.connection;\r\n        return __awaiter(void 0, void 0, void 0, function () {\r\n            var currentUser_1, currentUser, token;\r\n            return __generator(this, function (_b) {\r\n                switch (_b.label) {\r\n                    case 0:\r\n                        if (connection) {\r\n                            currentUser_1 = connection.context.currentUser;\r\n                            return [2 /*return*/, {\r\n                                    currentUser: currentUser_1,\r\n                                }];\r\n                        }\r\n                        token = req.headers[_environments_1.ACCESS_TOKEN];\r\n                        if (!token) return [3 /*break*/, 2];\r\n                        return [4 /*yield*/, _utils_1.verifyToken(token)];\r\n                    case 1:\r\n                        currentUser = _b.sent();\r\n                        _b.label = 2;\r\n                    case 2: return [2 /*return*/, {\r\n                            currentUser: currentUser,\r\n                        }];\r\n                }\r\n            });\r\n        });\r\n    },\r\n    subscriptions: {\r\n        onConnect: function (connectionParams) { return __awaiter(void 0, void 0, void 0, function () {\r\n            var currentUser, token;\r\n            return __generator(this, function (_a) {\r\n                switch (_a.label) {\r\n                    case 0:\r\n                        token = connectionParams[_environments_1.ACCESS_TOKEN];\r\n                        if (!token) return [3 /*break*/, 2];\r\n                        return [4 /*yield*/, _utils_1.verifyToken(token)];\r\n                    case 1:\r\n                        currentUser = _a.sent();\r\n                        return [2 /*return*/, { currentUser: currentUser }];\r\n                    case 2: throw new apollo_server_express_1.AuthenticationError(\"Invalid token!\");\r\n                }\r\n            });\r\n        }); },\r\n        onDisconnect: function () { },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://express-backend/./src/configs/graphql/index.ts?");

/***/ }),

/***/ "./src/configs/index.ts":
/*!******************************!*\
  !*** ./src/configs/index.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\n__exportStar(__webpack_require__(/*! ./graphql */ \"./src/configs/graphql/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack://express-backend/./src/configs/index.ts?");

/***/ }),

/***/ "./src/environments/index.ts":
/*!***********************************!*\
  !*** ./src/environments/index.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.MONGO_URI = exports.ACCESS_TOKEN = exports.ACCESS_TOKEN_SECRET = exports.SALT = exports.SERVER_PORT = void 0;\r\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\r\ndotenv.config();\r\nvar SERVER_PORT = process.env.SERVER_PORT || 8080;\r\nexports.SERVER_PORT = SERVER_PORT;\r\nvar SALT = 15;\r\nexports.SALT = SALT;\r\nvar ACCESS_TOKEN_SECRET = \"dunghuynh01051998\";\r\nexports.ACCESS_TOKEN_SECRET = ACCESS_TOKEN_SECRET;\r\nvar ACCESS_TOKEN = \"access-token\";\r\nexports.ACCESS_TOKEN = ACCESS_TOKEN;\r\nvar DATABASE_NAME = \"app\";\r\nvar MONGO_URI = process.env.MONGO_URL + \"/\" + DATABASE_NAME;\r\nexports.MONGO_URI = MONGO_URI;\r\n\n\n//# sourceURL=webpack://express-backend/./src/environments/index.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nvar _configs_1 = __webpack_require__(/*! @configs */ \"./src/configs/index.ts\");\r\nvar _environments_1 = __webpack_require__(/*! @environments */ \"./src/environments/index.ts\");\r\nvar apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar http = __webpack_require__(/*! http */ \"http\");\r\nvar app = express();\r\nvar server = new apollo_server_express_1.ApolloServer(_configs_1.graphqlConfig);\r\nserver.applyMiddleware({ app: app });\r\nvar httpServer = http.createServer(app);\r\nserver.installSubscriptionHandlers(httpServer);\r\nmongoose.connect(_environments_1.MONGO_URI, { useUnifiedTopology: true, useNewUrlParser: true }, function (err) {\r\n    if (err) {\r\n        console.error(\"Error when connect to database! \", err);\r\n    }\r\n    else {\r\n        console.log(\"🌨️  Database connected!\");\r\n    }\r\n});\r\nhttpServer.listen({ port: _environments_1.SERVER_PORT }, function () {\r\n    console.log(\"🚀 Server is running!\");\r\n});\r\n\n\n//# sourceURL=webpack://express-backend/./src/index.ts?");

/***/ }),

/***/ "./src/models/friend.schema.ts":
/*!*************************************!*\
  !*** ./src/models/friend.schema.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.Friend = void 0;\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar FriendSchema = new mongoose_1.Schema({\r\n    _id: {\r\n        type: String,\r\n        require: true,\r\n        \"default\": function () { return _utils_1.generateUUID(); },\r\n    },\r\n    user: {\r\n        type: String,\r\n        ref: \"users\",\r\n        require: true,\r\n    },\r\n    friend: {\r\n        type: String,\r\n        ref: \"users\",\r\n        require: true,\r\n    },\r\n    lastMessage: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n});\r\nexports.Friend = mongoose_1.model(\"friends\", FriendSchema);\r\n\n\n//# sourceURL=webpack://express-backend/./src/models/friend.schema.ts?");

/***/ }),

/***/ "./src/models/index.ts":
/*!*****************************!*\
  !*** ./src/models/index.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\n__exportStar(__webpack_require__(/*! ./user.schema */ \"./src/models/user.schema.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./message.schema */ \"./src/models/message.schema.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./friend.schema */ \"./src/models/friend.schema.ts\"), exports);\r\n\n\n//# sourceURL=webpack://express-backend/./src/models/index.ts?");

/***/ }),

/***/ "./src/models/message.schema.ts":
/*!**************************************!*\
  !*** ./src/models/message.schema.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.Message = void 0;\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar MessageSchema = new mongoose_1.Schema({\r\n    _id: {\r\n        type: String,\r\n        require: true,\r\n        \"default\": function () { return _utils_1.generateUUID(); },\r\n    },\r\n    sender: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n    receiver: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n    message: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n});\r\nexports.Message = mongoose_1.model(\"messages\", MessageSchema);\r\n\n\n//# sourceURL=webpack://express-backend/./src/models/message.schema.ts?");

/***/ }),

/***/ "./src/models/user.schema.ts":
/*!***********************************!*\
  !*** ./src/models/user.schema.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.User = void 0;\r\nvar mongoose_1 = __webpack_require__(/*! mongoose */ \"mongoose\");\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar UserSchema = new mongoose_1.Schema({\r\n    _id: {\r\n        type: String,\r\n        require: true,\r\n        \"default\": function () { return _utils_1.generateUUID(); },\r\n    },\r\n    username: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n    password: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n    fullName: {\r\n        type: String,\r\n        require: true,\r\n    },\r\n});\r\nexports.User = mongoose_1.model(\"users\", UserSchema);\r\n\n\n//# sourceURL=webpack://express-backend/./src/models/user.schema.ts?");

/***/ }),

/***/ "./src/resolvers/friend.resolver.ts":
/*!******************************************!*\
  !*** ./src/resolvers/friend.resolver.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.FriendResolver = void 0;\r\nvar _models_1 = __webpack_require__(/*! @models */ \"./src/models/index.ts\");\r\nexports.FriendResolver = {\r\n    Query: {\r\n        friends: function (_, __, _a) {\r\n            var currentUser = _a.currentUser;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                return __generator(this, function (_b) {\r\n                    switch (_b.label) {\r\n                        case 0: return [4 /*yield*/, _models_1.Friend.find({\r\n                                user: currentUser._id,\r\n                            }).populate([\r\n                                {\r\n                                    path: \"user\",\r\n                                },\r\n                                {\r\n                                    path: \"friend\",\r\n                                },\r\n                            ])];\r\n                        case 1: return [2 /*return*/, _b.sent()];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://express-backend/./src/resolvers/friend.resolver.ts?");

/***/ }),

/***/ "./src/resolvers/index.ts":
/*!********************************!*\
  !*** ./src/resolvers/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.resolvers = void 0;\r\nvar merge_1 = __webpack_require__(/*! @graphql-tools/merge */ \"@graphql-tools/merge\");\r\nvar friend_resolver_1 = __webpack_require__(/*! ./friend.resolver */ \"./src/resolvers/friend.resolver.ts\");\r\nvar message_resolver_1 = __webpack_require__(/*! ./message.resolver */ \"./src/resolvers/message.resolver.ts\");\r\nvar user_resolver_1 = __webpack_require__(/*! ./user.resolver */ \"./src/resolvers/user.resolver.ts\");\r\nvar typesArray = [user_resolver_1.UserResolver, message_resolver_1.MessageResolver, friend_resolver_1.FriendResolver];\r\nexports.resolvers = merge_1.mergeResolvers(typesArray);\r\n\n\n//# sourceURL=webpack://express-backend/./src/resolvers/index.ts?");

/***/ }),

/***/ "./src/resolvers/message.resolver.ts":
/*!*******************************************!*\
  !*** ./src/resolvers/message.resolver.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.MessageResolver = void 0;\r\nvar _configs_1 = __webpack_require__(/*! @configs */ \"./src/configs/index.ts\");\r\nvar _models_1 = __webpack_require__(/*! @models */ \"./src/models/index.ts\");\r\nvar _validations_1 = __webpack_require__(/*! @validations */ \"./src/validations/index.ts\");\r\nvar apollo_server_express_1 = __webpack_require__(/*! apollo-server-express */ \"apollo-server-express\");\r\nexports.MessageResolver = {\r\n    Query: {\r\n        messages: function (_, _a, _b) {\r\n            var input = _a.input;\r\n            var currentUser = _b.currentUser;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                var receiver;\r\n                return __generator(this, function (_c) {\r\n                    switch (_c.label) {\r\n                        case 0: return [4 /*yield*/, _validations_1.MessagesValidation.validate(input)];\r\n                        case 1:\r\n                            _c.sent();\r\n                            receiver = input.receiver;\r\n                            return [4 /*yield*/, _models_1.Message.find({\r\n                                    $or: [\r\n                                        {\r\n                                            sender: currentUser._id,\r\n                                            receiver: receiver,\r\n                                        },\r\n                                        {\r\n                                            receiver: currentUser._id,\r\n                                            sender: receiver,\r\n                                        },\r\n                                    ],\r\n                                })];\r\n                        case 2: return [2 /*return*/, _c.sent()];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n    },\r\n    Mutation: {\r\n        sendMessage: function (_, _a, _b) {\r\n            var input = _a.input;\r\n            var currentUser = _b.currentUser;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                var receiver, message, existedUser, senderFriend, newSenderFriend, receiverFriend, newReceiverFriend, newMessage;\r\n                return __generator(this, function (_c) {\r\n                    switch (_c.label) {\r\n                        case 0: return [4 /*yield*/, _validations_1.SendMessageValidation.validate(input)];\r\n                        case 1:\r\n                            _c.sent();\r\n                            receiver = input.receiver, message = input.message;\r\n                            return [4 /*yield*/, _models_1.User.findOne({ _id: receiver })];\r\n                        case 2:\r\n                            existedUser = _c.sent();\r\n                            if (!existedUser) {\r\n                                throw new apollo_server_express_1.ApolloError(\"Receiver not found!\");\r\n                            }\r\n                            return [4 /*yield*/, _models_1.Friend.findOne({\r\n                                    user: currentUser._id,\r\n                                    friend: receiver,\r\n                                })];\r\n                        case 3:\r\n                            senderFriend = _c.sent();\r\n                            if (!!senderFriend) return [3 /*break*/, 5];\r\n                            newSenderFriend = new _models_1.Friend({\r\n                                user: currentUser._id,\r\n                                friend: receiver,\r\n                            });\r\n                            console.log(\"run here\", newSenderFriend, currentUser._id, receiver);\r\n                            return [4 /*yield*/, newSenderFriend.save()];\r\n                        case 4:\r\n                            _c.sent();\r\n                            _c.label = 5;\r\n                        case 5: \r\n                        //update last message for sender\r\n                        return [4 /*yield*/, _models_1.Friend.updateOne({\r\n                                user: currentUser._id,\r\n                                friend: receiver,\r\n                            }, {\r\n                                $set: {\r\n                                    lastMessage: message,\r\n                                },\r\n                            })];\r\n                        case 6:\r\n                            //update last message for sender\r\n                            _c.sent();\r\n                            return [4 /*yield*/, _models_1.Friend.findOne({\r\n                                    user: receiver,\r\n                                    friend: currentUser._id,\r\n                                })];\r\n                        case 7:\r\n                            receiverFriend = _c.sent();\r\n                            if (!!receiverFriend) return [3 /*break*/, 9];\r\n                            newReceiverFriend = new _models_1.Friend({\r\n                                user: receiver,\r\n                                friend: currentUser._id,\r\n                            });\r\n                            return [4 /*yield*/, newReceiverFriend.save()];\r\n                        case 8:\r\n                            _c.sent();\r\n                            _c.label = 9;\r\n                        case 9: \r\n                        //update last message for reciver\r\n                        return [4 /*yield*/, _models_1.Friend.updateOne({\r\n                                user: receiver,\r\n                                friend: currentUser._id,\r\n                            }, {\r\n                                $set: {\r\n                                    lastMessage: message,\r\n                                },\r\n                            })];\r\n                        case 10:\r\n                            //update last message for reciver\r\n                            _c.sent();\r\n                            newMessage = new _models_1.Message({\r\n                                sender: currentUser._id,\r\n                                receiver: receiver,\r\n                                message: message,\r\n                            });\r\n                            return [4 /*yield*/, newMessage.save()];\r\n                        case 11:\r\n                            _c.sent();\r\n                            _configs_1.pubSub.publish(\"messageSent\", { messageSent: newMessage });\r\n                            return [2 /*return*/, newMessage];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n    },\r\n    Subscription: {\r\n        messageSent: {\r\n            subscribe: apollo_server_express_1.withFilter(function () {\r\n                return _configs_1.pubSub.asyncIterator(\"messageSent\");\r\n            }, function (_a, _, _b) {\r\n                var messageSent = _a.messageSent;\r\n                var currentUser = _b.currentUser;\r\n                return messageSent.receiver === currentUser._id;\r\n            }),\r\n            resolve: function (_a) {\r\n                var messageSent = _a.messageSent;\r\n                return messageSent;\r\n            },\r\n        },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://express-backend/./src/resolvers/message.resolver.ts?");

/***/ }),

/***/ "./src/resolvers/user.resolver.ts":
/*!****************************************!*\
  !*** ./src/resolvers/user.resolver.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.UserResolver = void 0;\r\nvar _models_1 = __webpack_require__(/*! @models */ \"./src/models/index.ts\");\r\nvar _utils_1 = __webpack_require__(/*! @utils */ \"./src/utils/index.ts\");\r\nvar _validations_1 = __webpack_require__(/*! @validations */ \"./src/validations/index.ts\");\r\nvar apollo_server_errors_1 = __webpack_require__(/*! apollo-server-errors */ \"apollo-server-errors\");\r\nexports.UserResolver = {\r\n    Query: {\r\n        me: function (_, __, _a) {\r\n            var currentUser = _a.currentUser;\r\n            return ({ currentUser: currentUser });\r\n        },\r\n    },\r\n    Mutation: {\r\n        register: function (_, _a) {\r\n            var input = _a.input;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                var username, password, fullName, existedUser, user, _b;\r\n                var _c;\r\n                return __generator(this, function (_d) {\r\n                    switch (_d.label) {\r\n                        case 0: return [4 /*yield*/, _validations_1.UserRegisterValidation.validate(input)];\r\n                        case 1:\r\n                            _d.sent();\r\n                            username = input.username, password = input.password, fullName = input.fullName;\r\n                            return [4 /*yield*/, _models_1.User.findOne({ username: username })];\r\n                        case 2:\r\n                            existedUser = _d.sent();\r\n                            if (existedUser) {\r\n                                throw new apollo_server_errors_1.ApolloError(\"Username is already existed!\");\r\n                            }\r\n                            _b = _models_1.User.bind;\r\n                            _c = {\r\n                                username: username\r\n                            };\r\n                            return [4 /*yield*/, _utils_1.hashPassword(password)];\r\n                        case 3:\r\n                            user = new (_b.apply(_models_1.User, [void 0, (_c.password = _d.sent(),\r\n                                    _c.fullName = fullName,\r\n                                    _c)]))();\r\n                            return [4 /*yield*/, user.save()];\r\n                        case 4:\r\n                            _d.sent();\r\n                            return [2 /*return*/, user];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n        login: function (_, _a) {\r\n            var input = _a.input;\r\n            return __awaiter(void 0, void 0, void 0, function () {\r\n                var username, password, user, checkPass;\r\n                return __generator(this, function (_b) {\r\n                    switch (_b.label) {\r\n                        case 0: return [4 /*yield*/, _validations_1.UserLoginValidation.validate(input)];\r\n                        case 1:\r\n                            _b.sent();\r\n                            username = input.username, password = input.password;\r\n                            return [4 /*yield*/, _models_1.User.findOne({ username: username })];\r\n                        case 2:\r\n                            user = _b.sent();\r\n                            if (!user) {\r\n                                throw new apollo_server_errors_1.ApolloError(\"User is not found!\");\r\n                            }\r\n                            return [4 /*yield*/, _utils_1.comparePassword(password, user.password)];\r\n                        case 3:\r\n                            checkPass = _b.sent();\r\n                            if (!checkPass) {\r\n                                throw new apollo_server_errors_1.ApolloError(\"Incorrect password!\");\r\n                            }\r\n                            return [2 /*return*/, {\r\n                                    accessToken: _utils_1.generateToken(user),\r\n                                }];\r\n                    }\r\n                });\r\n            });\r\n        },\r\n    },\r\n};\r\n\n\n//# sourceURL=webpack://express-backend/./src/resolvers/user.resolver.ts?");

/***/ }),

/***/ "./src/typeDefs/index.ts":
/*!*******************************!*\
  !*** ./src/typeDefs/index.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.typeDefs = void 0;\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar merge_1 = __webpack_require__(/*! @graphql-tools/merge */ \"@graphql-tools/merge\");\r\nvar load_files_1 = __webpack_require__(/*! @graphql-tools/load-files */ \"@graphql-tools/load-files\");\r\nvar typesArray = load_files_1.loadFilesSync(path.join(__dirname, \"../src/typeDefs\"), {\r\n    extensions: [\"graphql\"],\r\n});\r\nexports.typeDefs = merge_1.mergeTypeDefs(typesArray);\r\n\n\n//# sourceURL=webpack://express-backend/./src/typeDefs/index.ts?");

/***/ }),

/***/ "./src/utils/auth/index.ts":
/*!*********************************!*\
  !*** ./src/utils/auth/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.verifyToken = exports.generateToken = void 0;\r\nvar apollo_server_errors_1 = __webpack_require__(/*! apollo-server-errors */ \"apollo-server-errors\");\r\nvar _environments_1 = __webpack_require__(/*! @environments */ \"./src/environments/index.ts\");\r\nvar jsonwebtoken_1 = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\r\nvar _models_1 = __webpack_require__(/*! @models */ \"./src/models/index.ts\");\r\nvar generateToken = function (user) {\r\n    return jsonwebtoken_1.sign({\r\n        userId: user._id,\r\n    }, _environments_1.ACCESS_TOKEN_SECRET, {\r\n        expiresIn: \"7d\",\r\n    });\r\n};\r\nexports.generateToken = generateToken;\r\nvar verifyToken = function (token) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var currentUser;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0: return [4 /*yield*/, jsonwebtoken_1.verify(token, _environments_1.ACCESS_TOKEN_SECRET, function (err, data) { return __awaiter(void 0, void 0, void 0, function () {\r\n                    return __generator(this, function (_a) {\r\n                        switch (_a.label) {\r\n                            case 0:\r\n                                if (err) {\r\n                                    throw new apollo_server_errors_1.AuthenticationError(\"Invalid token!\");\r\n                                }\r\n                                return [4 /*yield*/, _models_1.User.findOne({ _id: data.userId })];\r\n                            case 1:\r\n                                currentUser = _a.sent();\r\n                                if (!currentUser) {\r\n                                    throw new apollo_server_errors_1.AuthenticationError(\"Invalid token!\");\r\n                                }\r\n                                return [2 /*return*/];\r\n                        }\r\n                    });\r\n                }); })];\r\n            case 1:\r\n                _a.sent();\r\n                return [2 /*return*/, currentUser];\r\n        }\r\n    });\r\n}); };\r\nexports.verifyToken = verifyToken;\r\n\n\n//# sourceURL=webpack://express-backend/./src/utils/auth/index.ts?");

/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\n__exportStar(__webpack_require__(/*! ./auth */ \"./src/utils/auth/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./password */ \"./src/utils/password/index.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./uuid */ \"./src/utils/uuid/index.ts\"), exports);\r\n\n\n//# sourceURL=webpack://express-backend/./src/utils/index.ts?");

/***/ }),

/***/ "./src/utils/password/index.ts":
/*!*************************************!*\
  !*** ./src/utils/password/index.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nexports.__esModule = true;\r\nexports.comparePassword = exports.hashPassword = void 0;\r\nvar bcrypt_1 = __webpack_require__(/*! bcrypt */ \"bcrypt\");\r\nvar _environments_1 = __webpack_require__(/*! @environments */ \"./src/environments/index.ts\");\r\nvar hashPassword = function (password) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    switch (_a.label) {\r\n        case 0: return [4 /*yield*/, bcrypt_1.hash(password, _environments_1.SALT)];\r\n        case 1: return [2 /*return*/, _a.sent()];\r\n    }\r\n}); }); };\r\nexports.hashPassword = hashPassword;\r\nvar comparePassword = function (password, hash) { return __awaiter(void 0, void 0, void 0, function () { return __generator(this, function (_a) {\r\n    switch (_a.label) {\r\n        case 0: return [4 /*yield*/, bcrypt_1.compare(password, hash)];\r\n        case 1: return [2 /*return*/, _a.sent()];\r\n    }\r\n}); }); };\r\nexports.comparePassword = comparePassword;\r\n\n\n//# sourceURL=webpack://express-backend/./src/utils/password/index.ts?");

/***/ }),

/***/ "./src/utils/uuid/index.ts":
/*!*********************************!*\
  !*** ./src/utils/uuid/index.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.generateUUID = void 0;\r\nvar uuid = __webpack_require__(/*! short-uuid */ \"short-uuid\");\r\nvar generateUUID = function () { return uuid.generate(); };\r\nexports.generateUUID = generateUUID;\r\n\n\n//# sourceURL=webpack://express-backend/./src/utils/uuid/index.ts?");

/***/ }),

/***/ "./src/validations/index.ts":
/*!**********************************!*\
  !*** ./src/validations/index.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\r\nvar __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });\r\n}) : (function(o, m, k, k2) {\r\n    if (k2 === undefined) k2 = k;\r\n    o[k2] = m[k];\r\n}));\r\nvar __exportStar = (this && this.__exportStar) || function(m, exports) {\r\n    for (var p in m) if (p !== \"default\" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);\r\n};\r\nexports.__esModule = true;\r\n__exportStar(__webpack_require__(/*! ./user.validation */ \"./src/validations/user.validation.ts\"), exports);\r\n__exportStar(__webpack_require__(/*! ./message.validation */ \"./src/validations/message.validation.ts\"), exports);\r\n\n\n//# sourceURL=webpack://express-backend/./src/validations/index.ts?");

/***/ }),

/***/ "./src/validations/message.validation.ts":
/*!***********************************************!*\
  !*** ./src/validations/message.validation.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.SendMessageValidation = exports.MessagesValidation = void 0;\r\nvar yup = __webpack_require__(/*! yup */ \"yup\");\r\nvar receiver = yup.string().required(\"Receiver is required!\");\r\nvar message = yup.string().required(\"Message is required!\");\r\nexports.MessagesValidation = yup.object().shape({\r\n    receiver: receiver,\r\n});\r\nexports.SendMessageValidation = yup.object().shape({\r\n    receiver: receiver,\r\n    message: message,\r\n});\r\n\n\n//# sourceURL=webpack://express-backend/./src/validations/message.validation.ts?");

/***/ }),

/***/ "./src/validations/user.validation.ts":
/*!********************************************!*\
  !*** ./src/validations/user.validation.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\r\nexports.__esModule = true;\r\nexports.UserLoginValidation = exports.UserRegisterValidation = void 0;\r\nvar yup = __webpack_require__(/*! yup */ \"yup\");\r\nvar username = yup\r\n    .string()\r\n    .required(\"Username is required!\")\r\n    .min(6, \"Min length is 6!\");\r\nvar password = yup\r\n    .string()\r\n    .required(\"Password is required!\")\r\n    .min(6, \"Min length is 6!\");\r\nvar fullName = yup\r\n    .string()\r\n    .required(\"Fullname is required!\")\r\n    .min(6, \"Min length is 6!\");\r\nexports.UserRegisterValidation = yup.object().shape({\r\n    username: username,\r\n    password: password,\r\n    fullName: fullName,\r\n});\r\nexports.UserLoginValidation = yup.object().shape({\r\n    username: username,\r\n    password: password,\r\n});\r\n\n\n//# sourceURL=webpack://express-backend/./src/validations/user.validation.ts?");

/***/ }),

/***/ "@graphql-tools/load-files":
/*!********************************************!*\
  !*** external "@graphql-tools/load-files" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/load-files");;

/***/ }),

/***/ "@graphql-tools/merge":
/*!***************************************!*\
  !*** external "@graphql-tools/merge" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@graphql-tools/merge");;

/***/ }),

/***/ "apollo-server-errors":
/*!***************************************!*\
  !*** external "apollo-server-errors" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("apollo-server-errors");;

/***/ }),

/***/ "apollo-server-express":
/*!****************************************!*\
  !*** external "apollo-server-express" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("apollo-server-express");;

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");;

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "graphql-subscriptions":
/*!****************************************!*\
  !*** external "graphql-subscriptions" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("graphql-subscriptions");;

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");;

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("jsonwebtoken");;

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ }),

/***/ "short-uuid":
/*!*****************************!*\
  !*** external "short-uuid" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("short-uuid");;

/***/ }),

/***/ "yup":
/*!**********************!*\
  !*** external "yup" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("yup");;

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
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("e693f209b023b10b0e37")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: currentChildModule !== moduleId,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 					else hot._acceptedDependencies[dep] = callback || function () {};
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				registeredStatusHandlers[i].call(null, newStatus);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			setStatus("check");
/******/ 			return __webpack_require__.hmrM().then(function (update) {
/******/ 				if (!update) {
/******/ 					setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					return null;
/******/ 				}
/******/ 		
/******/ 				setStatus("prepare");
/******/ 		
/******/ 				var updatedModules = [];
/******/ 				blockingPromises = [];
/******/ 				currentUpdateApplyHandlers = [];
/******/ 		
/******/ 				return Promise.all(
/******/ 					Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 						promises,
/******/ 						key
/******/ 					) {
/******/ 						__webpack_require__.hmrC[key](
/******/ 							update.c,
/******/ 							update.r,
/******/ 							update.m,
/******/ 							promises,
/******/ 							currentUpdateApplyHandlers,
/******/ 							updatedModules
/******/ 						);
/******/ 						return promises;
/******/ 					},
/******/ 					[])
/******/ 				).then(function () {
/******/ 					return waitForBlockingPromises(function () {
/******/ 						if (applyOnUpdate) {
/******/ 							return internalApply(applyOnUpdate);
/******/ 						} else {
/******/ 							setStatus("ready");
/******/ 		
/******/ 							return updatedModules;
/******/ 						}
/******/ 					});
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				setStatus("abort");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			// handle errors in accept handlers and self accepted module load
/******/ 			if (error) {
/******/ 				setStatus("fail");
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw error;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			if (queuedInvalidatedModules) {
/******/ 				return internalApply(options).then(function (list) {
/******/ 					outdatedModules.forEach(function (moduleId) {
/******/ 						if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 					});
/******/ 					return list;
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			setStatus("idle");
/******/ 			return Promise.resolve(outdatedModules);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/require chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "loaded", otherwise not loaded yet
/******/ 		var installedChunks = {
/******/ 			"main": 1
/******/ 		};
/******/ 		
/******/ 		// no chunk install function needed
/******/ 		
/******/ 		// no chunk loading
/******/ 		
/******/ 		// no external install chunk
/******/ 		
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			var update = require("./" + __webpack_require__.hu(chunkId));
/******/ 			var updatedModules = update.modules;
/******/ 			var runtime = update.runtime;
/******/ 			for(var moduleId in updatedModules) {
/******/ 				if(__webpack_require__.o(updatedModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = updatedModules[moduleId];
/******/ 					if(updatedModulesList) updatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 		}
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.requireHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				if (
/******/ 					__webpack_require__.c[outdatedModuleId] &&
/******/ 					__webpack_require__.c[outdatedModuleId].hot._selfAccepted &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!__webpack_require__.c[outdatedModuleId].hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: __webpack_require__.c[outdatedModuleId].hot._requireSelf,
/******/ 						errorHandler: __webpack_require__.c[outdatedModuleId].hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "accept-errored",
/******/ 												moduleId: outdatedModuleId,
/******/ 												dependencyId: dependenciesForCallbacks[k],
/******/ 												error: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err);
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 									}
/******/ 									reportError(err);
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.require = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.require = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.requireHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			return Promise.resolve().then(function() {
/******/ 				return require("./" + __webpack_require__.hmrF());
/******/ 			}).catch(function(err) { if(err.code !== "MODULE_NOT_FOUND") throw err; });
/******/ 		}
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;