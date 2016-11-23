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


function analogFilter(arr){
	var newarray = [];
	for (var i = 0; i < arr.length ; i++) {
		if (arr[i] > 4) {
			newarray.push(arr[i]);
		}
	}
	console.log('Аналог filter');
	console.log(newarray);
}
analogFilter([1, 2, 3, 4, 5, 6]);





var numbers = [1, 4, 81];

var roots = numbers.map(Math.sqrt);
console.log(roots);

function analogMap(arr){
	var sqare = [];
	for (var i = 0; i < arr.length ; i++) {
		var a = (arr[i] * arr[i]);
		sqare.push(a);
	}
	console.log('Аналог map');
	console.log(sqare);
}
analogMap(numbers);


var orig = [1,2,3,4,5];
var sum = orig.reduce(function(cum, val) {
	return cum + val;
}, 0);
console.log(sum);

function analogReduce(arr){
	var result = 0;

	for (var i = 0; i < arr.length ; i++) {
		result += arr[i];
	}
	console.log('Аналог reduce');
	console.log(result);
}
analogReduce(orig);

