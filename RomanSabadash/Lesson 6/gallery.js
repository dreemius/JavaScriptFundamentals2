var newData = [];
var newItem = {};
var FIRST_ITEM = 2;
var LASRT_ITEM = 6;
var resultContainer = $('#result');

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

	var firstDiv, img, secondDiv, nameDiv, descriptionDiv, dateDiv;
	
	firstDiv = document.createElement("div");
	firstDiv.className = "col-sm-3 col-xs-6";

	img = document.createElement("img");
	img.className = "img-thumbnail";
	img.src = url;
	img.alt = name;

	secondDiv = document.createElement("div");
	secondDiv.className = "info-wrapper";

	nameDiv = document.createElement("div");
	nameDiv.className = "text-muted";
	descriptionDiv = nameDiv.cloneNode(true);
	dateDiv = nameDiv.cloneNode(true);

	nameDiv.innerHTML = id + ":" + name;
	descriptionDiv.innerHTML = description;
	dateDiv.innerHTML = date;

	secondDiv.appendChild(dateDiv);
	secondDiv.appendChild(descriptionDiv);
	secondDiv.appendChild(nameDiv);
	firstDiv.appendChild(img);
	firstDiv.appendChild(secondDiv);
	result.appendChild(firstDiv);
}

// Iteration
function run() {

	for (var i = FIRST_ITEM; i < LASRT_ITEM; i++ ) {
		newItem = {
			url : data[i].url,
			name : newName(data[i].name),
			id : data[i].id,
			description : newDescription(data[i].description),
			date : newDate(data[i].date)
		};

	newData.push(newItem);
	newElement(newItem.url, newItem.name, newItem.id, newItem.description, newItem.date);
	}

}

run();