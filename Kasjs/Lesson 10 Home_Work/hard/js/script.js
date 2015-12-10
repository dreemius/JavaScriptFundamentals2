//use prototype instead of usual function
// one run function
// collect all elements into one object


function selector (el){
    return document.querySelector(el);
}function creator(tag){
    return document.createElement(tag);
}
var descName = selector('#name');
var kettle = selector('#select_kettle');
var createButton = selector('#create');
var result_container = selector('#result_container');
var tumbler = selector('#on_off');
var msgOn = selector('.bg-success');
var msgOff = selector('.bg-danger');

function Kettle (){
    this.container = creator('div');
    this.img = creator('img');
    this.nameParagraph = creator('p');
    this.msgOn = creator('p');
    this.msgOff = creator('p');
    this.container.className  = 'col-xs-3';
    this.container.id = 'kettleElem';
    this.nameParagraph.innerHTML = descName.value;
    this.img.className = 'img-responsive img-thumbnail';
    this.img.alt = 'Kettle';
    this.img.src = 'images/kettle.jpg';
    this.container.appendChild(this.nameParagraph);
    this.container.appendChild(this.msgOn);
    this.container.appendChild(this.msgOff);
    this.container.appendChild(this.img);
    result_container.appendChild(this.container);
}
function Electronic_Kettle(){
    Kettle.apply(this,arguments);
    this.img.className = 'img-responsive img-thumbnail';
    this.img.alt = 'Electronic_Kettle';
    this.img.src = 'images/kettle_elect.jpg';
}
var createKettle = function(){
    createButton.addEventListener('click',selectKettle);
};
function selectKettle() {
    if(kettle.value == "Kettle") {
        var ket = new Kettle();
    }else{
        var electKet = new Electronic_Kettle();
    }
    hideFormPart();
    showButtonGroup();
}
function hideFormPart(){selector('#form_part').className = 'row hide';}
function showFormPart() {selector('#form_part').className = 'row show';}
function showButtonGroup(){selector('#buttonGroup').className = 'row show';}
function hideButtonGroup(){selector('#buttonGroup').className = 'row hide';}
function deleteElement(){result_container.removeChild(selector('#kettleElem'));}
function showOnMsg(){msgOn.className = 'bg-success validation-msg show';}
function hideOnMsg(){msgOn.className = 'bg-success validation-msg hide';}
function showOffMsg(){msgOff.className = 'bg-danger validation-msg show';}
function hideOffMsg(){msgOff.className = 'bg-danger validation-msg hide';}

function pressTumblerButton(){
    var tumbler = selector('#tumbler');
    tumbler.addEventListener('click',function(event){
            if(event.target.innerHTML == 'Turn on') {
                showOnMsg();
                hideOffMsg();
                tumbler.innerHTML = 'Turn off';
            }else{
                hideOnMsg();
                showOffMsg();
                tumbler.innerHTML = 'Turn on';
            }
    });
}
function pressDeleteButton(){
    var deleteButton = selector('#delete_ket');
    deleteButton.addEventListener('click',deleteKettle);
}
function deleteKettle(){
    showFormPart();
    hideButtonGroup();
    deleteElement();
    hideOnMsg();
    hideOffMsg();
}
createKettle();
pressTumblerButton();
pressDeleteButton();