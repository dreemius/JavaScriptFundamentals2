'use strict';
/*Min & max numbers of array
Created by iPhoenix© development 13.12.2015
*********************************************/

$(function() {
    Array.prototype.min = function(){
		var min = parseInt(this[this.length-1]), el;
		for(var i=this.length-2; i>=0; i--){
			el = parseInt(this[i]);
			if(el<min){
				min = el;
			}
		}
		return min;
	};

	Array.prototype.max = function(){
		var max = parseInt(this[this.length-1]), el;
		for(var i=this.length-2; i>=0; i--){
			el = parseInt(this[i]);
			if(el>max){
				max = el;
			}
		}
		return max;
	};

// использование:
var array = [1,3,5,-1,8,0];
document.write(array.min());// -1
document.write('</br>');
document.write(array.max());// 8
});

//********************************************