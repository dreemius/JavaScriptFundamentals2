
var FROM = 1, TO = 10,NUMBER_OF_ELEMENTS = 10;
var newData = [];
//Simplest filter of the object
function filterObject() {

	newData = data.splice(NUMBER_OF_ELEMENTS) ;
	newData = data.slice(FROM - 1, TO);
}

function formatDate(obj,index){
	var formDate = new Date(obj[index].date);
	var year = formDate.getFullYear();
	var month = formDate.getMonth() + 1;
	var day = formDate.getDate();
	var hour = formDate.getHours() + 1;
	var minutes = formDate.getMinutes() + 1;
	obj[index].date = year + "/" + month + "/" + day + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes);

	return obj;
}

function preparingObj(obj,index){
	obj[index].name = obj[index].name.toLowerCase();
	obj[index].name = obj[index].name.replace(/[^abc]/,obj[index].name.charAt(0).toUpperCase());
	obj[index].description = obj[index].description.slice(0, 15);

	return obj;
}
// format object to required layout
function formatObject () {
	for (var i = 0; i < newData.length; i++) {
		preparingObj(newData,i);
		formatDate(newData,i);
	}
	return newData;
}

function create(element) {
	return document.createElement(element);
}
function createImage (elem,obj,index){
	elem.src = obj[index].url;
	elem.alt = obj[index].alt;
	elem.className = 'img-thumbnail';
	return elem;
}
function fillDiv(elem,value) {
	elem.className = value;
	return elem;
}

function outputData() {

	formatObject();
	for (var i = 0; i < newData.length; i++) {
		// create the element
		var divContainer = create('div');
		divContainer.className = 'col-sm-3 col-xs-6';

		var image = create('img');
		createImage(image,newData,i);

		var divInner = create('div');
		fillDiv(divInner,'info-wrapper');

		var divNumber = create('div');
		fillDiv(divNumber,'text-muted');
		divNumber.innerHTML = newData[i].id + ": " + newData[i].name;

		var divDescription = create('div');
		fillDiv(divDescription,'text-muted');
		divDescription.innerHTML = newData[i].description;

		var divDate = create('div');
		fillDiv(divDate,'text-muted');
		divDate.innerHTML = newData[i].date;
		// insert the element

		var divResult = document.getElementById('result');
		divResult.appendChild(divContainer);
		divContainer.appendChild(image);
		divContainer.appendChild(divInner);
		divInner.appendChild(divNumber);
		divInner.appendChild(divDescription);
		divInner.appendChild(divDate);
	}
}
filterObject();
outputData();









			