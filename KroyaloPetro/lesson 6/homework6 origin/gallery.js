run();
function run(){
	var MAX_DISPLAY		  = data.length,
		START_P			  = 0,
		END_P			  = 9,
		COUNT_IN_LINE	  = 4;
	var resultContainer	  = document.getElementById('container');
	var classes  = ["row", "col-sm-3 col-xs-6", "img-thumbnail", "info-wrapper", "text-muted"]; 
	var resultHTML 	 	  = createNewElement("div", {class : classes[0]});
	var dataNew			  = cutData(data, START_P, END_P, MAX_DISPLAY);
	if (dataNew.length){
		dataNew.forEach(function (item, index){
			resultHTML.appendChild(createNewElement("div",{class: classes[1]}));
			resultHTML.lastChild.appendChild(createNewElement("img",{
					class : classes[2],
					src	  : item.url,
					alt	  : correctName(item.name)
				}));
			resultHTML.lastChild.appendChild(createNewInfoDiv(classes, item));
			if (!doMod(index, COUNT_IN_LINE)){
				loadInHTML(resultContainer, resultHTML);
				resultHTML	  = createNewElement("div", {class : classes[0]});
			}
		});
		if(doMod(dataNew.length, COUNT_IN_LINE)){loadInHTML(resultContainer, resultHTML);}
	}else{
		alert("ERROR 1 : Dont have images to print")
	}
	
}
function loadInHTML(resultContainer, newChild){
	resultContainer.appendChild(newChild);
}
function doMod(number, COUNT_IN_LINE){
	return ((++number) % COUNT_IN_LINE);
}
function cutData(data, start, end, MAX_DISPLAY){
	return data.slice(start,++end).slice(0,MAX_DISPLAY);
}
function createNewElement(classElement,attribut, toTheHTML){
	var itemTemp 	   = document.createElement(classElement);
	for(var atr in attribut){
		itemTemp.setAttribute(atr, attribut[atr]);
	}
	toTheHTML && (itemTemp.innerHTML = toTheHTML);
	return itemTemp;
}
function createNewInfoDiv(classes, item){
	var itemTemp = createNewElement("div", {class : classes[3]}, "");
	itemTemp.appendChild(createNewElement("div",{class : classes[4]}, (item.id+": "+correctName(item.name)))); 
	itemTemp.appendChild(createNewElement("div",{class : classes[4]}, cutDescription(item.description)));
	itemTemp.appendChild(createNewElement("div",{class : classes[4]}, formateDate(new Date(item.date))));
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