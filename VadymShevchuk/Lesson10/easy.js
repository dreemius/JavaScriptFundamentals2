function Kettle (name) {
    this.name = name;
    this.isBoiling = false;
    this.turnOff = function(){
        this.isBoiling = false;
        console.log(this.name + 'is off');
    }
}

Kettle.prototype = {
    turnOn : function () {
        this.isBoiling = true;
        console.log(this.name + 'is on');
    }
};

function ElectricKettle (name) {
    Kettle.apply(this, arguments)
}

inheritense(Kettle, elecricKettle);

var electrickettle = new electricKettle ('4aynik');
console.log(electrickettle.name);
electrickettle.turnOn();
electrickettle.turnOff();

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
