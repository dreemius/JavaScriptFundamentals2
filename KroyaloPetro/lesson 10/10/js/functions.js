	centralFunc = (function(){
		var data	  = null,
			newKettle = null,
			Kettle,
			ElectronikKettle,
			action	  = {
					enter		: function(){
						showInfoDiv();
						setBtnInner("Создать", "create");
						setPLead("Какой чайник вы выберете?");
					},
					create	: function(){
						clearConsole();
						createKettle();
						if(newKettle){
							setPLead("");
							hideInfoDiv();
							setBtnInner("Включить", "on");
						}
					},
					on  	: function(){
						setBtnInner("Выключить", "off");
						clearConsole();
						newKettle.turnOn();
					},
					off		: function(){
						setBtnInner("Выпить", "drink");
						clearConsole();
						newKettle.turnOff();
					},
					drink	: function(){
						setBtnInner("Наша песня хороша начинай с начала!", "start");
						clearConsole();
						showBtnDel();
						showMessage("Харош чаек!");
					},
					start	: function(){
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
						hideBtnDel();
					}
				};
		
		function showInfoDiv() 		{data.DOMElements.divInfo.className = data.classes.divInfo;}
		function hideInfoDiv()		{data.DOMElements.divInfo.className = data.classes.hide;}
		function showBtnRun()		{data.DOMElements.btnRun.className  = data.classes.btnRun;}
		function hideBtnRun()		{data.DOMElements.btnRun.className  = data.classes.hide;}
		function showBtnDel()		{data.DOMElements.btnDel.className  = data.classes.btnRun;}
		function hideBtnDel()		{data.DOMElements.btnDel.className  = data.classes.hide;}
		function clearConsole()		{data.DOMElements.pCons.textContent	= "";}
		function destroyNewKettle() {newKettle							= null;}
		function setData(temp) 		{data 								= temp;}
		function setPLead(inner)	{data.DOMElements.pLead.textContent = inner;}
		
		function setConstructors(cons){
			Kettle = cons.Kettle; 
			ElectronikKettle = cons.ElectronikKettle;
		}
		function setBtnInner(inner, dataiInner) {
			data.DOMElements.btnRun.innerHTML  	   = inner;
			data.DOMElements.btnRun.dataset.ident = dataiInner;
		}
		function createKettle(){
			var name = data.DOMElements.inputName.value;
			switch (data.DOMElements.kettleSelect.selectedIndex){
				case 0 :
					newKettle = new Kettle(name);
					break;
				case 1 :
					newKettle = new ElectronikKettle(name);
					break;
				default : showMessage("А нет у нас самовара!");
			}
		}
		function showMessage(message){
			data.DOMElements.pCons.textContent += message;
		}
		function clickBtnDel(){
			showBtnRun();
			hideBtnDel();
			setBtnInner("Желаю", "enter");
			setPLead("Не желаете ли вы чаю?");
			hideInfoDiv();
			clearConsole();
			destroyNewKettle();
		}
		
		function clickBtnRun(event){
			if (action[data.DOMElements.btnRun.dataset.ident]){
				action[data.DOMElements.btnRun.dataset.ident]();
			}else {alert("Error 0.");}
		}
		function setLisener(){
			data.DOMElements.btnRun.addEventListener("click", clickBtnRun);
			data.DOMElements.btnDel.addEventListener("click", clickBtnDel);
		}
		function startFunc(dataTemp, constructors){
			setData(dataTemp);
			setConstructors(constructors);
			setLisener();
		}
		
		return {startFunc : startFunc};
	})();
	
	centralFunc.startFunc(htmlCont.getData(), constructors.getConstructors());