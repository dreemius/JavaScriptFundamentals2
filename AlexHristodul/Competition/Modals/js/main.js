/*
Introduction to modals
Created by iPhoenix© development 11.12.2015
********************************************
*/

$(function(){
    'use strict';

    // Конфигурация modal:
    function modalInit() {
        $('#basicModal').modal({
            backdrop : true,  // затемнение веб-страницы;
            keyboard : false,  // использование ESC;
            remote   : false, // показ содержимого удалёного URL;
            show     : true   // отображает модальное окно;
        });
    }

    //***************************************
    var press = {
        demo: function() {
            $('#start_page, #instruction, #full_code, footer').hide();
            $('#modal').show();
        },
        inst: function() {
            $('#start_page, #modal, #full_code').hide();
            $('#instruction, footer').show();
        },
        code: function() {
            $('#start_page, #instruction, #modal').hide();
            $('#full_code, footer').show();
        }
    };

    function handlerEvents() {
        // Modal откроется при нажатии на кнопку
        $('#loadModal').click(modalInit);
        $('#start').click(function () {location.reload();});
        $('#demo').click(press.demo);
        $('.install').click(press.inst);
        $('.full-code').click(press.code);
    }

    //Вызываем обработчик событий
    handlerEvents();
}());

//********************************************
