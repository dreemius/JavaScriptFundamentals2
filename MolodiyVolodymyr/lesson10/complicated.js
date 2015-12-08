"use strict";
var createBtn=document.querySelector("#createBtn");
var wrapper=document.querySelector('.res');
var appended=document.querySelector('p');
var createBtn=document.querySelector('.createBtn');
var turnBtn=document.querySelector('.turnOnOff');
var resetBtn=document.querySelector('.resetBtn');
var form=document.querySelector('form');

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
	 var textMsg=('Kettle'+' '+ this.name+' '+'is turn on');
	 var htmlMsg= createHtmlElement('p',textMsg);
	 wrapper.appendChild(htmlMsg);
	},
turnOff:function(){
	 var textMsg=('Kettle'+' '+ this.name+' '+'is turn off');
	 var htmlMsg=createHtmlElement('p',textMsg)
	  wrapper.appendChild(htmlMsg);
     }
	}
function elecKettle(){
	kettle.apply(this,arguments);
	}
	
elecKettle.prototype={
turnOn:function(){
	var pressBtnMsg=('Button is pressed');
	var pressBtnMsgDispay= createHtmlElement('p',pressBtnMsg);
	wrapper.appendChild(pressBtnMsgDispay);
	kettle.prototype.turnOn.apply(this,arguments);
	 },
turnOff:function(){
		kettle.prototype.turnOff.apply(this,arguments);
	  }
	 }

function t(){
	var kettleName =document.querySelector('#inputKettleName').value;
	var selectedIndValue=document.getElementById('choose').selectedIndex;
    var selectedKettleType=document.getElementsByTagName('option')[selectedIndValue].value;
	
	switch(selectedKettleType){
	case "kettle":
	var electronicKettle=new kettle(kettleName);
	break;
	case "elecKettle":
	var electronicKettle=new elecKettle(kettleName);	
	break;
	}
	var ketName=createHtmlElement('p',electronicKettle.name);
	wrapper.appendChild(ketName);
	 
function turnOnOffKettle(){
	var par=document.querySelector('p');
	if(turnBtn.innerHTML==="turnOn"){
		wrapper.innerHTML=' ';
		turnBtn.innerHTML='turnOff';
		 electronicKettle.turnOn();
	}
	else{
		wrapper.innerHTML=' ';
		turnBtn.innerHTML='turnOn'; 
		electronicKettle.turnOff();
	     }
	 }
	turnBtn.addEventListener('click',turnOnOffKettle); 
    }
function hideForm(){
	 form.style.display="none";
	 createBtn.style.display="none";
	 resetBtn.style.display="block";
	 turnBtn.style.display="block";
	 }

function showForm(){
	 form.style.display="block";
	 createBtn.style.display="block";
	 resetBtn.style.display="none";
	 turnBtn.style.display="none";
	 wrapper.innerHTML=' ';
	 }
function resetForms(){
	 var kettleInput =document.querySelector('#inputKettleName');
	 kettleInput.value='';
	 }

createBtn.addEventListener('click',t);
createBtn.addEventListener('click',hideForm);
resetBtn.addEventListener('click',showForm);
resetBtn.addEventListener('click',resetForms);



