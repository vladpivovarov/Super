export default function () {

    var form = document.getElementById("form");

    var phone = form["phone"];
    var email = form["email"];
    var workGroupDesc = form["workGroupDesc"];
    var publicGroupDesc = form["publicGroupDesc"];
    var groupName = form["groupName"];
    var alias = form["alias"];
    var fullName = form["fullName"];
    var post = form["post"];


    form.addEventListener("submit", function (e) {
        e.preventDefault();

        if (phone.value && email.value && workGroupDesc.value && groupName.value && alias.value && fullName.value && post.value) {
            if (!phone.classList.contains("input_alert") &&
                !email.classList.contains("input_alert") &&
                !workGroupDesc.classList.contains("input_alert") &&
                !groupName.classList.contains("input_alert") &&
                !alias.classList.contains("input_alert") &&
                !fullName.classList.contains("input_alert") &&
                !post.classList.contains("input_alert")
            ) {
                var data = {
                    phone: phone.value,
                    email: email.value,
                    workGroupDesc: workGroupDesc.value,
                    publicGroupDesc: publicGroupDesc.value,
                    groupName: groupName.value,
                    alias: alias.value,
                    fullName: fullName.value,
                    post: post.value
                }

                var xhr = new XMLHttpRequest();
                xhr.open("POST", "", true);
                xhr.setRequestHeader("Content-Type", "application/json");
                xhr.onload = function (e) {
                    try {
                        console.log(JSON.parse(xhr.responseText));
                    } catch (e) {
                        console.log("Извините, в данных ошибка");
                    }
                }
                xhr.send(JSON.stringify(data));
                console.log(data);

                form.reset();

            }else {
                return false;
            }
        }
    });
}