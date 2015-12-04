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

    function showBanner(selector) {
        selector.fadeIn(3250, function () {
            $(this).fadeOut(3250);
        });
    }

    function kettleOn(kettle) {
        input.buttonOn.click(function() {kettle.turnOn()});
    }

    function kettleOff(kettle) {
        input.buttonOff.click(function() {kettle.turnOff()});
    }

    function checkKettles(newKettle, parent, image) {
        var newKettle = new parent(input.inputName.val());
        addKettleName();
        kettleOn(newKettle);
        kettleOff(newKettle);
        image.fadeIn(1500);
    }

    function addKettleName() {
        input.formGroup.hide();
        input.buttonOn.show();
        input.buttonOff.show();
        input.buttonReset.show();
        input.nameOfKettle.fadeIn(3250);
        input.nameOfKettle.html('Поздравляем !!! Вы выбрали чайник: ' + input.checkKettle.val()
            + ' по имени: ' + '"' + input.inputName.val() + '"');
    }

    function addKettle() {
        if(input.checkKettle.val() == "Классический") {
            checkKettles('classicKettle', TeaPot, input.classicImg);
        }else if(input.checkKettle.val() == "Електрический") {
            checkKettles('electroKettle', ElectroKettle, input.electroImg);
        }else {
            checkKettles('sunKettle', SunKettle, input.sunImg);
        }
    }

    function createKettle() {
        input.addKettlers.click(addKettle);
        input.buttonReset.click(function() {location.reload()});
    }

    return {
        setKettler: function(teaPots) {
            input = teaPots;
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
