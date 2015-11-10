run();
function run(){
	var MAX_DISPLAY_PICTURE = data.length;
    var COUNT_IMG_IN_ROW = 4;
    var resultContainer = document.getElementById('container');
	var resultHTML = createNewElement("div",{class : 'row'});
	data.splice(0,MAX_DISPLAY_PICTURE).forEach(function(item){
		resultHTML.appendChild(creatPicture(item));
		
		if(resultHTML.children.length == COUNT_IMG_IN_ROW){
			printResult(resultContainer,resultHTML);
			resultHTML = createNewElement("div",{class : 'row'});
		}
	});
	if ((MAX_DISPLAY_PICTURE%COUNT_IMG_IN_ROW) != 0) {printResult(resultContainer,resultHTML);}
}
function creatPicture(item){
	var majorDiv = createNewElement("div",{class : 'col-sm-3 col-xs-6'});
	majorDiv.appendChild(createNewElement("img",{class : "img-thumbnail", src : item.url, alt : changeName(item.name)}));
	majorDiv.appendChild(createNewElement("div",{class : "info-wrapper"}));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"}, (item.id +': '+ changeName(item.name))));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"}, changeDescription(item.description)));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"}, changeDate(item.date)));
	return majorDiv;
}
function createNewElement(tegName, attribut, textIn){
	var newElement = document.createElement(tegName);
	for(var atr in attribut){
		newElement.setAttribute(atr, attribut[atr]);
	}
	textIn && (newElement.innerHTML = textIn);
	return newElement;
}
function printResult(resultContainer,resultHTML){
	resultContainer.appendChild(resultHTML);
}
function changeName(name){
	return name[0].toLocaleUpperCase()+name.slice(1).toLocaleLowerCase();
}
function changeDescription(description){
	return description.slice(0,15);
}
function changeDate(date){
	var tmpDate = new Date(date);
    return tmpDate.getFullYear() + "/" +
           (tmpDate.getMonth()+1) + "/" +
           tmpDate.getDate() + " " +
           tmpDate.getHours() + ":" +
           tmpDate.getMinutes();	
}