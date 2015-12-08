var result = document.getElementById('result');
var counter = document.getElementById('count');
var del = document.getElementsByClassName('delete');
var add = document.querySelector('#add_button')
var newGallery;
var count = 0;
var hiddenItem = [];
var check = false;


function print(name, txt){
	name.innerHTML = txt;
}


function getName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
	
function getDesc(txt) {
	return txt.slice(0,15);
}

function getDate(date){
	var newDate = new Date(date);
	return 	newDate.getFullYear() + "/" + 
			newDate.getMonth() + "/" +
			newDate.getDate() + " " + 
			newDate.getHours() + ":" +
			newDate.getMinutes();
}

function convertGallery() {
	newGallery = data;
	return newGallery.map(function(i) {
		i.name = getName(i.name);
		i.description = getDesc(i.description);
		i.date = getDate(i.date);
		return i;
	});		
}	

function getContent(name, className, content) {
	var el = document.createElement(name);
		el.className = className;
		el.innerHTML = content;
		return el;
}


function setContent(count) {
	
	var txtClass = 'text-muted';
	
	var items = convertGallery();
	var i = items[count];
	
		var container = getContent('div','col-sm-3 col-xs-6','');
		result.appendChild(container);		
		
		var img = getContent('img',"img-thumbnail",'');
		img.src = i.url;
		img.alt = i.name;
		container.appendChild(img);
		
		var wrapper = getContent('div','info-wrapper','');
		container.appendChild(wrapper);
		
		var number = getContent('div', txtClass , i.id + ': ' + i.name);
		wrapper.appendChild(number);
		
		var desc = getContent('div', txtClass , i.description);
		wrapper.appendChild(desc);
		
		var date = getContent('div', txtClass , i.date);
		wrapper.appendChild(date);
		
		var eraser = getContent('a', 'delete', 'X');
		eraser.href = "#";
		container.appendChild(eraser);
		
		setHandlers();
}

function deleteItem(event){
	event.preventDefault();
	var target = event.target,
		parent = target.closest("div");
		hiddenItem.push(parent);
		parent.remove();
		check = true;
		count--;
		print(counter, count + 1);		
}

function checkHiddenElements(){	
	var firstHidden =  hiddenItem[0];
	if (!firstHidden){check = false;};
	return firstHidden;
}


function addItem(event){
	var firstHidden = checkHiddenElements();
	if (count + 1 < 10 ){
		event.preventDefault();
		count++;
		print(counter, count + 1);		
		if (check == false){
				setContent(count);
		} else {
			result.appendChild(firstHidden);
			hiddenItem.shift();
		}
	}
}
		
		
function setHandlers(){
	add.addEventListener('click', addItem);
	for (var i = 0; i < del.length; i++) {
			del[i].addEventListener('click', deleteItem);
		}
};
		
setHandlers();
		
		

			