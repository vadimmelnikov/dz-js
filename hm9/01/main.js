'use strict';

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var calcES6 = function () {
	function calcES6(firstNumber) {
		_classCallCheck(this, calcES6);

		this.firstNumber = firstNumber;
	}

	_createClass(calcES6, [{
		key: 'sum',
		value: function sum() {

			var newNumber = this.firstNumber;

			for (var i in arguments) {
				newNumber += arguments[i];
			}
			return newNumber;
		}
	}, {
		key: 'dif',
		value: function dif() {
			var newNumber = this.firstNumber;
			for (var i in arguments) {
				newNumber -= arguments[i];
			}
			return newNumber;
		}
	}, {
		key: 'div',
		value: function div() {
			var newNumber = this.firstNumber;
			for (var i in arguments) {
				newNumber /= arguments[i];
			}
			return newNumber;
		}
	}, {
		key: 'mul',
		value: function mul() {
			var newNumber = this.firstNumber;
			for (var i in arguments) {
				newNumber *= arguments[i];
			}
			return newNumber;
		}
	}]);

	return calcES6;
}();

var Sql = function (_calcES) {
	_inherits(Sql, _calcES);

	function Sql(firstNumber) {
		_classCallCheck(this, Sql);

		return _possibleConstructorReturn(this, (Sql.__proto__ || Object.getPrototypeOf(Sql)).call(this, firstNumber));
	}

	_createClass(Sql, [{
		key: 'sum',
		value: function sum() {
			return Math.pow(_get(Sql.prototype.__proto__ || Object.getPrototypeOf(Sql.prototype), 'sum', this).apply(this, arguments), 2);
		}
	}, {
		key: 'dif',
		value: function dif() {
			return Math.pow(_get(Sql.prototype.__proto__ || Object.getPrototypeOf(Sql.prototype), 'dif', this).apply(this, arguments), 2);
		}
	}, {
		key: 'div',
		value: function div() {
			return Math.pow(_get(Sql.prototype.__proto__ || Object.getPrototypeOf(Sql.prototype), 'div', this).apply(this, arguments), 2);
		}
	}, {
		key: 'mul',
		value: function mul() {
			return Math.pow(_get(Sql.prototype.__proto__ || Object.getPrototypeOf(Sql.prototype), 'mul', this).apply(this, arguments), 2);
		}
	}]);

	return Sql;
}(calcES6);

var myCalculator = new Sql(100);

console.log('ES 5:');
console.log(myCalculator.sum(10, 20, 30));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));