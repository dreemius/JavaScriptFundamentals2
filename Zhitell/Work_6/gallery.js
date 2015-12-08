var START = 1;
var END = 7;
var SHOW_IMAGES = 6;
var result = document.getElementById('result');
var newGallery;


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
	newGallery = data.slice(START,END);
	return newGallery.slice(0,SHOW_IMAGES).filter(function(i) {
		i.name = getName(i.name);
		i.description = getDesc(i.description);
		i.date = getDate(i.date);
		return i;
	})
}	

function getContent(param1, param2, param3) {
	var el = document.createElement(param1);
		el.className = param2;
		el.innerHTML = param3;
		return el;
}


function setContent() {
	var txtClass = 'text-muted';
			
	convertGallery().forEach(function(i){
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

	});
	
}





setContent();
			