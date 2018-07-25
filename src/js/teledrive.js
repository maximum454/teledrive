//= partials/jquery.min.js
//= partials/jquery.mask.min.js
//= partials/jquery.formstyler.js

$(function () {
    $('input[type=checkbox], select').styler();
    $('#phone, input[type=tel]').mask('+0 (000) 000-00-00');
});

