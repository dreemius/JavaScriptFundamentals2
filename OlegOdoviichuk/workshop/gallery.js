
var filmLoader = (function(){
	var resultContainer = $('#result');
	var compiled = _.template('<div class="col-xs-6">\
				<img src="<%=url%>" alt="<%=name%>" class="img-thumbnail pull-left">\
				<div class="info-wrapper pull-left">\
					<div class="text-muted"><%=title%></div>\
					<div class="text-muted"><%=description%></div>\
				</div>\
			</div>');
	var resultHTML = "",		
    name = document.querySelector('#search '),     //находим строку для ввода по ID
    buttonD = document.querySelector('.btn-default');  //находим кнопку по классу
	buttonD.addEventListener("click", init);  // добавляем эвент click на кнопку buttonD которая запускает функ. init

	function buildAllItem(films) {
		var list = films.Search;
		for(var i = 0; i < list.length; i++){
		
		var html = compiled({
			url		: list[i].Poster,
			name	: list[i].Title,
			description: list[i].Type,
			title	: list[i].Title
		});
		resultHTML += html;
		};
		resultContainer.html(resultHTML);
	}
	
	function getQueryString () {  // возвращяет результат (стринг)содержимого которое вводят в элементе которому присвоена переменная name
		return name.value;	
	}
	
	//don't change
	function search (searchString){
	//console.log(jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded'));  что дает нам этот console.log
		jQuery.getScript('http://www.omdbapi.com/?s='+searchString+'&plot=short&r=json&callback=onDataLoaded');
		//console.log(search()); почему браузер зависает????
		//почему функ. search отправляет даные в buildTable???
	}

	function buildTable (data) {
		//console.log(data);     // зачем она тут ?
		buildAllItem(data);
	}
     
	function init (){	
		search(getQueryString());  //запускает функ init которая запускает search и подставляет в качестве аргумента результат функ getQueryString
	}
	
	return {
		//don't change
		buildTable : function(data) {
			buildTable(data); //почему мы не могли тут описать функ. buildTable???
		}
	}

}());

//don't change
window.onDataLoaded = function(list) {    // мы добавляем в глоб. обьект window метод onDataLoaded в котором анонимная функция запускает
	filmLoader.buildTable(list); 		  // наш глобально объявленый обьект filmLoader и вызывает у него метод buildTable.
};  									// путаница с аргументом list не сильно понятно как дальше он переходит


