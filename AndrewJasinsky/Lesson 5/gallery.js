//global variables
var resultContainer = $('#result'),
	resultHTML = "",
	itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>'	;

//constants

var DISPLAYED_IMAGES=+prompt("Enter the number of displayed images:", "From 1 to 5"),
	START_POSITION = 5,
	STOP_POSITION = 12;

//functions
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

//start programm

var filteredGallery = data.slice(START_POSITION,STOP_POSITION);

	/* another method
	 var filteredGallery = data.filter(function(value, index, arr) {
	 return (index>=START_POSITION&&index<=STOP_POSITION)
	 });
	 */

filteredGallery.length = DISPLAYED_IMAGES;

filteredGallery.forEach(function(item){
	resultHTML += itemTemplate
	.replace("$number", item.id)
	.replace(/\$name/gi,convertName(item.name))
	.replace("$url", item.url)
	.replace("$description", convertDescription(item.description))
	.replace("$date", convertDate(item.date));
});

resultContainer.html(resultHTML);		
			