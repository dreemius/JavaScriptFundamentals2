//global variables
var resultContainer = $('#result'),
	resultHTML = "",
	filteredGallery,
	itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>'	;

//constants
var DISPLAYED_IMAGES=+prompt("Enter the number of displayed images:", "Any number in the range from 1 to 10"),
	START_POSITION = 2,
	STOP_POSITION = 8;

//functions for convert initial array
function convertName(value) {
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
}
	
function convertDescription(string) {
	return string.slice(0,15);
}

function convertDate(date){
	var newDate = new Date(date);
	return newDate.getFullYear() + "/" + newDate.getMonth() + "/" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
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

//output result
function outputToHtml() {
	convertGallery().forEach(function(item){
		resultHTML += itemTemplate
		.replace("$number", item.id)
		.replace(/\$name/gi,item.name)
		.replace("$url", item.url)
		.replace("$description", item.description)
		.replace("$date", item.date)	
	});
}

outputToHtml();

resultContainer.html(resultHTML);		
			