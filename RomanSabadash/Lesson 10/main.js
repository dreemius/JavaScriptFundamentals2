function Kettle (name) {
    this.isBoiling = false;
    this.name = name;
} 

Kettle.prototype = {
    turnOn : function (name) {
    this.isBoiling = true;
    console.log('Kettle ' + name + ' ON');
},
    turnOff : function (name) {
    this.isBoiling = false;
    console.log('Kettle ' + name + ' OFF');
}
};

function ElectronicKettle (name) {
    Kettle.apply(this, arguments);
} 

ElectronicKettle.prototype = {
    turnOn : function () {
    this.isBoiling = true;
    console.log('Button pressed');
    Kettle.prototype.turnOn.apply(this, arguments);
}
};

inheritense(Kettle, ElectronicKettle);

var allKettle = new ElectronicKettle ('"Braun"');
allKettle.turnOn('"Braun"');
allKettle.turnOff('"Braun"');

function inheritense (parent, child) {
    var tempChild = child.prototype;    

    if (!Object.create) {
        child.prototype = Object.create(parent.prototype);
    } else {
        F = function () {};
        F.prototype = parent.prototype;
        child.prototype = new F();
    }

    for(var key in tempChild) {
    if (tempChild.hasOwnProperty(key)){
        child.prototype[key] = tempChild[key];  
    }   
    }
}