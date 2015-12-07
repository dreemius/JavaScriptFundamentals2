function kettle(name){
this.name=name;
this.isBoiling=false;
}

kettle.prototype={
   turnOn:function(){
	 this.isBoiling=true;
	 console.log('Kettle'+' '+ this.name+' '+'is turn on');
		},
    turnOff:function(){
	 console.log('Kettle'+' '+ this.name+' '+'is turn off');
		 }
	}
	
function elecKettle(){
	kettle.apply(this,arguments);
	}
	
	elecKettle.prototype={
	 turnOn:function(){
		 console.log('Button is pressed');
		 kettle.prototype.turnOn.apply(this,arguments);
		},
	 turnOff:function(){
			kettle.prototype.turnOff.apply(this,arguments);
			}
		 }

var electronicKettle=new elecKettle("Hot");
electronicKettle.turnOn();
electronicKettle.turnOff();
