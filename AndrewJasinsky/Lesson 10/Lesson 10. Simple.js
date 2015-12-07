/**
 * Created by Phenom on 06.12.2015.
 */

function Kettle (name) {
    this.isBoiling  = false;
    this.name = name;
}

Kettle.prototype = {
    turnOn : function () {
        this.isBoiling  = true;
        console.log("Чайник " + this.name + " включен.");
    },
    turnOff : function () {
        this.isBoiling  = false;
        console.log("Чайник " + this.name + " выключен.");
    }
};


function ElectronicKettle (name) {
    Kettle.apply(this, arguments);
}

ElectronicKettle.prototype = {
    turnOn : function () {
        console.log("Кнопка нажата.");
        Kettle.prototype.turnOn.apply(this, arguments);
    }
    };

inheritence(Kettle, ElectronicKettle);

var ElectroKettle = new ElectronicKettle ("Samsung");
ElectroKettle.turnOn();
ElectroKettle.turnOff();


function inheritence (parent, child) {
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