

function dateFormat (date){
	var newDate = new Date (date);
	return 	newDate.getFullYear() + '/' +
		newDate.getMonth() + '/' +
		newDate.getDate() + ' ' +
		newDate.getHours() + ' : ' +
		newDate.getMinutes();

};

function cutName (arg) {
	return arg[0].toLocaleUpperCase()+arg.slice(1).toLocaleLowerCase();

};


function cutDescription (str){
	return str.slice(0,15)
}

function transformData  (){
	return data.slice(START -1, END).slice(0,TOTAL_ELEM);
}

function nodeCreator(param){

	var newNode = document.createElement(param.type);
	param.className && (newNode.className =  param.className);
	param.src && (newNode.src = param.src);
	param.alt && (newNode.alt = param.alt);
	param.innerHTML && (newNode.innerHTML = param.innerHTML);

	return newNode;

};
function isNAm(input) {
	input.value = input.value.replace(/[^\d,]/g, '');
};

document.querySelector('.addBtn').addEventListener ('click',  newDiv);



function newDiv (){

	 START = document.querySelector('.start').value;
	 END = document.querySelector('.end').value;
	 TOTAL_ELEM = document.querySelector('.total').value;


		for (var i = 0; i < transformData().length; i++ ) {

			var innerContainer = nodeCreator({
				type: 'div',
				className: 'col-sm-3 col-xs-6'

			});


			var img = nodeCreator({
				type : "img",
				src : data[i].url,
				className: 'img-thumbnail',
				alt: cutName(data[i].name)

			});



			var infoWrapper = nodeCreator({
				type: 'div',
				className: 'info-wrapper'
			});


			var idName = nodeCreator({
				type: 'div',
				className: 'text-muted',
				innerHTML: data[i].id + ':' + cutName(data[i].name)
			});



			var descrption = nodeCreator({
				className: 'text-muted',
				innerHTML : cutDescription(data[i].description)
			});

			var date = nodeCreator({
				className : 'text-muted',
				innerHTML : ' Дата: ' + dateFormat(data[i].date)
			});

			var result = document.getElementById('result');

			result.appendChild(innerContainer);
			innerContainer.appendChild(img);
			innerContainer.appendChild(infoWrapper);
			infoWrapper.appendChild(idName);
			infoWrapper.appendChild(descrption);
			infoWrapper.appendChild(date);

		}
	};

document.querySelector('.clean').addEventListener ('click', function () {
	document.querySelector('#result').innerHTML = '';
	START = document.querySelector('.start').value = '';
	END = document.querySelector('.end').value = '';
	TOTAL_ELEM = document.querySelector('.total').value = '';
});












