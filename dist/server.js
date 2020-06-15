/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/server.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/server/db/chirps.ts":
/*!*********************************!*\
  !*** ./src/server/db/chirps.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\r\nvar all = function () { return index_1.Query('SELECT chirps.*, users.name FROM chirps JOIN users ON users.id = chirps.userid ORDER BY chirps.id;'); };\r\nvar one = function (id) { return index_1.Query('SELECT chirps.*, users.name FROM chirps JOIN users ON users.id = chirps.userid WHERE chirps.id = ?', [id]); };\r\nvar insert = function (userid, content) { return index_1.Query('INSERT INTO chirps (userid, content) VALUE (?,?)', [userid, content]); };\r\nvar update = function (content, id) { return index_1.Query('update chirps set content = ? where id=?;', [content, id]); };\r\nvar destroy = function (id) { return index_1.Query('delete from chirps where id=?', [id]); };\r\nexports.default = {\r\n    all: all,\r\n    one: one,\r\n    insert: insert,\r\n    update: update,\r\n    destroy: destroy\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/chirps.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.Query = void 0;\r\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\r\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/db/chirps.ts\");\r\n// export const Connection = mysql.createConnection({\r\n// })\r\nvar pool = mysql.createPool({\r\n    user: 'chirper',\r\n    password: 'chirper',\r\n    host: 'localhost',\r\n    database: 'chirpr'\r\n});\r\n// pool.query('select * from chirps', (err, results) => {\r\n//     if (err) {\r\n//         console.log(err)\r\n//     } else {\r\n//         console.log(results)\r\n//     }\r\n// })\r\nexports.Query = function (query, values) {\r\n    return new Promise(function (resolve, reject) {\r\n        pool.query(query, values, function (err, results) {\r\n            if (err)\r\n                return reject(err);\r\n            return resolve(results);\r\n        });\r\n    });\r\n};\r\nexports.default = {\r\n    Chirps: chirps_1.default\r\n};\r\n\n\n//# sourceURL=webpack:///./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/routes/chirps.ts":
/*!*************************************!*\
  !*** ./src/server/routes/chirps.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\r\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\r\n    return new (P || (P = Promise))(function (resolve, reject) {\r\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\r\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\r\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\r\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\r\n    });\r\n};\r\nvar __generator = (this && this.__generator) || function (thisArg, body) {\r\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\r\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\r\n    function verb(n) { return function (v) { return step([n, v]); }; }\r\n    function step(op) {\r\n        if (f) throw new TypeError(\"Generator is already executing.\");\r\n        while (_) try {\r\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\r\n            if (y = 0, t) op = [op[0] & 2, t.value];\r\n            switch (op[0]) {\r\n                case 0: case 1: t = op; break;\r\n                case 4: _.label++; return { value: op[1], done: false };\r\n                case 5: _.label++; y = op[1]; op = [0]; continue;\r\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\r\n                default:\r\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\r\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\r\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\r\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\r\n                    if (t[2]) _.ops.pop();\r\n                    _.trys.pop(); continue;\r\n            }\r\n            op = body.call(thisArg, _);\r\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\r\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\r\n    }\r\n};\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\r\nvar router = express.Router();\r\nrouter.get('/:id', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var id, chirp, error_1;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                id = Number(req.params.id);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Chirps.one(id)];\r\n            case 2:\r\n                chirp = (_a.sent())[0];\r\n                res.json(chirp);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_1 = _a.sent();\r\n                console.log(error_1);\r\n                res.status(500).json({ msg: 'server error', error: error_1 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.get('/', function (req, res, next) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var chirps, error_2;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                _a.trys.push([0, 2, , 3]);\r\n                return [4 /*yield*/, db_1.default.Chirps.all()];\r\n            case 1:\r\n                chirps = _a.sent();\r\n                res.json(chirps);\r\n                return [3 /*break*/, 3];\r\n            case 2:\r\n                error_2 = _a.sent();\r\n                console.log(error_2);\r\n                res.status(500).json({ msg: 'server error', error: error_2 });\r\n                return [3 /*break*/, 3];\r\n            case 3: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.post('/', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var chirp, results, error_3;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                chirp = req.body;\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Chirps.insert(chirp.userid, chirp.content)];\r\n            case 2:\r\n                results = _a.sent();\r\n                res.status(201).json(results);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_3 = _a.sent();\r\n                console.log(error_3);\r\n                res.status(500).json({ msg: 'server error', error: error_3 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.put('/:chirpid', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var chirp, chirpid, results, error_4;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                chirp = req.body;\r\n                chirpid = Number(req.params.chirpid);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Chirps.update(chirp.content, chirpid)];\r\n            case 2:\r\n                results = _a.sent();\r\n                res.json(results);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_4 = _a.sent();\r\n                console.log(error_4);\r\n                res.status(500).json({ msg: 'server error', error: error_4 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nrouter.delete('/:chirpid', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\r\n    var chirpid, results, error_5;\r\n    return __generator(this, function (_a) {\r\n        switch (_a.label) {\r\n            case 0:\r\n                chirpid = Number(req.params.chirpid);\r\n                _a.label = 1;\r\n            case 1:\r\n                _a.trys.push([1, 3, , 4]);\r\n                return [4 /*yield*/, db_1.default.Chirps.destroy(chirpid)];\r\n            case 2:\r\n                results = _a.sent();\r\n                res.json(results);\r\n                return [3 /*break*/, 4];\r\n            case 3:\r\n                error_5 = _a.sent();\r\n                console.log(error_5);\r\n                res.status(500).json({ msg: 'server error', error: error_5 });\r\n                return [3 /*break*/, 4];\r\n            case 4: return [2 /*return*/];\r\n        }\r\n    });\r\n}); });\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/chirps.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar chirps_1 = __webpack_require__(/*! ./chirps */ \"./src/server/routes/chirps.ts\");\r\nvar router = express.Router();\r\nrouter.use('/chirps', chirps_1.default);\r\nexports.default = router;\r\n\n\n//# sourceURL=webpack:///./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar express = __webpack_require__(/*! express */ \"express\");\r\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\r\nvar path = __webpack_require__(/*! path */ \"path\");\r\nvar app = express();\r\napp.use(express.static('public'));\r\napp.use(express.json());\r\napp.use('/api', routes_1.default);\r\napp.use('*', function (req, res) {\r\n    res.sendFile(path.join(__dirname, '../public/index.html'));\r\n});\r\nvar port = process.env.PORT || 3000;\r\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\r\n\n\n//# sourceURL=webpack:///./src/server/server.ts?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mysql\");\n\n//# sourceURL=webpack:///external_%22mysql%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ })

/******/ });