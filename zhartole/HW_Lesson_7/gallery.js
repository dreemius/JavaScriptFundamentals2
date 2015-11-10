
var //FIRST = 1, //id first img;
	//LAST  = 3,//id last img;
	//NUMBER_OF_IMAGES = data.length,
	//newGallery,
	resultContainer = document.querySelector("#result"),
	countShow = $('#count-image'),
    inputText = document.querySelector('#exampleInputName2'),
	textArea = document.querySelector('textarea', '.form-control'),
	cleanText = document.querySelector('#btn'),
	currentCount = 0,
	dataLength = (data.length-1),
	addNewPicture = document.querySelector('#addNewPicture');

// Task - 1 for HW_Lesson_7 ;
inputText.addEventListener("keyup", handleEvent);
cleanText.addEventListener("click", cleanData);

function handleEvent(){
	textArea.value = inputText.value;
}

function cleanData(){
	inputText.value = "";
	textArea.value = "";
}

// Task-2 for HW_Lesson_2 ;

addNewPicture.addEventListener("click", doTemplate);

//function inBetween(START, FINISH) {
//	return newGallery = data.slice(START - 1, FINISH).slice(0,NUMBER_OF_IMAGES);
//}

function capitalizedFirstLetter(name) {
	return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

function doShortDescription(description) {
	return description.slice(0, 15);
}

function doFormattedDate(date) {
	var corrDate = new Date(date);
	return corrDate.getFullYear() + "/" + (corrDate.getMonth() + 1) + "/" + corrDate.getDate() + " " + corrDate.getHours() + ":" + corrDate.getMinutes();
}

function createNewElement(argument) {
	var element = document.createElement(argument.type);
	argument.className && (element.className = argument.className);
	argument.src && (element.src = argument.src);
	argument.alt && (element.alt = argument.alt);
	argument.innerHTML && (element.innerHTML = argument.innerHTML);
	argument.el.appendChild(element);
	return element;
}

function updateCounts() {
	currentCount == dataLength ? currentCount=0 : currentCount++;
	count++;
	countShow.innerHTML=count;
}

function deleteElement(event) {
	if(event.target.className == 'remove') {
		event.preventDefault();
		resultContainer.removeChild(event.target.closest('.col-sm-3'));
		count--;
		count--;
		updateCounts();
	}
}

function doTemplate() {
	var group = createNewElement({
		el: resultContainer,
		type: "div",
		className: "col-sm-3 col-xs-6"
		});

	var img = createNewElement({
		el: group,
		type: "img",
		className: "img-thumbnail",
		src: data[currentCount].url,
		alt: capitalizedFirstLetter(data[currentCount].name)
		});

	var infoWrapper = createNewElement({
		el: group,
		type: "div",
		className: "info-wrapper"
		});

	var innerGroupName = createNewElement({
		el: infoWrapper,
		type: "div",
		className: "text-muted",
		innerHTML: data[currentCount].id + ' ' + capitalizedFirstLetter(data[currentCount].name)
		});

	var innerGroupDescription = createNewElement({
		el: infoWrapper,
		type: "div",
		className: "text-muted",
		innerHTML: doShortDescription(data[currentCount].description)
		});

	var innerGroupDate = createNewElement({
		el: infoWrapper,
		type: "div",
		className: "text-muted",
		innerHTML: doFormattedDate(data[currentCount].date)
		});

	var deleteDiv = createNewElement ({
		el: innerGroupDate,
		type: "div",
		className: "text-muted"
	});

	var delUrl = createNewElement ({
		el: deleteDiv,
		type: "a",
		href: "#",
		className: "remove",
		innerHTML: "Remove"
	});

	delUrl.addEventListener("click", deleteElement);
	updateCounts();
}




