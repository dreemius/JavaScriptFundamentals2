'use strict';
// Created by iPhoenix© development 30.11.2015
//********************************************

var windowsHandler = (function() {
    var win = null;
    var firstHouse = {
        name   : "House №1",
        floor  : 2,
        onLight: function(selector) {
            selector.click(function() {
                $(this).toggleClass('windows_5');
            });
        }
    };

    function House(name, floor) {
        this.name = name;
        this.floor = floor;
    };

    House.prototype = firstHouse;
    var secondHouse = new House("House_2", 3);
    var thirdHouse = new House("House_3",4);
    var fourHouse = new House("House_4", 5);

    function eventListener() {
        firstHouse.onLight(win.windows_1);
        secondHouse.onLight(win.windows_2);
        thirdHouse.onLight(win.windows_3);
        fourHouse.onLight(win.windows_4);
        console.log(secondHouse);
    }
    return {
        setWindow    : function(window) {
            win = window;
        },
        init: function() {
            eventListener();
        }
    }
}());

//***********************************************

windowsHandler.setWindow({
    windows_1: $('.windows_1'),
    windows_2: $('.windows_2'),
    windows_3: $('.windows_3'),
    windows_4: $('.windows_4')

});
windowsHandler.init();