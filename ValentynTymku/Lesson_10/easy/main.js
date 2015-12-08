function Kettle (name) {
    this.name = name;
    this.isBoiling = false;
} 

Kettle.prototype = {
    setName : function (name) {
	this.name = name;
    },
    turnOn : function () {
    this.isBoiling = true;
	console.log("Kettle " + this.name + " turn on.");
    },
    turnOff : function () {
    this.isBoiling = false;
	console.log("Kettle " + this.name + " turn off.");
    }
}

function ElectroKettle (name) {
    Kettle.apply(this, arguments);
    this.name = name;
} 

ElectroKettle.prototype = {
    turnOn : function () {
	console.log("Button is pushed");
    Kettle.prototype.turnOn.apply(this, arguments);
    }
};

inheritense(Kettle, ElectroKettle);

var electroKettle = new ElectroKettle ("myElectroKettle");
console.dir(electroKettle);			
electroKettle.turnOn();
electroKettle.turnOff();


function inheritense (parent, child) {
    var tempChild = child.prototype;	

    if (!Object.create) {
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