var newData = [];
var newItem = {};
var resultContainer = $('#result');
var inputValue = document.getElementById('gettext');
var textareaValue = document.getElementById('settext');
var countId = document.getElementById('count');
var count = 0;
var quantity = 0;

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
    return tmpDate.getFullYear() + '/' +
           tmpDate.getMonth() + '/' +
           tmpDate.getDate() + ' ' +
           tmpDate.getHours() + ':' +
           tmpDate.getMinutes();
}

function newElement(item) {

	var firstDiv, img, secondDiv, nameDiv, descriptionDiv, dateDiv, button;
	
	firstDiv = document.createElement('div');
	firstDiv.className = 'col-sm-3 col-xs-6';

	img = document.createElement('img');
	img.className = 'img-thumbnail';
	img.src = item.url;
	img.alt = item.name;

	secondDiv = document.createElement('div');
	secondDiv.className = 'info-wrapper';

	nameDiv = document.createElement('div');
	nameDiv.className = 'text-muted';
	descriptionDiv = nameDiv.cloneNode(true);
	dateDiv = nameDiv.cloneNode(true);

	nameDiv.innerHTML = item.id + ':' + item.name;
	descriptionDiv.innerHTML = item.description;
	dateDiv.innerHTML = item.date;

	// Add button
	button = document.createElement('button');
	button.appendChild(document.createTextNode('Remove'));
	button.className = 'remove';
	button.setAttribute('onclick', 'removeElement(event)');

	secondDiv.appendChild(nameDiv);
	secondDiv.appendChild(descriptionDiv);
	secondDiv.appendChild(dateDiv);
	firstDiv.appendChild(img);
	firstDiv.appendChild(secondDiv);
	firstDiv.appendChild(button);
	result.appendChild(firstDiv);
}

// Remove element
function removeElement(event) {
	event.target.parentNode.remove();
	quantity--;
	countId.innerHTML = quantity;
}

// Input and textarea
inputValue.addEventListener('keyup', function(event){
  var tx = event.target.value;
  textareaValue.value = tx;
});

// Clear fields
document.getElementById('reset').addEventListener('click', function(){
  inputValue.value = '';
  textareaValue.value = '';
});

// Add event for run
document.getElementById('add').addEventListener('click', run);

function run() {
	if (count < data.length) {
		newItem = {
			url : data[count].url,
			name : newName(data[count].name),
			id : data[count].id,
			description : newDescription(data[count].description),
			date : newDate(data[count].date)
		};
		newElement(newItem);
		count++;
		quantity++;
		countId.innerHTML = quantity;
	} else {
		alert('Sorry, no more elements.');
	}
}