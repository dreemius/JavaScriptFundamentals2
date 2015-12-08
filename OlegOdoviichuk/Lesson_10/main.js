function Kettle(name) {
	this.isBoiling = false;
	this.name = name;
}

Kettle.prototype = {
	turnOn : function() {
	   this.isBoiling = true;
	title.innerHTML = ("Чайник " + this.name + " КИПИТ! " + " СМОТРИ НА ЧАЙНИК!!!");
},
    turnOff : function() {
		this.isBoiling = false;
		title.innerHTML = ("Чайник " + this.name + "... ЗАКИПЕЛ!!!!");
	}
}
function Electronic_Kettle(name) {
	Kettle.apply(this, arguments);
}

Electronic_Kettle.prototype.turnOn = function() {
		//title.innerHTML = 
		console.log("ЭЛЕКТРО в ДЕЛЕ!!! ");
		Kettle.prototype.turnOn.apply(this, arguments);
	}


function inheritense (parent, child) {
    var tempChild = child.prototype;	

    if (Object.create) {
        child.prototype = Object.create(parent.prototype);
    } else {
        function F() {};
        F.prototype = parent.prototype;
        child.prototype = new F();
    }

    for(var key in tempChild) {
	if (tempChild.hasOwnProperty(key)){
		child.prototype[key] = tempChild[key];	
	}	
    }
}


var cr8del = document.querySelector('li button'),
    title = document.querySelector('.lead'),
	selector = document.querySelector('#selector'),
	inputName = document.querySelector('#exampleInputName'),
    swit4 = document.querySelector('#switch'),
    kettle,
	electroKettle,
	ketscr = document.querySelector('#ket'),
	elketscr = document.querySelector('#elket'),
	ketl = document.querySelector('#ketl'),
	theend = document.querySelector('#lis');

function cr8Kettle () {
	if(selector.value == "Kettle") {
		kettle = new Kettle(inputName.value);
	    console.log("Создан" + kettle);
	}else if (selector.value == "Electronic Kettle") {
	    inheritense(Kettle, Electronic_Kettle);
	    electroKettle = new Electronic_Kettle(inputName.value);
		console.log("Создан" + electroKettle);
	}else{
	    console.log("Лажа... ты ошибся чайник");
	    return false;
	}
	    
}	

function switchCr8del () {  //DONE
	     delPics(elketscr);
		 delPics(ketl);
		 delPics(theend);
		 delPics(ketscr);
   if(selector.value == "Kettle" || selector.value == "Electronic Kettle") {
     if(inputName.value == ""){
		 title.innerHTML = "Чайник, название введи..."
		 }else{
     if (cr8del.id == "addelm") {
		 cr8del.id = "delelm";
		 cr8del.innerHTML = "- Спасибо, напился...";
		 showSwitchBot();
		 hideSelector ();
		 hideInputName();
		 cr8Kettle();
		 title.innerHTML = "Готов... ???"
		 
	   }else{ 
		 cr8del.id = "addelm";
		 cr8del.innerHTML = "+ Хочу чаю";
		 hideSwitchBot();
		 showSelector ();
		 showInputName ();
		 title.innerHTML = "| Выберите чайник |"
    }
	 }
   }else{
	title.innerHTML = "Чайник это Ошибка...ты ослеп, выбери чайник..."
   }
}

function hideSelector () {  //DONE
	selector.className = "hide";
}

function showSelector () {  //DONE
	selector.className = "form-control";
}

function hideInputName () { //DONE
	inputName.className = "hide";
}

function showInputName () { //DONE
	inputName.className = "form-control";
}
	
function showSwitchBot() { //DONE
		 swit4.className = "btn btn-sm btn-success";
		 swit4.id = "switchon";
		 swit4.innerHTML = "Вскипятить";
}	

function hideSwitchBot() { //DONE
	   swit4.id = "switch";
	   swit4.className = "hide";
}
	
function switchOnOff ()	{  //DONE
	  if(swit4.id  == "switchoff") {
		 swit4.id = "switchon";
		 swit4.innerHTML = "Вскипятить еще";
		 if(selector.value == "Kettle") {
			 kettle.turnOff();
			 delPics(ketscr);
			 }else{
			 electroKettle.turnOff();
			 delPics(elketscr);
			 delPics(ketl);
		   }
		   addPics(theend, "lisa");
		 
	   }else{ 
		 swit4.id = "switchoff";
		 swit4.innerHTML = "Хватит с меня";
		 delPics(theend);
		 if(selector.value == "Kettle") {
			 kettle.turnOn();
			 addPics(ketscr, "pics");
			 }else{
			 electroKettle.turnOn();
			 addPics(elketscr, "elpics");
			 addPics(ketl, "ket");
		   }
    }
}
function addPics (idpic, name) {   //DONE
	  idpic.className = name;
	
}
	
function delPics (idpic) {   //DONE
	  idpic.className = "hide";
}

	cr8del.addEventListener("click", switchCr8del);
	swit4.addEventListener("click", switchOnOff);


