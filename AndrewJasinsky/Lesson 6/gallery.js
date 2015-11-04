//global variables
var filteredGallery,
	resultContainer = document.querySelector("#result"); // new variable for 6 lesson

//constants
var DISPLAYED_IMAGES=+prompt("Enter the number of displayed images:", "Any number in the range from 1 to 10"),
	START_POSITION = 1,
	STOP_POSITION = 10;

//functions for convert initial array
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

//filter initial array
function convertGallery() {
	filteredGallery = data.slice(START_POSITION,STOP_POSITION);
	return filteredGallery.slice(0,DISPLAYED_IMAGES).filter(function(item) {
		item.name = convertName(item.name);
		item.description = convertDescription(item.description);
		item.date = convertDate(item.date);
		return item;
	})
}

// code 6 lesson
function createNewElement(params) {
	var element = params.el.appendChild(document.createElement(params.type));
	params.className && (element.className = params.className);
	params.src && (element.src = params.src);
	params.alt && (element.alt = params.alt);
	params.innerHTML && (element.innerHTML = params.innerHTML);
	return element;
}

function createDOM() {
		for(var i = 0; i <convertGallery().length; i++ ) {
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
				src: convertGallery()[i].url,
				alt: convertGallery()[i].name
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
				innerHTML: convertGallery()[i].id + ": " + convertGallery()[i].name
			});

			//create description DOM (text content)
			var descriptionDOM = createNewElement({
				el: innerDOM,
				type: "div",
				className: "text-muted",
				innerHTML: convertGallery()[i].description
			});

			//create date DOM (text content)
			var dateDOM = createNewElement({
				el: innerDOM,
				type: "div",
				className: "text-muted",
				innerHTML: convertGallery()[i].date
			});
		}
	}

createDOM();



