var btn = document.getElementById('btn');
var cont = document.getElementById('container');


function createItem(){
	var newItem = document.createElement('div');
	newItem.style.position = 'absolute';
	newItem.style.width = getRandomInt(0,800) + 'px';
	newItem.style.height = getRandomInt(0,600) + 'px';
	newItem.style.left = getRandomInt(0,400) + 'px';
	newItem.style.right = getRandomInt(0,400) + 'px';
	newItem.style.background =  getRandomColor();
	newItem.style.cursor =  'pointer';
	newItem.setAttribute('class', 'newitem');
	return	newItem;
}
function getRandomInt(min, max) {
	return Math.random() * (max - min) + min;

}
function getRandomColor() {
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}




btn.addEventListener('click', function(){
	var newItem = createItem();
	cont.appendChild(newItem);
	newItem.onmousedown = function(e) {
		cont.appendChild(this);
		moveAt(e);
		var coords = getCoords(newItem);
		var shiftX = e.pageX - coords.left;
		var shiftY = e.pageY - coords.top;

		// newItem.style.zIndex = '1';


		function moveAt(e) {
			newItem.style.left = e.pageX - shiftX + 'px';
			newItem.style.top = e.pageY - shiftY + 'px';
		}

		// 3, перемещать по экрану
		cont.onmousemove = function (e) {
			moveAt(e);
		}

		// 4. отследить окончание переноса
		newItem.onmouseup = function () {
			cont.onmousemove = null;
			newItem.onmouseup = null;
		}
	}
	newItem.ondragstart = function() {
		return false;
	};
})

function getCoords(elem) { // кроме IE8-
	var box = elem.getBoundingClientRect();

	return {
		top: box.top + pageYOffset,
		left: box.left + pageXOffset
	};

}
