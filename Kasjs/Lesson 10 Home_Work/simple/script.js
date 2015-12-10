function Kettle(name) {
    this.name = name;

}

Kettle.prototype = {
    turnOn   : function() {
        this.isBoiling = true;
        console.log(this.name + " is On");
    },
    turnOff  : function(){
        this.isBoiling = false;
        console.log(this.name + " is Off");
    },
    showName : function(){
        console.log(this.name);
    }
};

function Electronic_Kettle(name){
    Kettle.apply(this,arguments);
}

Electronic_Kettle.prototype = {
    turnOn   : function () {
        console.log("The button is pressed");
        Kettle.prototype.turnOn.apply(this, arguments);
    },
    showName : function(){
        console.log(this.name);
    }
};

inheritense(Kettle,Electronic_Kettle);
var electKettle = new Electronic_Kettle('Ket');
electKettle.showName();
electKettle.turnOn();
electKettle.turnOff();

function inheritense (parent, child) {
    var tempChild = child.prototype;

    if (Object.create) {
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