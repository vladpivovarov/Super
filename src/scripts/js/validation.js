export default function () {

    var form = document.querySelector(".main__form");
    var inputs = document.querySelectorAll(".input__line");

    for(var i = 0; i < inputs.length; i++) {
        let label = inputs[i].closest(".input");
        inputs[i].addEventListener("focus", function(e) {
            label.classList.remove("input_alert");
            label.classList.add("input_focus");
            label.classList.remove("input_filled");
            label.classList.add("input_has_text");
        });
        inputs[i].addEventListener("blur", function(e) {
            label.classList.remove("input_focus");

            notANull(e.target.value, e.target);

            if(e.target.name === "alias") {

                if(validateAlias(e.target) === "false") {
                    label.classList.add("input_alert");
                    var message = e.target.nextElementSibling;
                    console.log(message);
                    message.textContent = "Алиас не может содержать русские буквы и пробелы";
                }else {
                    label.classList.remove("input_alert");
                };
            }
            if(e.target.name === "email") {

                if(validateEmail(e.target) === "false") {
                    label.classList.add("input_alert");
                    var message = e.target.nextElementSibling;
                    console.log(message);
                    message.textContent = "Введите корректный e-mail";
                }else {
                    label.classList.remove("input_alert");
                };
            }
            if(e.target.name === "phone") {

            }
        });
    }


    function notANull(value, thisInput) {
        var mess = thisInput.nextElementSibling;
        var labels = thisInput.closest("label");
        if (value.length === 0) {
            mess.textContent = "Заполните поле";
            labels.classList.add("input_alert");
        } else {
            labels.classList.remove("input_alert");
            mess.textContent = "";
        }
    }


    var phoneInput = form['phone'];
    phoneInput.addEventListener('keydown', function(event) {
        if( !(event.key == 'ArrowLeft' || event.key == 'ArrowRight' || event.key == 'Backspace' || event.key == 'Tab')) { event.preventDefault() }
        var mask = '+7 (111) 111-11-11'; // Задаем маску

        if (/[0-9\+\ \-\(\)]/.test(event.key)) {
            // Здесь начинаем сравнивать this.value и mask
            // к примеру опять же
            var currentString = this.value;
            var currentLength = currentString.length;
            if (/[0-9]/.test(event.key)) {
                if (mask[currentLength] == '1') {
                    this.value = currentString + event.key;
                } else {
                    for (var i=currentLength; i<mask.length; i++) {
                        if (mask[i] == '1') {
                            this.value = currentString + event.key;
                            break;
                        }
                        currentString += mask[i];
                    }
                }
            }
        }
    });


    function validateEmail(input) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = input.value;
        if(reg.test(address) == false) {

            return "false";
        }else {
            return "true";
        }
    }

    function validate(form_id,email) {
        var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
        var address = document.forms[form_id].elements[email].value;
        if(reg.test(address) == false) {
            alert('Введите корректный e-mail');
            return false;
        }
    }

    function validateAlias(input) {
        var reg = /[A-Za-z0-9]/;
        var reg2 = /[а-я]/;
        var aliases = input.value;
        if(reg.test(aliases) == true && reg2.test(aliases) == false) {

            return "true";
        }else {
            return "false";
        }
    }

    var phone = form["phone"].value;
    var email = form["email"].value;
    var workGroupDesc = form["workGroupDesc"].value;
    var publicGroupDesc = form["publicGroupDesc"].value;
    var groupName = form["groupName"].value;
    var alias = form["alias"].value;
    var fullName = form["fullName"].value;
    var post = form["post"].value;
    
    var save = document.querySelector(".button_save")
    
    if (phone && email && workGroupDesc && publicGroupDesc && groupName && alias && fullName && post) {
        save.removeAttribute("disabled");
    }

    if (localStorage.getItem("phone")) {
        phone = localStorage.getItem("phone")
        email = localStorage.getItem("email")
        workGroupDesc = localStorage.getItem("workGroupDesc")
        publicGroupDesc = localStorage.getItem("publicGroupDesc")
        groupName = localStorage.getItem("groupName")
        alias = localStorage.getItem("alias")
        fullName = localStorage.getItem("fullName")
        post = localStorage.getItem("post")
    }

    save.addEventListener("click", function(e) {
        e.preventDefault();


        if (phone && email && workGroupDesc && publicGroupDesc && groupName && alias && fullName && post) {
            localStorage.setItem("phone", phone);
            localStorage.setItem("email", email);
            localStorage.setItem("workGroupDesc", workGroupDesc);
            localStorage.setItem("publicGroupDesc", publicGroupDesc);
            localStorage.setItem("groupName", groupName);
            localStorage.setItem("alias", alias);
            localStorage.setItem("fullName", fullName);
            localStorage.setItem("post", post);
        }

    })




}