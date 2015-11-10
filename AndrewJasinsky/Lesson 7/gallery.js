
//global function for capture dom element
function captureDomElement(selector) {
	return document.querySelector(selector);
}

//Lesson 7
//Task 1

var clearText = captureDomElement(".btn-primary"),
	inputText = captureDomElement("#exampleInputName1"),
	outputText = captureDomElement("#exampleInputName2");

function copyValue () {
	outputText.value = inputText.value;
}

function clearContent() {
	inputText.value = outputText.value = "";
}

inputText.addEventListener("input", copyValue);
clearText.addEventListener("click", clearContent);

//***************************************************************
//Task 2
//global variables
var resultContainer = document.querySelector("#test"),
	DISPLAYED_IMAGES,
	START_POSITION,
	STOP_POSITION,
	count = 0;

//capture dom element
var importValues = captureDomElement("#generate"),
	viewFullGallery = captureDomElement("#viewFullGallery"),
	clearGallery = captureDomElement("#clearGallery"),
 	startPosition = captureDomElement("#start"),
	finishPosition = captureDomElement("#finish"),
	totalElements = captureDomElement("#count"),
	inputValues = captureDomElement("#inputValues"),
	inputDisplayedImages = captureDomElement("#inputDisplayedImages"),
	addNewElement = captureDomElement("#addNewElement");

//functions for convert initial gallery
function convertName(value) {
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
}

function convertDescription(string) {
	return string.slice(0,15);
}

function convertDate(date){
	var newDate = new Date(date);
	return newDate.getFullYear() + "/" + (newDate.getMonth()+1) + "/" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
}

//filter initial gallery
function convertGallery() {
	var filteredGallery = data.slice(START_POSITION,STOP_POSITION).slice(0,DISPLAYED_IMAGES);
	return filteredGallery.map(function(item) {
		item.name = convertName(item.name);
		item.description = convertDescription(item.description);
		item.date = convertDate(item.date);
		return item;
	})
}

//create new element
function createNewElement(params) {
	var element = params.el.appendChild(document.createElement(params.type));
	params.className && (element.className = params.className);
	params.src && (element.src = params.src);
	params.alt && (element.alt = params.alt);
	params.innerHTML && (element.innerHTML = params.innerHTML);
	params.href && (element.href = params.href);
	return element;
}

//filter button
var disableButton = function() {
	addNewElement.className = "btn btn-sm btn-danger disabled";
}

//add new element
function addElement() {
	var createElHandler = function (event) {
		if (count < 10) {
			createDOM(count);
			totalElements.innerHTML++;
			count++;
		}
		else {
			disableButton();
		}
	}
	addNewElement.addEventListener('click', createElHandler);
}

//create DOM
function createDOM(index) {
		//create container DOM
		var containerDOM = createNewElement({
			el: resultContainer,
			type: "div",
			className: "col-sm-3 col-xs-6"
		});
		//create image DOM
		var imageDOM = createNewElement({
			el: containerDOM,
			type: "img",
			className: "img-thumbnail",
			src: convertGallery()[index].url,
			alt: convertGallery()[index].name
		});
		//create inner div for text content
		var innerDOM = createNewElement({
			el: containerDOM,
			type: "div",
			className: "info-wrapper",
		});
		//create id and name DOM (text content)
		var nameDOM = createNewElement({
			el: innerDOM,
			type: "div",
			className: "text-muted",
			innerHTML: convertGallery()[index].id + ": " + convertGallery()[index].name
		});
		//create description DOM (text content)
		var descriptionDOM = createNewElement({
			el: innerDOM,
			type: "div",
			className: "text-muted",
			innerHTML: convertGallery()[index].description
		});
		//create date DOM (text content)
		var dateDOM = createNewElement({
			el: innerDOM,
			type: "div",
			className: "text-muted",
			innerHTML: convertGallery()[index	].date
		});
		//create button(link) fot delete element from gallery
		var removeElement = createNewElement({
			el: innerDOM,
			type: "a",
			href:"#",
			className: "btn btn-danger btn-xs delete",
			innerHTML:"Delete"
		});

		//event for remove element from gallery by click "Delete".
		removeElement.addEventListener("click",function(event){
		event.preventDefault();
		event.target.parentNode.parentNode.remove();
		totalElements.innerHTML--;
			--count;
			if(count<=10) addNewElement.className = "btn btn-sm btn-success";
	});
}

addElement();

//create helpers
function clearHelpers() {
	startPosition.innerHTML = "";
	finishPosition.innerHTML = "";
	totalElements.innerHTML = "";
}

//clear container
function clearContainer() {
	clearHelpers();
	count = 0;
	addNewElement.className = "btn btn-sm btn-success";
	return resultContainer.innerHTML = "";
}

//events
//clear gallery
clearGallery.addEventListener("click", clearContainer);

//show full gallery
viewFullGallery.addEventListener("click", function(){
		clearContainer();
		count = 0;
		startPosition.innerHTML = "full gallery";
		finishPosition.innerHTML ="full gallery";
		START_POSITION = 0;
		STOP_POSITION = 10;
		DISPLAYED_IMAGES = count = 10;
		totalElements.innerHTML = convertGallery().length;
		for(var index = 0; index <convertGallery().length; index++ ) {
			createDOM(index);
		}
});

//generate gallery on input values
importValues.addEventListener("click", function(event){
		clearContainer();
		count = 0;
		START_POSITION = captureDomElement("#inputStartPosition").value;
		START_POSITION<=10 ? startPosition.innerHTML = START_POSITION : startPosition.innerHTML = "Maximum value - 10.Enter number from 0 to 10";
		STOP_POSITION = captureDomElement("#inputStopPosition").value;
		STOP_POSITION<=10?finishPosition.innerHTML = STOP_POSITION:finishPosition.innerHTML = "Maximum value - 10";
		DISPLAYED_IMAGES = inputDisplayedImages.value;
		inputValues.reset();
		totalElements.innerHTML = convertGallery().length;
		event.preventDefault();
		for(var index = 0; index <convertGallery().length; index++ ) {
			createDOM(index);
		}
	}
);






















