function kettle(name){
	this.isBoiling = false;
	this.name	   = name;
}
kettle.prototype = {
	mess	: function (message) {data.DOMElements.pCons.textContent += message;},
	turnOn  : function(){
		this.isBoiling = true;
		this.mess("Kettle " + this.name + " on");
	},
	turnOff : function(){
		this.isBoiling = false;
		this.mess("Kettle " + this.name + " off");
	}
}

//---------------------------------------------------------

function electronikKettle(name){
	kettle.call(this, name);
}
electronikKettle.prototype 		  = Object.create(kettle.prototype);
electronikKettle.prototype.turnOn = function (){
	kettle.prototype.mess("Кнопка нажата. ");
	kettle.prototype.turnOn.call(this);
}