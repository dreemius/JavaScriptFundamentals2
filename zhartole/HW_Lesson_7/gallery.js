/**
 * Improve Gallery
 * create by zhartole 8.11.2015
 */
var FIRST, //id first img;
	LAST,//id last img;
	NUMBER_OF_IMAGES,//number of image;
    inputText = document.querySelector('#exampleInputName2'),
	textArea = document.querySelector('textarea', '.form-control'),
	cleanText = document.querySelector('#cleanText'),
	valueInput = document.querySelector('#inputGroup'),
	addNewPicture = document.querySelector('#addNewPicture'),
    addAllPicture = document.querySelector('#addAllPicture'),
	delAllPicture = document.querySelector('#delAllPicture'),
	resultContainer = document.querySelector("#result"),
	errorContainer = document.querySelector("#error"),
	count = 0;

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

// Task-2 for HW_Lesson_7 ;

valueInput.addEventListener("keyup", addFiltrdImg);
addNewPicture.addEventListener('click', addImg);
addAllPicture.addEventListener('click', addAllImg);
delAllPicture.addEventListener('click', clearContainer);
valueInput.addEventListener("keyup", ifWord);

function addFiltrdImg() {
	clearContainer();
	FIRST = document.querySelector('.start').value - 1;
	LAST = document.querySelector('.end').value;
	NUMBER_OF_IMAGES = document.querySelector('.total').value;
	(FIRST > 10 || LAST > 10 || NUMBER_OF_IMAGES > 10) ? resultContainer.innerHTML = checkNumberImg() : '';
	function inBetween() {
		return data.slice(FIRST, LAST).slice(0, NUMBER_OF_IMAGES);
	}
	for (var index = FIRST; index < inBetween().length; index++) {
		doTemplate(index);
	}
}

function addImg(event) {
	if(count < 10) {
		doTemplate(count);
		count++
	}  else {
		checkNumberImg();
	}
		// WHY if if i using ternar operator its dont work correctly (show only first img)?
		// count < 10 ? doTemplate(count) && count++ : disableButton();
}

function addAllImg() {
	clearContainer();
	FIRST 	         = 0;
	LAST		     = 10;
	NUMBER_OF_IMAGES = 10;
	for(var index = 0; index < LAST; index++ ) {
		doTemplate(index);
	}
}

//check for letters
function ifWord(event) {
	event.target.value = event.target.value.replace(/[^\d,]/g, '');
}

//check number of image
function checkNumberImg () {
	addNewPicture.className = "btn btn-sm btn-danger disabled";
	errorContainer.innerHTML = '<div class="error"><b>Sorry</b> We don`t have enough image. <br> Please.Enter number from 0 to 10</div>';
}

//clean image
function clearContainer() {
	count = 0;
	addNewPicture.className = "btn btn-sm btn-success";
	errorContainer.innerHTML = "";
	return resultContainer.innerHTML = "";
}

// work with data [image]

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

function doTemplate(item) {

		var group = createNewElement({
			el: resultContainer,
			type: "div",
			className: "col-sm-3 col-xs-6"
		});

		var img = createNewElement({
			el: group,
			type: "img",
			className: "img-thumbnail",
			src: data[item].url,
			alt: capitalizedFirstLetter(data[item].name)
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
			innerHTML: data[item].id + ' ' + capitalizedFirstLetter(data[item].name)
		});

		var innerGroupDescription = createNewElement({
			el: infoWrapper,
			type: "div",
			className: "text-muted",
			innerHTML: doShortDescription(data[item].description)
		});

		var innerGroupDate = createNewElement({
			el: infoWrapper,
			type: "div",
			className: "text-muted",
			innerHTML: doFormattedDate(data[item].date)
		});

		var deleteDiv = createNewElement({
			el: innerGroupDate,
			type: "div",
			className: "text-muted"
		});

		var delImg = createNewElement({
			el: deleteDiv,
			type: "a",
			href: "#",
			className: "remove",
			innerHTML: "Remove"
		});

		delImg.addEventListener("click", deleteElement);
	    function deleteElement(event) {
		    if(event.target.className == 'remove') {
			  resultContainer.removeChild(event.target.closest('.col-sm-3'));
			  count--;
		}
	}
}



