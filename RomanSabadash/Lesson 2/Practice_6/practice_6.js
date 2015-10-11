// Conversion to strings
var b = 50;
var c = " percent";
console.log(b+c);

var d = String(100),
	e = " plus ",
	f = 50;
console.log(d + e + String(f));

var g = 100,
	h = 50;
console.log(String(g)+String(h));

	console.log("");

// Conversion to numbers
var n = "1000";
	n1 = Number("1000");
console.log(n);
console.log(typeof n);
console.log(typeof n1);

	console.log("");

var n2 = "1050";
	n3 = +"1050";
	console.log(n2);
console.log(typeof n2);
console.log(typeof n3);

	console.log("");

var n4 = parseInt("888");
console.log(typeof n4);

	console.log("");

var j = String(h);
console.log(g+j);

	console.log("");

// Conversion to Boolean
var num = 777;
	num1 = !!"num"; //How wright? Like this "num"? Or next example?
	num2 = !!num; // Only num, witout brackets?
console.log(num1);

	console.log("");

var num3 = Boolean("555");
console.log(num3);

	console.log("");

var num4 = Boolean("");
console.log(num4);
