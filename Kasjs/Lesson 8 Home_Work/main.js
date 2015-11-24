var formValidator = (function(){
    var count = 1;
    var DomElements = {};
    function showSuccessMsg(){
        DomElements.Success.className = 'bg-success validation-msg show';
    }
    function showErrorMsg (){
       DomElements.Error.className = 'bg-danger validation-msg show';
    }
    function hideErrorMsg(){
        DomElements.Error.className = 'bg-danger validation-msg hide';
    }
    function hideSuccessMsg (){
        DomElements.Success.className = 'bg-success validation-msg hide';
    }
    function hideForm(){
        DomElements.tagForm.className = 'form-horizontal hide';
    }
    function showForm(){
        DomElements.tagForm.className = 'form-horizontal show';
    }
    function showTable(){
        DomElements.table.className = 'table table-bordered show';
    }
    function hideTable(){
        DomElements.table.className = 'table table-bordered hide';
    }
    function showTableParagraph(){
        DomElements.paragraphTable.style.display = 'block';
    }
    function hideTableParagraph(){
        DomElements.paragraphTable.style.display = 'none';
    }

    function addTableLine(){

        var tableBody = DomElements.tableBody;
        var tableRow = document.createElement('tr');
        var tableHead = document.createElement('th');
        var tableButton = document.createElement('button');
        var spanElem = document.createElement('span');
        tableButton.innerHTML = 'Show';
        tableButton.className = 'btn btn-info btn-xs';
        tableButton.id = 'but';
        tableHead.scope = 'row';
        tableHead.innerHTML = count;
        count  +=1;
        tableRow.appendChild(tableHead);
        for(var i = 0;i < 3;i++){
            var tableData = document.createElement('td');
            if(i == 0) {
                tableData.innerHTML = DomElements.name.value;
            }else if(i == 1){
                tableData.innerHTML = DomElements.email.value;
            }else{
                spanElem.value = DomElements.password.value;
                DomElements.password.value = DomElements.password.value.replace(/\w/g,'*');
                tableData.innerHTML =  DomElements.password.value;
            }
            tableData.appendChild(tableButton);
            tableData.appendChild(spanElem);
            tableRow.appendChild(tableData);
        }
        tableBody.appendChild(tableRow);
    }

    function showTablePart(){
        addTableLine();
        showTable();
        showTableParagraph();
        DomElements.paragraphForm.style.display = 'none';
        DomElements.resetButton.style.display = 'block';
    }

    function showFormPart(){
        hideTable();
        hideTableParagraph();
        showForm();
        DomElements.paragraphForm.style.display = 'block';
        DomElements.resetButton.style.display = 'none';
        hideSuccessMsg ();
        DomElements.name.value = '';
        DomElements.email.value = '';
        DomElements.password.value = '';
    }
    //-------------------------------------------------------------------------
    function checkForm(event){
        var emailExp =/\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
        event.preventDefault();
        if(DomElements.name.value
            && (DomElements.email.value && DomElements.email.value.match(emailExp))
            && DomElements.password.value){
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
        DomElements.check.addEventListener('click',checkForm);
        DomElements.resetButton.addEventListener('click',showFormPart);
        DomElements.tableBody.addEventListener('click',showHidePassword);

    }
//----------------------------------------------------------------------------------
    return {
		setForm : function(form) {
            DomElements = form;
        },
        initValidator: function(){
            InitForm();
        }
    }
}());

formValidator.setForm({
    name: document.querySelector("#inputName"),
    email: document.querySelector("#inputEmail"),
    password: document.querySelector("#inputPassword"),
    Success: document.querySelector('.bg-success'),
    Error: document.querySelector('.bg-danger'),
    tableBody: document.querySelector('#table-content'),
    table: document.querySelector('table'),
    check: document.querySelector('#submit'),
    tagForm: document.querySelector('form'),
    paragraphTable: document.querySelector('#tableParagraph'),
    paragraphForm: document.querySelector('#formParagraph'),
    resetButton: document.querySelector('#reset')

});
formValidator.initValidator();