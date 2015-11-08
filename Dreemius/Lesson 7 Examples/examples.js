
//--------- Example 1

var link = document.querySelector('#link');
link.addEventListener ("mousedown", function(){console.log("mousedown")})
link.addEventListener ("mouseup", function(){console.log("mouseup")})
link.addEventListener ("click", function(){console.log("click")})
link.addEventListener ("keyup", function(){console.log("keyup")})


//--------- Example 2


var link2 = document.querySelector('#link2');
var input = document.querySelector('#input');
link2.addEventListener ("click", function(event){
	event.preventDefault();
	console.log("click start ");
	input.focus();
	console.log("click end ");
	//console.dir(event);
})	
input.addEventListener ("focus", function(){
	console.log("focus ");
})		

//--------- Example 3

var one = document.querySelector('#one');
var two = document.querySelector('#two');
var three = document.querySelector('#three');

one.addEventListener ("click", msg);
two.addEventListener ("click", msg);
//two.addEventListener ("mousedown", msg);
three.addEventListener ("click", msg);

function msg (event) {
	console.log("Type: "+event.type);
	console.log("Target: " + event.target.id);
	console.log("Current target: " + event.currentTarget.id);
	console.log("---------- ");
}

//--------- Example 4

var wrapper = document.querySelector('#wrapper');
wrapper.addEventListener ("click", msg);
















//--------- Menu Delegation
var navbar = document.querySelector('#navbar');
navbar.addEventListener ("click", menuHandler);
function menuHandler (event) {
	var target = event.target,
		parent = target.closest("ul");
	
	if (parent) {
		var activeElement = document.querySelector('.active');
		activeElement.className = "";
		target.closest("li").className = "active";
	}
	
} 

