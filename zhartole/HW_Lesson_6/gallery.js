
var FIRST = 5, //id first img;
	LAST  = data.length,//id last img;
	NUMBER_OF_IMAGES = data.length,
	resultContainer = document.querySelector("#result"),
	countShow = $('#count-image'),
	newGallery,
	showImage;

function inBetween(START, FINISH) {
	newGallery = data.slice(START - 1, FINISH);
	return newGallery.slice(0,NUMBER_OF_IMAGES);
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
		return date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()+ " " + date.getHours() + ":" + date.getMinutes();
	}
	doTemplate (item.url, capitalizedFirstLetter(), item.id, doShortDescription(), doFormattedDate());
};

inBetween(FIRST, LAST).forEach(showImage);
countShow.html(inBetween(FIRST,LAST).length);

function doTemplate (url, name, id, description, date) {
	for (var i = 0; i < showImage.length; i++ ) {
		var createDiv = document.createElement('div'),
			group = createDiv;
		group.className = "col-sm-3 col-xs-6";

		var img = document.createElement('img');
		img.className = "img-thumbnail";
		img.src = url;
		img.alt = name;

		var infoWrapper = document.createElement('div');
		infoWrapper.className = "info-wrapper";

		var innerGroupName = document.createElement('div');
		innerGroupName.className = "text-muted";
		innerGroupName.innerHTML = id + " : " + name;

		var innerGroupDescription = document.createElement('div');
		innerGroupDescription.className = "text-muted";
		innerGroupDescription.innerHTML = description;

		var innerGroupDate = document.createElement('div');
		innerGroupDate.className = "text-muted";
		innerGroupDate.innerHTML = date;

		resultContainer.appendChild(group);
		group.appendChild(img);
		group.appendChild(infoWrapper);
		infoWrapper.appendChild(innerGroupName);
		infoWrapper.appendChild(innerGroupDescription);
		infoWrapper.appendChild(innerGroupDate);
	}
}


