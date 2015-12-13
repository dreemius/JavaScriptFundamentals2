var filmLoader = (function(){
  
  var result=document.querySelector("#result");
  var searchBtn=document.querySelector(".btn-default");
 
  function createHtmlElement(tagName,clName,inHtml){
	  var domElement=document.createElement(tagName);
	  clName&&(domElement.className=clName);
	  inHtml&&(domElement.innerHTML=inHtml);
	  return domElement;
	}
    function createImg(clName,source){
	    var tempImg=document.createElement('img')
	    clName && (tempImg.className=clName);
	    source && (tempImg.src=source);
	    return tempImg;
	};
    function getQueryString () {
        var searchField=document.querySelector("#search");
        var searchString=searchField.value;
		 return searchString;
	}
    //don't change
	function search (searchString){
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
	}
    function buildTable (data) {
	    for(i=0;i<data.Search.length;i++){
		var template=createHtmlElement('div',"col-xs-6");
		var poster=createImg("img-thumbnail pull-left",data.Search[i].Poster);
		var infoWrapper=createHtmlElement('div',"info-wrapper pull-left");
		var title=createHtmlElement('div',"text-muted",data.Search[i].Title);
		var year=createHtmlElement('div',"text-muted",data.Search[i].Year);
		var imdb=createHtmlElement('div',"text-muted",data.Search[i].imdbID);
		var type=createHtmlElement('div',"text-muted",data.Search[i].Type);
		  result.appendChild(template);
		  template.appendChild(poster);
		  template.appendChild(infoWrapper);
		  infoWrapper.appendChild(title);
		  infoWrapper.appendChild(year);
		  infoWrapper.appendChild(imdb);
		  infoWrapper.appendChild(type);
		}
	 }
    function init (){
	    search (getQueryString());
     }
    
	function startSearch (){
	    searchBtn.addEventListener("click",init);
	}
	
	 startSearch ();
	 
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
