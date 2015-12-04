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

    /* function kettleOnOff(kettler) {
        input.btnOnOff.prop("checked") ? kettler.turnOn(): kettler.turnOff();
    } */

    function addKettleName() {
        input.formGroup.hide();
        input.btnOnOff.show();
        input.nameOfKettle.fadeIn(3250);
        input.nameOfKettle.html('Поздравляем !!! Вы выбрали чайник: ' + input.checkKettle.val()
            + ' по имени: ' + '"' + input.inputName.val() + '"');
    }

    function addKettle() {
        if(input.checkKettle.val() == "Классический") {
            var classicKettle = new TeaPot(input.inputName.val());
            input.classicImg.fadeIn(1500);
        }else if(input.checkKettle.val() == "Електрический") {
            var electroKettle = new ElectroKettle(input.inputName.val());
            input.electroImg.fadeIn(1500);
        }else {
            var sunKettle = new SunKettle(input.inputName.val());
            input.sunImg.fadeIn(1500);
        }
        addKettleName();
    }

    function createKettle() {
        input.successButton.click(addKettle);
    }

    return {
        setKettler: function(teaPots) {
            input = teaPots;
        },
        init: function() {
            createKettle()
        }
    }
}());

//*********************************************

kettlerHandler.setKettler({
    inputName    : $('#inputName'),
    checkKettle  : $('select#checkKettle'),
    kettleOn     : $('#kettle-on'),
    kettleOff    : $('#kettle-off'),
    kettleStat   : $('#kettle-stat'),
    classicImg   : $('#classic-kettle'),
    electroImg   : $('#electro-kettle'),
    sunImg       : $('#sun-kettle'),
    nameOfKettle : $('#name-of-kettle'),
    successButton: $('.btn-success'),
    formGroup    : $('.form-group'),
    btnOnOff     : $('section.main')
});

kettlerHandler.init();
