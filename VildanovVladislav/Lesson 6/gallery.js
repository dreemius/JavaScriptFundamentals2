run();


function createDiv(nameClass, inDiv){
	var newElement=document.createElement('div');
	newElement.className=nameClass;
	newElement.innerHTML=inDiv;
	return newElement;
}
function createImg(urlImage, name, nameClass){
	var newImg=document.createElement('img');
	newImg.src=urlImage;
	newImg.alt=name;
	newImg.className=nameClass;
	return newImg;
}
function changeName(correctName){
	return correctName[0].toLocaleUpperCase() + correctName.toLocaleLowerCase().slice(1);
}
function cutDescription(correctDescription){
	return correctDescription.slice(0,15);
}
function newDate(date){
	return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
}

function run(){
	var resultHTML 		= createDiv('row', '');
	var elements = 7;
	var countImages=0;
	data.forEach(function(item, index){
		if(index<elements){
			resultHTML.appendChild(createPicture(item));
			countImages++;
			if(countImages==4){
				printFor(resultHTML);
				countImages=0;
				resultHTML=createDiv('row', '');
			}	
		}
	});
if(countImages!= 0){printFor(resultHTML);}
}
function createPicture(item){
	var majorDiv=createDiv("col-sm-3 col-xs-6", "");
	majorDiv.appendChild(createImg(item.url, item.name, "img-thumbnail"));
	majorDiv.appendChild(createDiv("info-wrapper", ""));
	majorDiv.lastChild.appendChild(createDiv("text-muted", (item.id +': '+ changeName(item.name)) ));
	majorDiv.lastChild.appendChild(createDiv("text-muted",  cutDescription(item.description)));
	majorDiv.lastChild.appendChild(createDiv("text-muted",  newDate(new Date(item.date))));
	return majorDiv;
}
function printFor(HTML){
	var resultContainer=document.getElementById('conteiner');
	resultContainer.appendChild(HTML);
};
