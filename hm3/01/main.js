// // Аналог
var array = [1, 2, 3, 4, 5, 6];


// forEach(array, item => console.log(item));
forEach(array, function (item) {
	return console.log(item);
});


console.log('Аналог forEach');
function forEach(array){
	for( var item = 0; item < array.length; item ++){
		console.log(array[item]);
	}
}
forEach(array);





var positiveArr = array.filter(function(number) {
	return number > 4;
});

console.log( positiveArr );

var newarray = [];

for (var i = 0; i < array.length ; i++) {
		if (array[i] > 4) {
			newarray.push(array[i]);
		}
}
console.log('Аналог filter');
console.log(newarray);


var numbers = [1, 4, 81];

var roots = numbers.map(Math.sqrt);
console.log(roots);

var sqare = [];
for (var i = 0; i < numbers.length ; i++) {
	var a = (numbers[i] * numbers[i]);
	sqare.push(a);
}
console.log('Аналог map');
console.log(sqare);

var orig = [1,2,3,4,5];
var sum = orig.reduce(function(cum, val) {
	return cum + val;
}, 0);
console.log(sum);

var result = 0;

for (var i = 0; i < orig.length ; i++) {
	result += orig[i];
}
console.log('Аналог reduce');
console.log(result);
