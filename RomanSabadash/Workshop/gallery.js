var filmLoader = (function(){
	var resultContainer = $('#result');
	var compiled = _.template('<div class="col-xs-6">\
								<img src="<%=url%>" alt="<%=name%>" class="img-thumbnail pull-left">\
								<div class="info-wrapper pull-left">\
									<div class="text-muted"><%=description%></div>\
									<div class="text-muted"><%=year%></div>\
									<div class="text-muted"><%=type%></div>\
								</div>\
							</div>');
	var resultHTML = "";

	function buildOneItem(value) {
		for(var i = 0; i < value.Search.length; i++) {
			var item = {
				url : value.Search[i].Poster,
				name : value.Search[i].Title,
				description: value.Search[i].Title,
				year : value.Search[i].Year,
				type : value.Search[i].Type
			};

			var html = compiled({
				url: item.url,
				name: item.name,
				description: item.description,
				year: item.year,
				type: item.type
			});

			resultHTML += html;
			resultContainer.html(resultHTML);
		};
	}

	function getQueryString () {
		var inputValue = $("#search").val();
		return inputValue;
	}

	//don't change
	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}

	function buildTable (data) {

			buildOneItem(data);
	}

	function init () {
		$('#btnSearch').on('click', function(){
			search(getQueryString());
		});
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