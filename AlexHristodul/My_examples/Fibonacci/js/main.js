'use strict';
/*Numbers of Fibonacci
Created by iPhoenix© development 13.12.2015
*********************************************/

$(function() {
    var $numBtn = $('#add-num'),
        $fib = $('.fib-banner');

    function calcFib(n) {
        // return n <= 1 ? n: calcFib(n-2) + calcFib(n-1);
		  var a = 1,
			  b = 1;
		  for (var i = 3; i <= n; i++) {
			var c = a + b,
				a = b,
				b = c;
		  }
		  return b;
    }

    function setNshow() {
        $fib.html(calcFib($('#inputNum').val()));
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