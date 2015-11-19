function createNewElement(classElement,attribute, toTheHTML){
	var itemTemp 	   = document.createElement(classElement);
	for(var atr in attribute){
		itemTemp.setAttribute(atr, attribute[atr]);
	}
	toTheHTML && (itemTemp.innerHTML = toTheHTML);
	return itemTemp;
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

function createPicture(item){
	var majorDiv=createNewElement("div",{class : "col-sm-3 col-xs-6"});
	majorDiv.appendChild(createNewElement("img",{src : item.url, alt : item.name, class : "img-thumbnail"}));
	majorDiv.appendChild(createNewElement("div",{class :"info-wrapper"}));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"}, (item.id +': '+ changeName(item.name)) ));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"},  cutDescription(item.description)));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"},  newDate(new Date(item.date))));
	majorDiv.lastChild.appendChild(createNewElement("div",{class :"text-muted"}));
 	majorDiv.lastChild.lastChild.appendChild(createNewElement("a", {href: "#"}, "Удалить"));
 	majorDiv.addEventListener("click", function(event){
 		event.preventDefault();
 		if(event.target.tagName=="A"){
 			resultContainer.removeChild(event.currentTarget);
 			count.innerHTML=parseInt(count.innerHTML)-1;
 		}
 	});
	return majorDiv;
}

var element= document.getElementById("element");
var count= document.getElementById("count");
element.addEventListener("click", addElement);
var resultContainer=document.getElementById('test'); 
 function addElement(){
	resultContainer.appendChild(createPicture(data[+count.innerHTML]));
	count.innerHTML=1+parseInt(count.innerHTML);
 }