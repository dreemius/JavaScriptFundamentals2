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

var VISIBLE_IMAGE=+prompt("Enter the number of displayed images:", "From 1 to 5"),
	START_POSITION = 5,
	STOP_POSITION = 12;

var filteredGallery = data.slice(START_POSITION,STOP_POSITION);

	/* another method
	 var filteredGallery = data.filter(function(value, index, arr) {
	 return (index>=START_POSITION&&index<=STOP_POSITION)
	 });
	 */

function filterName(value) {
	return value[0].toUpperCase() + value.slice(1).toLowerCase();
}
	
function filterDescription(string) {
	return string.slice(0,15);
}

function filterDate(date){
	var newDate = new Date(date);
	return newDate.getFullYear() + "/" + newDate.getMonth() + "/" + newDate.getDate() + " " + newDate.getHours() + ":" + newDate.getMinutes();
}

filteredGallery.length = VISIBLE_IMAGE;

filteredGallery.forEach(function(item){
	resultHTML += itemTemplate
	.replace("$number", item.id)
	.replace(/\$name/gi,filterName(item.name))
	.replace("$url", item.url)
	.replace("$description", filterDescription(item.description))
	.replace("$date", filterDate(item.date));
});

resultContainer.html(resultHTML);		
			