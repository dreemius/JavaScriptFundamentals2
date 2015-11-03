var resultContainer = $('#result');
var resultHTML 		= "";
var elements = 7;
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';

function changeName(correctName){
	return correctName[0].toLocaleUpperCase() + correctName.toLocaleLowerCase().slice(1);
}
function cutDescription(correctDescription){
	return correctDescription.slice(0,15);
}
function newDate(date){
	return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
}

data.forEach(function(item, index){
if(index<elements){
 resultHTML += itemTemplate
	.replace("$number", item.id)
	.replace(/\$name/gi, changeName(item.name))
	.replace("$url", item.url)
	.replace("$description", cutDescription(item.description))
	.replace("$date", newDate(new Date(item.date)));
}
});
resultContainer.html(resultHTML);


