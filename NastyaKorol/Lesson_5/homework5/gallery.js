
// это тестовый объект чтоб показать как вставлять в HTML
// вам надо пользоваться верхним 
var CUTTING = 7;
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
run();
function run(){
data.splice(0,CUTTING).forEach(function(item){
	resultHTML += itemTemplate
		.replace("$number", item.id)
		.replace(/\$name/gi, formatName(item.name))
		.replace("$url", item.url)
		.replace("$description", formatDescription(item.description))
		.replace("$date", formatNewDate(item.date));	
})
		
resultContainer.html(resultHTML);		
}			
function formatName(name){
	return name[0].toLocaleUpperCase() + name.slice(1).toLocaleLowerCase();
}
function formatDescription(description){
	return description.slice(0,15);
}
function formatNewDate(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           (tmpDate.getMonth()+1) + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
}