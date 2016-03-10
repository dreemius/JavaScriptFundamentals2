"use strict";
var kettleMaker = (function () {
var createBtn=document.querySelector("#createBtn");
var wrapper=document.querySelector('.res');
var appended=document.querySelector('p');
var createBtn=document.querySelector('.createBtn');
var turnBtn=document.querySelector('.turnOnOff');
var resetBtn=document.querySelector('.resetBtn');
var form=document.querySelector('form');
var kettleName =document.querySelector('#inputKettleName');

function createHtmlElement(tagName,inHTML){
	var tableElement=document.createElement(tagName);
	inHTML && (tableElement.innerHTML=inHTML);
	return tableElement;
	}

function kettle(name){
    this.name=name;
    this.isBoiling=false;
    }
kettle.prototype={
turnOn:function(){
	this.isBoiling=true;
	var textMsg='Kettle'+' '+ this.name+' '+'is turn on';
	var htmlMsg= createHtmlElement('p',textMsg);
	 wrapper.appendChild(htmlMsg);
	},
turnOff:function(){
	var textMsg='Kettle'+' '+ this.name+' '+'is turn off';
	var htmlMsg=createHtmlElement('p',textMsg)
	  wrapper.appendChild(htmlMsg);
     }
	}
function elecKettle(){
	kettle.apply(this,arguments);
	}
	
elecKettle.prototype={
turnOn:function(){
	var pressBtnMsg='Button is pressed';
	var pressBtnMsgDispay= createHtmlElement('p',pressBtnMsg);
	wrapper.appendChild(pressBtnMsgDispay);
	kettle.prototype.turnOn.apply(this,arguments);
	 },
turnOff:function(){
		kettle.prototype.turnOff.apply(this,arguments);
	  }
	 }

function createNewKettle(userSelectedKettle){
switch(userSelectedKettle){
	case "kettle":
	var electronicKettle=new kettle(kettleName.value);
	break;
	case "elecKettle":
	var electronicKettle=new elecKettle(kettleName.value);	
	break;
	}
	return electronicKettle;
	}
	
function toggleKettle(){
var selectedIndValue=document.getElementById('choose').selectedIndex;
var selectedKettleType=document.getElementsByTagName('option')[selectedIndValue].value;

if(turnBtn.innerHTML==="turn on"){
    wrapper.innerHTML=' ';
    turnBtn.innerHTML='turn off';	
    createNewKettle(selectedKettleType).turnOn();
}
else{
    wrapper.innerHTML=' ';
    turnBtn.innerHTML='turn on'; 
    createNewKettle(selectedKettleType).turnOff();
 }
}

function hideForm(){
	form.style.display="none";
	createBtn.style.display="none";
	resetBtn.style.display="block";
	turnBtn.style.display="block";
	 }

function showInputs(){
	form.style.display="block";
	createBtn.style.display="block";
	resetBtn.style.display="none";
	turnBtn.style.display="none";
	wrapper.innerHTML=' ';
	 }
function resetInputs(){
	var kettleInput =document.querySelector('#inputKettleName');
	kettleInput.value='';
	turnBtn.innerHTML='turn on';
	}

return { 
init:function(){
createBtn.addEventListener('click',hideForm);
turnBtn.addEventListener('click',toggleKettle);
resetBtn.addEventListener("click", function() {
     showInputs();
     resetInputs();
        });
      }
    }
 }());
 
kettleMaker.init();


