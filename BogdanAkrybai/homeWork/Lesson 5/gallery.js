var NUM_OF_ELEM = 5;

var resultContainer = $('#result');
var resultHTML = "";
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';

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
	return data.slice(0, NUM_OF_ELEM).filter(function(item) {
		item.name = toUpperLetter(item.name);
		item.description = sliceDescription(item.description);
		item.date = modifyDate(item.date);
		return item;
	});
}

function displayData() {
	manipulateData().forEach(function(item) {
			resultHTML += itemTemplate
				.replace("$number", item.id)
				.replace(/\$name/gi, item.name)
				.replace("$url", item.url)
				.replace("$description", item.description)
				.replace("$date", item.date);
	});
}
displayData();
resultContainer.html(resultHTML);