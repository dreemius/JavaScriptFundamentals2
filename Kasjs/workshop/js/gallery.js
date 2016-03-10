
var filmLoader = (function(){
    var html = '';
    var resultContainer = $('#result');
	var compiled = _.template('<div class="col-xs-2">\
				<img src="<%=poster%>" alt="<%=name%>" class="img-thumbnail img-responsive pull-left">\
				<div class="info-wrapper pull-left">\
				    <p><%=title%></p>\
					<p><%=type%></p>\
					<p><%=year%></p></div>\
			</div>');


	function buildOneItem(obj) {
        for (var i = 0; i < obj.Search.length; i++) {

            var item = {
                poster : obj.Search[i].Poster == "N/A" ? obj.Search[i].Poster = "" : obj.Search[i].Poster,
                title  : obj.Search[i].Title,
                year   : obj.Search[i].Year,
                type   : obj.Search[i].Type
            };
            html += compiled({
                poster : item.poster,
                title  : item.title,
                year   : item.year,
                type   : item.type
            });
            resultContainer.html(html);
        }
    }

    function getQueryString () {
        return document.querySelector('#search').value;
	}

	//don't change
	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}

    function buildTable (data) {
		buildOneItem(data);
    }

    var init = function (){
        var searchButton = document.querySelector('.btn');
        searchButton.addEventListener('click',function(){
          search(getQueryString());
            html = "";
        });
    };
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



