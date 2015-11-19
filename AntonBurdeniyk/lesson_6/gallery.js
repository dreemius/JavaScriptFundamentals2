run();
function run(){
	var MAX_PICTURE = data.length;
	var COUNT_IMG	= 4;
	var resultHTML = createNewElement('div',{className : 'row'});
	var countImgInDiv = 0;
	data.splice(0,MAX_PICTURE).forEach(function(item){
		resultHTML.appendChild(createPicture(item));
		countImgInDiv++;
		if(countImgInDiv == COUNT_IMG){
			printResult(resultHTML);
			countImgInDiv = 0;
			resultHTML = createNewElement('div',{className : 'row'});
		}
	});
	if (countImgInDiv != 0) {printResult(resultHTML);}
}
function createPicture(item){
	var majorDiv = createNewElement('div',{className : 'col-sm-3 col-xs-6'});
	majorDiv.appendChild(createNewElement('img',{src : item.url,alt : changeName(item.name), className : "img-thumbnail"}));
	majorDiv.appendChild(createNewElement('div',{className : "info-wrapper"}));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}, (item.id +': '+ changeName(item.name))));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}, changeDescription(item.description)));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}, changeDate(item.date)));
	return majorDiv;
}
function createNewElement(nameElement,atribute, inHTML){
	var item = document.createElement(nameElement);
	for (key in atribute){
		item[key] = atribute[key];
	}
	if (inHTML){ item.innerHTML = inHTML};
	return item;
}
function printResult(resultHTML){
	var resultContainer = document.getElementById('container');
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