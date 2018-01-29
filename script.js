//Удаляет символы, кроме совпадений с переданным в функции регулярным выражением
function cutCharatersExcept(regexp, string) {
    return string.replace(regexp(), '')
}

// Удаляет из конца строки символы, длина которых превышает переданный лимит
function cutToLength(length, string) {
    return string.slice(0, length)
}

// Обработчик. Принимает первым аргументом input, а остальными - функции для вызова
function onInput() {
    var args = [].slice.call(arguments);
    var input = args.shift();
    args.map(function (func) {
        input.value = func(input.value);
    });
}

//Infrastructure
function exceptNumbers() {
    return /[^\d]/g;
}

function exceptLatinCharactersAndSpace() {
    return /[^A-z\s]/g;
}

//User Methods

// Проверяет длину введенных данных
function OnChangeOwner(input) {
    var maxLen = 3;
    if (input.value.length < maxLen)
        return alert('Введите больше ${maxLen} символов');
    document.card_form.fname.focus();
}

function sendform(form) {
    if (form.fname.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname.focus();
        return false
    }

    if (form.fname_1.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname_1.focus();
        return false
    }

    if (form.fname_2.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname_2.focus();
        return false
    }

    if (form.fname_3.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname_3.focus();
        return false
    }

    if (form.card_name.value == "") {
        alert('Пожалуйста, введите Держателя карты');
        document.card_form.card_name.focus();
        return false
    }

    if (form.CVC.value == "") {
        alert('Пожалуйста, введите код CVV/CVC2');
        document.card_form.CVC.focus();
        return false
    }

    return true;
}

