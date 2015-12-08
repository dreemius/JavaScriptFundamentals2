function kettle(name){
	this.isBoiling = false;
	this.name	   = name;
}
kettle.prototype = {
	turnOn  : function(){
		this.isBoiling = true;
		showMessage("Kettle " + this.name + " on");
	},
	turnOff : function(){
		this.isBoiling = false;
		showMessage("Kettle " + this.name + " off");
	}
}

//---------------------------------------------------------

function electronikKettle(name){
	kettle.call(this, name);
}
electronikKettle.prototype 		  = Object.create(kettle.prototype);
electronikKettle.prototype.turnOn = function (){
	showMessage("Кнопка нажата. ");
	kettle.prototype.turnOn.call(this);
}