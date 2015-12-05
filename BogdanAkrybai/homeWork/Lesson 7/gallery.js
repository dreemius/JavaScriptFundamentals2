///////////////////////////TASK1/////////////////////////

var input = document.querySelector('#exampleInputName2'),
	textArea = document.querySelector('#tx'),
	clnButton = document.querySelector('#btn1');

input.addEventListener("keyup", inputText);

clnButton.addEventListener("click", clnData);

function inputText() {
	textArea.value = input.value;
}

function clnData() {
	input.value = "";
	textArea.value = "";
}

///////////////////////////TASK2//////////////////////////

var resultContainer = document.querySelector('#result'),
	addNewPict = document.querySelector('#addImage'),
	countPict = document.querySelector('#count');

var startCountPos = 0,
	countPos = 0;

addNewPict.addEventListener("click", displayImages);


function toUpperLetter(value) {
	return value[0].toLocaleUpperCase() + value.slice(1).toLocaleLowerCase();
}

function sliceDescription(string) {
	return string.slice(0, 15);
}

function modifyDate(date) {
	var modDate = new Date(date);
	return modDate.getFullYear() + "/" + (modDate.getMonth() + 1) + "/" +
		modDate.getDate() + " " + modDate.getHours() + ":" + modDate.getMinutes();
}

function createNewElement(parameters) {
	var element = parameters.el.appendChild(document.createElement(parameters.types));
	parameters.className && (element.className = parameters.className);
	parameters.src && (element.src = parameters.src);
	parameters.alt && (element.alt = parameters.alt);
	parameters.innerHTML && (element.innerHTML = parameters.innerHTML);
	return element;
}

function updateCounts() {
	startCountPos == data.length - 1 ? startCountPos = 0 : startCountPos++;
	countPos++;
	countPict.innerHTML = countPos;
}

function deleteElement(event) {
	event.preventDefault();
	resultContainer.removeChild(event.target.closest('.col-sm-3'));
	countPos--;
	countPict.innerHTML = countPos;
}



function displayImages() {

		var containerCr = createNewElement({
			el: resultContainer,
			types: "div",
			className: "col-sm-3 col-xs-6"
		});

		var imageCr = createNewElement({
			el: containerCr,
			types: "img",
			className: "img-thumbnail",
			src: data[startCountPos].url
		});

		var innerCr = createNewElement({
			el: containerCr,
			types: "div",
			className: "info-wrapper"
		});

		var nameCr = createNewElement({
			el: innerCr,
			types: "div",
			className: "text-muted",
			innerHTML: data[startCountPos].id + ": " + toUpperLetter(data[startCountPos].name)
		});

		var descriptionCr = createNewElement({
			el: innerCr,
			types: "div",
			className: "text-muted",
			innerHTML: sliceDescription(data[startCountPos].description)
		});

		var dateCr = createNewElement({
			el: innerCr,
			types: "div",
			className: "text-muted",
			innerHTML: modifyDate(data[startCountPos].date)
		});

		var deleteDiv = createNewElement ({
			el: dateCr,
			types: "div",
			className: "text-muted"
		});

		var deleteLink = createNewElement ({
			el: deleteDiv,
			types: "button",
			type: "button",
			className: "btn btn-link",
			innerHTML: "Delete"
		});

	deleteLink.addEventListener("click", deleteElement);
	updateCounts();
}

