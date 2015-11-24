var newData = [];
var newItem = {};
var resultContainer = $('#result');

// Change name
function newName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// Change description
function newDescription(descrp) {
	return descrp.slice(0,15);
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

function newElement(item) {

	var firstDiv, img, secondDiv, nameDiv, descriptionDiv, dateDiv;
	
	firstDiv = document.createElement("div");
	firstDiv.className = "col-sm-3 col-xs-6";

	img = document.createElement("img");
	img.className = "img-thumbnail";
	img.src = item.url;
	img.alt = item.name;

	secondDiv = document.createElement("div");
	secondDiv.className = "info-wrapper";

	nameDiv = document.createElement("div");
	nameDiv.className = "text-muted";
	descriptionDiv = nameDiv.cloneNode(true);
	dateDiv = nameDiv.cloneNode(true);

	nameDiv.innerHTML = item.id + ":" + item.name;
	descriptionDiv.innerHTML = item.description;
	dateDiv.innerHTML = item.date;

	secondDiv.appendChild(dateDiv);
	secondDiv.appendChild(descriptionDiv);
	secondDiv.appendChild(nameDiv);
	firstDiv.appendChild(img);
	firstDiv.appendChild(secondDiv);
	result.appendChild(firstDiv);
}

// Iteration
function run() {

	for (var i = 0; i < data.length; i++ ) {
		newItem = {
			url : data[i].url,
			name : newName(data[i].name),
			id : data[i].id,
			description : newDescription(data[i].description),
			date : newDate(data[i].date)
		};

	newData.push(newItem);
	newElement(newItem);
	}

}

run();