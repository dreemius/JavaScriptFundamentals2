function kettle (name) {
    this.isBoiling=false;
    this.name = name;
} 

kettle.prototype = {
    turnOn : function () {
        this.isBoiling=true;
        console.log("Чайник: "+" "+this.name+" "+"Включён");
    },
    turnOff : function() {
        this.isBoiling=false;
        console.log("Чайник: "+" " + this.name +" "+"Выключен");
    }
};

function electricKettle (name) {
    kettle.apply(this, arguments);
} 

electricKettle.prototype = {
    turnOn : function(){
        console.log("Кнопка нажата");
        kettle.prototype.turnOn.apply(this, arguments);
    },
    turnOff: function(){
        kettle.prototype.turnOff.apply(this, arguments);
    }
}

var electricKettles = new electricKettle("Hot");
electricKettles.turnOn();
electricKettles.turnOff();
