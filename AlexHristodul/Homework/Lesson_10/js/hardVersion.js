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
            showBanner(input.kettleStat);
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

    function showBanner(selector) { // move this method to prototype
        selector.fadeIn(3250, function () {
            $(this).fadeOut(3250);
        });
    }

    function kettleHandlers(kettle) {
        input.buttonOn.click(function() {kettle.turnOn()});
        input.buttonOff.click(function() {kettle.turnOff()});
    }
    //function kettleOff(kettle) {}

    function checkKettles(parent, image) { //rename -> createKattleInstance
        var newKettle = new parent(input.inputName.val());
        addKettleName(image);
        kettleHandlers(newKettle);
        //kettleOff(newKettle);
    }

    function addKettleName(image) { //showKattle
        input.formGroup.hide();
        input.buttonOn.show();
        input.buttonOff.show();
        input.buttonReset.show();
        image.fadeIn(1500);
        input.nameOfKettle.fadeIn(3250);
        input.nameOfKettle.html('Поздравляем !!! Вы выбрали чайник: ' + input.checkKettle.val()
            + ' по имени: ' + '"' + input.inputName.val() + '"');
    }

    function addKettle() {
        (input.checkKettle.val() === "Классический") ? checkKettles(TeaPot, input.classicImg) :
        (input.checkKettle.val() === "Електрический")? checkKettles(ElectroKettle, input.electroImg) :
                                                       checkKettles(SunKettle, input.sunImg);
    }

    function createKettle() { //change method name
        input.addKettlers.click(addKettle);
        input.buttonReset.click(function() {location.reload()});
    }

    return {
        setKettler: function(teaPots) {
            input = teaPots; //may be rename input to something else
        },
        init: function() {
            createKettle();
        }
    }
}());

//********************************************

kettlerHandler.setKettler({
    inputName    : $('#inputName'),
    checkKettle  : $('#checkKettle'),
    kettleOn     : $('#kettle-on'),
    kettleOff    : $('#kettle-off'),
    kettleStat   : $('#kettle-stat'),
    classicImg   : $('#classic-kettle'),
    electroImg   : $('#electro-kettle'),
    sunImg       : $('#sun-kettle'),
    nameOfKettle : $('#name-of-kettle'),
    addKettlers  : $('#add-kettlers'),
    buttonOn     : $('#btn-on'),
    buttonOff    : $('#btn-off'),
    buttonReset  : $('#btn-reset'),
    formGroup    : $('.form-group')
});

kettlerHandler.init();
