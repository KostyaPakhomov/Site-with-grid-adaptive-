"use strict";

var formElement=document.forms.FORM;
formElement.addEventListener('submit',validateTelForm,false);

function validateTelForm(EO) {
    EO=EO||window.event;

    try {
        var telRE=/^\+375\s(?:17|25|33|44|29)\s\d{3}\-\d{2}\-\d{2}$/;
        var nameRE=/[A-Za-z|А-Яа-я]|\s/;
        var formElement=document.forms.FORM;
        var nameElement = formElement.elements.NAME;
        var nameValue=nameElement.value;
        var telElement=formElement.elements.PHONE;
        var telValue=telElement.value;

        if ( !nameRE.test(nameValue) ) {
            alert('Введите пожалуйста своё Имя!');
            nameElement.focus();
            EO.preventDefault();
            return;
        }

        for (let i = 0; i < telValue.length; i++) {
            if (!telRE.test(telValue || telValue[i])) {
                alert('Введите пожалуйста телефон строго в указанном формате!');
                telElement.focus();
                EO.preventDefault();
                return;
            }
        }
    }
    catch ( err ) {
        EO.preventDefault();
    }

}

function Person(_name,_tel) {
    this.name = _name;
    this.tel = _tel;
    this.inp=function () {
        var nameNew = formElement.elements.NAME;
        nameNew.value = this.name;
        var telNew = formElement.elements.PHONE;
        telNew.value = this.tel;
    }
    //setInterval(this.send,5000);
    this.send = function () {
        person.inp();
        setTimeout('document.FORM.submit()',3000);
    }
}
