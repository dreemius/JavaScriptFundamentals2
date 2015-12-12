

/*
var item = {
	url: "http://desktopwallpapers.org.ua/mini/201507/40066.jpg",
	name: "картинка 1",
	id : 1,
	description : "Using color to add meaning only",
	date : 1422153200637
}
*/

/*
var resultContainer = $('#result');
var resultHTML = "";
var itemTemplate = '<div class="col-xs-6">\
				<img src="$url" alt="$name" class="img-thumbnail pull-left">\
				<div class="info-wrapper pull-left">\
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
			
resultContainer.html(resultHTML);


*/

var filmLoader = (function(){
	var resultContainer = $('#result');


	function buildOneItem() {
		var item = {
			url: "http://desktopwallpapers.org.ua/mini/201507/40066.jpg",
			name: "картинка 1",
			description : "Using color to add meaning only",
		};

		var compiled = _.template('<div class="col-xs-6">\
				<img src="<%=url%>" alt="<%=name%>" class="img-thumbnail pull-left">\
				<div class="info-wrapper pull-left">\
					<div class="text-muted"><%=description%></div>\
				</div>\
			</div>');
		var html = compiled({
			url: item.url,
			name: item.name,
			description: item.description
		});
		resultContainer.html(html);
	}


	function getQueryString () {
		return "star";
	}

	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}


	function buildTable (data) {
		console.log(data);
		buildOneItem();
	}


	function init (){
		search (getQueryString());
	}
	init();

	return {
		buildTable : function(data) {
			buildTable(data);
		}
	}

}());

window.onDataLoaded = function(list) {
	filmLoader.buildTable(list);
};


