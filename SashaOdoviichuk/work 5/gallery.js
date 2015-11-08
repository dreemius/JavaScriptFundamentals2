
// это тестовый объект чтоб показать как вставлять в HTML
// вам надо пользоваться верхним 
var item = {
	url: "http://desktopwallpapers.org.ua/mini/201507/40066.jpg",
	name: "картинка 1",
	id : 1,
	description : "Using color to add meaning only",
	date : 1422153200637
}


var resultContainer = document.getElementById('result');
var resultHTML = "";
var itemTemplate = '<div class="col-sm-3 col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail">\
				<div class="info-wrapper">\
					<div class="text-muted">$number: $name</div>\
					<div class="text-muted">$description</div>\
					<div class="text-muted">$date</div>\
				</div>\
			</div>';

resultHTML += itemTemplate
	.replace("$number", item.id)
	.replace(/\$name/gi, item.name)
	.replace("$url", item.url)
	.replace("$description", item.description)
	.replace("$date", item.date);
			
//aresultContainer.html(resultHTML);		
			