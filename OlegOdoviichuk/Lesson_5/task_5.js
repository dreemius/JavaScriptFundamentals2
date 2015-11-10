var ELEMENTS_NUMBER = 4;
var ELEMENTS_START = 5;
var ELEMENTS_FINISH = 10;
var newArr = [];

newArr = data.filter(function(item) {
	return (item.id >= ELEMENTS_START && item.id <= ELEMENTS_FINISH);
	
});


function changeName(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
};
function sliceDescription(description) {
	return description.slice(0, 15);
};

function createDateObject(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
	tmpDate.getMonth() + "/" +
	tmpDate.getDate() + " " +
	tmpDate.getHours() + ":" +
	tmpDate.getMinutes();
};
function changeOptions() {
for(var i = 0; i < newArr.length;i++) {
	
	newArr[i].name = changeName(newArr[i].name);
	newArr[i].description = sliceDescription(newArr[i].description);
	newArr[i].date = createDateObject(newArr[i].date);
	
    }
};
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

function printResult(arrObj){
	for (var j=0; j<ELEMENTS_NUMBER;j++){
		resultHTML += itemTemplate
		.replace("$number", arrObj[j].id)
		.replace(/\$name/gi, arrObj[j].name)
		.replace("$url", arrObj[j].url)
		.replace("$description",arrObj[j].description)
		.replace("$date", arrObj[j].date);	
	}
	return resultContainer.html(resultHTML);
}
function start(){
	changeOptions();
	printResult(newArr);

};
start();
