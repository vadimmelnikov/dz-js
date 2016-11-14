// Аналог
var item;
var array = [1, 2, 3, 4, 5, 6];

function forEach(source, num){
	for( var item = 0; item < array.length; item ++){
		console.log(array[item]);
	}

}

// forEach(array, item => console.log(item));
forEach(array, function (item) {
	return console.log(item);
});

// Обычный метод
// array.forEach(function(item, i, array) {
// 	console.log(item);
// });

// forEach(array, item => console.log(item);



var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
// 	return number > 0;
// });
//
// console.log( positiveArr );
//
// var filter = function(arr, callback, thisArg) {
// 	var i, length = arr.length, results = [];
// 	for (i = 0; i < length; i = i + 1) {
// 		if (callback.call(thisArg, arr[i], i, arr)) {
// 			results.push(arr[i]);
// 		}
// 	}
// 	return results;
// };
// filter(arr, )
