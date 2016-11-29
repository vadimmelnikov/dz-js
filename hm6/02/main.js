var cont = document.getElementById('cont');

var src = 'https://raw.githubusercontent.com/smelukov/citiesTest/master/cities.json';

function sendRequest(url) {
	return new Promise(function (resolve, reject) {
		var xhr = new XMLHttpRequest();
		xhr.open('GET', url);
		xhr.responseType = 'json';
		xhr.send();
		xhr.addEventListener('load', function(e){
			resolve(xhr.response);
		});
		xhr.addEventListener('error', function(){
			reject();
		});

	})
}
sendRequest(src).then(
	function (res) {
		var cities = [];
		for (var i = 0; i < res.length; i++) {
			cities.push(res[i].name);
		}
		var receivedList = cities.sort();
		receivedList.forEach(function(entry) {
			var div = document.createElement('div');
			div.innerHTML = entry;
			cont.appendChild(div);
			console.log(entry);
		});
	},
	function () {
		console.log('error');
	}
);


