// подключаем файл со сторонними стилями
import "./js/style";

// подключаем js
import validation from "./js/validation";
import ajax from "./js/ajax";

window.addEventListener("load", function() {
    validation();
    ajax();
});