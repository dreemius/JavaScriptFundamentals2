var resultContainer = document.getElementById('test');
var addBtn = document.querySelector("#addBtn");
var count = document.querySelector('#count');
addBtn.addEventListener('click', run);
function run(){
	var index = Number(count.innerHTML);
	if(data[index]){
		printResult(createPicture(data[index]));
		count.innerHTML = (index+1);
	}
}
function createPicture(item){
	var majorDiv = createNewElement('div',{className : 'col-sm-3 col-xs-6'});
	majorDiv.appendChild(createNewElement('img',{src : item.url,alt : changeName(item.name), className : "img-thumbnail"}));
	majorDiv.appendChild(createNewElement('div',{className : "info-wrapper"}));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}, (item.id +': '+ changeName(item.name))));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}, changeDescription(item.description)));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}, changeDate(item.date)));
	majorDiv.lastChild.appendChild(createNewElement('div',{className : "text-muted"}));
	majorDiv.lastChild.lastChild.appendChild(createNewElement('a', {href : "#"},'Удалить'));
	majorDiv.addEventListener('click', function(event){
		event.preventDefault();
		if(event.target.tagName == 'A'){
			resultContainer.removeChild(event.currentTarget);
			count.innerHTML = (Number(count.innerHTML)-1);
		}
	});
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