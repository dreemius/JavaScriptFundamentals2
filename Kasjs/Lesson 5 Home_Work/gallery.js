
var FROM = 1, TO = 10,NUMBER_OF_ELEMENTS = 5;
var newData  = [];
//Simplest filter of the object
function filterObject() {

	newData = data.splice(NUMBER_OF_ELEMENTS) ;
	newData = data.slice(FROM - 1, TO);
}

function formatDate(index){
	var formDate = new Date(newData[index].date);
	var year = formDate.getFullYear();
    var month = formDate.getMonth() + 1;
    var day = formDate.getDate();
	var hour = formDate.getHours();
	var minutes = formDate.getMinutes();
	newData[index].date = year + "/" + month + "/" + day + " " + hour + ":" + (minutes < 10 ? "0" + minutes : minutes);

}

function preparingObj(index){
	newData[index].name = newData[index].name.toLowerCase();
	newData[index].name = newData[index].name.replace(/[^abc]/,newData[index].name.charAt(0).toUpperCase());
	newData[index].description = newData[index].description.slice(0, 15);
}
// format object to required layout
function formatObject () {
	for (var i = 0; i < newData.length; i++) {
		preparingObj(i);
		formatDate(i);
	}
	return newData;

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









			