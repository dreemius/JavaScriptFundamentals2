run();
function run(){
	var classOf4Div		= "row"; 
	var resultHTML 	 	= createNewDiv(classOf4Div, "");
	var MAX_DISPLAY		= data.length,
		START_P			= 0,
		END_P			= data.length,
		buffForDivRow	= 0;
	(MAX_DISPLAY < (END_P-START_P)) ? END_P = START_P + MAX_DISPLAY : NaN;
	data.slice(START_P,END_P).forEach(function (item, index){
		resultHTML.appendChild(createNewDiv("col-sm-3 col-xs-6", ""));
		resultHTML.lastChild.appendChild(createNewImage("img-thumbnail", item));
		resultHTML.lastChild.appendChild(createNewInfoDiv("info-wrapper","text-muted", item));
		buffForDivRow++;
		if (buffForDivRow == 4){
			resultHTML.id   = "id_"+index;
			buffForDivRow 	= 0;
			loadInHTML(resultHTML);
			resultHTML	  	= createNewDiv(classOf4Div,"");
		}
	});
	if(buffForDivRow != 0){loadInHTML(resultHTML);}
}
function loadInHTML(newChild){
	var resultContainer = document.getElementById('container');
	resultContainer.appendChild(newChild);
}
function createNewDiv(nameOfClass, toTheHTML){
	var itemTemp 	   = document.createElement('div');
	itemTemp.className = nameOfClass;
	itemTemp.innerHTML = toTheHTML;
	return itemTemp;
}
function createNewImage(nameOfClass, item){
	var itemTemp 	   = document.createElement('img');
	itemTemp.src 	   = item.url;
	itemTemp.className = nameOfClass;
	itemTemp.alt 	   = item.name;
	return itemTemp;
}
function createNewInfoDiv(classParent, classChild, item){
	var itemTemp = createNewDiv(classParent, "");
	itemTemp.appendChild(createNewDiv(classChild, (item.id+": "+item.name))); 
	itemTemp.appendChild(createNewDiv(classChild, cutDescription(item.description)));
	itemTemp.appendChild(createNewDiv(classChild, formateDate(new Date(item.date))));
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