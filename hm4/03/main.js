
// var item1 = document.getElementById('del')
//
// function deleteTextNodes(item){
// 	if (typeof(item) != 'undefined' && item != null){
// 		empty(item);
// 	} else{
// 		console.log('что-то пошло не так');
// 	}
// }
// deleteTextNodes(item1);

// var item1 = document.getElementById('del');

// while(item1.firstChild){
// 	item1.removeChild(item1.firstChild);
// }

// function LoadResponse(response,control)
// {
// 	var container = document.getElementById(control);
// 	try
// 	{
// 		while(container.firstChild)
// 			container.removeChild(container.firstChild);
// 		var t = document.createElement('div');
// 		t.innerHTML = response;
// 		container.appendChild(t);
// 	}
// 	catch(ex)
// 	{
// 		container.innerHTML = response;
// 	}
// }
// LoadResponse('', del);

var deleteText = function (container) {
	var box = container;
	while (box.firstChild) {
		//Список является ссылкой, то есть он будет переиндексирован перед каждым вызовом
		box.removeChild(box.firstChild);
	}
	// if (container.hasChildNodes()) {
	// 	var children = container.childNodes;
	// 	for (var i = 0; i < children.length; ++i) {
	// 		children[i].remove();
	// 	}
	// }
};


var elem1 = document.getElementById('del')

deleteText(elem1);
