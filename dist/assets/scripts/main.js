!function(e){var n={};function t(a){if(n[a])return n[a].exports;var r=n[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.d=function(e,n,a){t.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:a})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,n){if(1&n&&(e=t(e)),8&n)return e;if(4&n&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(t.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)t.d(a,r,function(n){return e[n]}.bind(null,r));return a},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="./dist/",t(t.s="./src/scripts/main.js")}({"./node_modules/normalize.css/normalize.css":
/*!**************************************************!*\
  !*** ./node_modules/normalize.css/normalize.css ***!
  \**************************************************/
/*! no static exports found */function(module,exports){eval("// removed by extract-text-webpack-plugin\n\n//# sourceURL=webpack:///./node_modules/normalize.css/normalize.css?")},"./src/scripts/js/ajax.js":
/*!********************************!*\
  !*** ./src/scripts/js/ajax.js ***!
  \********************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nexports.default = function () {\n\n    var form = document.getElementById("form");\n\n    var phone = form["phone"];\n    var email = form["email"];\n    var workGroupDesc = form["workGroupDesc"];\n    var publicGroupDesc = form["publicGroupDesc"];\n    var groupName = form["groupName"];\n    var alias = form["alias"];\n    var fullName = form["fullName"];\n    var post = form["post"];\n\n    form.addEventListener("submit", function (e) {\n        e.preventDefault();\n\n        if (phone.value && email.value && workGroupDesc.value && groupName.value && alias.value && fullName.value && post.value) {\n            if (!phone.classList.contains("input_alert") && !email.classList.contains("input_alert") && !workGroupDesc.classList.contains("input_alert") && !groupName.classList.contains("input_alert") && !alias.classList.contains("input_alert") && !fullName.classList.contains("input_alert") && !post.classList.contains("input_alert")) {\n                var data = {\n                    phone: phone.value,\n                    email: email.value,\n                    workGroupDesc: workGroupDesc.value,\n                    publicGroupDesc: publicGroupDesc.value,\n                    groupName: groupName.value,\n                    alias: alias.value,\n                    fullName: fullName.value,\n                    post: post.value\n                };\n\n                var xhr = new XMLHttpRequest();\n                xhr.open("POST", "", true);\n                xhr.setRequestHeader("Content-Type", "application/json");\n                xhr.onload = function (e) {\n                    try {\n                        console.log(JSON.parse(xhr.responseText));\n                    } catch (e) {\n                        console.log("Извините, в данных ошибка");\n                    }\n                };\n                xhr.send(JSON.stringify(data));\n                console.log(data);\n\n                form.reset();\n            } else {\n                return false;\n            }\n        }\n    });\n};\n\n//# sourceURL=webpack:///./src/scripts/js/ajax.js?')},"./src/scripts/js/style.js":
/*!*********************************!*\
  !*** ./src/scripts/js/style.js ***!
  \*********************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! normalize.css */ "./node_modules/normalize.css/normalize.css");\n\n//# sourceURL=webpack:///./src/scripts/js/style.js?')},"./src/scripts/js/validation.js":
/*!**************************************!*\
  !*** ./src/scripts/js/validation.js ***!
  \**************************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\nObject.defineProperty(exports, "__esModule", {\n    value: true\n});\n\nexports.default = function () {\n\n    var form = document.getElementById("form");\n    var inputs = document.querySelectorAll(".input__line");\n    var alert = document.querySelector(".main__alert");\n    var subtitle = document.querySelector(".main__subtitle");\n    var checkbox = document.querySelector(".checkbox__input");\n    var textarea2 = document.getElementById("textarea2");\n    var save = document.querySelector(".button_save");\n    var send = document.querySelector(".button_submit");\n    var phone, email, workGroupDesc, publicGroupDesc, groupName, alias, fullName, post;\n\n    setTimeout(function () {\n        phone = form["phone"].value;\n        email = form["email"].value;\n        workGroupDesc = form["workGroupDesc"].value;\n        publicGroupDesc = form["publicGroupDesc"].value;\n        groupName = form["groupName"].value;\n        alias = form["alias"].value;\n        fullName = form["fullName"].value;\n        post = form["post"].value;\n\n        if (phone || email || workGroupDesc || publicGroupDesc || groupName || alias || fullName || post) {\n            save.removeAttribute("disabled");\n        }\n        if (phone && email && workGroupDesc && groupName && alias && fullName && post) {\n            send.removeAttribute("disabled");\n        }\n    }, 500);\n\n    var _loop = function _loop() {\n        var label = inputs[i].closest(".input");\n        inputs[i].addEventListener("focus", function (e) {\n            label.classList.remove("input_alert");\n            label.classList.add("input_focus");\n            label.classList.remove("input_filled");\n            label.classList.add("input_has_text");\n        });\n        inputs[i].addEventListener("blur", function (e) {\n            label.classList.remove("input_focus");\n\n            phone = form["phone"].value;\n            email = form["email"].value;\n            workGroupDesc = form["workGroupDesc"].value;\n            publicGroupDesc = form["publicGroupDesc"].value;\n            groupName = form["groupName"].value;\n            alias = form["alias"].value;\n            fullName = form["fullName"].value;\n            post = form["post"].value;\n\n            if (phone || email || workGroupDesc || publicGroupDesc || groupName || alias || fullName || post) {\n                save.removeAttribute("disabled");\n            } else {\n                save.setAttribute("disabled", "disabled");\n            }\n\n            if (phone && email && workGroupDesc && groupName && alias && fullName && post) {\n                send.removeAttribute("disabled");\n            } else {\n                send.setAttribute("disabled", "disabled");\n            }\n\n            if (checkbox.checked) {\n                if (publicGroupDesc) {\n                    send.removeAttribute("disabled");\n                } else {\n                    send.setAttribute("disabled", "disabled");\n                }\n            }\n\n            notANull(e.target.value, e.target);\n\n            if (e.target.name === "alias") {\n\n                if (validateAlias(e.target) === "false") {\n                    label.classList.add("input_alert");\n                    var message = e.target.nextElementSibling;\n                    console.log(message);\n                    message.textContent = "Алиас не может содержать русские буквы и пробелы";\n                } else {\n                    label.classList.remove("input_alert");\n                };\n            }\n            if (e.target.name === "email") {\n\n                if (validateEmail(e.target) === "false") {\n                    label.classList.add("input_alert");\n                    var message = e.target.nextElementSibling;\n                    console.log(message);\n                    message.textContent = "Введите корректный e-mail";\n                } else {\n                    label.classList.remove("input_alert");\n                };\n            }\n        });\n    };\n\n    for (var i = 0; i < inputs.length; i++) {\n        _loop();\n    }\n\n    function notANull(value, thisInput) {\n        var mess = thisInput.nextElementSibling;\n        var labels = thisInput.closest("label");\n        if (value.length === 0) {\n            mess.textContent = "Заполните поле";\n            labels.classList.add("input_alert");\n        } else {\n            labels.classList.remove("input_alert");\n            mess.textContent = "";\n        }\n    }\n\n    var phoneInput = form[\'phone\'];\n    phoneInput.addEventListener(\'keydown\', function (event) {\n        if (!(event.key == \'ArrowLeft\' || event.key == \'ArrowRight\' || event.key == \'Backspace\' || event.key == \'Tab\')) {\n            event.preventDefault();\n        }\n        var mask = \'+7 (111) 111-11-11\'; // Задаем маску\n\n        if (/[0-9\\+\\ \\-\\(\\)]/.test(event.key)) {\n            // Здесь начинаем сравнивать this.value и mask\n            // к примеру опять же\n            var currentString = this.value;\n            var currentLength = currentString.length;\n            if (/[0-9]/.test(event.key)) {\n                if (mask[currentLength] == \'1\') {\n                    this.value = currentString + event.key;\n                } else {\n                    for (var i = currentLength; i < mask.length; i++) {\n                        if (mask[i] == \'1\') {\n                            this.value = currentString + event.key;\n                            break;\n                        }\n                        currentString += mask[i];\n                    }\n                }\n            }\n        }\n    });\n\n    function validateEmail(input) {\n        var reg = /^([A-Za-z0-9_\\-\\.])+\\@([A-Za-z0-9_\\-\\.])+\\.([A-Za-z]{2,4})$/;\n        var address = input.value;\n        if (reg.test(address) == false) {\n\n            return "false";\n        } else {\n            return "true";\n        }\n    }\n\n    function validateAlias(input) {\n        var reg = /[A-Za-z0-9]/;\n        var reg2 = /[а-я]/;\n        var aliases = input.value;\n        if (reg.test(aliases) == true && reg2.test(aliases) == false) {\n\n            return "true";\n        } else {\n            return "false";\n        }\n    }\n\n    if (localStorage.getItem("count")) {\n        alert.classList.add("main__alert_show");\n        subtitle.classList.add("main__subtitle_margin");\n    }\n\n    form["phone"].value = localStorage.getItem("phone");\n    form["email"].value = localStorage.getItem("email");\n    form["workGroupDesc"].value = localStorage.getItem("workGroupDesc");\n    form["publicGroupDesc"].value = localStorage.getItem("publicGroupDesc");\n    form["groupName"].value = localStorage.getItem("groupName");\n    form["alias"].value = localStorage.getItem("alias");\n    form["fullName"].value = localStorage.getItem("fullName");\n    form["post"].value = localStorage.getItem("post");\n\n    save.addEventListener("click", function (e) {\n        if (save.hasAttribute("disabled")) {\n            return;\n        }\n        localStorage.setItem("phone", phone);\n        localStorage.setItem("email", email);\n        localStorage.setItem("workGroupDesc", workGroupDesc);\n        localStorage.setItem("publicGroupDesc", publicGroupDesc);\n        localStorage.setItem("groupName", groupName);\n        localStorage.setItem("alias", alias);\n        localStorage.setItem("fullName", fullName);\n        localStorage.setItem("post", post);\n        localStorage.setItem("count", "1");\n    });\n\n    checkbox.onchange = function () {\n        console.log("hello");\n        if (checkbox.checked) {\n            textarea2.classList.add("input_show");\n            if (publicGroupDesc) {\n                send.removeAttribute("disabled");\n            } else {\n                send.setAttribute("disabled", "disabled");\n            }\n        } else {\n            textarea2.classList.remove("input_show");\n        }\n    };\n};\n\n//# sourceURL=webpack:///./src/scripts/js/validation.js?')},"./src/scripts/main.js":
/*!*****************************!*\
  !*** ./src/scripts/main.js ***!
  \*****************************/
/*! no static exports found */function(module,exports,__webpack_require__){"use strict";eval('\n\n__webpack_require__(/*! ./js/style */ "./src/scripts/js/style.js");\n\nvar _validation = __webpack_require__(/*! ./js/validation */ "./src/scripts/js/validation.js");\n\nvar _validation2 = _interopRequireDefault(_validation);\n\nvar _ajax = __webpack_require__(/*! ./js/ajax */ "./src/scripts/js/ajax.js");\n\nvar _ajax2 = _interopRequireDefault(_ajax);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// подключаем js\nwindow.addEventListener("load", function () {\n    (0, _validation2.default)();\n    (0, _ajax2.default)();\n}); // подключаем файл со сторонними стилями\n\n//# sourceURL=webpack:///./src/scripts/main.js?')}});