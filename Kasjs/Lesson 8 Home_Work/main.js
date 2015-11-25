var formValidator = (function(){
    var count = 1;
    var domElements = {};
    function showSuccessMsg(){domElements.Success.className = 'bg-success validation-msg show';}
    function showErrorMsg () {domElements.Error.className = 'bg-danger validation-msg show';}
    function hideErrorMsg(){domElements.Error.className = 'bg-danger validation-msg hide';}
    function hideSuccessMsg (){domElements.Success.className = 'bg-success validation-msg hide';}
    function hideForm(){domElements.tagForm.className = 'form-horizontal hide';}
    function showForm(){domElements.tagForm.className = 'form-horizontal show';}
    function showTable(){domElements.table.className = 'table table-bordered show';}
    function hideTable(){domElements.table.className = 'table table-bordered hide';}
    function showTableParagraph(){domElements.paragraphTable.className = 'show';}
    function hideTableParagraph(){domElements.paragraphTable.className = 'hide';}
    function showFormParagraph(){domElements.paragraphForm.className = 'show';}
    function hideFormParagraph(){domElements.paragraphForm.className = 'hide';}
    function showResetButton(){domElements.resetButton.className = 'show';}
    function hideResetButton(){domElements.resetButton.className = 'hide';}
    function emptyForm(){domElements.name.value = '';domElements.email.value = '';domElements.password.value = '';}

    function createAndFill (configObject,elem){
        (configObject.className) && (elem.className = configObject.className);
        (configObject.innerHTML) && (elem.innerHTML = configObject.innerHTML);
        (configObject.id)&&(elem.id = configObject.id);
        (configObject.scope)&&(elem.scope = configObject.scope);
        return elem;
    }
    function create(el){
        return document.createElement(el);
    }
    function addTableLine(){
        var tableBody = domElements.tableBody;
        var tableRow = create('tr');
        var tableHead = create('th');
        var spanElem = create('span');
        tableHead = createAndFill({
            scope     : 'row',
            innerHTML : count
        },tableHead);
        count++;
        var tableDataName = create('td');
        tableDataName = createAndFill({
            innerHTML : domElements.name.value
        },tableDataName);
        var tableDataEmail = create('td');
        tableDataEmail = createAndFill({
            innerHTML : domElements.email.value
        },tableDataEmail);
        var tableDataPassword = create('td');
        tableDataPassword = createAndFill({
            innerHTML : domElements.password.value.replace(/\w/g,'*')
        },tableDataPassword);
        var tableButton = create('button');
        tableButton = createAndFill({
            className : 'btn btn-info btn-xs',
            innerHTML : 'Show',
            id        : 'but'
        },tableButton);
        spanElem.value = domElements.password.value;
        function appendElement(element){
            if(element == tableRow) {
                element.appendChild(tableHead);
                element.appendChild(tableDataName);
                element.appendChild(tableDataEmail);
                element.appendChild(tableDataPassword);
            }else if (element == tableDataPassword){
                element.appendChild(tableButton);
                element.appendChild(spanElem);
            }else if(element == tableBody){
                element.appendChild(tableRow);
            }
        }
        appendElement(tableBody);
        appendElement(tableRow);
        appendElement(tableDataPassword);
    }

    function showTablePart(){
        addTableLine();
        showTable();
        showTableParagraph();
        hideFormParagraph();
        showResetButton();
    }
    function showFormPart(){
        hideTable();
        hideTableParagraph();
        showForm();
        showFormParagraph();
        hideResetButton();
        hideSuccessMsg ();
        emptyForm();
    }
    //-------------------------------------------------------------------------
    function checkForm(event){
        var emailExp =/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        event.preventDefault();
        if(domElements.name.value
            && (domElements.email.value && domElements.email.value.match(emailExp))
            && domElements.password.value){
            showSuccessMsg();
            hideErrorMsg();
            hideForm();
            showTablePart();
        }else{
            showErrorMsg();
        }
    }
   function showHidePassword(event) {
       if (event.target.tagName = 'button') {
           if(event.target.previousSibling.textContent.charAt(0) == "*") {
               event.target.previousSibling.data = event.target.nextSibling.value;
              event.target.innerHTML = 'hide';
           }else{
               event.target.previousSibling.data = event.target.previousSibling.data.replace(/\w/g,'*');
               event.target.innerHTML = 'show';
           }
       }
   }
    function InitForm(){
        domElements.check.addEventListener('click',checkForm);
        domElements.resetButton.addEventListener('click',showFormPart);
        domElements.tableBody.addEventListener('click',showHidePassword);
    }
//----------------------------------------------------------------------------------
    return {
		setForm : function(form) {
            domElements = form;
        },
        initValidator: function(){
            InitForm();
        }
    }
}());

formValidator.setForm({
    name           : document.querySelector("#inputName"),
    email          : document.querySelector("#inputEmail"),
    password       : document.querySelector("#inputPassword"),
    Success        : document.querySelector('.bg-success'),
    Error          : document.querySelector('.bg-danger'),
    tableBody      : document.querySelector('#table-content'),
    table          : document.querySelector('table'),
    check          : document.querySelector('#submit'),
    tagForm        : document.querySelector('form'),
    paragraphTable : document.querySelector('.tableParagraph'),
    paragraphForm  : document.querySelector('.formParagraph'),
    resetButton    : document.querySelector('.reset')

});
formValidator.initValidator();