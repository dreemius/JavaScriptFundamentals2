// JavaScript Document

//external file is loaded asynchronously. TASK1-2
var a = "Hello";
var b = "World";
 alert(a+b);
	   
//TASK3
var c;
var d;
var e;
 c = d = e = "Hello World";
  console.log(c, d, e);

var f = "Hello ";
var	g = "World ";
var	h = "Hello Js";
 console.log(f+g+h);
	   
//TASK4
var j;
 console.log(j);
j = true;
 console.log(j);
j = "Hello World";
 console.log(j);
j = null;;
 console.log(j);
  console.log(typeof j);
  	   
//TASK5
var k = 1, l, m, n;
 l = (2+ k++); alert(l); // 4
  m = n = l;
alert(m); // 4
alert(n); // 4

//TASK6 I understand the problem correctly? (Взять одну переменную и поочередно преобразовать ее в каждый из типов.) or how?
var p; //undefined
 alert(p);
p = true;//Boolean
 alert(p);
p = "Hello World";//String
 alert(p);
 p = 123;//Number
 alert(p);
p = null;//null
 alert(p);
