/**
  * Created by forest on 10/20/2015.
  */
var x;
console.log(typeof x);           // undefined
x  = 100;
console.log(typeof x);           // number
console.log(typeof x / 0);       // number - infinity
console.log(typeof x * "hello"); // number - NaN
console.log(typeof x + "hello"); // string
console.log(typeof !x);          // boolean
console.log(typeof {x});         //oblect