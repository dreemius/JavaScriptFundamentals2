/*var formTrue = $('#formTrue');
 var formError = $('#formError');
 var tableContent = $('#table-content');
 var tableForm = $('#tableForm');
 var template_TableString = $('#item-template_TableString');

 var submitBtn = $('#submit');
 var name = $('#inputName');
 var email = $('#inputEmail');
 var password = $('#inputPassword');
 var resetBtn = $('#reset');*/
$(document).ready(function () {
    var formValidator = (function () {

        var formObj = {};
        var stringNumber = 0;

        function validateForm() {
            function showErrorMsg() {
                formObj.FormError.removeClass("hideBlock").addClass("showBlock");
            }

            function hideErrorMsg() {
                formObj.FormError.removeClass("showBlock").addClass("hideBlock");
            }

            function showSuccessMsg() {
                formObj.FormTrue.removeClass("hideBlock").addClass("showBlock");
            }

            function hideSuccessMsg() {
                formObj.FormTrue.removeClass("showBlock").addClass("hideBlock");
            }

            function showTable() {
                formObj.TableForm.removeClass("hideBlock").addClass("showBlock");
            }

            function hideTable() {
                formObj.TableForm.removeClass("showBlock").addClass("hideBlock");
            }

            function addNewTableLine() {
                // console.log(formObj.Template_TableString.html());
                var compiled = _.template(formObj.Template_TableString.html());
                // console.log(formObj);
                var date = new Date();
                var block = "";
                var trID = +date;
                var html = compiled({
                    stringNumber: stringNumber,
                    name: formObj.Name.val(),
                    email: formObj.Email.val(),
                    password: formObj.Password.val(),
                    trID: trID
                });
                block += html;
                formObj.TableContent.append(block);
                formObj.TableContent.click(deleteString);
                formObj.TableContent.click(visible_hidePassword);
            }

            function deleteString(event) {
                var btnDel = $(event.target.id);
                $(event.target.id.button+":last").closest('tr').remove();
            }

            function visible_hidePassword(event) {
                var target = $(event.target);
                console.log(event);
                if (target.type == 'password') {
                   // target.text("Hide");
                    //.attr('type','text');
                }

                console.log(this);

                if (target.type == 'text') {
                   // target.text("Show");
                   //.attr('type','password');
                }
            }

            function createID(){

            }

            function defaultForm (){
                formObj.Name.val("Суслик");
                formObj.Email.val("Syslick@mail.ru");
                formObj.Password.val("1234");
            }
            function checkForm() {
                console.log(formObj.Name);
                if (formObj.Name.val()
                    && formObj.Email.val()
                    && formObj.Password.val()) {
                    showTable();
                    showSuccessMsg();
                    hideErrorMsg();
                    addNewTableLine();

                } else {
                    showErrorMsg();

                }
            }

            function submit() {
                formObj.SubmitBtn.click(function () {
                    stringNumber++;
                    checkForm();

                });


            }

            function reset() {
                formObj.ResetBtn.click(function () {
                    hideTable();
                    hideErrorMsg();
                    hideSuccessMsg();
                });
            }

            submit();
            reset();
            defaultForm ();
        }


        return {
            setForm: function (form) {
                formObj = form;
            },
            initValidator: function () {
                validateForm();
            }
        }


    }());


    formValidator.setForm({
        Name: $('#inputName'),
        Email: $('#inputEmail'),
        Password: $('#inputPassword'),
        FormTrue: $('#formTrue'),
        FormError: $('#formError'),
        TableForm: $('#tableForm'),
        TableContent: $('#table-content'),
        Template_TableString: $('#item-template_TableString'),
        SubmitBtn: $('#submit'),
        ResetBtn: $('#reset')
    });
    formValidator.initValidator();
});