var START = 1;
var END = 7;
var SHOW_IMAGES = 6;

var resultContainer = $('#result');
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



function createWrapContent(){
		var column = document.createElement('div');
		column.className = 'col-sm-3 col-xs-6';
		result.appendChild(column);
		return column;
}

function content() {
	createWrapContent();	
	convertGallery().forEach(function(i){
		var el = document.createElement('div');
		el.className = 'text-muted';
		el.innerHTML = i.id + ": " + i.name;
		column = document.getElementsByClassName("col-sm-3 col-xs-6");
		column.appendChild(el);
	});
	
}




content();
			