
var allNumbers = [1, 2, 4, 5, 6, 7, 8],

	someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],

	noNumbers = ['это', 'массив', 'без', 'чисел'];


function isSomeTrue(source, filterFn) {
	for (var i = 0; i < source.length; i++) {
		if (filterFn(source[i]) === true) {
			return true;
		}
	}
	return false;
}


function isNumber(val) {

	return typeof val === 'number';

}


console.log(isAllTrue(allNumbers, isNumber)); //вернет true

console.log(isAllTrue(someNumbers, isNumber)); //вернет true

console.log(isAllTrue(noNumbers, isNumber)); //вернет false
