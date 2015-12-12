
var filmLoader = (function(){
	var resultContainer = $('#result');
	var compiled = _.template('<div class="col-xs-6">\
				<img src="<%=url%>" alt="<%=name%>" class="img-thumbnail pull-left">\
				<div class="info-wrapper pull-left">\
					<div class="text-muted"><%=description%></div>\
				</div>\
			</div>');


	function buildOneItem() {
		var item = {
			url: "http://desktopwallpapers.org.ua/mini/201507/40066.jpg",
			name: "картинка 1",
			description : "Using color to add meaning only"
		};

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

	//don't change
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
		//don't change
		buildTable : function(data) {
			buildTable(data);
		}
	}

}());

//don't change
window.onDataLoaded = function(list) {
	filmLoader.buildTable(list);
};


