'use strict';
// Created by iPhoenix© development 03.12.2015
//********************************************

var kettlerHandler = (function() {
    var input = null;

    function TeaPot(name) {
        this.isBoiling = false;
        this.name = name;
    }

    TeaPot.prototype = {
        turnOn : function() {
            this.isBoiling = true;
            input.kettleOn.html('<br/>' + 'Чайник по имени: "' + this.name + '" - включен.');
            showBanner(input.kettleOn);
        },
        turnOff : function() {
            this.isBoiling = false;
            input.kettleOff.html('<br/>' + 'Чайник по имени: "' + this.name + '" - выключен.');
            showBanner(input.kettleOff);
        }
    };

    function ElectroKettle(name) {
        TeaPot.call(this, name);
    }

    ElectroKettle.prototype = {
        turnOn : function() {
            input.kettleStat.html('<br/>' + 'Кнопка нажата');
            TeaPot.prototype.turnOn.apply(this, arguments);
        }
    };

    function SunKettle(name) {
        ElectroKettle.call(this, name);
    }

    SunKettle.prototype = {
        turnOn : function() {
            TeaPot.prototype.turnOn.apply(this, arguments);
            input.kettleStat.html('<br/>' + 'Пошла зарядка');
            showBanner(input.kettleStat);
        }
    };

    inheritense(TeaPot, ElectroKettle);
    inheritense(ElectroKettle, SunKettle);

    function showBanner(selector) {
        selector.fadeIn(3250, function () {
            $(this).fadeOut(3250);
        });
    }

    function addKettleName() {
        input.nameOfKettle.html('"' + input.inputName.val() + '"');
    }

    function addKettle() {
        var sunKettle = new SunKettle(input.inputName.val());
        input.formGroup.hide();
        addKettleName();
        sunKettle.turnOn();
        sunKettle.turnOff();
    }

    function printPot() {
        input.successButton.click(addKettle);
    }
    return {
        setKettler: function(teaPots) {
            input = teaPots;
        },
        init: function() {
            printPot()
        }
    }
}());

//*********************************************

kettlerHandler.setKettler({
    inputName    : $('#inputName'),
    checkKettle  : $('#checkKettle'),
    nameOfKettle : $('.name-of-kettle'),
    successButton: $('.btn-success'),
    formGroup    : $('.form-group'),
    kettleOn     : $('#kettle-on'),
    kettleOff    : $('#kettle-off'),
    kettleStat   : $('#kettle-stat')
});

kettlerHandler.init();
