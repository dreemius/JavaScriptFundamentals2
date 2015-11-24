var COUNT_IN_LINE	= 4;
var resultContainer = document.querySelector('#test');
var count			= document.querySelector("#count");
var buttonAdd		= document.querySelector("#buttonAdd");
var buttonLoad		= document.querySelector("#buttonLoad");
var buttonDelete	= document.querySelector("#buttonDelete");
var inputs			= document.querySelector("#rownd");
var buttonClear3	= document.querySelector("#buttonClear3");
var classes  = {col : "col-sm-3 col-xs-6", image : "img-thumbnail", info : "info-wrapper", txt : "text-muted"}; 
buttonAdd.addEventListener("click",function(event){
	addPicture(data[Number(count.textContent)]);
});
buttonLoad.addEventListener("click",function(event){
	var START 	  = Number(inputs.children[0].value)-1,
		END		  = Number(inputs.children[1].value),
		MAX_VALUE = Number(inputs.children[2].value);
	buttonDelete.click();
	data.slice(START,END).slice(0,MAX_VALUE).forEach(addPicture);
});
buttonDelete.addEventListener("click",function(){
	resultContainer.innerHTML = "";
	count.innerHTML			  = 0;
})
buttonClear3.addEventListener("click",function(){
	inputs.children[0].value = "";
	inputs.children[1].value = "";
	inputs.children[2].value = "";
});
resultContainer.addEventListener("click",function(event){
	event.preventDefault();
	if (event.target.tagName == "A"){
		event.currentTarget.removeChild(event.target.parentNode.parentNode.parentNode);
		count.innerHTML = (Number(count.textContent)-1);
	}
});
inputs.addEventListener("keyup",isNAN);
inputs.addEventListener("change",isNAN);
function isNAN(event){
	event.target.value = event.target.value.replace(/[^\d,]/g, '');
}
function addPicture(item){
	if (item){
		resultContainer.appendChild(createNewPictureDiv(item));
		count.innerHTML = (Number(count.textContent)+1);
	}else{
		alert("ERROR 1 : Dont have images to print");
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
function createNewPictureDiv(item){
	var itemTemp = createNewElement("div",{class: classes.col});
	itemTemp.appendChild(createNewElement("img",{
		class : classes.image,
		src	  : item.url,
		alt	  : correctName(item.name)
	}));
	itemTemp.appendChild(createNewElement("div", {class : classes.info}));
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes.txt}, (item.id+": "+correctName(item.name)))); 
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes.txt}, cutDescription(item.description)));
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes.txt}, formateDate(new Date(item.date))));
	itemTemp.lastChild.appendChild(createNewElement("div",{class : classes.txt}));
	itemTemp.lastChild.lastChild.appendChild(createNewElement("a",{ href : "#"},"delete"));
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