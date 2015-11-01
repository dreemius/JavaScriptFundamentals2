
// это тестовый объект чтоб показать как вставлять в HTML
// вам надо пользоваться верхним 

var FROM = 1, TO = 5,NUMBER_OF_ELEMENTS = 10;
//Simplest filter of the object
function filterObject() {
	data.length = NUMBER_OF_ELEMENTS;
	data = data.slice(FROM - 1, TO);
}
filterObject();
// format object to required layout
function formatObject () {
	for (var i = 0; i < data.length; i++) {
		data[i].name = data[i].name.toLowerCase();
		data[i].name = data[i].name.replace(/[^abc]/,data[i].name.charAt(0).toUpperCase());
		data[i].description = data[i].description.slice(0, 15);
		data[i].date = new Date(data[i].date).toISOString();
		data[i].date = data[i].date.replace(/-/g, "/").replace(/t/i, " ").replace(/.637z/i, "");
		data[i].date = data[i].date.slice(0, 16);
	}
	return data;
}
formatObject();

function outputData() {
	function create(element){
		return document.createElement(element);
	}
	for(var i = 0;i < data.length;i++) {
		// create the element
		var divContainer = create('div');
		divContainer.className = 'col-sm-3 col-xs-6';

		var image = create('img');
		image.src = data[i].url;
		image.alt = data[i].name;
		image.className = 'img-thumbnail';


		var divInner = create('div');
		divInner.className = 'info-wrapper';

		var divNumber = create('div');
		divNumber.className = 'text-muted';
		divNumber.innerHTML = data[i].id + ": "  + data[i].name;

		var divDescription = create('div');
		divDescription.className = 'text-muted';
		divDescription.innerHTML = data[i].description;

		var divDate = create('div');
		divDate.className = 'text-muted';
		divDate.innerHTML = data[i].date;
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
outputData();









			