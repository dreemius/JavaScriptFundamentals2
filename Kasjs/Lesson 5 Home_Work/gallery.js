
// это тестовый объект чтоб показать как вставлять в HTML
// вам надо пользоваться верхним 

var FROM = 1, TO = 8,NUMBER_OF_ELEMENTS = 10;
//Simplest filter of the object
function filterObject() {
	data.length = NUMBER_OF_ELEMENTS;
	data = data.slice(FROM - 1, TO);
}
filterObject();
// format object to required layout
function formatObject () {
	for (var i = 0; i < data.length; i++) {
		data[i].name = data[i].name.toLowerCase();
		data[i].name = data[i].name.replace(/[^abc]/,data[i].name.charAt(0).toUpperCase());
		data[i].description = data[i].description.slice(0, 15);
		data[i].date = new Date(data[i].date).toISOString();
		data[i].date = data[i].date.replace(/-/g, "/").replace(/t/i, " ").replace(/.637z/i, "");
		data[i].date = data[i].date.slice(0, 16);
	}
	return data;
}
formatObject();

function outputData() {
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


	for (var i = 0; i < data.length; i++) {
		resultHTML += itemTemplate
			.replace("$number", data[i].id)
			.replace(/\$name/gi, data[i].name)
			.replace("$url", data[i].url)
			.replace("$description", data[i].description)
			.replace("$date", data[i].date);

		resultContainer.html(resultHTML);
	}
}
outputData();









			