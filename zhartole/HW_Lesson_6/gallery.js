
var FIRST = 5, //id first img;
	LAST  = data.length,//id last img;
	NUMBER_OF_IMAGES = data.length,
	resultContainer = document.querySelector("#result"),
	newGallery,
	showImage,
	countShow = $('#count-image');

function inBetween(START, FINISH) {
	return newGallery = data.slice(START - 1, FINISH).slice(0,NUMBER_OF_IMAGES);
}

showImage = function(item) {
	function capitalizedFirstLetter() {
		return item.name[0].toUpperCase() + item.name.slice(1).toLowerCase();
	}

	function doShortDescription() {
		return item.description.slice(0, 15);
	}

	function doFormattedDate() {
		var date = new Date(item.date);
		return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate() + " " + date.getHours() + ":" + date.getMinutes();
	}

	// refactoring code of 6 lesson
	function createNewElement(argument) {
		var element = document.createElement(argument.type);
		argument.className && (element.className = argument.className);
		argument.src && (element.src = argument.src);
		argument.alt && (element.alt = argument.alt);
		argument.innerHTML && (element.innerHTML = argument.innerHTML);
		argument.el.appendChild(element);
		return element;
	}

	function doTemplate() {
		var group = createNewElement({
			el: resultContainer,
			type: "div",
			className: "col-sm-3 col-xs-6"
		});

		var img = createNewElement({
			el: group,
			type: "img",
			className: "img-thumbnail",
			src: item.url,
			alt: capitalizedFirstLetter()
		});

		var infoWrapper = createNewElement({
			el: group,
			type: "div",
			className: "info-wrapper"
		});

		var innerGroupName = createNewElement({
			el: infoWrapper,
			type: "div",
			className: "text-muted",
			innerHTML: item.id + ": " + capitalizedFirstLetter()
		});

		var innerGroupDescription = createNewElement({
			el: infoWrapper,
			type: "div",
			className: "text-muted",
			innerHTML: doShortDescription()
		});

		var innerGroupDate = createNewElement({
			el: infoWrapper,
			type: "div",
			className: "text-muted",
			innerHTML: doFormattedDate()
		});
	}

	doTemplate();
};

inBetween(FIRST, LAST).forEach(showImage);
countShow.html(inBetween(FIRST,LAST).length);




