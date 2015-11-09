var COUNT_IN_LINE	= 4;
var resultContainer = document.querySelector('#test');
var count			= document.querySelector("#count");
var buttonAdd		= document.querySelector("#buttonAdd");
var buttonLoad		= document.querySelector("#buttonLoad");
var classes  = ["row", "col-sm-3 col-xs-6", "img-thumbnail", "info-wrapper", "text-muted"]; 
buttonAdd.addEventListener("click",function(event){
	if (event.target.id == buttonAdd.id){
		addPicture(Number(count.textContent));
	}
});
buttonLoad.addEventListener("click",function(event){
	if (event.target.id == buttonLoad.id){
		var j = Number(event.target.nextSibling.nextSibling.value);
		while ( (j <Number(event.target.nextSibling.nextSibling.nextSibling.nextSibling.value)) && (j < (Number(event.target.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.nextSibling.value)+Number(event.target.nextSibling.nextSibling.value)))){
			if (addPicture(j)) {break};
			j++;
		}
	}
});
function addPicture(i){
	if (data[i]){
		resultContainer.appendChild(createNewPictureDiv(classes, data[i]));
		count.innerHTML = String(Number(count.textContent)+1);
	}else{
		alert("ERROR 1 : Dont have images to print");
		return true;
	}
}
function createNewElement(classElement,attribut, toTheHTML){
	var itemTemp 	   = document.createElement(classElement);
	for(var atr in attribut){
		itemTemp.setAttribute(atr, attribut[atr]);
	}
	toTheHTML && (itemTemp.innerHTML = toTheHTML);
	return itemTemp;
}
function createNewPictureDiv(classes, item){
	var itemTemp = createNewElement("div",{class: classes[1]});
	itemTemp.appendChild(createNewElement("img",{
		class : classes[2],
		src	  : item.url,
		alt	  : correctName(item.name)
	}));
	itemTemp.appendChild(createNewElement("div", {class : classes[3]}));
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes[4]}, (item.id+": "+correctName(item.name)))); 
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes[4]}, cutDescription(item.description)));
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes[4]}, formateDate(new Date(item.date))));
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes[4]}));
	itemTemp.lastChild.lastChild.appendChild(createNewElement("a",{ href : "#"},"delete"));
	itemTemp.addEventListener("click",function(event){
		event.preventDefault();
		if (event.target.tagName == "A"){
			event.currentTarget.parentNode.removeChild(event.currentTarget);
			count.innerHTML = String(Number(count.textContent)-1);
		}
	});
	return itemTemp;
}
function correctName(name){
	return name[0].toLocaleUpperCase()+name.slice(1).toLocaleLowerCase();
}
function cutDescription(description){
	return description.slice(0,15);
}
function formateDate(date){
	return date.getFullYear()+'/'+(date.getMonth()+1)+'/'+date.getDate()+' '+date.getHours()+':'+date.getMinutes();
}