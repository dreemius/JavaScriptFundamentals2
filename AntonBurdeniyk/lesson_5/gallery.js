run();
function run(){
	var MAX_PICTURE = data.length;
	var resultHTML = "";
	var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';
	data.splice(0,MAX_PICTURE).forEach(function(item){
		resultHTML += itemTemplate
			.replace("$number", item.id)
			.replace(/\$name/gi, changeName(item.name))
			.replace("$url", item.url)
			.replace("$description", changeDescription(item.description))
			.replace("$date", changeDate(item.date));
	});
	printAll(resultHTML);
}
function printAll(resultHTML){
	var resultContainer = $('#result');
	resultContainer.html(resultHTML);
}
function changeName(name){
	return name[0].toLocaleUpperCase()+name.slice(1).toLocaleLowerCase();
}
function changeDescription(description){
	return description.slice(0,15);
}
function changeDate(date){
	var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           (tmpDate.getMonth()+1) + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();	
}