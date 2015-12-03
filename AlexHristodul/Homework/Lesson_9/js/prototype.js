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
				$('.collapsed').addClass('collapsed_1');
            });
        }
    };

    function House(name, floor) {
        this.name = name;
        this.floor = floor;
    };

    House.prototype = firstHouse;
    var secondHouse = new House("House №2", 3);
    var thirdHouse = new House("House №3",4);
    var fourHouse = new House("House №4", 5);

    function eventListener() {
        firstHouse.onLight(win.windows_1);
        secondHouse.onLight(win.windows_2);
        thirdHouse.onLight(win.windows_3);
        fourHouse.onLight(win.windows_4);
        console.dir(fourHouse);
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