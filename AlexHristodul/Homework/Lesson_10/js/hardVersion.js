'use strict';
// Created by iPhoenix© development 03.12.2015
//********************************************

var kettlerHandler = (function() {
    var input = null;

    function TeaPot(name) {
        this.isBoiling = false;
        this.name = name;
        this.showBanner = function(selector) {
            selector.fadeIn(3250, function () {
                $(this).fadeOut(3250);
            })
        }
    }

    TeaPot.prototype = {
        turnOn : function() {
            this.isBoiling = true;
            this.showBanner(input.kettleOn);
            input.kettleOn.html('<br/>' + 'Чайник по имени: "' + this.name + '" - включен.');
        },
        turnOff : function() {
            this.isBoiling = false;
            this.showBanner(input.kettleOff);
            input.kettleOff.html('<br/>' + 'Чайник по имени: "' + this.name + '" - выключен.');
        }
    };

    function ElectroKettle(name) {
        TeaPot.call(this, name);
    }

    ElectroKettle.prototype = {
        turnOn : function() {
            this.showBanner(input.kettleStat);
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
            this.showBanner(input.kettleStat);
        }
    };

    inheritense(TeaPot, ElectroKettle);
    inheritense(ElectroKettle, SunKettle);

    function kettleHandller(kettle) {
        input.buttonOn.click(function() {kettle.turnOn()});
        input.buttonOff.click(function() {kettle.turnOff()});
    }

    function createNewKettle(parent, image) {
        var newKettle = new parent(input.inputName.val());
        kettleHandller(newKettle);
        showKettleName(image);
    }

    function showKettleName(image) {
        image.fadeIn(1500);
        input.formGroup.hide();
        input.buttonOn.show();
        input.buttonOff.show();
        input.buttonReset.show();
        input.nameOfKettle.fadeIn(3250);
        input.nameOfKettle.html('Поздравляем !!! Вы выбрали чайник: ' + input.checkKettle.val()
            + ' по имени: ' + '"' + input.inputName.val() + '"');
    }

    function addKettle() {
        (input.checkKettle.val() === "Классический") ? createNewKettle(TeaPot, input.classicImg) :
        (input.checkKettle.val() === "Електрический")? createNewKettle(ElectroKettle, input.electroImg) :
        (input.checkKettle.val() === "На солнечной батарее") ? createNewKettle(SunKettle, input.sunImg): "";
    }

    function showKettle() {
        input.addKettlers.click(addKettle);
        input.buttonReset.click(function() {location.reload()});
    }

    return {
        setKettles: function(teaPots) {
            input = teaPots;
        },
        init: function() {
            showKettle();
        }
    }
}());

//********************************************

kettlerHandler.setKettles({
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
