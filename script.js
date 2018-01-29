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
    var maxLen = 4;
    if (input.value.length < maxLen)
        return alert(`Введите 4 символоа`);
}

// Проверяет длину введенных CVC данных
function OnChangeCVC(input) {
    var maxLen = 3;
    if (input.value.length < maxLen)
        return alert('Введите 3 символа');
}

// Проверяет длину введенных данных Держателя карты
function OnChangeOwner2(input) {
    var maxLen = 4;
    if (input.value.length < maxLen)
        return alert('Введите минимум 4 символа');
}


function sendform(form) {

    var valid = true;
    var elems = document.forms[0].elements;
    for (var i = 0; i < document.forms[0].length; i++) {
        if (elems[i].getAttribute('type') == 'text' ||
            elems[i].tagName == 'TEXTAREA') {
            if (elems[i].value.length == '') {
                elems[i].style.border = '1px solid red';
                valid = false;
            }
        }
    }

    if (!valid) {
        alert('Заполните выделенные поля');
        return false;
    }
    else return true;
}
    window.onload = function () {
      document.forms[0].onmouseover = function () {
          var elems = document.forms[0].elements;
          for (var i=0; i<elems.length; i++)
              if (elems[i].style.border == '1px solid red')
                  elems[i].style.border = '';
      };
    };



