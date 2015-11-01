//////////////// MY JS CODE ///////////////////

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

data.forEach(function(item, index) {
	var upperLetter = item.name[0].toLocaleUpperCase() + item.name.slice(1).toLocaleLowerCase(),
	    slicedDescription = item.description.slice(0, 15),
		modDate = new Date(item.date),
	    correctDate = modDate.getFullYear() + "/" + (modDate.getMonth() + 1)  + "/" +
			modDate.getDate() + " " + modDate.getHours() + ":" + modDate.getMinutes();
	if (index < NUM_OF_ELEM) {
		resultHTML += itemTemplate
			.replace("$number", item.id)
			.replace(/\$name/gi, upperLetter)
			.replace("$url", item.url)
			.replace("$description", slicedDescription)
			.replace("$date", correctDate);
	}
});
resultContainer.html(resultHTML);

