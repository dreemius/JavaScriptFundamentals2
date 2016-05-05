
var filmLoader = (function(){
	var input = $('#search'),
		searchBtn = $('#btnSearch'),
		resultContainer = $('#result'),
		row = _.template('<div class="row"><%=item1%><%=item2%></div>'),

		compiled = _.template('<div class="col-xs-6">\
				<img src="<%=url%>" alt="<%=name%>" class="img-thumbnail pull-left">\
				<div class="info-wrapper pull-left">\
					<div class="text-muted"><%=name%></div>\
					<div class="text-muted"><%=type%></div>\
					<div class="text-muted"><%=year%></div>\
				</div>\
			</div>');

	//don't change
	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}

	function buildTable (searchResult) {
		var resultItems = [];
		searchResult.Search.forEach(function(item){
			var html = buildOneItem(item);
			resultItems.push(html);
		});

		var result = [];
		for (var i=0; i<resultItems.length; i+=2) {
			result.push(buildRow(resultItems, i));
		}
		printResult(result.join(''));
	}

	function buildOneItem(item) {
		return compiled({
			url: item.Poster,
			name: item.Title,
			type: item.Type,
			year: item.Year
		});
	}

	function buildRow (data, index) {
		return row({
			item1: data[index] ? data[index] : '' ,
			item2: data[index+1] ? data[index+1] : ''
		})
	}

	function printResult(html){
		resultContainer.html(html);
	}


	function getQueryString () {
		return input.val();
	}

	function searchHandler (event){
		event.preventDefault();
		search(getQueryString());
	}

	function init (){
		searchBtn.click(searchHandler)
	}
	init();

	function function_name(argument) {
		var module = require('module');
	}

	function test (){}
	function () {

	}

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
