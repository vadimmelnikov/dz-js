
// сортирует список так чтобы первыми от рисовались те у кого день рождение ближе к сегодняшней дате
var sortByBirthday = function (list) {
	var month = new Date().getMonth() + 1;
	var day = new Date().getDate();
	var listNoDate = [];
	var listPast = [];
	var listFuture = [];
	var listNow = [];
	var listSorted = [];

	list.forEach(function (item) {
		if(item.bdate){
			var dateBirthday = item.bdate.split('.');
			if(dateBirthday[1] > month)
				listFuture.push(item);
			else if(dateBirthday[1] < month)
				listPast.push(item);
			else {
				if(dateBirthday[0] > day)
					listFuture.push(item);
				else if(dateBirthday[0] < day)
					listPast.push(item);
				else
					listNow.push(item);
			}
		} else
			listNoDate.push(item);
	});

	listSorted = listSorted.concat(listNow);
	listSorted = listSorted.concat(listFuture.sort(sortFunction));
	listSorted = listSorted.concat(listPast.sort(sortFunction));
	listSorted = listSorted.concat(listNoDate);

	return listSorted;
};

var sortFunction = function (a, b) {
	var dateB = b.bdate.split('.').map(function (item) {
		return parseInt(item);
	});
	var dateA = a.bdate.split('.').map(function (item) {
		return parseInt(item);
	});

	if(dateA[1] > dateB[1])
		return 1;
	else if(dateA[1] < dateB[1])
		return -1;
	else
		return dateA[0] - dateB[0]

};

// возвращяет возраст
var getAge = function (date) {
	var year = new Date().getFullYear();
	if(date) {
		date = date.split('.')[2];
		if(date){
			return year - date;
		} else {
			return 'Возраст не указан';
		}
	} else {
		return 'Возраст не указан';
	}
};


new Promise(function(resolve) {
	if (document.readyState === 'complete') {
		resolve();
	} else {
		window.onload = resolve;
	}
}).then(function() {
	return new Promise(function(resolve, reject) {
		VK.init({
			apiId: 5769831
		});

		VK.Auth.login(function(response) {
			if (response.session) {
				resolve(response);
			} else {
				reject(new Error('Не удалось авторизоваться'));
			}
		}, 2);
	});
}).then(function() {
	return new Promise(function(resolve, reject) {
		VK.api('users.get', {'name_case': 'gen'}, function(response) {
			if (response.error) {
				reject(new Error(response.error.error_msg));
			} else {
				headerInfo.textContent = `Друзья на странице ${response.response[0].first_name} ${response.response[0].last_name}`;

				resolve();
			}
		});
	})
}).then(function() {
	return new Promise(function(resolve, reject) {
		VK.api('friends.get', {'fields': 'bdate,photo_100', 'v': '5.53'}, function(serverAnswer) {
			// console.log(serverAnswer);
			if (serverAnswer.error) {
				reject(new Error(serverAnswer.error.error_msg));
			} else {
				let source = playerItemTemplate.innerHTML;

				let templateFn = Handlebars.compile(source);

				let item = serverAnswer.response.items;
				console.log(item);

				var itemBydate = sortByBirthday(item);

				console.log(itemBydate);

				let template = templateFn({ list: itemBydate });

				results.innerHTML = template;

				resolve(serverAnswer);
			}
		});
	});
}).then(function (serverAnswer) {
	// var friends = response.response.items;
	// console.log(friends);
	// friends = sortByBirthday(friends);
	// friends.forEach(function (item) {
	// 	var friend = getElement();
	// 	fillElement(friend, item);
	// 	console.log(friend);

	// 	// container.appendChild(friend);
	// })
}).catch(function(e) {
	alert(`Ошибка: ${e.message}`);
});
