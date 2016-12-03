var table = document.getElementById('table');
var valueCookie = document.getElementById('valueCookie');
var nameCookie = document.getElementById('nameCookie');
var daysCookie = document.getElementById('daysDelay');
var saveCookie =document.getElementById('saveCookie');


var foreachCooke = function(cooke){
	var arr = [];
	var cookes = cooke.split('; ');
	cookes.forEach(function (item){
		item = item.split('=');
		arr.push({'name': item[0], 'value': item[1]});
	});
	console.log( arr );
	return arr;

};

// УДАЛИТЬ КУКИ
var deleteCookie = function (cookie) {
	// Создает объект Date с текущей датой и временем:
	var Date = new Date;
	// Удалит куку - просрочит ее
	datD.setDate(Date.getDate() - 1);
	document.cookie = cookie + '; expires='+Date.toUTCString();
};

// ЗАПИСАТЬ КУКИ
var writeCookie = function (name, value, days) {
	// Создает объект Date с текущей датой и временем:
	var date = new Date;
	date.setDate(date.getDate() + days);
	document.cookie = name + '=' + value + '; expires='+date.toUTCString();
};


var createTable = function(name, value){
	var tr = document.createElement('tr');
	var tdBtn = document.createElement('td');
	var tdName = document.createElement('td');
	var tdValue = document.createElement('td');
	var btn = document.createElement('button');
	tdName.innerHTML = name;
	tdValue.innerHTML = value;
	btn.innerHTML = 'del';
	btn.setAttribute('value', name+'='+value);
	btn.setAttribute('name', name);
	tr.appendChild(tdName);
	tr.appendChild(tdValue);
	tdBtn.appendChild(btn);
	tr.appendChild(tdBtn);
	table.appendChild(tr);
};

var makeTable = function (cooki) {
	var cooks = foreachCooke(cooki);
	cooks.forEach(function (item) {
		createTable(item.name, item.value);
	})
};

table.addEventListener('click', function (e){
	e.preventDefault();
	var target = e.target;
	if (target.tagName === 'BUTTON') {
		if(confirm('Удалить cookie с именем ' + target.getAttribute('name') + '?')) {
			deleteCookie(target.getAttribute('value'));
			// target.parentNode.remove();
		}
	}
});

saveCookie.addEventListener('click', function(){
	var name = nameCookie.value;
	var value = valueCookie.value;
	var date = daysCookie.value;
	if(name === '' || value === '' || date === '') {
		alert('Заполните все поля формы');
		return null;
	}
	writeCookie(name, value, date);
	makeTable(name,value);

});

var date = new Date;
date.setDate(date.getDate() + 1);
//
document.cookie = 'name=value; expires='+date.toUTCString();
document.cookie = 'perkelle=value1; expires='+date.toUTCString();
document.cookie = 'satana=value; expires='+date.toUTCString();
document.cookie = 'umalauto=value2; expires='+date.toUTCString();

makeTable(document.cookie);

