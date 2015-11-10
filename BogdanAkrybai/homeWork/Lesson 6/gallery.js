var NUM_OF_ELEM = 5;

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
	return data.slice(0, NUM_OF_ELEM).map(function(item) {
		item.name = toUpperLetter(item.name);
		item.description = sliceDescription(item.description);
		item.date = modifyDate(item.date);
		return item;
	})
}

function displayData() {
	for (var i = 0; i < manipulateData().length; i++ ) {

		var innerContainer = document.createElement('div');
		innerContainer.className = "col-sm-3 col-xs-6";

		var img = document.createElement('img');
		img.src = data[i].url;
		img.alt = toUpperLetter(data[i].name);
		img.className = "img-thumbnail";

		var infoWrapper = document.createElement('div');
		infoWrapper.className ='info-wrapper' ;

		var idName = document.createElement('div');
		idName.className = 'text-muted';
		idName.innerHTML = data[i].id + ':' + toUpperLetter(data[i].name);

		var descrption = document.createElement('div');
		descrption.className = 'text-muted';
		descrption.innerHTML = sliceDescription(data[i].description);

		var date = document.createElement('div');
		date.className = 'text-muted';
		date.innerHTML = modifyDate(data[i].date);

		var resultContainer = document.querySelector('#result');

		resultContainer.appendChild(innerContainer);
		innerContainer.appendChild(img);
		innerContainer.appendChild(infoWrapper);
		infoWrapper.appendChild(idName);
		infoWrapper.appendChild(descrption);
		infoWrapper.appendChild(date);
	}
}

displayData();
