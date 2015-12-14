/*Workshop group-task
Created by iPhoenix© development 14.12.2015
*********************************************/

var filmLoader = (function () {
	'use strict';
    var resultContainer = $('#resultContainer');

    function getQueryString() {
        var valInput = $('#search').val();
        return valInput;
    }

    function tempCreate(dat) {
      var htmlContainer = '<div class="row">';
        _.each(dat.Search, function (data) {
        var compiled = _.template($("#item-template").html());
        var html = compiled({
            Poster: data.Poster,
            Title: data.Title,
            Type: data.Type,
            Year: data.Year,
            imdbID: data.imdbID
        });
        htmlContainer += html;
        resultContainer.html(htmlContainer);
        });

    }

    function search(searchString) {
       jQuery.getScript('http://www.omdbapi.com/?s=' + searchString 
	   + '&plot=short&r=json&callback=onDataLoaded');
    }

    function buildTable(data) {
       tempCreate(data);
    }

    function init() {
        $('#btnSerch').click(function() {search(getQueryString())});
    }

    init();

    return {
        buildTable: function (data) {
            buildTable(data);
        }
    }

}());

window.onDataLoaded = function (list) {
    filmLoader.buildTable(list);
};


