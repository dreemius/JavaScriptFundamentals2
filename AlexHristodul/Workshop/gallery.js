
var filmLoader = (function(){
	var resultContainer = $('#result');
	var compiled = _.template('<div class="col-xs-6">\
				<img src="<%=url%>" alt="<%=name%>" class="img-thumbnail pull-left">\
				<div class="info-wrapper pull-left">\
					<div class="text-muted"><%=description%></div>\
					<div class="text-muted"><%=years%></div>\
					<div class="text-muted"><%=type%></div>\
				</div>\
			</div>');


	function buildOneItem(value) {
			var item = compiled({
				url: value.Poster,
				description: value.Title,
				type: value.Type,
				years: value.Year
			});

			resultContainer.html(item);
	}


	function getQueryString() {
		var searchInput = $('#search').val();
		console.log(searchInput);
		return searchInput;
	}

	//don't change
	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}

	function buildTable (data) {
		for(var i=0; i < data.Search.length; i++) {
			buildOneItem(data.Search[i]);
		}
	}

	function init (){
		$('#btnSearch').on('click', function() {
				search(getQueryString());
				buildTable();
			});
	}
	init();

	return {
		//don't change
		buildTable : function(data) {
			buildTable(data);
			console.log(data);
		}
	}

}());

//don't change
window.onDataLoaded = function(list) {
	filmLoader.buildTable(list);
};