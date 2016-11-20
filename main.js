var btn = document.getElementById('btn');
var cont = document.getElementById('container');
var div = document.createElement('div');
// div.className = 'item';


function createItem(){
	var newItem = document.createElement('div');
	newItem.style.position = 'absolute';
	newItem.style.width = getRandomInt(0,800) + 'px';
	newItem.style.height = getRandomInt(0,600) + 'px';
	newItem.style.left = getRandomInt(0,400) + 'px';
	newItem.style.right = getRandomInt(0,400) + 'px';
	newItem.style.background =  getRandomColor();
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
})


