var films = (function(){

	window.onDataLoaded = function(list) {
		console.dir(list);
	};

	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}

	return {
		search : function(searchString){
			search (searchString);
		},
		getFilmInfo: function(form){
        }
	}


}());

films.search();


/*
 jQuery.ajax({
 url: 'http://sg.media-imdb.com/suggests/s/star.json',
 dataType: 'jsonp',
 cache: true,
 jsonp: false,
 jsonpCallback: 'imdb$star'
 }).done(function (result) {});
 */