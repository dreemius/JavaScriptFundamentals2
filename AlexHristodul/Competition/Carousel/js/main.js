/*
Introduction to carousel
Created by iPhoenix© development 10.12.2015
********************************************
*/

$(function(){
    'use strict';

    // Вызываем "Карусель"
		$('.carousel').carousel({
			interval: 7000, // интервал показа слайдов;
			pause: 'hover', // пауза;
			wrap: true,     // возобновление цикла показа слайдов;
			keyboard: true  // использование клавиатуры;
		});

    //***************************************
    var press = {
        demo: function() {
            $('#start_page, #instruction, #full_code, footer').hide();
            $('#carousel').show();
        },
        inst: function() {
            $('#start_page, #carousel, #full_code').hide();
            $('#instruction, footer').show();
        },
        code: function() {
            $('#start_page, #instruction, #carousel').hide();
            $('#full_code, footer').show();
        }
    };

    function handlerEvents() {
        $('#start').click(function () {location.reload();});
        $('#demo').click(press.demo);
        $('.install').click(press.inst);
        $('.full-code').click(press.code);
    }

    //Вызываем обработчик событий
    handlerEvents();
}());

//********************************************
