	function clearConsole()		{data.DOMElements.pCons.textContent	=	"";}
	function setBtnInner(inner) {data.DOMElements.btnRun.innerHTML  = inner;}
	function showInfoDiv() 		{data.DOMElements.divInfo.className = data.classes.divInfo;}
	function hideInfoDiv()		{data.DOMElements.divInfo.className = "hide";}
	function setPLead(inner)	{data.DOMElements.pLead.textContent = inner;}
	function hideBtnRun()		{data.DOMElements.btnRun.className  = "hide";}
	function showBtnRun()		{data.DOMElements.btnRun.className  = "btn btn-default";}
	function showBtnDel()		{data.DOMElements.btnDel.className  = "btn btn-default";}
	function hideBtnDel()		{data.DOMElements.btnDel.className  = "hide";}
	function destroyNewKettle() {data.newKettle						= null;}
	
	function createKettle(){
		var name = data.DOMElements.inputName.value;
		switch (data.DOMElements.kettleSelect.selectedIndex){
			case 0 :
				data.newKettle = new kettle(name);
				break;
			case 1 :
				data.newKettle = new electronikKettle(name);
				break;
			default :
				showMessage("А нет у нас самовара!");
		}
	}
	function showMessage(message){
		data.DOMElements.pCons.textContent += message;
	}
	function clickBtnDel(){
		showBtnRun();
		hideBtnDel();
		setBtnInner("Желаю");
		setPLead("Не желаете ли вы чаю?");
		hideInfoDiv();
		clearConsole();
		destroyNewKettle();
	}
	function clickBtnRun(event){
		switch(event.target.innerHTML) {
			case "Желаю"    :
				showInfoDiv();
				setBtnInner("Создать");
				setPLead("Какой чайник вы выберете?");
				break;
			case "Создать"   :
				clearConsole();
				createKettle();
				if(data.newKettle){
					setPLead("");
					hideInfoDiv();
					setBtnInner("Включить");
				}
				break;
			case "Включить"  :
				setBtnInner("Выключить");
				clearConsole();
				data.newKettle.turnOn();
				break;
			case "Выключить" :
				setBtnInner("Выпить");
				clearConsole();
				data.newKettle.turnOff();
				break;
			case "Выпить"	 :
				setBtnInner("Наша песня хороша начинай с начала!");
				clearConsole();
				showBtnDel();
				showMessage("Харош чаек!");
				break;
			case "Наша песня хороша начинай с начала!" :
				clearConsole();
				showMessage("lesson 2\
					Д/З:\
						Создать страницу с одним внутренним скриптом и одним внешним, загрузить скрипт асинхронно.\
						\
						Перед началом кода, который будет в отдельном файле, написать осмысленный комментарий.\
						\
						Создайте 3 переменные, сначала присвойте им трем одно и то же значение, выведите в консоль, затем сделайте все 3 разные и снова выведите в консоль.\
						\
						\
						Объявите переменную, выведите ее в консоль чтоб убедиться что она undefined. \
						Затем поочередно присвойте ей булевое значение -> в консоль, число -> в консоль, стринг -> в консоль, null -> в консоль. \
						И в конце проверьте переменную с null с помощью оператора typeof.\
						\
						\
						Создайте переменную, с помощью инкремента увеличьте ее на 3, затем присвойте результат одновременно переменной z и x.\
						\
						Взять одну переменную и поочередно преобразовать ее в каждый из типов.");
				hideBtnRun();
				break;
			default : alert("Error 0");
		}
	}