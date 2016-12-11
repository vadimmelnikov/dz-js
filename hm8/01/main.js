var cont = document.getElementById('cont');
var filter = document.getElementById('filter');
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
	function (data) {
		insertList(data);
		filter.addEventListener('input', function () {
			var value = filter.value;
			insertSearchCity(data, value);
		});
	},
	function () {
		alert('Error');
	}
);

var searchCity = function (data, value) {
	var list = data.filter(function (item) {
		return item.name.toLowerCase().indexOf(value.toLowerCase()) !== -1;
	});
	return list;
};

var insertList = function (list) {
	var source = document.querySelector('#listTemplate').innerHTML;
	var template = Handlebars.compile(source);
	cont.innerHTML = template({list: list});
};

var insertSearchCity = function (data, value) {
	cont.innerHTML = '';
	var list = searchCity(data, value);
	insertList(list);
};

