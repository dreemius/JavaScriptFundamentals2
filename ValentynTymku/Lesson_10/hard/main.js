var newKettle;
var DOMElements;
init();

//*********************************************************************

function Kettle (name) {
    this.name = name;
    this.isBoiling = false;
} 

Kettle.prototype = {
    setName : function (name) {
	this.name = name;
    },
    getName : function () {
        return this.name;
    },
    getState : function () {
        return this.isBoiling;
    },
    turnOn : function () {
    this.isBoiling = changeKettleState(this);
    },
    turnOff : function () {
    this.isBoiling = changeKettleState(this);
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

function create(event) {
    event.preventDefault();

    newKettle = createKettle(DOMElements.inputName.value, DOMElements.typeSelector.value);
    DOMElements.kettleName.innerHTML = "<b>" + newKettle.getName() + "</b>";

    elementDisplay(DOMElements.form, false);
    elementDisplay(DOMElements.result, true);

}

function createKettle(name, type) {
    var kettle;
    switch(type) {
        case "1":
            kettle = new Kettle(name);
            break;
        case "2":
            inheritense(Kettle, ElectroKettle);
            kettle = new ElectroKettle(name);
            break;
    }
    return kettle;
}

function turnOnOff() {
    newKettle.getState() ? newKettle.turnOff() : newKettle.turnOn();
}

function changeKettleState(myKettle) {
    var state = myKettle.getState();
    var onOff = state ? "off" : "on";
    console.log("Kettle " + myKettle.getName() + " turn "+ onOff +".");
    showMessage("#msgBox", "Kettle " + myKettle.getName() + " turn " + onOff + ".");
    DOMElements.turnOnOffBtn.innerHTML = state ? "Вкл" : "Выкл";
    elementDisplay(DOMElements.resetBtn, state);
    return !state;
}

function reset() {
    location.reload();
}

function init() {
    DOMElements = {
        turnOnOffBtn : document.querySelector("#turnOnOffBtn"),
        typeSelector : document.querySelector("#typeSelector"),
        kettleName : document.querySelector("#kettleName"),
        inputName : document.querySelector("#inputName"),
        createBtn : document.querySelector("#createBtn"),
        resetBtn : document.querySelector("#resetBtn"),
        result : document.querySelector("#result"),
        form : document.querySelector("#form"),
    };

    DOMElements.turnOnOffBtn.addEventListener( "click", turnOnOff );
    DOMElements.createBtn.addEventListener( "click", create );
    DOMElements.resetBtn.addEventListener( "click", reset );
}

function elementDisplay(elem, display) { elem.style.display = display ? 'block' : 'none' };

function showMessage(msgBox, message) {
    document.querySelector(msgBox).innerHTML = message;
};





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