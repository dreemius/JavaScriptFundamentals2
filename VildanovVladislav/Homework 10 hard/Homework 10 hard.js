var start = document.querySelector("#start");
var prologue = document.querySelector("#prologue");
var select= document.querySelector("#select");
var selectbox=document.querySelector("select");
var choose=document.querySelector("#choose");
var kettleselect=document.querySelector("#kettleselect");
var namefield=document.querySelector("#namefield");
var setname=document.querySelector("#setname");
var inputName=document.querySelector("#inputName");
var newKettle;
var KettleOn=document.querySelector("#KettleOn");
var setOn=document.querySelector("#setOn");
var powerOn=document.querySelector("#powerOn");
var setOff=document.querySelector("#setOff");
var ready=document.querySelector("#ready");
var clearAll=document.querySelector("#clearAll");
function kettle (name) {
    this.isBoiling=false;
    this.name = name;
} 

kettle.prototype = {
    turnOn : function () {
        this.isBoiling=true;
        ready.innerHTML+=("Чайник: "+" "+this.name+" "+"Включён");
    },
    turnOff : function() {
        this.isBoiling=false;
        ready.innerHTML=("Чайник: "+" " + this.name +" "+"Выключен");
    }
};
start.addEventListener("click", function(){
	prologue.className="hide";
	select.className="col-sm-10";
})

function electricKettle (name) {
    kettle.apply(this, arguments);
} 

electricKettle.prototype = {
    turnOn : function(){
    	ready.innerHTML+=("Кнопка Нажата.");
        kettle.prototype.turnOn.apply(this, arguments);
    },
    turnOff: function(){
        kettle.prototype.turnOff.apply(this, arguments);
    }
}
choose.addEventListener("click", function(){
	select.className="hide";
	namefield.className="col-sm-12";
});
setname.addEventListener("click", function(){
		if(kettleselect.selectedIndex==0){
		newKettle = new kettle(inputName.value);
	}
		else {
		newKettle = new electricKettle(inputName.value);
	};
	namefield.className="hide";
	KettleOn.className="col-sm-12";
	ready.innerHTML="Всё готово можно приступать!";
	setOn.className="btn btn-default";
});
setOn.addEventListener("click", function(){
	ready.innerHTML="";
	newKettle.turnOn();
	setOn.className="hide";
	setOff.className="btn btn-default";
	clearAll.className="hide";
})

setOff.addEventListener("click", function(){
	ready.innerHTML="";
	newKettle.turnOff();
	setOff.className="hide";
	setOn.className="btn btn-default";
	clearAll.className="btn btn-default";
})
clearAll.addEventListener("click", function(){
	kettleselect.selectedIndex=0;
	ready.innerHTML="";
	inputName.value="";
	prologue.className="";
	setOff.className="hide";
	setOn.className="hide";
	clearAll.className="hide";

});

