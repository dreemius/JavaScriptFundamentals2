
var resultContainer = $('#result');
var resultHTML 		= "";
var MAX 			= 2,
	STARTP			= 1;
	ENDP			= data.length;
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';
function corectingName(namec){
	return namec[0].toLocaleUpperCase()+namec.slice(1).toLocaleLowerCase();
}
function cutFromDescription(str){
	return str.slice(0,15);
}
function formateDate(datef){
	return datef.getFullYear()+'/'+datef.getMonth()+'/'+datef.getDate()+' '+datef.getHours()+':'+datef.getMinutes();
}
data.forEach(function(item, index){
if ((index < MAX)&&(index >= STARTP-1)&&(index < ENDP)){
resultHTML += itemTemplate
	.replace("$number", item.id)
	.replace(/\$name/gi, corectingName(item.name))
	.replace("$url", item.url)
	.replace("$description", cutFromDescription(item.description))
	.replace("$date", formateDate(new Date(item.date)));
}
});			
resultContainer.html(resultHTML);