"use strict";

var START_P = 0,
	END_P = 8,
	TOTAL_EL = 10;
	
showGallery();

//_____________________________________________________________________________________________________________________________________________________________

function newName(oldName){
	return oldName[0].toLocaleUpperCase()+oldName.slice(1).toLocaleLowerCase();
};

function newDescr(descr){
	return descr.slice(0,15);
};

function newDate(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + 1 + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};

function transformData() {
	var filterGallery = data.slice(START_P, END_P);
	return filterGallery.slice(0, TOTAL_EL).map(function(item) {
		item.name = newName(item.name);
		item.description = newDescr(item.description);
		item.date = newDate(item.date);
		return item;
	})
}

function createNewElement(paramSet) {
	var element = paramSet.el.appendChild(document.createElement(paramSet.type));
	paramSet.className && (element.className = paramSet.className);
	paramSet.src && (element.src = paramSet.src);
	paramSet.alt && (element.alt = paramSet.alt);
	paramSet.innerHTML && (element.innerHTML = paramSet.innerHTML);
	return element;
}

function showGallery() {
		for(var i = 0; i < transformData().length; i++ ) {
			var resultContainer = document.querySelector("#result");
			var containerCreate = createNewElement({
					el: resultContainer,
					type: "div",
					className: "col-sm-3 col-xs-6"
			});
			
			var imageShow = createNewElement({
					el: containerCreate,
					type: "img",
					className: "img-thumbnail",
					src: transformData()[i].url,
					alt: transformData()[i].name
			});

			var innerPrint = createNewElement({
					el: containerCreate,
					type: "div",
					className: "info-wrapper"
			});

			var namePrint = createNewElement({
					el: innerPrint,
					type: "div",
					className: "text-muted",
					innerHTML: transformData()[i].id + ": " + transformData()[i].name
			});

			var descriptionPrint = createNewElement({
					el: innerPrint,
					type: "div",
					className: "text-muted",
					innerHTML: transformData()[i].description
			});
			
			var datePrint = createNewElement({
					el: innerPrint,
					type: "div",
					className: "text-muted",
					innerHTML: transformData()[i].date 
			});
		}
}