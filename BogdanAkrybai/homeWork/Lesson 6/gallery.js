var BEG_POSITION = 0;
	TOTAL_NUM_OF_ELEM = 5;

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

function manipulateData() {
	return data.slice(BEG_POSITION, TOTAL_NUM_OF_ELEM).map(function(item) {
		item.name = toUpperLetter(item.name);
		item.description = sliceDescription(item.description);
		item.date = modifyDate(item.date);
		return item;
	})
}

function createNewElement(parameters) {
	var element = parameters.el.appendChild(document.createElement(parameters.type));
	parameters.className && (element.className = parameters.className);
	parameters.src && (element.src = parameters.src);
	parameters.alt && (element.alt = parameters.alt);
	parameters.innerHTML && (element.innerHTML = parameters.innerHTML);
	return element;
}

function displayData() {
	for (var i = 0; i < manipulateData().length; i++) {

		var resContainer = document.querySelector("#result");
		var containerHTML = createNewElement({
			el: resContainer,
			type: "div",
			className: "col-sm-3 col-xs-6"
		});

		var imageHTML = createNewElement({
			el: containerHTML,
			type: "img",
			className: "img-thumbnail",
			src: manipulateData()[i].url,
			alt: manipulateData()[i].name
		});

		var innerHTML = createNewElement({
			el: containerHTML,
			type: "div",
			className: "info-wrapper"
		});

		var nameHTML = createNewElement({
			el: innerHTML,
			type: "div",
			className: "text-muted",
			innerHTML: manipulateData()[i].id + ": " + manipulateData()[i].name
		});

		var descriptionHTML = createNewElement({
			el: innerHTML,
			type: "div",
			className: "text-muted",
			innerHTML: manipulateData()[i].description
		});

		var dateHTML = createNewElement({
			el: innerHTML,
			type: "div",
			className: "text-muted",
			innerHTML: manipulateData()[i].date
		});
	}
}

displayData();