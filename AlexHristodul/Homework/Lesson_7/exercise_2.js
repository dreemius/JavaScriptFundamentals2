"use strict";
//create by ***iPhoenix***

var resultContainer = document.querySelector('#result'),
	addNewPicture = document.querySelector('#addNewPicture'),
	countPictures = document.querySelector('#count');
	
var currentCount = 0,
	count = 0;
	
addNewPicture.addEventListener("click", run);

//*************************************************************************************************************************************************************

function newName(name){
   return name[0].toLocaleUpperCase()+name.slice(1).toLocaleLowerCase();
};

function newDescr(description){
    return description.slice(0,15);
};

function newDate(date){
    var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           tmpDate.getMonth() + 1 + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();
};

function createNewElement(paramSet) {
	var element = paramSet.el.appendChild(document.createElement(paramSet.type));
	paramSet.className && (element.className = paramSet.className);
	paramSet.src && (element.src = paramSet.src);
	paramSet.innerHTML && (element.innerHTML = paramSet.innerHTML);
	paramSet.href && (element.href = paramSet.href);
	return element;
}

function updateCounts() {
	currentCount == data.length - 1 ? currentCount=0 : currentCount++;
	count++;
	countPictures.innerHTML=count;	
}

function deleteElement(event) {
		event.preventDefault();
        resultContainer.removeChild(event.target.closest('.col-sm-3'));
		count--;
		count--;
		updateCounts();
};

function run() {
			var containerCreate = createNewElement({
				el: resultContainer,
				type: "div",
				className: "col-sm-3 col-xs-6"
			});
			
			var imageShow = createNewElement({
				el: containerCreate,
				type: "img",
				className: "img-thumbnail",
				src: data[currentCount].url
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
				innerHTML: data[currentCount].id + ' ' + newName(data[currentCount].name)
			});

			var descriptionPrint = createNewElement({
				el: innerPrint,
				type: "div",
				className: "text-muted",
				innerHTML: newDescr(data[currentCount].description)
			});
			
			var datePrint = createNewElement({
				el: innerPrint,
				type: "div",
				className: "text-muted",
				innerHTML: newDate(data[currentCount].date)
			});
			
			var delDiv = createNewElement ({
				el: datePrint,
				type: "div",
				className: "text-muted"
			});

			var delLink = createNewElement ({
				el: delDiv,
				type: "a",
				href: "#",
				className: "remove",
				innerHTML: "Удалить",
			});
			
			delLink.addEventListener("click", deleteElement);
			updateCounts();
}