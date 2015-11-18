
var FROM = 1, TO = 10,NUMBER_OF_ELEMENTS = 5;
var newData  = [];
//Simplest filter of the object
function filterObject() {

	newData = data.splice(NUMBER_OF_ELEMENTS) ;
	newData = data.slice(FROM - 1, TO);
}
function formatDate(oldDate){
	var formDate = new Date(oldDate);
	var year = formDate.getFullYear();
	var month = formDate.getMonth() + 1;
	var day = formDate.getDate();
	var hour = formDate.getHours();
	var minutes = formDate.getMinutes();
	return year + "/" + month + "/" + day + " " + (hour < 10 ? "0" + hour : hour) + ":" + (minutes < 10 ? "0" + minutes : minutes);
}
function preparingObj(oldObj){
	oldObj = oldObj.toLowerCase();
	oldObj = oldObj.replace(/[^abc]/,oldObj.charAt(0).toUpperCase());
	oldObj = oldObj.slice(0, 15);
	return oldObj;
}

// format object to required layout
function formatObject () {
	for (var i = 0; i < newData.length; i++) {
		newData[i].name = preparingObj(newData[i].name);
		newData[i].description = preparingObj(newData[i].description);
		newData[i].date = formatDate(newData[i].date);
	}
}

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


	for (var i = 0; i < newData.length; i++) {
		resultHTML += itemTemplate
			.replace("$number", newData[i].id)
			.replace(/\$name/gi, newData[i].name)
			.replace("$url", newData[i].url)
			.replace("$description", newData[i].description)
			.replace("$date", newData[i].date);

		resultContainer.html(resultHTML);
	}
}
filterObject();
formatObject();
outputData();









			