var newData = [];
var newItem = {};
var FIRST_ITEM = 2;
var LASRT_ITEM = 6;
var resultContainer = $('#result');
var getText = document.getElementById("gettext");
var setText = document.getElementById("settext");
var count = 0;
var qty = 0;

// Change name
function newName(name) {
	return editName = name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// Change description
function newDescription(descrp) {
	return editDescrp = descrp.slice(0,15);
}

// Change date
function newDate(date) {
	var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}

function newElement(url, name, id, description, date) {

	var firstDiv, img, secondDiv, nameDiv, descriptionDiv, dateDiv, button;
	
	firstDiv = document.createElement("div");
	firstDiv.className = "col-sm-3 col-xs-6 ";

	img = document.createElement("img");
	img.className = "img-thumbnail";
	img.src = url;
	img.alt = name;

	button = document.createElement("button");
	button.appendChild(document.createTextNode("Remove"));
	button.className = "remove";
	button.setAttribute('onclick','removeElement(event)');

	secondDiv = document.createElement("div");
	secondDiv.className = "info-wrapper";

	nameDiv = document.createElement("div");
	nameDiv.className = "text-muted";
	descriptionDiv = nameDiv.cloneNode(true);
	dateDiv = nameDiv.cloneNode(true);

	nameDiv.innerHTML = id + ":" + name;
	descriptionDiv.innerHTML = description;
	dateDiv.innerHTML = date;

	secondDiv.appendChild(nameDiv);
	secondDiv.appendChild(descriptionDiv);
	secondDiv.appendChild(dateDiv);
	firstDiv.appendChild(img);
	firstDiv.appendChild(secondDiv);
	firstDiv.appendChild(button);
	result.appendChild(firstDiv);
}

// Add elements
document.getElementById('add').addEventListener('click',run);

// Clear fields
document.getElementById("reset").addEventListener("click", function(){
  getText.value = " ";
  setText.value = getText.value;
});

// Input and textarea
getText.addEventListener("keyup", function(event){
  var tx = event.target.value;
  setText.value = tx;
});

function removeElement(event) {
	event.target.parentNode.remove();
	qty--;
	document.getElementById('count').innerHTML = qty;
}

function run() {
	if (count < data.length) {
		newElement(data[count].url, newName(data[count].name), data[count].id, newDescription(data[count].description), newDate(data[count].date));
		count++;
		qty++;
		document.getElementById('count').innerHTML = qty;
	} 
}