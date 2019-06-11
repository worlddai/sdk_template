(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Animals = factory());
}(this, (function () { 'use strict';

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();









var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};











var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var Animal = function () {
    function Animal(name) {
        classCallCheck(this, Animal);

        this.name = name;
    }

    createClass(Animal, [{
        key: 'run',
        value: function run() {
            console.log('i am run');
        }
    }, {
        key: 'brake',
        value: function brake() {
            console.log('i am brake');
        }
    }]);
    return Animal;
}();

var Dog = function (_Animal) {
    inherits(Dog, _Animal);

    function Dog(name) {
        classCallCheck(this, Dog);

        var _this = possibleConstructorReturn(this, (Dog.__proto__ || Object.getPrototypeOf(Dog)).call(this));

        _this.name = name;
        return _this;
    }

    createClass(Dog, [{
        key: "brake",
        value: function brake() {
            console.log('汪汪汪');
        }
    }]);
    return Dog;
}(Animal);

var Cat = function (_Animal) {
    inherits(Cat, _Animal);

    function Cat(name) {
        classCallCheck(this, Cat);

        var _this = possibleConstructorReturn(this, (Cat.__proto__ || Object.getPrototypeOf(Cat)).call(this));

        _this.name = name;
        return _this;
    }

    createClass(Cat, [{
        key: "brake",
        value: function brake() {
            console.log('miao miao miao');
        }
    }]);
    return Cat;
}(Animal);

var PoodleDog = function (_Dog) {
    inherits(PoodleDog, _Dog);

    function PoodleDog(name) {
        classCallCheck(this, PoodleDog);

        var _this = possibleConstructorReturn(this, (PoodleDog.__proto__ || Object.getPrototypeOf(PoodleDog)).call(this));

        _this.name = name;
        return _this;
    }

    createClass(PoodleDog, [{
        key: "brake",
        value: function brake() {
            console.log('喔喔喔');
        }
    }]);
    return PoodleDog;
}(Dog);

var Animals = {
    Dog: Dog,
    Cat: Cat,
    PoodleDog: PoodleDog
};

return Animals;

})));
//# sourceMappingURL=animals.js.map
