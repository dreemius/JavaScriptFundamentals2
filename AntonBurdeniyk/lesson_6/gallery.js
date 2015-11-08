run();
function run(){
	var MAX_PICTURE = data.length;
	var resultHTML = creatDiv('row','');
	var countImgInDiv = 0;
	data.splice(0,MAX_PICTURE).forEach(function(item){
		resultHTML.appendChild(creatPicture(item));
		countImgInDiv++;
		if(countImgInDiv == 4){
			printResult(resultHTML);
			countImgInDiv = 0;
			resultHTML = creatDiv('row','');
		}
	});
	if (countImgInDiv != 0) {printResult(resultHTML);}
}
function creatPicture(item){
	var majorDiv = creatDiv('col-sm-3 col-xs-6','');
	majorDiv.appendChild(creatImg(item.url, changeName(item.name), "img-thumbnail"));
	majorDiv.appendChild(creatDiv("info-wrapper",''));
	majorDiv.lastChild.appendChild(creatDiv("text-muted", (item.id +': '+ changeName(item.name))));
	majorDiv.lastChild.appendChild(creatDiv("text-muted", changeDescription(item.description)));
	majorDiv.lastChild.appendChild(creatDiv("text-muted", changeDate(item.date)));
	return majorDiv;
}
function creatDiv(nameClass, inDiv){
	var newDiv = document.createElement('div');
	newDiv.className = nameClass;
	newDiv.innerHTML = inDiv;
	return newDiv;
}
function creatImg(urlImg, name, nameClass){
	var newImg = document.createElement('img');
	newImg.src = urlImg;
	newImg.alt = name;
	newImg.className = nameClass;
	return newImg;
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