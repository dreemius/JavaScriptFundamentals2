"use strict";

var	addNewPicture = document.querySelector('#addNewPicture'),
	countPictures = document.querySelector('#count');
	
var dataLength = (data.length-1),
	currentCount = 0,
	count = 0;
	
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
	currentCount == dataLength ? currentCount=0 : currentCount++;
	count++;
	countPictures.innerHTML=count;	
}

var deletePicture = function (event) {
	console.log(event.target);
	console.log(event.currentTarget);
	document.getElementById('test').removeChild(event.target.parentNode.parentNode.parentNode);
	count--;
	countPictures.innerHTML=count;
}

function run() {
			var resultContainer = document.querySelector('#test');
			
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
			
			delLink.addEventListener("click", deletePicture);
			updateCounts();	
}

addNewPicture.addEventListener("click", run);