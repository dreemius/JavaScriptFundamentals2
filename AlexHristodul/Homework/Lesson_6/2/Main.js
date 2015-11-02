var container=document.querySelector("#container");
var inner=document.querySelector("#inner");
var newDiv1=document.querySelector("#newDiv1");
var newDiv2=document.querySelector("#newDiv2");

container.removeChild(inner);
container.replaceChild(newDiv2,newDiv1);