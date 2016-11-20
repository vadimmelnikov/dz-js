
var selected = document.getElementById('list');
var active = document.getElementsByClassName('active');
var acc;


selected.addEventListener('click', function (event) {
	event.preventDefault();
	var target = event.target;
	while (target != this) {
		if (target.tagName == 'A') {
			console.log('клик по ссылке');
			open(target);
			return;
		}
		target = target.parentNode;
	}
})



function open(node) {

	if (acc) {
		acc.classList.remove('active');
	}
	acc = node;
	acc.classList.add('active');
}

