function Kettle (name) {
    this.isBoiling = false;
    this.name = name;
}

Kettle.prototype = {
    turnOn : function () {
        this.isBoiling = true;
        console.log("Kettle " + this.name + " is turned on!");
    },

    turnOff : function () {
        this.isBoiling = false;
        console.log("Kettle " + this.name + " is turned off!");
    }
};

function ElectronicKettle (name) {
    Kettle.apply(this, arguments);
}

ElectronicKettle.prototype = {
    turnOn : function () {
        console.log("Button is pressed");
        Kettle.prototype.turnOn.apply(this, arguments);
    }
};

inheritance(Kettle, ElectronicKettle);

var electronicKettle = new ElectronicKettle ("Phillips");
electronicKettle.turnOn();
electronicKettle.turnOff();

function inheritance (parent, child) {
    var tempChild = child.prototype;

    if (!Object.create) {
        child.prototype = Object.create(parent.prototype);
    } else {
        function F() {}
        F.prototype = parent.prototype;
        child.prototype = new F();
    }

    for(var key in tempChild) {
        if (tempChild.hasOwnProperty(key)) {
            child.prototype[key] = tempChild[key];
        }
    }
}