// function timer(time){
// 	setTimeout(function(){
// 		console.log('Я вывелась через ' + (time/1000) + ' сек');
// 	}, time);
// };
//
// timer(300);

var time = 3000;
var timer = new Promise(function(resolve, reject){
	setTimeout(function(){
		resolve();
	}, time);
});

timer.then(function () {
	console.log('Я вывелась через ' + (time/1000) + ' сек');
});

