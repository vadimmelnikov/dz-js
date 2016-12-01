var cont = document.getElementsByClassName('container');

var mainDiv = document.getElementById('mainDiv'),
	childDiv = mainDiv.getElementsByTagName('div')[1];

function prepend(container, newitem){
	var firstitem = container.getElementsByTagName('div')[0];
	if (typeof(newitem) != 'undefined' && newitem != null)
	{
		container.insertBefore(newitem, firstitem);
	}
	else{
		console.log('что-то пошло не так')
	}
}
prepend(mainDiv, childDiv);

// console.log(childDiv.innerHTML);
// var mainDiv = document.getElementById('mainDiv'),
//
// for (var i = 0; i < mainDiv.childNodes.length; i++) {
// 	console.log(childDiv);
// }


