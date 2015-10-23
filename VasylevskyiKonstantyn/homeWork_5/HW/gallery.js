var ITEM_COUNT = data.length;
var START_POSITION = 5;
var FINAL_POSITION = 12;
var countView = $('#item_cnt');
var resultContainer = $('#result');
var resultHTML = "";
function capFirstLetter(str) {
	return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
function splitDescription(description){
	return description.slice(0,16)+" ...";
}
function convertData(timestamp){
    var data = new Date(timestamp);
	var year =data.getFullYear();
	var month = data.getMonth()+1;
	var day = data.getDate();
	var hour =data.getHours();
	var second =data.getSeconds();
	return year + '/' + month + '/' + day + " " + hour + ":" + second;
}

countView.html(ITEM_COUNT);
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';
data.forEach(function(item){
	resultHTML += itemTemplate
		.replace("$number", item.id)
		.replace(/\$name/gi,capFirstLetter(item.name))
		.replace("$url", item.url)
		.replace("$description", splitDescription(item.description))
		.replace("$date", convertData(item.date));

});
resultContainer.html(resultHTML);

