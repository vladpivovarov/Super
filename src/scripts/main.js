// подключаем файл со сторонними стилями
import "./js/style";

// подключаем js
import validation from "./js/validation";
import ajax from "./js/ajax";

document.addEventListener("DOMContentLoaded", function() {
    validation();
    ajax();
});