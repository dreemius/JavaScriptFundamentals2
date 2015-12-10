constructors = (function(){
	function Kettle(name){
		this.isBoiling = false;
		this.name	   = name;
	}
	Kettle.prototype = {
		mess	: function (message) {htmlCont.getData().DOMElements.pCons.textContent += message;},
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

	function ElectronikKettle(name){
		Kettle.call(this, name);
	}
	ElectronikKettle.prototype 		  = Object.create(Kettle.prototype);
	ElectronikKettle.prototype.turnOn = function (){
		Kettle.prototype.mess("Кнопка нажата. ");
		Kettle.prototype.turnOn.call(this);
	}
	
	return {
		getConstructors : function(){
			return {
				Kettle			 : Kettle,
				ElectronikKettle : ElectronikKettle
			}
		}
	}
})();