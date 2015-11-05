
var FROM = 1, TO = 4,NUMBER_OF_ELEMENTS = 10;
var newData  = [];
//Simplest filter of the object
function filterObject() {

	newData = data.splice(NUMBER_OF_ELEMENTS) ;
	newData = data.slice(FROM - 1, TO);
}

function formatDate(obj,index){
	var formDate = new Date(obj[index].date);
	var year = formDate.getFullYear();
    var month = formDate.getMonth() + 1;
    var day = formDate.getDate();
	var hour = formDate.getHours() + 1;
	var minutes = formDate.getMinutes() + 1;
	obj[index].date = year + "/" + month + "/" + day + " " + hour + ":" + (minutes < 10 ? "0" + minutes : minutes);

	return obj;
}

function preparingObj(obj,index){
	obj[index].name = obj[index].name.toLowerCase();
	obj[index].name = obj[index].name.replace(/[^abc]/,obj[index].name.charAt(0).toUpperCase());
	obj[index].description = obj[index].description.slice(0, 15);

	return obj;
}
// format object to required layout
function formatObject () {
	for (var i = 0; i < newData.length; i++) {
		preparingObj(newData,i);
		formatDate(newData,i);
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









			