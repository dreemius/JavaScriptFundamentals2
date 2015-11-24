var formTrue = $('#formTrue');
var formError = $('#formError');
var tableContent = $('#table-content');
var tableForm = $('#tableForm');
var template_TableString = $('#item-template_TableString');

var submitBtn = $('#submit');
var Name = $('#inputName');
var Email = $('#inputEmail');
var Password = $('#inputPassword');
var resetBtn = $('#reset');
$(document).ready(function () {
    var formValidator = (function () {

        var formObj = {};
        var stringNumber =0;

        function validateForm() {
            function showErrorMsg() {
                formObj.formError.removeClass("hideBlock").addClass("showBlock");
            }

            function hideErrorMsg() {
                formObj.formError.removeClass("showBlock").addClass("hideBlock");
            }

            function showSuccessMsg() {
                formObj.formTrue.removeClass("hideBlock").addClass("showBlock");
            }

            function hideSuccessMsg() {
                formObj.formTrue.removeClass("showBlock").addClass("hideBlock");
            }

            function showTable() {
                formObj.tableForm.removeClass("hideBlock").addClass("showBlock");
            }

            function hideTable() {
                formObj.tableForm.removeClass("showBlock").addClass("hideBlock");
            }

            function addNewTableLine() {

                var compiled = _.template(formObj.template_TableString.html());
                var html = compiled({
                    stringNumber: stringNumber,
                    name: formObj.name.val(),
                    email: formObj.email.val(),
                    password: formObj.password.val()
                });
                formObj.tableContent.append(html);
                console.log(html);
            }

            function checkForm() {
                 if (formObj.name.val()
                    && formObj.email.val()
                    && formObj.password.val()) {
                    showTable();
                    showSuccessMsg();
                    hideErrorMsg();
                    addNewTableLine();
                } else {
                    showErrorMsg();
                }
            }

            function submit() {
                formObj.submitBtn.click( function () {
                    stringNumber++;
                    checkForm();
                });


            }

            function reset() {

                formObj.resetBtn.click( function () {
                    hideTable();
                    hideErrorMsg();
                    hideSuccessMsg();
                });
            }

            submit();
            reset();
        }


        return {
            setForm: function (form) {
                formObj = form;
            },
            initValidator: function (form) {
                validateForm();
            }
        }


    }());

    formValidator.setForm({
        name: Name,
        email: Email,
        password: Password,
        formTrue: formTrue,
        formError: formError,
        tableForm: tableForm,
        tableContent: tableContent,
        template_TableString: template_TableString,
        submitBtn: submitBtn,
        resetBtn: resetBtn
    });
    formValidator.initValidator();
});