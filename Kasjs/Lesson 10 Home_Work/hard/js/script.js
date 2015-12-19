
function selector (el)    {return document.querySelector(el);}
function creator(tag)     {return document.createElement(tag);}
function hideFormPart()   {selector('#form_part').className = 'row hide';}
function showFormPart()   {selector('#form_part').className = 'row show';}
function showButtonGroup(){selector('#buttonGroup').className = 'row show';}
function hideButtonGroup(){selector('#buttonGroup').className = 'row hide';}
function deleteElement()  {selector('#result_container').removeChild(selector('#kettleElem'));}
function showOnMsg()      {selector('.bg-success').className = 'bg-success validation-msg show';}
function hideOnMsg()      {selector('.bg-success').className = 'bg-success validation-msg hide';}
function showOffMsg()     {selector('.bg-danger').className = 'bg-danger validation-msg show';}
function hideOffMsg()     {selector('.bg-danger').className = 'bg-danger validation-msg hide';}
//-----------------------------------------------------------------------------------------------
function Kettle (){
    this.container               = creator('div');
    this.img                     = creator('img');
    this.nameParagraph           = creator('p');
    this.msgOn                   = creator('p');
    this.msgOff                  = creator('p');
    this.container.appendChild(this.nameParagraph);
    this.container.appendChild(this.msgOn);
    this.container.appendChild(this.msgOff);
    this.container.appendChild(this.img);
    selector('#result_container').appendChild(this.container);
}
Kettle.prototype = {
    setParagraphAttributes       : function(){
        this.nameParagraph.innerHTML = selector('#name').value;
    },
    setContainerAttributes       : function(){
        this.container.className = 'col-xs-3';
        this.container.id        = 'kettleElem';
    },
    setImageAttributes           : function(){
        this.img.className       = 'img-responsive img-thumbnail';
        this.img.alt             = 'Kettle';
        this.img.src             = 'images/kettle.jpg';
    }
};
function Electronic_Kettle(){
    Kettle.apply(this,arguments);
}
Electronic_Kettle.prototype = {
    setImageAttributes           : function(){
        this.img.className       = 'img-responsive img-thumbnail';
        this.img.alt             = 'Electronic_Kettle';
        this.img.src             = 'images/kettle_elect.jpg';
    }
};
var createEventKettle = function(){
    var createButton = selector('#create');
    createButton.addEventListener('click',selectKettle);
};
inheritense(Kettle,Electronic_Kettle);
function selectKettle() {
    var kettleSelector = selector('#select_kettle');
    if(kettleSelector.value == "Kettle") {
        var ket = new Kettle();
        ket.setContainerAttributes();
        ket.setParagraphAttributes();
        ket.setImageAttributes();
    }else{
        var electKet = new Electronic_Kettle();
        electKet.setContainerAttributes();
        electKet.setParagraphAttributes();
        electKet.setImageAttributes();
    }
    hideFormPart();
    showButtonGroup();
}
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
function run(){
    createEventKettle();
    pressTumblerButton();
    pressDeleteButton();
}
run();

