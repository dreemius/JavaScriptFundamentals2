'use strict';
// Created by iPhoenix© development 02.12.2015
//********************************************

var kettlerHandler = (function() {
    function TeaPot(name) {
        this.isBoiling = false;
        this.name = name;
    }

    TeaPot.prototype = {
        turnOn : function () {
            this.isBoiling = true;
            console.log('Чайник для заварки ' + this.name + ' включен.');
        },
        turnOff : function () {
            this.isBoiling = false;
            console.log('Чайник для заварки ' + this.name + ' выключен.');
        }
    };

    function ElectroTeaPot(name) {
        TeaPot.call(this, name);
    }

    ElectroTeaPot.prototype = {
        turnOn : function () {
            console.log('Кнопка нажата');
            TeaPot.prototype.turnOn.apply(this, arguments);
        }
    };

    inheritense(TeaPot, ElectroTeaPot);

    function printPot() {
        var electroTeaPot = new ElectroTeaPot("Xiaxuya");
        console.dir(electroTeaPot);
        electroTeaPot.turnOn();
        electroTeaPot.turnOff();
    }

    return {
        init: function() {
            printPot()
        }
    }
}());

//*********************************************

kettlerHandler.init();