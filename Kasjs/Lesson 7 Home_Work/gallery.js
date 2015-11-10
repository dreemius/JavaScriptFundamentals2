

var count = 0;
//Simplest filter of the object
function formatDate(obj,index){
	var formDate = new Date(obj[index].date);
	var year = formDate.getFullYear();
	var month = formDate.getMonth() + 1;
	var day = formDate.getDate();
	var hour = formDate.getHours();
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
	for (var i = 0; i < data.length; i++) {
		preparingObj(data,i);
		formatDate(data,i);
	}
	return data;
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

function addImage(index){
	formatObject();

		// create the element
		var divContainer = create('div');
		divContainer.className = 'col-sm-3 col-xs-6';

		var image = create('img');
		createImage(image, data, index);

		var divInner = create('div');
		fillDiv(divInner, 'info-wrapper');

		var divNumber = create('div');
		fillDiv(divNumber, 'text-muted');
		divNumber.innerHTML = data[index].id + ": " + data[index].name;

		var divDescription = create('div');
		fillDiv(divDescription, 'text-muted');
		divDescription.innerHTML = data[index].description;

		var divDate = create('div');
		fillDiv(divDate, 'text-muted');
		divDate.innerHTML = data[index].date;

	    var link = create('a');
	    link.href = '#';
	    link.innerHTML = 'delete';

	    var divResult = document.getElementById('result');
		divResult.appendChild(divContainer);
		divContainer.appendChild(image);
		divContainer.appendChild(divInner);
		divInner.appendChild(divNumber);
		divInner.appendChild(divDescription);
		divInner.appendChild(divDate);
	    divInner.appendChild(link);
}
//-----------------------------------------------------------------------------
function selector(element){
	return document.querySelector(element);
}

function displayAndClear () {
	var inPut = selector('#exampleInputName2');
	var textArea = selector('#text');
	var delText = selector('#del');
	inPut.addEventListener('keyup', function () {
		textArea.value = inPut.value;
	});
	delText.addEventListener('click',function(){
		textArea.value = "";
		inPut.value = "";
	});
}

function addElement() {
	var adBat = selector('#addB');
	adBat.addEventListener('click', function (event) {
	var total = selector('#count');
		addImage(count);
		total.innerHTML = count + 1;

		count++;
		if (count >= 10) {
			adBat.className = 'btn btn-sm btn-danger disabled';
			adBat.removeEventListener();
		}
	});

}

function delElement(){
	var delLink = selector('a');
	delLink.addEventListener('click',function(){
	});
}

displayAndClear ();
addElement();
delElement();






			