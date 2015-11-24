var FIRST_ITEM = 2;
var LASRT_ITEM = 6;
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

// Change name
function newName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

// Change description
function newDescription(descrp) {
	return descrp.slice(0,15);
}

// Change date
function newDate(date) {
	var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}

// Iteration
function run() {

	for (var i = FIRST_ITEM; i < LASRT_ITEM; i++ ) {
		newItem = {
			url : data[i].url,
			name : newName(data[i].name),
			id : data[i].id,
			description : newDescription(data[i].description),
			date : newDate(data[i].date)
		};

		resultHTML += itemTemplate
		.replace("$number", newItem.id)
		.replace(/\$name/gi, newItem.name)
		.replace("$url", newItem.url)
		.replace("$description", newItem.description)
		.replace("$date", newItem.date);
				
		resultContainer.html(resultHTML);
	}

}

run();