(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Animals = factory());
}(this, function () { 'use strict';

  var _isObject = function (it) {
    return typeof it === 'object' ? it !== null : typeof it === 'function';
  };

  var _isObject$1 = /*#__PURE__*/Object.freeze({
    'default': _isObject,
    __moduleExports: _isObject
  });

  var isObject = ( _isObject$1 && _isObject ) || _isObject$1;

  var _anObject = function (it) {
    if (!isObject(it)) throw TypeError(it + ' is not an object!');
    return it;
  };

  var _anObject$1 = /*#__PURE__*/Object.freeze({
    'default': _anObject,
    __moduleExports: _anObject
  });

  var _fails = function (exec) {
    try {
      return !!exec();
    } catch (e) {
      return true;
    }
  };

  var _fails$1 = /*#__PURE__*/Object.freeze({
    'default': _fails,
    __moduleExports: _fails
  });

  var $fails = ( _fails$1 && _fails ) || _fails$1;

  // Thank's IE8 for his funny defineProperty
  var _descriptors = !$fails(function () {
    return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
  });

  var _descriptors$1 = /*#__PURE__*/Object.freeze({
    'default': _descriptors,
    __moduleExports: _descriptors
  });

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  var _global = createCommonjsModule(function (module) {
  // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
  var global = module.exports = typeof window != 'undefined' && window.Math == Math
    ? window : typeof self != 'undefined' && self.Math == Math ? self
    // eslint-disable-next-line no-new-func
    : Function('return this')();
  if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
  });

  var _global$1 = /*#__PURE__*/Object.freeze({
    'default': _global,
    __moduleExports: _global
  });

  var global = ( _global$1 && _global ) || _global$1;

  var document$1 = global.document;
  // typeof document.createElement is 'object' in old IE
  var is = isObject(document$1) && isObject(document$1.createElement);
  var _domCreate = function (it) {
    return is ? document$1.createElement(it) : {};
  };

  var _domCreate$1 = /*#__PURE__*/Object.freeze({
    'default': _domCreate,
    __moduleExports: _domCreate
  });

  var DESCRIPTORS = ( _descriptors$1 && _descriptors ) || _descriptors$1;

  var require$$1 = ( _domCreate$1 && _domCreate ) || _domCreate$1;

  var _ie8DomDefine = !DESCRIPTORS && !$fails(function () {
    return Object.defineProperty(require$$1('div'), 'a', { get: function () { return 7; } }).a != 7;
  });

  var _ie8DomDefine$1 = /*#__PURE__*/Object.freeze({
    'default': _ie8DomDefine,
    __moduleExports: _ie8DomDefine
  });

  // 7.1.1 ToPrimitive(input [, PreferredType])

  // instead of the ES6 spec version, we didn't implement @@toPrimitive case
  // and the second argument - flag - preferred type is a string
  var _toPrimitive = function (it, S) {
    if (!isObject(it)) return it;
    var fn, val;
    if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
    if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
    throw TypeError("Can't convert object to primitive value");
  };

  var _toPrimitive$1 = /*#__PURE__*/Object.freeze({
    'default': _toPrimitive,
    __moduleExports: _toPrimitive
  });

  var anObject = ( _anObject$1 && _anObject ) || _anObject$1;

  var IE8_DOM_DEFINE = ( _ie8DomDefine$1 && _ie8DomDefine ) || _ie8DomDefine$1;

  var toPrimitive = ( _toPrimitive$1 && _toPrimitive ) || _toPrimitive$1;

  var dP = Object.defineProperty;

  var f = DESCRIPTORS ? Object.defineProperty : function defineProperty(O, P, Attributes) {
    anObject(O);
    P = toPrimitive(P, true);
    anObject(Attributes);
    if (IE8_DOM_DEFINE) try {
      return dP(O, P, Attributes);
    } catch (e) { /* empty */ }
    if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
    if ('value' in Attributes) O[P] = Attributes.value;
    return O;
  };

  var _objectDp = {
  	f: f
  };

  var _objectDp$1 = /*#__PURE__*/Object.freeze({
    'default': _objectDp,
    __moduleExports: _objectDp,
    f: f
  });

  var $DP = ( _objectDp$1 && _objectDp ) || _objectDp$1;

  var dP$1 = $DP.f;
  var FProto = Function.prototype;
  var nameRE = /^\s*function ([^ (]*)/;
  var NAME = 'name';

  // 19.2.4.2 name
  NAME in FProto || DESCRIPTORS && dP$1(FProto, NAME, {
    configurable: true,
    get: function () {
      try {
        return ('' + this).match(nameRE)[1];
      } catch (e) {
        return '';
      }
    }
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var Animal =
  /*#__PURE__*/
  function () {
    function Animal(name) {
      _classCallCheck(this, Animal);

      this.name = name;
    }

    _createClass(Animal, [{
      key: "run",
      value: function run() {
        console.log("i am run");
      }
    }, {
      key: "brake",
      value: function brake() {
        console.log('i am brake');
      }
    }]);

    return Animal;
  }();

  var Dog =
  /*#__PURE__*/
  function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog(name) {
      var _this;

      _classCallCheck(this, Dog);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Dog).call(this));
      _this.name = name;
      return _this;
    }

    _createClass(Dog, [{
      key: "brake",
      value: function brake() {
        console.log('汪汪汪');
      }
    }]);

    return Dog;
  }(Animal);

  var Cat =
  /*#__PURE__*/
  function (_Animal) {
    _inherits(Cat, _Animal);

    function Cat(name) {
      var _this;

      _classCallCheck(this, Cat);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Cat).call(this));
      _this.name = name;
      return _this;
    }

    _createClass(Cat, [{
      key: "brake",
      value: function brake() {
        console.log('miao miao miao');
      }
    }]);

    return Cat;
  }(Animal);

  var _library = false;

  var _library$1 = /*#__PURE__*/Object.freeze({
    'default': _library,
    __moduleExports: _library
  });

  var _aFunction = function (it) {
    if (typeof it != 'function') throw TypeError(it + ' is not a function!');
    return it;
  };

  var _aFunction$1 = /*#__PURE__*/Object.freeze({
    'default': _aFunction,
    __moduleExports: _aFunction
  });

  var aFunction = ( _aFunction$1 && _aFunction ) || _aFunction$1;

  // optional / simple context binding

  var _ctx = function (fn, that, length) {
    aFunction(fn);
    if (that === undefined) return fn;
    switch (length) {
      case 1: return function (a) {
        return fn.call(that, a);
      };
      case 2: return function (a, b) {
        return fn.call(that, a, b);
      };
      case 3: return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
    }
    return function (/* ...args */) {
      return fn.apply(that, arguments);
    };
  };

  var _ctx$1 = /*#__PURE__*/Object.freeze({
    'default': _ctx,
    __moduleExports: _ctx
  });

  var toString = {}.toString;

  var _cof = function (it) {
    return toString.call(it).slice(8, -1);
  };

  var _cof$1 = /*#__PURE__*/Object.freeze({
    'default': _cof,
    __moduleExports: _cof
  });

  var _core = createCommonjsModule(function (module) {
  var core = module.exports = { version: '2.6.9' };
  if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
  });
  var _core_1 = _core.version;

  var _core$1 = /*#__PURE__*/Object.freeze({
    'default': _core,
    __moduleExports: _core,
    version: _core_1
  });

  var core = ( _core$1 && _core ) || _core$1;

  var LIBRARY = ( _library$1 && _library ) || _library$1;

  var _shared = createCommonjsModule(function (module) {
  var SHARED = '__core-js_shared__';
  var store = global[SHARED] || (global[SHARED] = {});

  (module.exports = function (key, value) {
    return store[key] || (store[key] = value !== undefined ? value : {});
  })('versions', []).push({
    version: core.version,
    mode: LIBRARY ? 'pure' : 'global',
    copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
  });
  });

  var _shared$1 = /*#__PURE__*/Object.freeze({
    'default': _shared,
    __moduleExports: _shared
  });

  var id = 0;
  var px = Math.random();
  var _uid = function (key) {
    return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
  };

  var _uid$1 = /*#__PURE__*/Object.freeze({
    'default': _uid,
    __moduleExports: _uid
  });

  var shared = ( _shared$1 && _shared ) || _shared$1;

  var uid = ( _uid$1 && _uid ) || _uid$1;

  var _wks = createCommonjsModule(function (module) {
  var store = shared('wks');

  var Symbol = global.Symbol;
  var USE_SYMBOL = typeof Symbol == 'function';

  var $exports = module.exports = function (name) {
    return store[name] || (store[name] =
      USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
  };

  $exports.store = store;
  });

  var _wks$1 = /*#__PURE__*/Object.freeze({
    'default': _wks,
    __moduleExports: _wks
  });

  var cof = ( _cof$1 && _cof ) || _cof$1;

  var wks = ( _wks$1 && _wks ) || _wks$1;

  // getting tag from 19.1.3.6 Object.prototype.toString()

  var TAG = wks('toStringTag');
  // ES3 wrong here
  var ARG = cof(function () { return arguments; }()) == 'Arguments';

  // fallback for IE11 Script Access Denied error
  var tryGet = function (it, key) {
    try {
      return it[key];
    } catch (e) { /* empty */ }
  };

  var _classof = function (it) {
    var O, T, B;
    return it === undefined ? 'Undefined' : it === null ? 'Null'
      // @@toStringTag case
      : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
      // builtinTag case
      : ARG ? cof(O)
      // ES3 arguments fallback
      : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
  };

  var _classof$1 = /*#__PURE__*/Object.freeze({
    'default': _classof,
    __moduleExports: _classof
  });

  var _propertyDesc = function (bitmap, value) {
    return {
      enumerable: !(bitmap & 1),
      configurable: !(bitmap & 2),
      writable: !(bitmap & 4),
      value: value
    };
  };

  var _propertyDesc$1 = /*#__PURE__*/Object.freeze({
    'default': _propertyDesc,
    __moduleExports: _propertyDesc
  });

  var descriptor = ( _propertyDesc$1 && _propertyDesc ) || _propertyDesc$1;

  var _hide = DESCRIPTORS ? function (object, key, value) {
    return $DP.f(object, key, descriptor(1, value));
  } : function (object, key, value) {
    object[key] = value;
    return object;
  };

  var _hide$1 = /*#__PURE__*/Object.freeze({
    'default': _hide,
    __moduleExports: _hide
  });

  var hasOwnProperty = {}.hasOwnProperty;
  var _has = function (it, key) {
    return hasOwnProperty.call(it, key);
  };

  var _has$1 = /*#__PURE__*/Object.freeze({
    'default': _has,
    __moduleExports: _has
  });

  var _functionToString = shared('native-function-to-string', Function.toString);

  var _functionToString$1 = /*#__PURE__*/Object.freeze({
    'default': _functionToString,
    __moduleExports: _functionToString
  });

  var hide = ( _hide$1 && _hide ) || _hide$1;

  var has = ( _has$1 && _has ) || _has$1;

  var $toString = ( _functionToString$1 && _functionToString ) || _functionToString$1;

  var _redefine = createCommonjsModule(function (module) {
  var SRC = uid('src');

  var TO_STRING = 'toString';
  var TPL = ('' + $toString).split(TO_STRING);

  core.inspectSource = function (it) {
    return $toString.call(it);
  };

  (module.exports = function (O, key, val, safe) {
    var isFunction = typeof val == 'function';
    if (isFunction) has(val, 'name') || hide(val, 'name', key);
    if (O[key] === val) return;
    if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
    if (O === global) {
      O[key] = val;
    } else if (!safe) {
      delete O[key];
      hide(O, key, val);
    } else if (O[key]) {
      O[key] = val;
    } else {
      hide(O, key, val);
    }
  // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
  })(Function.prototype, TO_STRING, function toString() {
    return typeof this == 'function' && this[SRC] || $toString.call(this);
  });
  });

  var _redefine$1 = /*#__PURE__*/Object.freeze({
    'default': _redefine,
    __moduleExports: _redefine
  });

  var redefine = ( _redefine$1 && _redefine ) || _redefine$1;

  var ctx = ( _ctx$1 && _ctx ) || _ctx$1;

  var PROTOTYPE = 'prototype';

  var $export = function (type, name, source) {
    var IS_FORCED = type & $export.F;
    var IS_GLOBAL = type & $export.G;
    var IS_STATIC = type & $export.S;
    var IS_PROTO = type & $export.P;
    var IS_BIND = type & $export.B;
    var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
    var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
    var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
    var key, own, out, exp;
    if (IS_GLOBAL) source = name;
    for (key in source) {
      // contains in native
      own = !IS_FORCED && target && target[key] !== undefined;
      // export native or passed
      out = (own ? target : source)[key];
      // bind timers to global for call from export context
      exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
      // extend global
      if (target) redefine(target, key, out, type & $export.U);
      // export
      if (exports[key] != out) hide(exports, key, exp);
      if (IS_PROTO && expProto[key] != out) expProto[key] = out;
    }
  };
  global.core = core;
  // type bitmap
  $export.F = 1;   // forced
  $export.G = 2;   // global
  $export.S = 4;   // static
  $export.P = 8;   // proto
  $export.B = 16;  // bind
  $export.W = 32;  // wrap
  $export.U = 64;  // safe
  $export.R = 128; // real proto method for `library`
  var _export = $export;

  var _export$1 = /*#__PURE__*/Object.freeze({
    'default': _export,
    __moduleExports: _export
  });

  var _anInstance = function (it, Constructor, name, forbiddenField) {
    if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
      throw TypeError(name + ': incorrect invocation!');
    } return it;
  };

  var _anInstance$1 = /*#__PURE__*/Object.freeze({
    'default': _anInstance,
    __moduleExports: _anInstance
  });

  // call something on iterator step with safe closing on error

  var _iterCall = function (iterator, fn, value, entries) {
    try {
      return entries ? fn(anObject(value)[0], value[1]) : fn(value);
    // 7.4.6 IteratorClose(iterator, completion)
    } catch (e) {
      var ret = iterator['return'];
      if (ret !== undefined) anObject(ret.call(iterator));
      throw e;
    }
  };

  var _iterCall$1 = /*#__PURE__*/Object.freeze({
    'default': _iterCall,
    __moduleExports: _iterCall
  });

  var _iterators = {};

  var _iterators$1 = /*#__PURE__*/Object.freeze({
    'default': _iterators,
    __moduleExports: _iterators
  });

  var Iterators = ( _iterators$1 && _iterators ) || _iterators$1;

  // check on default Array iterator

  var ITERATOR = wks('iterator');
  var ArrayProto = Array.prototype;

  var _isArrayIter = function (it) {
    return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
  };

  var _isArrayIter$1 = /*#__PURE__*/Object.freeze({
    'default': _isArrayIter,
    __moduleExports: _isArrayIter
  });

  // 7.1.4 ToInteger
  var ceil = Math.ceil;
  var floor = Math.floor;
  var _toInteger = function (it) {
    return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
  };

  var _toInteger$1 = /*#__PURE__*/Object.freeze({
    'default': _toInteger,
    __moduleExports: _toInteger
  });

  var toInteger = ( _toInteger$1 && _toInteger ) || _toInteger$1;

  // 7.1.15 ToLength

  var min = Math.min;
  var _toLength = function (it) {
    return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
  };

  var _toLength$1 = /*#__PURE__*/Object.freeze({
    'default': _toLength,
    __moduleExports: _toLength
  });

  var classof = ( _classof$1 && _classof ) || _classof$1;

  var ITERATOR$1 = wks('iterator');

  var core_getIteratorMethod = core.getIteratorMethod = function (it) {
    if (it != undefined) return it[ITERATOR$1]
      || it['@@iterator']
      || Iterators[classof(it)];
  };

  var core_getIteratorMethod$1 = /*#__PURE__*/Object.freeze({
    'default': core_getIteratorMethod,
    __moduleExports: core_getIteratorMethod
  });

  var call = ( _iterCall$1 && _iterCall ) || _iterCall$1;

  var isArrayIter = ( _isArrayIter$1 && _isArrayIter ) || _isArrayIter$1;

  var toLength = ( _toLength$1 && _toLength ) || _toLength$1;

  var getIterFn = ( core_getIteratorMethod$1 && core_getIteratorMethod ) || core_getIteratorMethod$1;

  var _forOf = createCommonjsModule(function (module) {
  var BREAK = {};
  var RETURN = {};
  var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
    var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
    var f = ctx(fn, that, entries ? 2 : 1);
    var index = 0;
    var length, step, iterator, result;
    if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
    // fast case for arrays with default iterator
    if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
      result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
      if (result === BREAK || result === RETURN) return result;
    } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
      result = call(iterator, f, step.value, entries);
      if (result === BREAK || result === RETURN) return result;
    }
  };
  exports.BREAK = BREAK;
  exports.RETURN = RETURN;
  });

  var _forOf$1 = /*#__PURE__*/Object.freeze({
    'default': _forOf,
    __moduleExports: _forOf
  });

  // 7.3.20 SpeciesConstructor(O, defaultConstructor)


  var SPECIES = wks('species');
  var _speciesConstructor = function (O, D) {
    var C = anObject(O).constructor;
    var S;
    return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
  };

  var _speciesConstructor$1 = /*#__PURE__*/Object.freeze({
    'default': _speciesConstructor,
    __moduleExports: _speciesConstructor
  });

  // fast apply, http://jsperf.lnkit.com/fast-apply/5
  var _invoke = function (fn, args, that) {
    var un = that === undefined;
    switch (args.length) {
      case 0: return un ? fn()
                        : fn.call(that);
      case 1: return un ? fn(args[0])
                        : fn.call(that, args[0]);
      case 2: return un ? fn(args[0], args[1])
                        : fn.call(that, args[0], args[1]);
      case 3: return un ? fn(args[0], args[1], args[2])
                        : fn.call(that, args[0], args[1], args[2]);
      case 4: return un ? fn(args[0], args[1], args[2], args[3])
                        : fn.call(that, args[0], args[1], args[2], args[3]);
    } return fn.apply(that, args);
  };

  var _invoke$1 = /*#__PURE__*/Object.freeze({
    'default': _invoke,
    __moduleExports: _invoke
  });

  var document$2 = global.document;
  var _html = document$2 && document$2.documentElement;

  var _html$1 = /*#__PURE__*/Object.freeze({
    'default': _html,
    __moduleExports: _html
  });

  var invoke = ( _invoke$1 && _invoke ) || _invoke$1;

  var require$$2 = ( _html$1 && _html ) || _html$1;

  var process = global.process;
  var setTask = global.setImmediate;
  var clearTask = global.clearImmediate;
  var MessageChannel = global.MessageChannel;
  var Dispatch = global.Dispatch;
  var counter = 0;
  var queue = {};
  var ONREADYSTATECHANGE = 'onreadystatechange';
  var defer, channel, port;
  var run = function () {
    var id = +this;
    // eslint-disable-next-line no-prototype-builtins
    if (queue.hasOwnProperty(id)) {
      var fn = queue[id];
      delete queue[id];
      fn();
    }
  };
  var listener = function (event) {
    run.call(event.data);
  };
  // Node.js 0.9+ & IE10+ has setImmediate, otherwise:
  if (!setTask || !clearTask) {
    setTask = function setImmediate(fn) {
      var args = [];
      var i = 1;
      while (arguments.length > i) args.push(arguments[i++]);
      queue[++counter] = function () {
        // eslint-disable-next-line no-new-func
        invoke(typeof fn == 'function' ? fn : Function(fn), args);
      };
      defer(counter);
      return counter;
    };
    clearTask = function clearImmediate(id) {
      delete queue[id];
    };
    // Node.js 0.8-
    if (cof(process) == 'process') {
      defer = function (id) {
        process.nextTick(ctx(run, id, 1));
      };
    // Sphere (JS game engine) Dispatch API
    } else if (Dispatch && Dispatch.now) {
      defer = function (id) {
        Dispatch.now(ctx(run, id, 1));
      };
    // Browsers with MessageChannel, includes WebWorkers
    } else if (MessageChannel) {
      channel = new MessageChannel();
      port = channel.port2;
      channel.port1.onmessage = listener;
      defer = ctx(port.postMessage, port, 1);
    // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
    } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
      defer = function (id) {
        global.postMessage(id + '', '*');
      };
      global.addEventListener('message', listener, false);
    // IE8-
    } else if (ONREADYSTATECHANGE in require$$1('script')) {
      defer = function (id) {
        require$$2.appendChild(require$$1('script'))[ONREADYSTATECHANGE] = function () {
          require$$2.removeChild(this);
          run.call(id);
        };
      };
    // Rest old browsers
    } else {
      defer = function (id) {
        setTimeout(ctx(run, id, 1), 0);
      };
    }
  }
  var _task = {
    set: setTask,
    clear: clearTask
  };
  var _task_1 = _task.set;
  var _task_2 = _task.clear;

  var _task$1 = /*#__PURE__*/Object.freeze({
    'default': _task,
    __moduleExports: _task,
    set: _task_1,
    clear: _task_2
  });

  var require$$0 = ( _task$1 && _task ) || _task$1;

  var macrotask = require$$0.set;
  var Observer = global.MutationObserver || global.WebKitMutationObserver;
  var process$1 = global.process;
  var Promise$1 = global.Promise;
  var isNode = cof(process$1) == 'process';

  var _microtask = function () {
    var head, last, notify;

    var flush = function () {
      var parent, fn;
      if (isNode && (parent = process$1.domain)) parent.exit();
      while (head) {
        fn = head.fn;
        head = head.next;
        try {
          fn();
        } catch (e) {
          if (head) notify();
          else last = undefined;
          throw e;
        }
      } last = undefined;
      if (parent) parent.enter();
    };

    // Node.js
    if (isNode) {
      notify = function () {
        process$1.nextTick(flush);
      };
    // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
    } else if (Observer && !(global.navigator && global.navigator.standalone)) {
      var toggle = true;
      var node = document.createTextNode('');
      new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
      notify = function () {
        node.data = toggle = !toggle;
      };
    // environments with maybe non-completely correct, but existent Promise
    } else if (Promise$1 && Promise$1.resolve) {
      // Promise.resolve without an argument throws an error in LG WebOS 2
      var promise = Promise$1.resolve(undefined);
      notify = function () {
        promise.then(flush);
      };
    // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout
    } else {
      notify = function () {
        // strange IE + webpack dev server bug - use .call(global)
        macrotask.call(global, flush);
      };
    }

    return function (fn) {
      var task = { fn: fn, next: undefined };
      if (last) last.next = task;
      if (!head) {
        head = task;
        notify();
      } last = task;
    };
  };

  var _microtask$1 = /*#__PURE__*/Object.freeze({
    'default': _microtask,
    __moduleExports: _microtask
  });

  // 25.4.1.5 NewPromiseCapability(C)


  function PromiseCapability(C) {
    var resolve, reject;
    this.promise = new C(function ($$resolve, $$reject) {
      if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
      resolve = $$resolve;
      reject = $$reject;
    });
    this.resolve = aFunction(resolve);
    this.reject = aFunction(reject);
  }

  var f$1 = function (C) {
    return new PromiseCapability(C);
  };

  var _newPromiseCapability = {
  	f: f$1
  };

  var _newPromiseCapability$1 = /*#__PURE__*/Object.freeze({
    'default': _newPromiseCapability,
    __moduleExports: _newPromiseCapability,
    f: f$1
  });

  var _perform = function (exec) {
    try {
      return { e: false, v: exec() };
    } catch (e) {
      return { e: true, v: e };
    }
  };

  var _perform$1 = /*#__PURE__*/Object.freeze({
    'default': _perform,
    __moduleExports: _perform
  });

  var navigator = global.navigator;

  var _userAgent = navigator && navigator.userAgent || '';

  var _userAgent$1 = /*#__PURE__*/Object.freeze({
    'default': _userAgent,
    __moduleExports: _userAgent
  });

  var newPromiseCapabilityModule = ( _newPromiseCapability$1 && _newPromiseCapability ) || _newPromiseCapability$1;

  var _promiseResolve = function (C, x) {
    anObject(C);
    if (isObject(x) && x.constructor === C) return x;
    var promiseCapability = newPromiseCapabilityModule.f(C);
    var resolve = promiseCapability.resolve;
    resolve(x);
    return promiseCapability.promise;
  };

  var _promiseResolve$1 = /*#__PURE__*/Object.freeze({
    'default': _promiseResolve,
    __moduleExports: _promiseResolve
  });

  var _redefineAll = function (target, src, safe) {
    for (var key in src) redefine(target, key, src[key], safe);
    return target;
  };

  var _redefineAll$1 = /*#__PURE__*/Object.freeze({
    'default': _redefineAll,
    __moduleExports: _redefineAll
  });

  var def = $DP.f;

  var TAG$1 = wks('toStringTag');

  var _setToStringTag = function (it, tag, stat) {
    if (it && !has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
  };

  var _setToStringTag$1 = /*#__PURE__*/Object.freeze({
    'default': _setToStringTag,
    __moduleExports: _setToStringTag
  });

  var SPECIES$1 = wks('species');

  var _setSpecies = function (KEY) {
    var C = global[KEY];
    if (DESCRIPTORS && C && !C[SPECIES$1]) $DP.f(C, SPECIES$1, {
      configurable: true,
      get: function () { return this; }
    });
  };

  var _setSpecies$1 = /*#__PURE__*/Object.freeze({
    'default': _setSpecies,
    __moduleExports: _setSpecies
  });

  var ITERATOR$2 = wks('iterator');
  var SAFE_CLOSING = false;

  try {
    var riter = [7][ITERATOR$2]();
    riter['return'] = function () { SAFE_CLOSING = true; };
    // eslint-disable-next-line no-throw-literal
    Array.from(riter, function () { throw 2; });
  } catch (e) { /* empty */ }

  var _iterDetect = function (exec, skipClosing) {
    if (!skipClosing && !SAFE_CLOSING) return false;
    var safe = false;
    try {
      var arr = [7];
      var iter = arr[ITERATOR$2]();
      iter.next = function () { return { done: safe = true }; };
      arr[ITERATOR$2] = function () { return iter; };
      exec(arr);
    } catch (e) { /* empty */ }
    return safe;
  };

  var _iterDetect$1 = /*#__PURE__*/Object.freeze({
    'default': _iterDetect,
    __moduleExports: _iterDetect
  });

  var $export$1 = ( _export$1 && _export ) || _export$1;

  var anInstance = ( _anInstance$1 && _anInstance ) || _anInstance$1;

  var forOf = ( _forOf$1 && _forOf ) || _forOf$1;

  var speciesConstructor = ( _speciesConstructor$1 && _speciesConstructor ) || _speciesConstructor$1;

  var require$$1$1 = ( _microtask$1 && _microtask ) || _microtask$1;

  var perform = ( _perform$1 && _perform ) || _perform$1;

  var userAgent = ( _userAgent$1 && _userAgent ) || _userAgent$1;

  var promiseResolve = ( _promiseResolve$1 && _promiseResolve ) || _promiseResolve$1;

  var require$$3 = ( _redefineAll$1 && _redefineAll ) || _redefineAll$1;

  var setToStringTag = ( _setToStringTag$1 && _setToStringTag ) || _setToStringTag$1;

  var require$$5 = ( _setSpecies$1 && _setSpecies ) || _setSpecies$1;

  var require$$7 = ( _iterDetect$1 && _iterDetect ) || _iterDetect$1;

  var task = require$$0.set;
  var microtask = require$$1$1();




  var PROMISE = 'Promise';
  var TypeError$1 = global.TypeError;
  var process$2 = global.process;
  var versions = process$2 && process$2.versions;
  var v8 = versions && versions.v8 || '';
  var $Promise = global[PROMISE];
  var isNode$1 = classof(process$2) == 'process';
  var empty = function () { /* empty */ };
  var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
  var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

  var USE_NATIVE = !!function () {
    try {
      // correct subclassing with @@species support
      var promise = $Promise.resolve(1);
      var FakePromise = (promise.constructor = {})[wks('species')] = function (exec) {
        exec(empty, empty);
      };
      // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
      return (isNode$1 || typeof PromiseRejectionEvent == 'function')
        && promise.then(empty) instanceof FakePromise
        // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
        // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
        // we can't detect it synchronously, so just check versions
        && v8.indexOf('6.6') !== 0
        && userAgent.indexOf('Chrome/66') === -1;
    } catch (e) { /* empty */ }
  }();

  // helpers
  var isThenable = function (it) {
    var then;
    return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
  };
  var notify = function (promise, isReject) {
    if (promise._n) return;
    promise._n = true;
    var chain = promise._c;
    microtask(function () {
      var value = promise._v;
      var ok = promise._s == 1;
      var i = 0;
      var run = function (reaction) {
        var handler = ok ? reaction.ok : reaction.fail;
        var resolve = reaction.resolve;
        var reject = reaction.reject;
        var domain = reaction.domain;
        var result, then, exited;
        try {
          if (handler) {
            if (!ok) {
              if (promise._h == 2) onHandleUnhandled(promise);
              promise._h = 1;
            }
            if (handler === true) result = value;
            else {
              if (domain) domain.enter();
              result = handler(value); // may throw
              if (domain) {
                domain.exit();
                exited = true;
              }
            }
            if (result === reaction.promise) {
              reject(TypeError$1('Promise-chain cycle'));
            } else if (then = isThenable(result)) {
              then.call(result, resolve, reject);
            } else resolve(result);
          } else reject(value);
        } catch (e) {
          if (domain && !exited) domain.exit();
          reject(e);
        }
      };
      while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
      promise._c = [];
      promise._n = false;
      if (isReject && !promise._h) onUnhandled(promise);
    });
  };
  var onUnhandled = function (promise) {
    task.call(global, function () {
      var value = promise._v;
      var unhandled = isUnhandled(promise);
      var result, handler, console;
      if (unhandled) {
        result = perform(function () {
          if (isNode$1) {
            process$2.emit('unhandledRejection', value, promise);
          } else if (handler = global.onunhandledrejection) {
            handler({ promise: promise, reason: value });
          } else if ((console = global.console) && console.error) {
            console.error('Unhandled promise rejection', value);
          }
        });
        // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
        promise._h = isNode$1 || isUnhandled(promise) ? 2 : 1;
      } promise._a = undefined;
      if (unhandled && result.e) throw result.v;
    });
  };
  var isUnhandled = function (promise) {
    return promise._h !== 1 && (promise._a || promise._c).length === 0;
  };
  var onHandleUnhandled = function (promise) {
    task.call(global, function () {
      var handler;
      if (isNode$1) {
        process$2.emit('rejectionHandled', promise);
      } else if (handler = global.onrejectionhandled) {
        handler({ promise: promise, reason: promise._v });
      }
    });
  };
  var $reject = function (value) {
    var promise = this;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    promise._v = value;
    promise._s = 2;
    if (!promise._a) promise._a = promise._c.slice();
    notify(promise, true);
  };
  var $resolve = function (value) {
    var promise = this;
    var then;
    if (promise._d) return;
    promise._d = true;
    promise = promise._w || promise; // unwrap
    try {
      if (promise === value) throw TypeError$1("Promise can't be resolved itself");
      if (then = isThenable(value)) {
        microtask(function () {
          var wrapper = { _w: promise, _d: false }; // wrap
          try {
            then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
          } catch (e) {
            $reject.call(wrapper, e);
          }
        });
      } else {
        promise._v = value;
        promise._s = 1;
        notify(promise, false);
      }
    } catch (e) {
      $reject.call({ _w: promise, _d: false }, e); // wrap
    }
  };

  // constructor polyfill
  if (!USE_NATIVE) {
    // 25.4.3.1 Promise(executor)
    $Promise = function Promise(executor) {
      anInstance(this, $Promise, PROMISE, '_h');
      aFunction(executor);
      Internal.call(this);
      try {
        executor(ctx($resolve, this, 1), ctx($reject, this, 1));
      } catch (err) {
        $reject.call(this, err);
      }
    };
    // eslint-disable-next-line no-unused-vars
    Internal = function Promise(executor) {
      this._c = [];             // <- awaiting reactions
      this._a = undefined;      // <- checked in isUnhandled reactions
      this._s = 0;              // <- state
      this._d = false;          // <- done
      this._v = undefined;      // <- value
      this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
      this._n = false;          // <- notify
    };
    Internal.prototype = require$$3($Promise.prototype, {
      // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
      then: function then(onFulfilled, onRejected) {
        var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
        reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
        reaction.fail = typeof onRejected == 'function' && onRejected;
        reaction.domain = isNode$1 ? process$2.domain : undefined;
        this._c.push(reaction);
        if (this._a) this._a.push(reaction);
        if (this._s) notify(this, false);
        return reaction.promise;
      },
      // 25.4.5.1 Promise.prototype.catch(onRejected)
      'catch': function (onRejected) {
        return this.then(undefined, onRejected);
      }
    });
    OwnPromiseCapability = function () {
      var promise = new Internal();
      this.promise = promise;
      this.resolve = ctx($resolve, promise, 1);
      this.reject = ctx($reject, promise, 1);
    };
    newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
      return C === $Promise || C === Wrapper
        ? new OwnPromiseCapability(C)
        : newGenericPromiseCapability(C);
    };
  }

  $export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE, { Promise: $Promise });
  setToStringTag($Promise, PROMISE);
  require$$5(PROMISE);
  Wrapper = core[PROMISE];

  // statics
  $export$1($export$1.S + $export$1.F * !USE_NATIVE, PROMISE, {
    // 25.4.4.5 Promise.reject(r)
    reject: function reject(r) {
      var capability = newPromiseCapability(this);
      var $$reject = capability.reject;
      $$reject(r);
      return capability.promise;
    }
  });
  $export$1($export$1.S + $export$1.F * (LIBRARY || !USE_NATIVE), PROMISE, {
    // 25.4.4.6 Promise.resolve(x)
    resolve: function resolve(x) {
      return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
    }
  });
  $export$1($export$1.S + $export$1.F * !(USE_NATIVE && require$$7(function (iter) {
    $Promise.all(iter)['catch'](empty);
  })), PROMISE, {
    // 25.4.4.1 Promise.all(iterable)
    all: function all(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var resolve = capability.resolve;
      var reject = capability.reject;
      var result = perform(function () {
        var values = [];
        var index = 0;
        var remaining = 1;
        forOf(iterable, false, function (promise) {
          var $index = index++;
          var alreadyCalled = false;
          values.push(undefined);
          remaining++;
          C.resolve(promise).then(function (value) {
            if (alreadyCalled) return;
            alreadyCalled = true;
            values[$index] = value;
            --remaining || resolve(values);
          }, reject);
        });
        --remaining || resolve(values);
      });
      if (result.e) reject(result.v);
      return capability.promise;
    },
    // 25.4.4.4 Promise.race(iterable)
    race: function race(iterable) {
      var C = this;
      var capability = newPromiseCapability(C);
      var reject = capability.reject;
      var result = perform(function () {
        forOf(iterable, false, function (promise) {
          C.resolve(promise).then(capability.resolve, reject);
        });
      });
      if (result.e) reject(result.v);
      return capability.promise;
    }
  });

  // 19.1.3.6 Object.prototype.toString()

  var test = {};
  test[wks('toStringTag')] = 'z';
  if (test + '' != '[object z]') {
    redefine(Object.prototype, 'toString', function toString() {
      return '[object ' + classof(this) + ']';
    }, true);
  }

  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
  $export$1($export$1.S + $export$1.F * !DESCRIPTORS, 'Object', { defineProperty: $DP.f });

  // fallback for non-array-like ES3 and non-enumerable old V8 strings

  // eslint-disable-next-line no-prototype-builtins
  var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
    return cof(it) == 'String' ? it.split('') : Object(it);
  };

  var _iobject$1 = /*#__PURE__*/Object.freeze({
    'default': _iobject,
    __moduleExports: _iobject
  });

  // 7.2.1 RequireObjectCoercible(argument)
  var _defined = function (it) {
    if (it == undefined) throw TypeError("Can't call method on  " + it);
    return it;
  };

  var _defined$1 = /*#__PURE__*/Object.freeze({
    'default': _defined,
    __moduleExports: _defined
  });

  var IObject = ( _iobject$1 && _iobject ) || _iobject$1;

  var defined = ( _defined$1 && _defined ) || _defined$1;

  // to indexed object, toObject with fallback for non-array-like ES3 strings


  var _toIobject = function (it) {
    return IObject(defined(it));
  };

  var _toIobject$1 = /*#__PURE__*/Object.freeze({
    'default': _toIobject,
    __moduleExports: _toIobject
  });

  var max = Math.max;
  var min$1 = Math.min;
  var _toAbsoluteIndex = function (index, length) {
    index = toInteger(index);
    return index < 0 ? max(index + length, 0) : min$1(index, length);
  };

  var _toAbsoluteIndex$1 = /*#__PURE__*/Object.freeze({
    'default': _toAbsoluteIndex,
    __moduleExports: _toAbsoluteIndex
  });

  var toIObject = ( _toIobject$1 && _toIobject ) || _toIobject$1;

  var toAbsoluteIndex = ( _toAbsoluteIndex$1 && _toAbsoluteIndex ) || _toAbsoluteIndex$1;

  // false -> Array#indexOf
  // true  -> Array#includes



  var _arrayIncludes = function (IS_INCLUDES) {
    return function ($this, el, fromIndex) {
      var O = toIObject($this);
      var length = toLength(O.length);
      var index = toAbsoluteIndex(fromIndex, length);
      var value;
      // Array#includes uses SameValueZero equality algorithm
      // eslint-disable-next-line no-self-compare
      if (IS_INCLUDES && el != el) while (length > index) {
        value = O[index++];
        // eslint-disable-next-line no-self-compare
        if (value != value) return true;
      // Array#indexOf ignores holes, Array#includes - not
      } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      } return !IS_INCLUDES && -1;
    };
  };

  var _arrayIncludes$1 = /*#__PURE__*/Object.freeze({
    'default': _arrayIncludes,
    __moduleExports: _arrayIncludes
  });

  var shared$1 = shared('keys');

  var _sharedKey = function (key) {
    return shared$1[key] || (shared$1[key] = uid(key));
  };

  var _sharedKey$1 = /*#__PURE__*/Object.freeze({
    'default': _sharedKey,
    __moduleExports: _sharedKey
  });

  var require$$0$1 = ( _arrayIncludes$1 && _arrayIncludes ) || _arrayIncludes$1;

  var require$$0$2 = ( _sharedKey$1 && _sharedKey ) || _sharedKey$1;

  var arrayIndexOf = require$$0$1(false);
  var IE_PROTO = require$$0$2('IE_PROTO');

  var _objectKeysInternal = function (object, names) {
    var O = toIObject(object);
    var i = 0;
    var result = [];
    var key;
    for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
    // Don't enum bug & hidden keys
    while (names.length > i) if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
    return result;
  };

  var _objectKeysInternal$1 = /*#__PURE__*/Object.freeze({
    'default': _objectKeysInternal,
    __moduleExports: _objectKeysInternal
  });

  // IE 8- don't enum bug keys
  var _enumBugKeys = (
    'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
  ).split(',');

  var _enumBugKeys$1 = /*#__PURE__*/Object.freeze({
    'default': _enumBugKeys,
    __moduleExports: _enumBugKeys
  });

  var $keys = ( _objectKeysInternal$1 && _objectKeysInternal ) || _objectKeysInternal$1;

  var enumBugKeys = ( _enumBugKeys$1 && _enumBugKeys ) || _enumBugKeys$1;

  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

  var hiddenKeys = enumBugKeys.concat('length', 'prototype');

  var f$2 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
    return $keys(O, hiddenKeys);
  };

  var _objectGopn = {
  	f: f$2
  };

  var _objectGopn$1 = /*#__PURE__*/Object.freeze({
    'default': _objectGopn,
    __moduleExports: _objectGopn,
    f: f$2
  });

  var f$3 = Object.getOwnPropertySymbols;

  var _objectGops = {
  	f: f$3
  };

  var _objectGops$1 = /*#__PURE__*/Object.freeze({
    'default': _objectGops,
    __moduleExports: _objectGops,
    f: f$3
  });

  var require$$1$2 = ( _objectGopn$1 && _objectGopn ) || _objectGopn$1;

  var $GOPS = ( _objectGops$1 && _objectGops ) || _objectGops$1;

  // all object keys, includes non-enumerable and symbols



  var Reflect$1 = global.Reflect;
  var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
    var keys = require$$1$2.f(anObject(it));
    var getSymbols = $GOPS.f;
    return getSymbols ? keys.concat(getSymbols(it)) : keys;
  };

  var _ownKeys$1 = /*#__PURE__*/Object.freeze({
    'default': _ownKeys,
    __moduleExports: _ownKeys
  });

  var require$$0$3 = ( _ownKeys$1 && _ownKeys ) || _ownKeys$1;

  // 26.1.11 Reflect.ownKeys(target)


  $export$1($export$1.S, 'Reflect', { ownKeys: require$$0$3 });

  var f$4 = wks;

  var _wksExt = {
  	f: f$4
  };

  var _wksExt$1 = /*#__PURE__*/Object.freeze({
    'default': _wksExt,
    __moduleExports: _wksExt,
    f: f$4
  });

  var wksExt = ( _wksExt$1 && _wksExt ) || _wksExt$1;

  var defineProperty = $DP.f;
  var _wksDefine = function (name) {
    var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
    if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
  };

  var _wksDefine$1 = /*#__PURE__*/Object.freeze({
    'default': _wksDefine,
    __moduleExports: _wksDefine
  });

  var wksDefine = ( _wksDefine$1 && _wksDefine ) || _wksDefine$1;

  wksDefine('asyncIterator');

  var _meta = createCommonjsModule(function (module) {
  var META = uid('meta');


  var setDesc = $DP.f;
  var id = 0;
  var isExtensible = Object.isExtensible || function () {
    return true;
  };
  var FREEZE = !$fails(function () {
    return isExtensible(Object.preventExtensions({}));
  });
  var setMeta = function (it) {
    setDesc(it, META, { value: {
      i: 'O' + ++id, // object ID
      w: {}          // weak collections IDs
    } });
  };
  var fastKey = function (it, create) {
    // return primitive with prefix
    if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return 'F';
      // not necessary to add metadata
      if (!create) return 'E';
      // add missing metadata
      setMeta(it);
    // return object ID
    } return it[META].i;
  };
  var getWeak = function (it, create) {
    if (!has(it, META)) {
      // can't set metadata to uncaught frozen object
      if (!isExtensible(it)) return true;
      // not necessary to add metadata
      if (!create) return false;
      // add missing metadata
      setMeta(it);
    // return hash weak collections IDs
    } return it[META].w;
  };
  // add metadata on freeze-family methods calling
  var onFreeze = function (it) {
    if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
    return it;
  };
  var meta = module.exports = {
    KEY: META,
    NEED: false,
    fastKey: fastKey,
    getWeak: getWeak,
    onFreeze: onFreeze
  };
  });
  var _meta_1 = _meta.KEY;
  var _meta_2 = _meta.NEED;
  var _meta_3 = _meta.fastKey;
  var _meta_4 = _meta.getWeak;
  var _meta_5 = _meta.onFreeze;

  var _meta$1 = /*#__PURE__*/Object.freeze({
    'default': _meta,
    __moduleExports: _meta,
    KEY: _meta_1,
    NEED: _meta_2,
    fastKey: _meta_3,
    getWeak: _meta_4,
    onFreeze: _meta_5
  });

  // 19.1.2.14 / 15.2.3.14 Object.keys(O)



  var _objectKeys = Object.keys || function keys(O) {
    return $keys(O, enumBugKeys);
  };

  var _objectKeys$1 = /*#__PURE__*/Object.freeze({
    'default': _objectKeys,
    __moduleExports: _objectKeys
  });

  var f$5 = {}.propertyIsEnumerable;

  var _objectPie = {
  	f: f$5
  };

  var _objectPie$1 = /*#__PURE__*/Object.freeze({
    'default': _objectPie,
    __moduleExports: _objectPie,
    f: f$5
  });

  var getKeys = ( _objectKeys$1 && _objectKeys ) || _objectKeys$1;

  var require$$2$1 = ( _objectPie$1 && _objectPie ) || _objectPie$1;

  // all enumerable object keys, includes symbols



  var _enumKeys = function (it) {
    var result = getKeys(it);
    var getSymbols = $GOPS.f;
    if (getSymbols) {
      var symbols = getSymbols(it);
      var isEnum = require$$2$1.f;
      var i = 0;
      var key;
      while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
    } return result;
  };

  var _enumKeys$1 = /*#__PURE__*/Object.freeze({
    'default': _enumKeys,
    __moduleExports: _enumKeys
  });

  // 7.2.2 IsArray(argument)

  var _isArray = Array.isArray || function isArray(arg) {
    return cof(arg) == 'Array';
  };

  var _isArray$1 = /*#__PURE__*/Object.freeze({
    'default': _isArray,
    __moduleExports: _isArray
  });

  // 7.1.13 ToObject(argument)

  var _toObject = function (it) {
    return Object(defined(it));
  };

  var _toObject$1 = /*#__PURE__*/Object.freeze({
    'default': _toObject,
    __moduleExports: _toObject
  });

  var _objectDps = DESCRIPTORS ? Object.defineProperties : function defineProperties(O, Properties) {
    anObject(O);
    var keys = getKeys(Properties);
    var length = keys.length;
    var i = 0;
    var P;
    while (length > i) $DP.f(O, P = keys[i++], Properties[P]);
    return O;
  };

  var _objectDps$1 = /*#__PURE__*/Object.freeze({
    'default': _objectDps,
    __moduleExports: _objectDps
  });

  var dPs = ( _objectDps$1 && _objectDps ) || _objectDps$1;

  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



  var IE_PROTO$1 = require$$0$2('IE_PROTO');
  var Empty = function () { /* empty */ };
  var PROTOTYPE$1 = 'prototype';

  // Create object with fake `null` prototype: use iframe Object with cleared prototype
  var createDict = function () {
    // Thrash, waste and sodomy: IE GC bug
    var iframe = require$$1('iframe');
    var i = enumBugKeys.length;
    var lt = '<';
    var gt = '>';
    var iframeDocument;
    iframe.style.display = 'none';
    require$$2.appendChild(iframe);
    iframe.src = 'javascript:'; // eslint-disable-line no-script-url
    // createDict = iframe.contentWindow.Object;
    // html.removeChild(iframe);
    iframeDocument = iframe.contentWindow.document;
    iframeDocument.open();
    iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
    iframeDocument.close();
    createDict = iframeDocument.F;
    while (i--) delete createDict[PROTOTYPE$1][enumBugKeys[i]];
    return createDict();
  };

  var _objectCreate = Object.create || function create(O, Properties) {
    var result;
    if (O !== null) {
      Empty[PROTOTYPE$1] = anObject(O);
      result = new Empty();
      Empty[PROTOTYPE$1] = null;
      // add "__proto__" for Object.getPrototypeOf polyfill
      result[IE_PROTO$1] = O;
    } else result = createDict();
    return Properties === undefined ? result : dPs(result, Properties);
  };

  var _objectCreate$1 = /*#__PURE__*/Object.freeze({
    'default': _objectCreate,
    __moduleExports: _objectCreate
  });

  // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

  var gOPN = require$$1$2.f;
  var toString$1 = {}.toString;

  var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
    ? Object.getOwnPropertyNames(window) : [];

  var getWindowNames = function (it) {
    try {
      return gOPN(it);
    } catch (e) {
      return windowNames.slice();
    }
  };

  var f$6 = function getOwnPropertyNames(it) {
    return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
  };

  var _objectGopnExt = {
  	f: f$6
  };

  var _objectGopnExt$1 = /*#__PURE__*/Object.freeze({
    'default': _objectGopnExt,
    __moduleExports: _objectGopnExt,
    f: f$6
  });

  var gOPD = Object.getOwnPropertyDescriptor;

  var f$7 = DESCRIPTORS ? gOPD : function getOwnPropertyDescriptor(O, P) {
    O = toIObject(O);
    P = toPrimitive(P, true);
    if (IE8_DOM_DEFINE) try {
      return gOPD(O, P);
    } catch (e) { /* empty */ }
    if (has(O, P)) return descriptor(!require$$2$1.f.call(O, P), O[P]);
  };

  var _objectGopd = {
  	f: f$7
  };

  var _objectGopd$1 = /*#__PURE__*/Object.freeze({
    'default': _objectGopd,
    __moduleExports: _objectGopd,
    f: f$7
  });

  var require$$0$4 = ( _meta$1 && _meta ) || _meta$1;

  var enumKeys = ( _enumKeys$1 && _enumKeys ) || _enumKeys$1;

  var isArray = ( _isArray$1 && _isArray ) || _isArray$1;

  var toObject = ( _toObject$1 && _toObject ) || _toObject$1;

  var create = ( _objectCreate$1 && _objectCreate ) || _objectCreate$1;

  var gOPNExt = ( _objectGopnExt$1 && _objectGopnExt ) || _objectGopnExt$1;

  var $GOPD = ( _objectGopd$1 && _objectGopd ) || _objectGopd$1;

  // ECMAScript 6 symbols shim





  var META = require$$0$4.KEY;





















  var gOPD$1 = $GOPD.f;
  var dP$2 = $DP.f;
  var gOPN$1 = gOPNExt.f;
  var $Symbol = global.Symbol;
  var $JSON = global.JSON;
  var _stringify = $JSON && $JSON.stringify;
  var PROTOTYPE$2 = 'prototype';
  var HIDDEN = wks('_hidden');
  var TO_PRIMITIVE = wks('toPrimitive');
  var isEnum = {}.propertyIsEnumerable;
  var SymbolRegistry = shared('symbol-registry');
  var AllSymbols = shared('symbols');
  var OPSymbols = shared('op-symbols');
  var ObjectProto = Object[PROTOTYPE$2];
  var USE_NATIVE$1 = typeof $Symbol == 'function' && !!$GOPS.f;
  var QObject = global.QObject;
  // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
  var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

  // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
  var setSymbolDesc = DESCRIPTORS && $fails(function () {
    return create(dP$2({}, 'a', {
      get: function () { return dP$2(this, 'a', { value: 7 }).a; }
    })).a != 7;
  }) ? function (it, key, D) {
    var protoDesc = gOPD$1(ObjectProto, key);
    if (protoDesc) delete ObjectProto[key];
    dP$2(it, key, D);
    if (protoDesc && it !== ObjectProto) dP$2(ObjectProto, key, protoDesc);
  } : dP$2;

  var wrap = function (tag) {
    var sym = AllSymbols[tag] = create($Symbol[PROTOTYPE$2]);
    sym._k = tag;
    return sym;
  };

  var isSymbol = USE_NATIVE$1 && typeof $Symbol.iterator == 'symbol' ? function (it) {
    return typeof it == 'symbol';
  } : function (it) {
    return it instanceof $Symbol;
  };

  var $defineProperty = function defineProperty(it, key, D) {
    if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
    anObject(it);
    key = toPrimitive(key, true);
    anObject(D);
    if (has(AllSymbols, key)) {
      if (!D.enumerable) {
        if (!has(it, HIDDEN)) dP$2(it, HIDDEN, descriptor(1, {}));
        it[HIDDEN][key] = true;
      } else {
        if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
        D = create(D, { enumerable: descriptor(0, false) });
      } return setSymbolDesc(it, key, D);
    } return dP$2(it, key, D);
  };
  var $defineProperties = function defineProperties(it, P) {
    anObject(it);
    var keys = enumKeys(P = toIObject(P));
    var i = 0;
    var l = keys.length;
    var key;
    while (l > i) $defineProperty(it, key = keys[i++], P[key]);
    return it;
  };
  var $create = function create$1(it, P) {
    return P === undefined ? create(it) : $defineProperties(create(it), P);
  };
  var $propertyIsEnumerable = function propertyIsEnumerable(key) {
    var E = isEnum.call(this, key = toPrimitive(key, true));
    if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
    return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
  };
  var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
    it = toIObject(it);
    key = toPrimitive(key, true);
    if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
    var D = gOPD$1(it, key);
    if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
    return D;
  };
  var $getOwnPropertyNames = function getOwnPropertyNames(it) {
    var names = gOPN$1(toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
    } return result;
  };
  var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
    var IS_OP = it === ObjectProto;
    var names = gOPN$1(IS_OP ? OPSymbols : toIObject(it));
    var result = [];
    var i = 0;
    var key;
    while (names.length > i) {
      if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
    } return result;
  };

  // 19.4.1.1 Symbol([description])
  if (!USE_NATIVE$1) {
    $Symbol = function Symbol() {
      if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
      var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
      var $set = function (value) {
        if (this === ObjectProto) $set.call(OPSymbols, value);
        if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
        setSymbolDesc(this, tag, descriptor(1, value));
      };
      if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
      return wrap(tag);
    };
    redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
      return this._k;
    });

    $GOPD.f = $getOwnPropertyDescriptor;
    $DP.f = $defineProperty;
    require$$1$2.f = gOPNExt.f = $getOwnPropertyNames;
    require$$2$1.f = $propertyIsEnumerable;
    $GOPS.f = $getOwnPropertySymbols;

    if (DESCRIPTORS && !LIBRARY) {
      redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
    }

    wksExt.f = function (name) {
      return wrap(wks(name));
    };
  }

  $export$1($export$1.G + $export$1.W + $export$1.F * !USE_NATIVE$1, { Symbol: $Symbol });

  for (var es6Symbols = (
    // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
    'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
  ).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

  for (var wellKnownSymbols = getKeys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

  $export$1($export$1.S + $export$1.F * !USE_NATIVE$1, 'Symbol', {
    // 19.4.2.1 Symbol.for(key)
    'for': function (key) {
      return has(SymbolRegistry, key += '')
        ? SymbolRegistry[key]
        : SymbolRegistry[key] = $Symbol(key);
    },
    // 19.4.2.5 Symbol.keyFor(sym)
    keyFor: function keyFor(sym) {
      if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
      for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
    },
    useSetter: function () { setter = true; },
    useSimple: function () { setter = false; }
  });

  $export$1($export$1.S + $export$1.F * !USE_NATIVE$1, 'Object', {
    // 19.1.2.2 Object.create(O [, Properties])
    create: $create,
    // 19.1.2.4 Object.defineProperty(O, P, Attributes)
    defineProperty: $defineProperty,
    // 19.1.2.3 Object.defineProperties(O, Properties)
    defineProperties: $defineProperties,
    // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
    getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
    // 19.1.2.7 Object.getOwnPropertyNames(O)
    getOwnPropertyNames: $getOwnPropertyNames,
    // 19.1.2.8 Object.getOwnPropertySymbols(O)
    getOwnPropertySymbols: $getOwnPropertySymbols
  });

  // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
  // https://bugs.chromium.org/p/v8/issues/detail?id=3443
  var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

  $export$1($export$1.S + $export$1.F * FAILS_ON_PRIMITIVES, 'Object', {
    getOwnPropertySymbols: function getOwnPropertySymbols(it) {
      return $GOPS.f(toObject(it));
    }
  });

  // 24.3.2 JSON.stringify(value [, replacer [, space]])
  $JSON && $export$1($export$1.S + $export$1.F * (!USE_NATIVE$1 || $fails(function () {
    var S = $Symbol();
    // MS Edge converts symbol values to JSON as {}
    // WebKit converts symbol values to JSON as null
    // V8 throws on boxed symbols
    return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
  })), 'JSON', {
    stringify: function stringify(it) {
      var args = [it];
      var i = 1;
      var replacer, $replacer;
      while (arguments.length > i) args.push(arguments[i++]);
      $replacer = replacer = args[1];
      if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
      if (!isArray(replacer)) replacer = function (key, value) {
        if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
        if (!isSymbol(value)) return value;
      };
      args[1] = replacer;
      return _stringify.apply($JSON, args);
    }
  });

  // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
  $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
  // 19.4.3.5 Symbol.prototype[@@toStringTag]
  setToStringTag($Symbol, 'Symbol');
  // 20.2.1.9 Math[@@toStringTag]
  setToStringTag(Math, 'Math', true);
  // 24.3.3 JSON[@@toStringTag]
  setToStringTag(global.JSON, 'JSON', true);

  // 22.1.3.31 Array.prototype[@@unscopables]
  var UNSCOPABLES = wks('unscopables');
  var ArrayProto$1 = Array.prototype;
  if (ArrayProto$1[UNSCOPABLES] == undefined) hide(ArrayProto$1, UNSCOPABLES, {});
  var _addToUnscopables = function (key) {
    ArrayProto$1[UNSCOPABLES][key] = true;
  };

  var _addToUnscopables$1 = /*#__PURE__*/Object.freeze({
    'default': _addToUnscopables,
    __moduleExports: _addToUnscopables
  });

  var _iterStep = function (done, value) {
    return { value: value, done: !!done };
  };

  var _iterStep$1 = /*#__PURE__*/Object.freeze({
    'default': _iterStep,
    __moduleExports: _iterStep
  });

  var IteratorPrototype = {};

  // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
  hide(IteratorPrototype, wks('iterator'), function () { return this; });

  var _iterCreate = function (Constructor, NAME, next) {
    Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
    setToStringTag(Constructor, NAME + ' Iterator');
  };

  var _iterCreate$1 = /*#__PURE__*/Object.freeze({
    'default': _iterCreate,
    __moduleExports: _iterCreate
  });

  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


  var IE_PROTO$2 = require$$0$2('IE_PROTO');
  var ObjectProto$1 = Object.prototype;

  var _objectGpo = Object.getPrototypeOf || function (O) {
    O = toObject(O);
    if (has(O, IE_PROTO$2)) return O[IE_PROTO$2];
    if (typeof O.constructor == 'function' && O instanceof O.constructor) {
      return O.constructor.prototype;
    } return O instanceof Object ? ObjectProto$1 : null;
  };

  var _objectGpo$1 = /*#__PURE__*/Object.freeze({
    'default': _objectGpo,
    __moduleExports: _objectGpo
  });

  var $iterCreate = ( _iterCreate$1 && _iterCreate ) || _iterCreate$1;

  var getPrototypeOf = ( _objectGpo$1 && _objectGpo ) || _objectGpo$1;

  var ITERATOR$3 = wks('iterator');
  var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
  var FF_ITERATOR = '@@iterator';
  var KEYS = 'keys';
  var VALUES = 'values';

  var returnThis = function () { return this; };

  var _iterDefine = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
    $iterCreate(Constructor, NAME, next);
    var getMethod = function (kind) {
      if (!BUGGY && kind in proto) return proto[kind];
      switch (kind) {
        case KEYS: return function keys() { return new Constructor(this, kind); };
        case VALUES: return function values() { return new Constructor(this, kind); };
      } return function entries() { return new Constructor(this, kind); };
    };
    var TAG = NAME + ' Iterator';
    var DEF_VALUES = DEFAULT == VALUES;
    var VALUES_BUG = false;
    var proto = Base.prototype;
    var $native = proto[ITERATOR$3] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
    var $default = $native || getMethod(DEFAULT);
    var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
    var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
    var methods, key, IteratorPrototype;
    // Fix native
    if ($anyNative) {
      IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
      if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
        // Set @@toStringTag to native iterators
        setToStringTag(IteratorPrototype, TAG, true);
        // fix for some old engines
        if (!LIBRARY && typeof IteratorPrototype[ITERATOR$3] != 'function') hide(IteratorPrototype, ITERATOR$3, returnThis);
      }
    }
    // fix Array#{values, @@iterator}.name in V8 / FF
    if (DEF_VALUES && $native && $native.name !== VALUES) {
      VALUES_BUG = true;
      $default = function values() { return $native.call(this); };
    }
    // Define iterator
    if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR$3])) {
      hide(proto, ITERATOR$3, $default);
    }
    // Plug for library
    Iterators[NAME] = $default;
    Iterators[TAG] = returnThis;
    if (DEFAULT) {
      methods = {
        values: DEF_VALUES ? $default : getMethod(VALUES),
        keys: IS_SET ? $default : getMethod(KEYS),
        entries: $entries
      };
      if (FORCED) for (key in methods) {
        if (!(key in proto)) redefine(proto, key, methods[key]);
      } else $export$1($export$1.P + $export$1.F * (BUGGY || VALUES_BUG), NAME, methods);
    }
    return methods;
  };

  var _iterDefine$1 = /*#__PURE__*/Object.freeze({
    'default': _iterDefine,
    __moduleExports: _iterDefine
  });

  var addToUnscopables = ( _addToUnscopables$1 && _addToUnscopables ) || _addToUnscopables$1;

  var step = ( _iterStep$1 && _iterStep ) || _iterStep$1;

  var require$$0$5 = ( _iterDefine$1 && _iterDefine ) || _iterDefine$1;

  // 22.1.3.4 Array.prototype.entries()
  // 22.1.3.13 Array.prototype.keys()
  // 22.1.3.29 Array.prototype.values()
  // 22.1.3.30 Array.prototype[@@iterator]()
  var es6_array_iterator = require$$0$5(Array, 'Array', function (iterated, kind) {
    this._t = toIObject(iterated); // target
    this._i = 0;                   // next index
    this._k = kind;                // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
  }, function () {
    var O = this._t;
    var kind = this._k;
    var index = this._i++;
    if (!O || index >= O.length) {
      this._t = undefined;
      return step(1);
    }
    if (kind == 'keys') return step(0, index);
    if (kind == 'values') return step(0, O[index]);
    return step(0, [index, O[index]]);
  }, 'values');

  // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
  Iterators.Arguments = Iterators.Array;

  addToUnscopables('keys');
  addToUnscopables('values');
  addToUnscopables('entries');

  var es6_array_iterator$1 = /*#__PURE__*/Object.freeze({
    'default': es6_array_iterator,
    __moduleExports: es6_array_iterator
  });

  var $iterators = ( es6_array_iterator$1 && es6_array_iterator ) || es6_array_iterator$1;

  var ITERATOR$4 = wks('iterator');
  var TO_STRING_TAG = wks('toStringTag');
  var ArrayValues = Iterators.Array;

  var DOMIterables = {
    CSSRuleList: true, // TODO: Not spec compliant, should be false.
    CSSStyleDeclaration: false,
    CSSValueList: false,
    ClientRectList: false,
    DOMRectList: false,
    DOMStringList: false,
    DOMTokenList: true,
    DataTransferItemList: false,
    FileList: false,
    HTMLAllCollection: false,
    HTMLCollection: false,
    HTMLFormElement: false,
    HTMLSelectElement: false,
    MediaList: true, // TODO: Not spec compliant, should be false.
    MimeTypeArray: false,
    NamedNodeMap: false,
    NodeList: true,
    PaintRequestList: false,
    Plugin: false,
    PluginArray: false,
    SVGLengthList: false,
    SVGNumberList: false,
    SVGPathSegList: false,
    SVGPointList: false,
    SVGStringList: false,
    SVGTransformList: false,
    SourceBufferList: false,
    StyleSheetList: true, // TODO: Not spec compliant, should be false.
    TextTrackCueList: false,
    TextTrackList: false,
    TouchList: false
  };

  for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
    var NAME$1 = collections[i];
    var explicit = DOMIterables[NAME$1];
    var Collection = global[NAME$1];
    var proto = Collection && Collection.prototype;
    var key;
    if (proto) {
      if (!proto[ITERATOR$4]) hide(proto, ITERATOR$4, ArrayValues);
      if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME$1);
      Iterators[NAME$1] = ArrayValues;
      if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }

  var Friends =
  /*#__PURE__*/
  function () {
    function Friends(name) {
      _classCallCheck(this, Friends);

      console.log('i am inited');
      this.shareThing = "cacke";
    }

    _createClass(Friends, [{
      key: "share",
      value: function share() {
        console.log('i can share' + this.shareThing);
      }
    }]);

    return Friends;
  }();

  (function() {

    if (self.fetch) {
      return
    }

    function normalizeName(name) {
      if (typeof name !== 'string') {
        name = name.toString();
      }
      if (/[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(name)) {
        throw new TypeError('Invalid character in header field name')
      }
      return name.toLowerCase()
    }

    function normalizeValue(value) {
      if (typeof value !== 'string') {
        value = value.toString();
      }
      return value
    }

    function Headers(headers) {
      this.map = {};

      var self = this;
      if (headers instanceof Headers) {
        headers.forEach(function(name, values) {
          values.forEach(function(value) {
            self.append(name, value);
          });
        });

      } else if (headers) {
        Object.getOwnPropertyNames(headers).forEach(function(name) {
          self.append(name, headers[name]);
        });
      }
    }

    Headers.prototype.append = function(name, value) {
      name = normalizeName(name);
      value = normalizeValue(value);
      var list = this.map[name];
      if (!list) {
        list = [];
        this.map[name] = list;
      }
      list.push(value);
    };

    Headers.prototype['delete'] = function(name) {
      delete this.map[normalizeName(name)];
    };

    Headers.prototype.get = function(name) {
      var values = this.map[normalizeName(name)];
      return values ? values[0] : null
    };

    Headers.prototype.getAll = function(name) {
      return this.map[normalizeName(name)] || []
    };

    Headers.prototype.has = function(name) {
      return this.map.hasOwnProperty(normalizeName(name))
    };

    Headers.prototype.set = function(name, value) {
      this.map[normalizeName(name)] = [normalizeValue(value)];
    };

    // Instead of iterable for now.
    Headers.prototype.forEach = function(callback) {
      var self = this;
      Object.getOwnPropertyNames(this.map).forEach(function(name) {
        callback(name, self.map[name]);
      });
    };

    function consumed(body) {
      if (body.bodyUsed) {
        return fetch.Promise.reject(new TypeError('Already read'))
      }
      body.bodyUsed = true;
    }

    function fileReaderReady(reader) {
      return new fetch.Promise(function(resolve, reject) {
        reader.onload = function() {
          resolve(reader.result);
        };
        reader.onerror = function() {
          reject(reader.error);
        };
      })
    }

    function readBlobAsArrayBuffer(blob) {
      var reader = new FileReader();
      reader.readAsArrayBuffer(blob);
      return fileReaderReady(reader)
    }

    function readBlobAsText(blob) {
      var reader = new FileReader();
      reader.readAsText(blob);
      return fileReaderReady(reader)
    }

    var support = {
      blob: 'FileReader' in self && 'Blob' in self && (function() {
        try {
          new Blob();
          return true
        } catch(e) {
          return false
        }
      })(),
      formData: 'FormData' in self
    };

    function Body() {
      this.bodyUsed = false;


      this._initBody = function(body) {
        this._bodyInit = body;
        if (typeof body === 'string') {
          this._bodyText = body;
        } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
          this._bodyBlob = body;
        } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
          this._bodyFormData = body;
        } else if (!body) {
          this._bodyText = '';
        } else {
          throw new Error('unsupported BodyInit type')
        }
      };

      if (support.blob) {
        this.blob = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected
          }

          if (this._bodyBlob) {
            return fetch.Promise.resolve(this._bodyBlob)
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as blob')
          } else {
            return fetch.Promise.resolve(new Blob([this._bodyText]))
          }
        };

        this.arrayBuffer = function() {
          return this.blob().then(readBlobAsArrayBuffer)
        };

        this.text = function() {
          var rejected = consumed(this);
          if (rejected) {
            return rejected
          }

          if (this._bodyBlob) {
            return readBlobAsText(this._bodyBlob)
          } else if (this._bodyFormData) {
            throw new Error('could not read FormData body as text')
          } else {
            return fetch.Promise.resolve(this._bodyText)
          }
        };
      } else {
        this.text = function() {
          var rejected = consumed(this);
          return rejected ? rejected : fetch.Promise.resolve(this._bodyText)
        };
      }

      if (support.formData) {
        this.formData = function() {
          return this.text().then(decode)
        };
      }

      this.json = function() {
        return this.text().then(function (text) {
            return JSON.parse(text);
        });
      };

      return this
    }

    // HTTP methods whose capitalization should be normalized
    var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

    function normalizeMethod(method) {
      var upcased = method.toUpperCase();
      return (methods.indexOf(upcased) > -1) ? upcased : method
    }

    function Request(url, options) {
      options = options || {};
      this.url = url;

      this.credentials = options.credentials || 'omit';
      this.headers = new Headers(options.headers);
      this.method = normalizeMethod(options.method || 'GET');
      this.mode = options.mode || null;
      this.referrer = null;

      if ((this.method === 'GET' || this.method === 'HEAD') && options.body) {
        throw new TypeError('Body not allowed for GET or HEAD requests')
      }
      this._initBody(options.body);
    }

    function decode(body) {
      var form = new FormData();
      body.trim().split('&').forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
      return form
    }

    function headers(xhr) {
      var head = new Headers();
      var pairs = xhr.getAllResponseHeaders().trim().split('\n');
      pairs.forEach(function(header) {
        var split = header.trim().split(':');
        var key = split.shift().trim();
        var value = split.join(':').trim();
        head.append(key, value);
      });
      return head
    }

    var noXhrPatch =
      typeof window !== 'undefined' && !!window.ActiveXObject &&
        !(window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent);

    function getXhr() {
      // from backbone.js 1.1.2
      // https://github.com/jashkenas/backbone/blob/1.1.2/backbone.js#L1181
      if (noXhrPatch && !(/^(get|post|head|put|delete|options)$/i.test(this.method))) {
        this.usingActiveXhr = true;
        return new ActiveXObject("Microsoft.XMLHTTP");
      }
      return new XMLHttpRequest();
    }

    Body.call(Request.prototype);

    function Response(bodyInit, options) {
      if (!options) {
        options = {};
      }

      this._initBody(bodyInit);
      this.type = 'default';
      this.url = null;
      this.status = options.status;
      this.ok = this.status >= 200 && this.status < 300;
      this.statusText = options.statusText;
      this.headers = options.headers instanceof Headers ? options.headers : new Headers(options.headers);
      this.url = options.url || '';
    }

    Body.call(Response.prototype);

    self.Headers = Headers;
    self.Request = Request;
    self.Response = Response;

    self.fetch = function(input, init) {
      // TODO: Request constructor should accept input, init
      var request;
      if (Request.prototype.isPrototypeOf(input) && !init) {
        request = input;
      } else {
        request = new Request(input, init);
      }

      return new fetch.Promise(function(resolve, reject) {
        var xhr = getXhr();
        if (request.credentials === 'cors') {
          xhr.withCredentials = true;
        }

        function responseURL() {
          if ('responseURL' in xhr) {
            return xhr.responseURL
          }

          // Avoid security warnings on getResponseHeader when not allowed by CORS
          if (/^X-Request-URL:/m.test(xhr.getAllResponseHeaders())) {
            return xhr.getResponseHeader('X-Request-URL')
          }

          return;
        }

        function onload() {
          if (xhr.readyState !== 4) {
            return
          }
          var status = (xhr.status === 1223) ? 204 : xhr.status;
          if (status < 100 || status > 599) {
            reject(new TypeError('Network request failed'));
            return
          }
          var options = {
            status: status,
            statusText: xhr.statusText,
            headers: headers(xhr),
            url: responseURL()
          };
          var body = 'response' in xhr ? xhr.response : xhr.responseText;
          resolve(new Response(body, options));
        }
        xhr.onreadystatechange = onload;
        if (!self.usingActiveXhr) {
          xhr.onload = onload;
          xhr.onerror = function() {
            reject(new TypeError('Network request failed'));
          };
        }

        xhr.open(request.method, request.url, true);

        if ('responseType' in xhr && support.blob) {
          xhr.responseType = 'blob';
        }

        request.headers.forEach(function(name, values) {
          values.forEach(function(value) {
            xhr.setRequestHeader(name, value);
          });
        });

        xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
      })
    };
    fetch.Promise = self.Promise; // you could change it to your favorite alternative
    self.fetch.polyfill = true;
  })();

  function mix() {
    for (var _len = arguments.length, mixins = new Array(_len), _key = 0; _key < _len; _key++) {
      mixins[_key] = arguments[_key];
    }

    var Mix = function Mix() {
      _classCallCheck(this, Mix);

      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = mixins[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var mixin = _step.value;
          copyProperties(this, new mixin()); // 拷贝实例属性
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    };

    for (var _i = 0, _mixins = mixins; _i < _mixins.length; _i++) {
      var mixin = _mixins[_i];
      copyProperties(Mix, mixin); // 拷贝静态属性

      copyProperties(Mix.prototype, mixin.prototype); // 拷贝原型属性
    }

    return Mix;
  }

  function copyProperties(target, source) {
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = Reflect.ownKeys(source)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var key = _step2.value;

        if (key !== 'constructor' && key !== 'prototype' && key !== 'name') {
          var desc = Object.getOwnPropertyDescriptor(source, key);
          Object.defineProperty(target, key, desc);
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }

  var PoodleDog =
  /*#__PURE__*/
  function (_mix) {
    _inherits(PoodleDog, _mix);

    function PoodleDog(name) {
      var _this;

      _classCallCheck(this, PoodleDog);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(PoodleDog).call(this));
      _this.name = name;
      _this.shareThing = "bone";
      new Promise(function (resove, reject) {
        setTimeout(function () {
          resove();
        }, 200);
      }).then(function (r) {
        debugger;
      });
      fetch('http://www.baidu.com').then(function (r) {
        debugger;
      });
      return _this;
    }

    _createClass(PoodleDog, [{
      key: "brake",
      value: function brake() {
        console.log('喔喔喔');
      }
    }, {
      key: "share",
      value: function share() {
        console.log('my own share');
      }
    }]);

    return PoodleDog;
  }(mix(Dog, Friends));

  var Animals = {
    Dog: Dog,
    Cat: Cat,
    PoodleDog: PoodleDog
  };

  return Animals;

}));
//# sourceMappingURL=animals.js.map
