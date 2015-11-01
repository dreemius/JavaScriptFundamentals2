
var FIRST = 1, //id first img;
	LAST  = data.length,//id last img;
	NUMBER_OF_IMAGES = data.length,
	resultContainer = $('#result'),
	countShow = $('#count-image'),
	resultHTML = "",
	showImage,
	itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';

function inBetween(START, FINISH) {
//	data.length = NUMBER_OF_IMAGES; // why its does`nt work ?!
	return data.slice(START - 1, FINISH);
/**
 * - - - Alternative variant - - -
 return data.filter(function(item) {
		return item.id >= START && item.id <= FINISH;
	});
 */
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
	resultHTML += itemTemplate
			.replace("$number", item.id)
			.replace(/\$name/gi, capitalizedFirstLetter())
			.replace("$url", item.url)
			.replace("$description", doShortDescription())
			.replace("$date", doFormattedDate());
};

inBetween(FIRST, LAST).forEach(showImage);
resultContainer.html(resultHTML);
countShow.html(NUMBER_OF_IMAGES);


