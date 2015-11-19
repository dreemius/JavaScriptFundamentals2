
//global function for capture dom element
function captureDomElement(selector) {
	return document.querySelector(selector);
}

//Lesson 7
//Task 1

var clearText = captureDomElement("#clearText"),
	inputText = captureDomElement("#inputText"),
	outputText = captureDomElement("#outputText");

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

//capture dom element
var importValues = captureDomElement("#generate"),
	viewFullGallery = captureDomElement("#viewFullGallery"),
	clearGallery = captureDomElement("#clearGallery"),
 	startPosition = captureDomElement("#start"),
	finishPosition = captureDomElement("#finish"),
	totalElements = captureDomElement("#count"),
	addNewElement = captureDomElement("#addNewElement"),
	resultContainer = captureDomElement("#test"),
	START_POSITION,
	STOP_POSITION,
	DISPLAYED_IMAGES,
	count = 0;

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

//add new element
function addElement() {
	var createElHandler = function (event) {
		if (count <convertGallery().length) {
			createDOM(count);
			count++;
			totalElements.innerHTML=count;
		}
		else {
			disableButton();
		}
	}
	addNewElement.addEventListener('click', createElHandler);
}

//filter button
 function disableButton() {
	addNewElement.className = "btn btn-sm btn-danger disabled";
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

		//event for remove element from gallery
		removeElement.addEventListener("click",function(event){
			event.preventDefault();
			event.target.parentNode.parentNode.remove();
			count--;
			totalElements.innerHTML--;
			if(count<=convertGallery().length) addNewElement.className = "btn btn-sm btn-success";
	});
}

//generate full gallery
function generateGallery() {
	for(var index = 0; index <convertGallery().length; index++ ) {
		createDOM(index);
	}
	totalElements.innerHTML = count = convertGallery().length;
}
//clear container
function clearContainer() {
	startPosition.innerHTML = "";
	finishPosition.innerHTML = "";
	totalElements.innerHTML = "";
	count = 0;
	addNewElement.className = "btn btn-sm btn-success";
	START_POSITION = 0;
	STOP_POSITION = 10;
	DISPLAYED_IMAGES = 10;
	return resultContainer.innerHTML = "";
}

//show full gallery
function showFullGallery() {
	clearContainer();
	startPosition.innerHTML = "full gallery";
	finishPosition.innerHTML = "full gallery";
	generateGallery();
}

//generate gallery on input values
function generateGalleryOnInputValues(event) {
	var inputValues = captureDomElement("#inputValues");
	clearContainer();
	START_POSITION = (captureDomElement("#inputStartPosition").value-1);
	STOP_POSITION = captureDomElement("#inputStopPosition").value;
	DISPLAYED_IMAGES = captureDomElement("#inputDisplayedImages").value;
	START_POSITION <= 10 ? startPosition.innerHTML = (START_POSITION+1) : startPosition.innerHTML = "Maximum value - 10.Enter number from 0 to 10";
	STOP_POSITION <= 10 ? finishPosition.innerHTML = STOP_POSITION : finishPosition.innerHTML = "Maximum value - 10";
	event.preventDefault();
	generateGallery();
	inputValues.reset();

}

//events
clearGallery.addEventListener("click", clearContainer);
viewFullGallery.addEventListener("click", showFullGallery);
importValues.addEventListener("click", generateGalleryOnInputValues);
addElement();
















