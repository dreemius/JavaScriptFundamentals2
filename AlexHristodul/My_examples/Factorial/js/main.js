/*Factorial
Created by iPhoenix© development 14.12.2015
*********************************************/

$(function() {
    'use strict';
    var $numBtn = $('#add-num'),
        $fib = $('.fib-banner');

    function factorial(n) {
        return n ? n * factorial(n - 1) : 1;
    }

    function setNshow() {
        $fib.html(factorial($('#inputNum').val()));
        $fib.fadeIn(2000, function() {
			$fib.fadeOut(2000);
		});
    }

    function init() {
        $numBtn.click(setNshow);
    }

    init();
});

//********************************************