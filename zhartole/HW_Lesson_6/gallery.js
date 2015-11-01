
var FIRST = 1, //id first img;
	LAST  = data.length,//id last img;
	NUMBER_OF_IMAGES = data.length,
	resultContainer = $('#result'),
	countShow = $('#count-image'),
	resultHTML = "",
	showImage;

function inBetween(START, FINISH) {
//	data.length = NUMBER_OF_IMAGES; // why its does`nt work ?!
	return data.slice(START - 1, FINISH);
}

showImage = function(item) {
	var url = item.url,
		id = item.id;
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
	resultHTML += doTemplate (url, capitalizedFirstLetter(), id, doShortDescription(), doFormattedDate());
};

inBetween(FIRST, LAST).forEach(showImage);
resultContainer.html(resultHTML);
countShow.html(NUMBER_OF_IMAGES);

function doTemplate (url, name, id, description, date) {
	var group = document.createElement('div');
	group.className = "col-sm-3 col-xs-6";
	var container = document.querySelectorAll('.row');
	container.appendChild(group);

	var img = document.createElement('img');
	img.className = "img-thumbnail";
	img.src = url;
	img.alt = name;
	var imgContainer = document.querySelectorAll('.col-sm-3 col-xs-6');
	imgContainer.appendChild(img);

	var subGroup = document.createElement('div');
	subGroup.className = "info-wrapper";
	var subContainer = document.querySelectorAll('.col-sm-3 col-xs-6');
	subContainer.appendChild(subGroup);

	var innerGroupName = document.createElement('div');
	innerGroupName.className = "text-muted";
	innerGroupName.innerHTML = id + " : " + name;
	var innerNameContainer = document.querySelectorAll('.info-wrapper');
	innerNameContainer.appendChild(innerGroupName);

	var innerGroupDescription = document.createElement('div');
	innerGroupDescription.className = "text-muted";
	innerGroupDescription.innerHTML = description;
	var innerDescriptionContainer = document.querySelectorAll('.info-wrapper');
	innerDescriptionContainer.appendChild(innerGroupDescription);

	var innerGroupDate = document.createElement('div');
	innerGroupDate.className = "text-muted";
	innerGroupDate.innerHTML = date;
	var innerDateContainer = document.querySelectorAll('.info-wrapper');
	innerDateContainer.appendChild(innerGroupDate);
}


