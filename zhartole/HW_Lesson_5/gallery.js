
var COUNT_IMAGE = data.length,
	NUMBERS_TO_DISPLAY = 0,// if 0 - all, if 1 - odd, if 2 - even
    resultContainer = $('#result'),
	countShow = $('#count-image'),
	resultHTML = "",
	itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';

function extractDataToDisplay() {
	return data.filter(function(item) {
		return  NUMBERS_TO_DISPLAY == 1 ? item.id % 2 != 0 :(NUMBERS_TO_DISPLAY == 2 ? item.id % 2 == 0 : data);
	});
}

/**
 * - - - For range of numbers - - -
 var FIRST = 0, //id first img;
     LAST  = 10;//id last img;
 function inBetween(START, FINISH) {
	return data.filter(function(item) {
		return item.id >= START && item.id <= FINISH;
	});
}
 inBetween(FIRST, LAST).
 **/

extractDataToDisplay().forEach(function(item) {
		var capitalizedFirstLetter = item.name.charAt(0) + item.name.slice(1).toLowerCase(),
			shortDescription = item.description.slice(0, 15),
			date = new Date(item.date),
			formattedDate = date.getFullYear() + "/" + (date.getMonth() + 1) + "/" + date.getDate()+ " " + date.getHours() + ":" + date.getMinutes();
		resultHTML += itemTemplate
			.replace("$number", item.id)
			.replace(/\$name/gi, capitalizedFirstLetter)
			.replace("$url", item.url)
			.replace("$description", shortDescription)
			.replace("$date", formattedDate);
});
resultContainer.html(resultHTML);
countShow.html(COUNT_IMAGE);


