var START = 1;
var END = 7;
var SHOW_IMAGES = 6;

var resultContainer = $('#result');
var resultHTML = "";
var newGallery;
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';

function getName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}
	
function getDesc(txt) {
	return txt.slice(0,15);
}

function getDate(date){
	var newDate = new Date(date);
	return 	newDate.getFullYear() + "/" + 
			newDate.getMonth() + "/" +
			newDate.getDate() + " " + 
			newDate.getHours() + ":" +
			newDate.getMinutes();
}

function convertGallery() {
	newGallery = data.slice(START,END);
	return newGallery.slice(0,SHOW_IMAGES).filter(function(i) {
		i.name = getName(i.name);
		i.description = getDesc(i.description);
		i.date = getDate(i.date);
		return i;
	})
}	


function content() {
	convertGallery().forEach(function(i){
		resultHTML += itemTemplate
		.replace("$number", i.id)
		.replace(/\$name/gi,i.name)
		.replace("$url", i.url)
		.replace("$description", i.description)
		.replace("$date", i.date)	
	});
}


content();
resultContainer.html(resultHTML);
			