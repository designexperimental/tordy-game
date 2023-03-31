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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/canvas.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/asyncToGenerator.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(/*! ./toPropertyKey.js */ "./node_modules/@babel/runtime/helpers/toPropertyKey.js");
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _regeneratorRuntime() {
  "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
    Op = Object.prototype,
    hasOwn = Op.hasOwnProperty,
    defineProperty = Object.defineProperty || function (obj, key, desc) {
      obj[key] = desc.value;
    },
    $Symbol = "function" == typeof Symbol ? Symbol : {},
    iteratorSymbol = $Symbol.iterator || "@@iterator",
    asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
    toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
      generator = Object.create(protoGenerator.prototype),
      context = new Context(tryLocsList || []);
    return defineProperty(generator, "_invoke", {
      value: makeInvokeMethod(innerFn, self, context)
    }), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
    NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
          value = result.value;
        return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    defineProperty(this, "_invoke", {
      value: function value(method, arg) {
        function callInvokeWithMethodAndArg() {
          return new PromiseImpl(function (resolve, reject) {
            invoke(method, arg, resolve, reject);
          });
        }
        return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
      }
    });
  }
  function makeInvokeMethod(innerFn, self, context) {
    var state = "suspendedStart";
    return function (method, arg) {
      if ("executing" === state) throw new Error("Generator is already running");
      if ("completed" === state) {
        if ("throw" === method) throw arg;
        return doneResult();
      }
      for (context.method = method, context.arg = arg;;) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
          if ("suspendedStart" === state) throw state = "completed", context.arg;
          context.dispatchException(context.arg);
        } else "return" === context.method && context.abrupt("return", context.arg);
        state = "executing";
        var record = tryCatch(innerFn, self, context);
        if ("normal" === record.type) {
          if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
          return {
            value: record.arg,
            done: context.done
          };
        }
        "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var methodName = context.method,
      method = delegate.iterator[methodName];
    if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel;
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
          next = function next() {
            for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
            return next.value = undefined, next.done = !0, next;
          };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", {
    value: GeneratorFunctionPrototype,
    configurable: !0
  }), defineProperty(GeneratorFunctionPrototype, "constructor", {
    value: GeneratorFunction,
    configurable: !0
  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (val) {
    var object = Object(val),
      keys = [];
    for (var key in object) keys.push(key);
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
          record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
            hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPrimitive.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPrimitive.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];
  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (hint === "string" ? String : Number)(input);
}
module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toPropertyKey.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toPropertyKey.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ./typeof.js */ "./node_modules/@babel/runtime/helpers/typeof.js")["default"];
var toPrimitive = __webpack_require__(/*! ./toPrimitive.js */ "./node_modules/@babel/runtime/helpers/toPrimitive.js");
function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}
module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// TODO(Babel 8): Remove this file.

var runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js")();
module.exports = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./src/img/background.png":
/*!********************************!*\
  !*** ./src/img/background.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "072d51bcc9c09311d4c2a6708b05bddc.png");

/***/ }),

/***/ "./src/img/block.png":
/*!***************************!*\
  !*** ./src/img/block.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fac88169424b827f4bbca82bd7a01a9f.png");

/***/ }),

/***/ "./src/img/blockTri.png":
/*!******************************!*\
  !*** ./src/img/blockTri.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0f732b622c2a2a256940ec159c5a7941.png");

/***/ }),

/***/ "./src/img/hills.png":
/*!***************************!*\
  !*** ./src/img/hills.png ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "cfffe4c371f5e11d372b398a87c51dd0.png");

/***/ }),

/***/ "./src/img/lgPlatform.png":
/*!********************************!*\
  !*** ./src/img/lgPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "08b228664ecabddb2b575dd45bde1899.png");

/***/ }),

/***/ "./src/img/mdPlatform.png":
/*!********************************!*\
  !*** ./src/img/mdPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "14408ab95621e4d0e636104c0d045106.png");

/***/ }),

/***/ "./src/img/platform.png":
/*!******************************!*\
  !*** ./src/img/platform.png ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffab39d3487de561be1a081fcfb3806d.png");

/***/ }),

/***/ "./src/img/platformSmallTall.png":
/*!***************************************!*\
  !*** ./src/img/platformSmallTall.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0587f9be8e442eb74b2fe283bbf1a947.png");

/***/ }),

/***/ "./src/img/spriteEnemy.png":
/*!*********************************!*\
  !*** ./src/img/spriteEnemy.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "a1de12fbeda5f4cadc1c0cec27c01014.png");

/***/ }),

/***/ "./src/img/spriteFireFlower.png":
/*!**************************************!*\
  !*** ./src/img/spriteFireFlower.png ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "434554c25d0262d9ae16c700febfa462.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerJumpLeft.png":
/*!**********************************************!*\
  !*** ./src/img/spriteFireFlowerJumpLeft.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "fe7f83abbc33795c55d5bbab3ab117f3.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerJumpRight.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerJumpRight.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b5b7bdebff9886acfe07b077e9357d84.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerRunLeft.png":
/*!*********************************************!*\
  !*** ./src/img/spriteFireFlowerRunLeft.png ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "dac857eaeda937793a54db5301b14e46.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerRunRight.png":
/*!**********************************************!*\
  !*** ./src/img/spriteFireFlowerRunRight.png ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "c957f14ac99dfa4f90a424a042a43e7b.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerShootLeft.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerShootLeft.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "968edc488cf0846c4e3ee0c70a603576.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerShootRight.png":
/*!************************************************!*\
  !*** ./src/img/spriteFireFlowerShootRight.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "b800c0a402dc6ef4a09a8a2cabf21b0c.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerStandLeft.png":
/*!***********************************************!*\
  !*** ./src/img/spriteFireFlowerStandLeft.png ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "078c954a7e3c7b68639b3a5fbe448e8e.png");

/***/ }),

/***/ "./src/img/spriteFireFlowerStandRight.png":
/*!************************************************!*\
  !*** ./src/img/spriteFireFlowerStandRight.png ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "9c8c09ed0463034dc3480fc1eb36234b.png");

/***/ }),

/***/ "./src/img/spriteMarioJumpLeft.png":
/*!*****************************************!*\
  !*** ./src/img/spriteMarioJumpLeft.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "79a87181aec94b5e1d21942963ebe634.png");

/***/ }),

/***/ "./src/img/spriteMarioJumpRight.png":
/*!******************************************!*\
  !*** ./src/img/spriteMarioJumpRight.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "ffdd5958ac8fc0192de1a8855d128203.png");

/***/ }),

/***/ "./src/img/spriteMarioRunLeft.png":
/*!****************************************!*\
  !*** ./src/img/spriteMarioRunLeft.png ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "bd67564ba49a9b4944f1ac5c812adc9d.png");

/***/ }),

/***/ "./src/img/spriteMarioRunRight.png":
/*!*****************************************!*\
  !*** ./src/img/spriteMarioRunRight.png ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "0a0b6df309febe5e8b6c74c066c6a08e.png");

/***/ }),

/***/ "./src/img/spriteMarioStandLeft.png":
/*!******************************************!*\
  !*** ./src/img/spriteMarioStandLeft.png ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5278df33f538bbd50783473847521409.png");

/***/ }),

/***/ "./src/img/spriteMarioStandRight.png":
/*!*******************************************!*\
  !*** ./src/img/spriteMarioStandRight.png ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "5a31f024f6d43f2604bafd029981127f.png");

/***/ }),

/***/ "./src/img/tPlatform.png":
/*!*******************************!*\
  !*** ./src/img/tPlatform.png ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "d119235cfb5fe1e6bcc3010e83e9968e.png");

/***/ }),

/***/ "./src/img/xtPlatform.png":
/*!********************************!*\
  !*** ./src/img/xtPlatform.png ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "1e48f47873af05232d20d003b68fdecd.png");

/***/ }),

/***/ "./src/js/canvas.js":
/*!**************************!*\
  !*** ./src/js/canvas.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils.js */ "./src/js/utils.js");
/* harmony import */ var _img_background_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../img/background.png */ "./src/img/background.png");
/* harmony import */ var _img_hills_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../img/hills.png */ "./src/img/hills.png");
/* harmony import */ var _img_platform_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../img/platform.png */ "./src/img/platform.png");
/* harmony import */ var _img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../img/platformSmallTall.png */ "./src/img/platformSmallTall.png");
/* harmony import */ var _img_block_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../img/block.png */ "./src/img/block.png");
/* harmony import */ var _img_blockTri_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../img/blockTri.png */ "./src/img/blockTri.png");
/* harmony import */ var _img_mdPlatform_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../img/mdPlatform.png */ "./src/img/mdPlatform.png");
/* harmony import */ var _img_lgPlatform_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../img/lgPlatform.png */ "./src/img/lgPlatform.png");
/* harmony import */ var _img_tPlatform_png__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../img/tPlatform.png */ "./src/img/tPlatform.png");
/* harmony import */ var _img_xtPlatform_png__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../img/xtPlatform.png */ "./src/img/xtPlatform.png");
/* harmony import */ var _img_spriteMarioRunLeft_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../img/spriteMarioRunLeft.png */ "./src/img/spriteMarioRunLeft.png");
/* harmony import */ var _img_spriteMarioRunRight_png__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../img/spriteMarioRunRight.png */ "./src/img/spriteMarioRunRight.png");
/* harmony import */ var _img_spriteMarioStandLeft_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../img/spriteMarioStandLeft.png */ "./src/img/spriteMarioStandLeft.png");
/* harmony import */ var _img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../img/spriteMarioStandRight.png */ "./src/img/spriteMarioStandRight.png");
/* harmony import */ var _img_spriteMarioJumpLeft_png__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../img/spriteMarioJumpLeft.png */ "./src/img/spriteMarioJumpLeft.png");
/* harmony import */ var _img_spriteMarioJumpRight_png__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../img/spriteMarioJumpRight.png */ "./src/img/spriteMarioJumpRight.png");
/* harmony import */ var _img_spriteFireFlowerRunLeft_png__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../img/spriteFireFlowerRunLeft.png */ "./src/img/spriteFireFlowerRunLeft.png");
/* harmony import */ var _img_spriteFireFlowerRunRight_png__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../img/spriteFireFlowerRunRight.png */ "./src/img/spriteFireFlowerRunRight.png");
/* harmony import */ var _img_spriteFireFlowerStandLeft_png__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../img/spriteFireFlowerStandLeft.png */ "./src/img/spriteFireFlowerStandLeft.png");
/* harmony import */ var _img_spriteFireFlowerStandRight_png__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../img/spriteFireFlowerStandRight.png */ "./src/img/spriteFireFlowerStandRight.png");
/* harmony import */ var _img_spriteFireFlowerJumpLeft_png__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../img/spriteFireFlowerJumpLeft.png */ "./src/img/spriteFireFlowerJumpLeft.png");
/* harmony import */ var _img_spriteFireFlowerJumpRight_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../img/spriteFireFlowerJumpRight.png */ "./src/img/spriteFireFlowerJumpRight.png");
/* harmony import */ var _img_spriteFireFlowerShootLeft_png__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../img/spriteFireFlowerShootLeft.png */ "./src/img/spriteFireFlowerShootLeft.png");
/* harmony import */ var _img_spriteFireFlowerShootRight_png__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../img/spriteFireFlowerShootRight.png */ "./src/img/spriteFireFlowerShootRight.png");
/* harmony import */ var _img_spriteFireFlower_png__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../img/spriteFireFlower.png */ "./src/img/spriteFireFlower.png");
/* harmony import */ var _img_spriteEnemy_png__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../img/spriteEnemy.png */ "./src/img/spriteEnemy.png");




 // Scenario










 // Normal Character






 // FireFlower Character






 // FireFlower Character Shoot





var canvas = document.querySelector("canvas");
var contextGame = canvas.getContext("2d");
canvas.width = 1024;
canvas.height = 576;
var gravity = 1;

var Player = /*#__PURE__*/function () {
  function Player() {
    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Player);

    this.speed = 10;
    this.position = {
      x: 100,
      y: 100
    }; // Player velocity

    this.velocity = {
      x: 0,
      y: 1
    }; // Player sizes

    this.scale = 0.3;
    this.width = 398 * this.scale;
    this.height = 353 * this.scale;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]);
    this.frames = 0;
    this.sprites = {
      stand: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioStandRight_png__WEBPACK_IMPORTED_MODULE_18__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioStandLeft_png__WEBPACK_IMPORTED_MODULE_17__["default"]),
        fireFlower: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerStandRight_png__WEBPACK_IMPORTED_MODULE_24__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerStandLeft_png__WEBPACK_IMPORTED_MODULE_23__["default"])
        }
      },
      run: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioRunRight_png__WEBPACK_IMPORTED_MODULE_16__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioRunLeft_png__WEBPACK_IMPORTED_MODULE_15__["default"]),
        fireFlower: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerRunRight_png__WEBPACK_IMPORTED_MODULE_22__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerRunLeft_png__WEBPACK_IMPORTED_MODULE_21__["default"])
        }
      },
      jump: {
        right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioJumpRight_png__WEBPACK_IMPORTED_MODULE_20__["default"]),
        left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteMarioJumpLeft_png__WEBPACK_IMPORTED_MODULE_19__["default"]),
        fireFlower: {
          right: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerJumpRight_png__WEBPACK_IMPORTED_MODULE_26__["default"]),
          left: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlowerJumpLeft_png__WEBPACK_IMPORTED_MODULE_25__["default"])
        }
      }
    };
    this.currentSprite = this.sprites.stand.right;
    this.currentCropWidth = 398;
    this.powerUps = {
      fireFlower: false
    };
    this.invincible = false;
    this.opacity = 1;
  } // Draw the Player on the screen


  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Player, [{
    key: "draw",
    value: function draw() {
      // rectangle player
      // contextGame.fillStyle = "red";
      // contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);
      // sprite player
      // show an rectangle in the player
      contextGame.save();
      contextGame.globalAlpha = this.opacity;
      contextGame.fillStyle = "rgba(0,0,0, 0.2";
      contextGame.fillRect(this.position.x, this.position.y, this.width, this.height); // prettier-ignore

      contextGame.drawImage(this.currentSprite, this.currentCropWidth * this.frames, 0, this.currentCropWidth, 353, this.position.x, this.position.y, this.width, this.height);
      contextGame.restore();
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      var currentSprite = this.currentSprite,
          sprites = this.sprites; // prettier-ignore

      if (this.frames > 58 && (currentSprite === sprites.stand.right || currentSprite === sprites.stand.left || currentSprite === sprites.stand.fireFlower.left || currentSprite === sprites.stand.fireFlower.right)) this.frames = 0;else if (this.frames > 28 && (currentSprite === sprites.run.right || currentSprite === sprites.run.left || currentSprite === sprites.run.fireFlower.right || currentSprite === sprites.run.fireFlower.left)) this.frames = 0;else if (currentSprite === sprites.jump.right || currentSprite === sprites.jump.left || currentSprite === sprites.jump.fireFlower.right || currentSprite === sprites.jump.fireFlower.left) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; // else this.velocity.y = 0;

      if (this.invincible) {
        if (this.opacity === 1) this.opacity = 0;else this.opacity = 1;
      } else this.opacity = 1;
    }
  }]);

  return Player;
}();

var Platform = /*#__PURE__*/function () {
  function Platform(_ref) {
    var x = _ref.x,
        y = _ref.y,
        image = _ref.image,
        block = _ref.block,
        text = _ref.text;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Platform);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
    this.block = block;
    this.text = text;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Platform, [{
    key: "draw",
    value: function draw() {
      contextGame.drawImage(this.image, this.position.x, this.position.y);

      if (this.text) {
        contextGame.font = "24 Arial";
        contextGame.fillStyle = "white";
        contextGame.fillText(this.text, this.position.x, this.position.y);
      }
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return Platform;
}();

var GenericObject = /*#__PURE__*/function () {
  function GenericObject(_ref2) {
    var x = _ref2.x,
        y = _ref2.y,
        image = _ref2.image;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, GenericObject);

    this.position = {
      x: x,
      y: y
    };
    this.velocity = {
      x: 0
    };
    this.image = image;
    this.width = image.width;
    this.height = image.height;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(GenericObject, [{
    key: "draw",
    value: function draw() {
      contextGame.drawImage(this.image, this.position.x, this.position.y);
    }
  }, {
    key: "update",
    value: function update() {
      this.draw();
      this.position.x += this.velocity.x;
    }
  }]);

  return GenericObject;
}();

var Enemy = /*#__PURE__*/function () {
  function Enemy(_ref3) {
    var position = _ref3.position,
        velocity = _ref3.velocity,
        _ref3$distance = _ref3.distance,
        distance = _ref3$distance === void 0 ? {
      limit: 50,
      traveled: 0
    } : _ref3$distance;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Enemy);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 43.33;
    this.height = 50;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteEnemy_png__WEBPACK_IMPORTED_MODULE_30__["default"]);
    this.frames = 0;
    this.distance = distance;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Enemy, [{
    key: "draw",
    value: function draw() {
      // contextGame.fillStyle = "red";
      // contextGame.fillRect(this.position.x, this.position.y, this.width, this.height);
      // sprite enemy
      // prettier-ignore
      contextGame.drawImage(this.image, 130 * this.frames, 0, 130, 150, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 58) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity; // walk the enemy back and forth

      this.distance.traveled += Math.abs(this.velocity.x);

      if (this.distance.traveled > this.distance.limit) {
        this.distance.traveled = 0;
        this.velocity.x = -this.velocity.x;
      } // console.log(this.distance.traveled);

    }
  }]);

  return Enemy;
}();

var FireFlower = /*#__PURE__*/function () {
  function FireFlower(_ref4) {
    var position = _ref4.position,
        velocity = _ref4.velocity;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, FireFlower);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.width = 56;
    this.height = 60;
    this.image = Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_spriteFireFlower_png__WEBPACK_IMPORTED_MODULE_29__["default"]);
    this.frames = 0;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(FireFlower, [{
    key: "draw",
    value: function draw() {
      // prettier-ignore
      contextGame.drawImage(this.image, 56 * this.frames, 0, 56, 60, this.position.x, this.position.y, this.width, this.height);
    }
  }, {
    key: "update",
    value: function update() {
      this.frames++;
      if (this.frames >= 75) this.frames = 0;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.height + this.velocity.y <= canvas.height) this.velocity.y += gravity;
    }
  }]);

  return FireFlower;
}();

var Particle = /*#__PURE__*/function () {
  function Particle(_ref5) {
    var position = _ref5.position,
        velocity = _ref5.velocity,
        radius = _ref5.radius,
        _ref5$color = _ref5.color,
        color = _ref5$color === void 0 ? "#654428" : _ref5$color,
        _ref5$fireball = _ref5.fireball,
        fireball = _ref5$fireball === void 0 ? false : _ref5$fireball;

    _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, Particle);

    this.position = {
      x: position.x,
      y: position.y
    };
    this.velocity = {
      x: velocity.x,
      y: velocity.y
    };
    this.radius = radius;
    this.timeToLive = 300;
    this.color = color;
    this.fireball = fireball;
  }

  _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(Particle, [{
    key: "draw",
    value: function draw() {
      contextGame.beginPath();
      contextGame.arc(this.position.x, this.position.y, this.radius, 0, Math.PI * 2, false);
      contextGame.fillStyle = this.color;
      contextGame.fill();
      contextGame.closePath();
    }
  }, {
    key: "update",
    value: function update() {
      this.timeToLive--;
      this.draw();
      this.position.x += this.velocity.x;
      this.position.y += this.velocity.y;
      if (this.position.y + this.radius + this.velocity.y <= canvas.height) this.velocity.y += gravity * 0.5;
    }
  }]);

  return Particle;
}();

var platformImage;
var platformSmallTallImage;
var blockImage;
var blockTriImage;
var lgPlatformImage;
var tPlatformImage;
var xtPlatformImage;
var player = new Player();
var platforms = [];
var genericObjects = [];
var enemies = [];
var particles = [];
var fireFlowers = [];
var lastKey;
var keys = {
  right: {
    pressed: false
  },
  left: {
    pressed: false
  }
};
var scrollOffset = 0;

function init() {
  return _init.apply(this, arguments);
}

function _init() {
  _init = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0___default()( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.mark(function _callee() {
    var enemyWidth, platformsMap, platformDistance;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_3___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platform_png__WEBPACK_IMPORTED_MODULE_7__["default"]);

          case 2:
            platformImage = _context.sent;
            _context.next = 5;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_platformSmallTall_png__WEBPACK_IMPORTED_MODULE_8__["default"]);

          case 5:
            platformSmallTallImage = _context.sent;
            _context.next = 8;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_block_png__WEBPACK_IMPORTED_MODULE_9__["default"]);

          case 8:
            blockImage = _context.sent;
            _context.next = 11;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_blockTri_png__WEBPACK_IMPORTED_MODULE_10__["default"]);

          case 11:
            blockTriImage = _context.sent;
            _context.next = 14;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_lgPlatform_png__WEBPACK_IMPORTED_MODULE_12__["default"]);

          case 14:
            lgPlatformImage = _context.sent;
            _context.next = 17;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_13__["default"]);

          case 17:
            tPlatformImage = _context.sent;
            _context.next = 20;
            return Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImageAsync"])(_img_tPlatform_png__WEBPACK_IMPORTED_MODULE_13__["default"]);

          case 20:
            xtPlatformImage = _context.sent;
            fireFlowers = [new FireFlower({
              position: {
                x: 400,
                y: 100
              },
              velocity: {
                x: 0,
                y: 0
              }
            })];
            player = new Player();
            enemyWidth = 43.33;
            enemies = [new Enemy({
              position: {
                x: 908 + lgPlatformImage.width - enemyWidth,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Enemy({
              position: {
                x: 3249 + lgPlatformImage.width - enemyWidth,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Enemy({
              position: {
                x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Enemy({
              position: {
                x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth - enemyWidth,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Enemy({
              position: {
                x: 3249 + lgPlatformImage.width - enemyWidth - enemyWidth - enemyWidth - enemyWidth,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 400,
                traveled: 0
              }
            }), new Enemy({
              position: {
                x: 5134 + xtPlatformImage.width / 2 + enemyWidth,
                y: 100
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 100,
                traveled: 0
              }
            }), new Enemy({
              position: {
                x: 6965,
                y: 10
              },
              velocity: {
                x: -0.5,
                y: 0
              },
              distance: {
                limit: 100,
                traveled: 0
              }
            })];
            particles = []; // particles = [new Particle({})];
            // create the platforms

            platforms = [new Platform({
              x: 908 + 100,
              y: 300,
              image: blockTriImage,
              block: true
            }), new Platform({
              x: 908 + 100 + blockImage.width,
              y: 100,
              image: blockImage,
              block: true
            }), new Platform({
              x: 1991 + lgPlatformImage.width - tPlatformImage.width,
              y: canvas.height - lgPlatformImage.height - tPlatformImage.height,
              image: tPlatformImage,
              block: false
            }), new Platform({
              x: 1991 + lgPlatformImage.width - tPlatformImage.width - 100,
              y: canvas.height - lgPlatformImage.height - tPlatformImage.height + blockImage.height,
              image: blockImage,
              block: true
            }), new Platform({
              x: 5710 + xtPlatformImage.width + 175,
              y: canvas.height - xtPlatformImage.height,
              image: blockImage,
              block: true,
              text: 5710 + xtPlatformImage.width + 175
            }), new Platform({
              x: 6113 + 175,
              y: canvas.height - xtPlatformImage.height,
              image: blockImage,
              block: true,
              text: 6113 + 175
            }), new Platform({
              x: 6113 + 175 * 2,
              y: canvas.height - xtPlatformImage.height,
              image: blockImage,
              block: true,
              text: 6113 + 175 * 2
            }), new Platform({
              x: 6113 + 175 * 3,
              y: canvas.height - xtPlatformImage.height - 100,
              image: blockImage,
              block: true,
              text: 6113 + 175 * 3
            }), new Platform({
              x: 6113 + 175 * 4,
              y: canvas.height - xtPlatformImage.height - 200,
              image: blockTriImage,
              block: true,
              text: 6113 + 175 * 4
            }), new Platform({
              x: 6113 + 175 * 4 + blockTriImage.width,
              y: canvas.height - xtPlatformImage.height - 200,
              image: blockTriImage,
              block: true,
              text: 6113 + 175 * 4 + blockTriImage.width
            }), new Platform({
              x: 6968 + 300,
              y: canvas.height - lgPlatformImage.height,
              image: lgPlatformImage,
              block: true,
              text: 6968 + 300
            })];
            genericObjects = [new GenericObject({
              x: -1,
              y: -1,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_background_png__WEBPACK_IMPORTED_MODULE_5__["default"])
            }), new GenericObject({
              x: -1,
              y: -1,
              image: Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["createImage"])(_img_hills_png__WEBPACK_IMPORTED_MODULE_6__["default"])
            })];
            scrollOffset = 0; // array of scenario

            platformsMap = ["lg", "lg", "gap", "lg", "gap", "gap", "lg", "gap", "t", "gap", "xt", "gap", "xt", "gap", "gap", "xt"]; // distance definition

            platformDistance = 0; // creating dynamic scenario

            platformsMap.forEach(function (symbol) {
              switch (symbol) {
                case "lg":
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - lgPlatformImage.height,
                    image: lgPlatformImage,
                    block: true,
                    text: platformDistance
                  }));
                  platformDistance += lgPlatformImage.width - 2;
                  break;

                case "gap":
                  platformDistance += 175;
                  break;

                case "t":
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - tPlatformImage.height,
                    image: tPlatformImage,
                    block: true,
                    text: platformDistance
                  }));
                  platformDistance += tPlatformImage.width - 2;
                  break;

                case "xt":
                  platforms.push(new Platform({
                    x: platformDistance,
                    y: canvas.height - xtPlatformImage.height,
                    image: xtPlatformImage,
                    block: true,
                    text: platformDistance
                  }));
                  platformDistance += xtPlatformImage.width - 2;
                  break;
              }
            });

          case 32:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _init.apply(this, arguments);
}

function animate() {
  requestAnimationFrame(animate);
  contextGame.fillStyle = "white";
  contextGame.fillRect(0, 0, canvas.width, canvas.height);
  genericObjects.forEach(function (genericObject) {
    genericObject.update();
    genericObject.velocity.x = 0;
  });
  platforms.forEach(function (platform) {
    platform.update();
    platform.velocity.x = 0;
  }); // player obtains powerup

  fireFlowers.forEach(function (fireFlower, i) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["objectsTouch"])({
      object1: player,
      object2: fireFlower
    })) {
      player.powerUps.fireFlower = true;
      setTimeout(function () {
        fireFlowers.splice(i, 1);
      }, 0);
    } else fireFlower.update();
  });
  enemies.forEach(function (enemy, index) {
    enemy.update(); // remove enemy on fireball hit

    particles.filter(function (particle) {
      return particle.fireball;
    }).forEach(function (particle, particleIndex) {
      if ( // prettier-ignore
      particle.position.x + particle.radius >= enemy.position.x && particle.position.y + particle.radius >= enemy.position.y && particle.position.x - particle.radius <= enemy.position.x + enemy.width && particle.position.y - particle.radius <= enemy.position.y + enemy.height) {
        // explode enemy with fireFlower
        for (var i = 0; i < 50; i++) {
          particles.push(new Particle({
            position: {
              x: enemy.position.x + enemy.width / 2,
              y: enemy.position.y + enemy.height / 2
            },
            velocity: {
              x: (Math.random() - 0.5) * 5,
              y: (Math.random() - 0.5) * 15
            },
            radius: Math.random() * 3
          }));
        }

        setTimeout(function () {
          enemies.splice(index, 1);
          particles.splice(particleIndex, 1);
        }, 0);
      }
    }); // enemies stomp squish

    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["collisionTop"])({
      object1: player,
      object2: enemy
    })) {
      // explode enemy after hit
      for (var i = 0; i < 50; i++) {
        particles.push(new Particle({
          position: {
            x: enemy.position.x + enemy.width / 2,
            y: enemy.position.y + enemy.height / 2
          },
          velocity: {
            x: (Math.random() - 0.5) * 5,
            y: (Math.random() - 0.5) * 15
          },
          radius: Math.random() * 3
        }));
      }

      player.velocity.y -= 30;
      setTimeout(function () {
        enemies.splice(index, 1); // console.log(particles);
      }, 0);
    } else if ( // prettier-ignore
    player.position.x + player.width >= enemy.position.x && player.position.y + player.height >= enemy.position.y && player.position.x <= enemy.position.x + enemy.width) {
      if (player.powerUps.fireFlower) {
        player.invincible = true;
        player.powerUps.fireFlower = false;
        setTimeout(function () {
          player.invincible = false;
        }, 1000);
      } else if (!player.invincible) init();
    }
  });
  particles.forEach(function (particle, i) {
    particle.update();
    if (particle.fireball && (particle.position.x - particle.radius >= canvas.width || particle.position.x + particle.radius <= 0)) setTimeout(function () {
      particles.splice(i, 1);
    }, 0);
  });
  player.update();
  var hitSide = false;

  if (keys.right.pressed && player.position.x < 400) {
    player.velocity.x = player.speed;
  } else if ( // prettier-ignore : bloqueia andar antes da fase 1/2
  keys.left.pressed && player.position.x > 100 || keys.left.pressed && scrollOffset === 0 && player.position.x > 0) {
    player.velocity.x = -player.speed;
  } else {
    player.velocity.x = 0; // scrolling code

    if (keys.right.pressed) {
      for (var i = 0; i < platforms.length; i++) {
        var _platform = platforms[i];
        _platform.velocity.x = -player.speed;

        if (_platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      } // });


      if (!hitSide) {
        scrollOffset += player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = -player.speed * 0.5;
        });
        enemies.forEach(function (enemy) {
          enemy.position.x -= player.speed;
        });
        fireFlowers.forEach(function (fireFlower) {
          fireFlower.position.x -= player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x -= player.speed;
        });
      }
    } else if ( // prettier-ignore : bloqueia andar antes da fase 2/2
    keys.left.pressed && scrollOffset > 0) {
      for (var _i = 0; _i < platforms.length; _i++) {
        var _platform2 = platforms[_i];
        _platform2.velocity.x = player.speed;

        if (_platform2.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
          object: player,
          platform: _platform2
        })) {
          platforms.forEach(function (platform) {
            platform.velocity.x = 0;
          });
          hitSide = true;
          break;
        }
      }

      if (!hitSide) {
        scrollOffset -= player.speed;
        genericObjects.forEach(function (genericObject) {
          genericObject.velocity.x = player.speed * 0.5;
        });
        enemies.forEach(function (enemy) {
          enemy.position.x += player.speed;
        });
        fireFlowers.forEach(function (fireFlower) {
          fireFlower.position.x += player.speed;
        });
        particles.forEach(function (particle) {
          particle.position.x += player.speed;
        });
      }
    }
  } // platform collision detection


  platforms.forEach(function (platform) {
    if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = 0;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitBottomOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.y = -player.velocity.y;
    }

    if (platform.block && Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["hitSideOfPlatform"])({
      object: player,
      platform: platform
    })) {
      player.velocity.x = 0;
    } // particles bounce


    particles.forEach(function (particle, index) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatformCircle"])({
        object: particle,
        platform: platform
      })) {
        var bounce = 0.9;
        particle.velocity.y = -particle.velocity.y * 0.99;
        if (particle.radius - 0.5 < 0) particles.splice(index, 1);else particle.radius -= 0.5;
      }

      if (particle.timeToLive < 0) particles.splice(index, 1);
    });
    enemies.forEach(function (enemy) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: enemy,
        platform: platform
      })) enemy.velocity.y = 0;
    });
    fireFlowers.forEach(function (fireFlower) {
      if (Object(_utils_js__WEBPACK_IMPORTED_MODULE_4__["isOnTopOfPlatform"])({
        object: fireFlower,
        platform: platform
      })) fireFlower.velocity.y = 0;
    });
  }); // win condition

  if (platformImage && scrollOffset + 400 + player.width > 6968 + 300) {
    console.log("you win");
  } // lose condition


  if (player.position.y > canvas.height) {
    init();
  } // sprite switching


  if (player.velocity.y !== 0) return;

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.right) {
    player.currentSprite = player.sprites.run.right;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.left) {
    player.currentSprite = player.sprites.run.left;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.left) {
    player.currentSprite = player.sprites.stand.left;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.right) {
    player.currentSprite = player.sprites.stand.right;
  } // firewflower sprites


  if (!player.powerUps.fireFlower) return;

  if (keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.run.fireFlower.right) {
    player.currentSprite = player.sprites.run.fireFlower.right;
  } else if (keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.run.fireFlower.left) {
    player.currentSprite = player.sprites.run.fireFlower.left;
  } else if (!keys.left.pressed && lastKey === "left" && player.currentSprite !== player.sprites.stand.fireFlower.left) {
    player.currentSprite = player.sprites.stand.fireFlower.left;
  } else if (!keys.right.pressed && lastKey === "right" && player.currentSprite !== player.sprites.stand.fireFlower.right) {
    player.currentSprite = player.sprites.stand.fireFlower.right;
  }
}

init();
animate();
addEventListener("keydown", function (_ref6) {
  var keyCode = _ref6.keyCode;

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = true;
      lastKey = "left";
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = true;
      lastKey = "right";
      break;

    case 87:
      console.log("up");
      player.velocity.y -= 25;
      if (lastKey === "right") player.currentSprite = player.sprites.jump.right;else player.currentSprite = player.sprites.jump.left;
      if (!player.powerUps.fireFlower) break;
      if (lastKey === "right") player.currentSprite = player.sprites.jump.fireFlower.right;else player.currentSprite = player.sprites.jump.fireFlower.left;
      break;

    case 32:
      console.log("space");
      if (!player.powerUps.fireFlower) return; // fireball velocity

      var velocity = 15;
      if (lastKey === "left") velocity = -velocity; // fireball when press space

      particles.push(new Particle({
        position: {
          x: player.position.x + player.width / 2,
          y: player.position.y + player.height / 2
        },
        velocity: {
          x: velocity,
          y: 0
        },
        radius: 5,
        color: "red",
        fireball: true
      }));
      break;
  }
});
addEventListener("keyup", function (_ref7) {
  var keyCode = _ref7.keyCode;

  switch (keyCode) {
    case 65:
      console.log("left");
      keys.left.pressed = false;
      break;

    case 83:
      console.log("down");
      break;

    case 68:
      console.log("right");
      keys.right.pressed = false;
      break;

    case 87:
      console.log("up");
      break;
  }
});

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/*! exports provided: createImage, createImageAsync, isOnTopOfPlatform, collisionTop, isOnTopOfPlatformCircle, hitBottomOfPlatform, hitSideOfPlatform, objectsTouch */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImage", function() { return createImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createImageAsync", function() { return createImageAsync; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatform", function() { return isOnTopOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "collisionTop", function() { return collisionTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isOnTopOfPlatformCircle", function() { return isOnTopOfPlatformCircle; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitBottomOfPlatform", function() { return hitBottomOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hitSideOfPlatform", function() { return hitSideOfPlatform; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "objectsTouch", function() { return objectsTouch; });
// function randomIntFromRange(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1) + min);
// }
// function randomColor(colors) {
// 	return colors[Math.floor(Math.random() * colors.length)];
// }
// function distance(x1, y1, x2, y2) {
// 	const xDist = x2 - x1;
// 	const yDist = y2 - y1;
// 	return Math.sqrt(Math.pow(xDist, 2) + Math.pow(yDist, 2));
// }
function createImage(imageSrc) {
  var image = new Image();
  image.src = imageSrc;
  return image;
}
function createImageAsync(imageSrc) {
  return new Promise(function (resolve) {
    var image = new Image();

    image.onload = function () {
      resolve(image);
    };

    image.src = imageSrc;
  });
}
function isOnTopOfPlatform(_ref) {
  var object = _ref.object,
      platform = _ref.platform;
  // prettier-ignore
  return object.position.y + object.height <= platform.position.y && object.position.y + object.height + object.velocity.y >= platform.position.y && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function collisionTop(_ref2) {
  var object1 = _ref2.object1,
      object2 = _ref2.object2;
  // prettier-ignore
  return object1.position.y + object1.height <= object2.position.y && object1.position.y + object1.height + object1.velocity.y >= object2.position.y && object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width;
}
function isOnTopOfPlatformCircle(_ref3) {
  var object = _ref3.object,
      platform = _ref3.platform;
  // prettier-ignore
  return object.position.y + object.radius <= platform.position.y && object.position.y + object.radius + object.velocity.y >= platform.position.y && object.position.x + object.radius >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitBottomOfPlatform(_ref4) {
  var object = _ref4.object,
      platform = _ref4.platform;
  // prettier-ignore
  return object.position.y <= platform.position.y + platform.height && object.position.y - object.velocity.y >= platform.position.y + platform.height && object.position.x + object.width >= platform.position.x && object.position.x <= platform.position.x + platform.width;
}
function hitSideOfPlatform(_ref5) {
  var object = _ref5.object,
      platform = _ref5.platform;
  // prettier-ignore
  return object.position.x + object.width + object.velocity.x - platform.velocity.x >= platform.position.x && object.position.x + object.velocity.x <= platform.position.x + platform.width && object.position.y < platform.position.y + platform.height && object.position.y + object.height >= platform.position.y;
}
function objectsTouch(_ref6) {
  var object1 = _ref6.object1,
      object2 = _ref6.object2;
  // prettier-ignore
  return object1.position.x + object1.width >= object2.position.x && object1.position.x <= object2.position.x + object2.width && object1.position.y + object1.height >= object2.position.y && object1.position.y <= object2.position.y + object2.height;
}

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map