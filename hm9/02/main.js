class calcES6 {
	constructor(firstNumber) {
		this.firstNumber = firstNumber;
	}

	sum() {

		let newNumber = this.firstNumber;

		for (let i in arguments) {
			newNumber += arguments[i];
		}
		return newNumber;
	}
	dif() {
		var newNumber = this.firstNumber;
		for (let i in arguments) {
			newNumber -= arguments[i];
		}
		return newNumber;
	}

	div() {
		var newNumber = this.firstNumber;
		for (let i in arguments) {
			newNumber /= arguments[i];
		}
		return newNumber;
	}

	mul() {
		var newNumber = this.firstNumber;
		for (let i in arguments) {
			newNumber *= arguments[i];
		}
		return newNumber;
	}
}


class Sql extends calcES6 {
	constructor(firstNumber) {
		super(firstNumber);
	}

	sum() {
		return Math.pow(super.sum.apply(this, arguments), 2);
	}
	dif() {
		return Math.pow(super.dif.apply(this, arguments), 2);
	}
	div() {
		return Math.pow(super.div.apply(this, arguments), 2);
	}
	mul() {
		return Math.pow(super.mul.apply(this, arguments), 2);
	}
}


var myCalculator = new Sql(100);

console.log('ES 6:');
console.log(myCalculator.sum(10, 20, 30));
console.log(myCalculator.dif(10, 20));
console.log(myCalculator.div(2, 2));
console.log(myCalculator.mul(2, 2));
