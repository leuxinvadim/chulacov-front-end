//Core
function cutCharacters(input, regexp, maxCharacters) {
    input.value = input.value.replace(regexp(), '');
    if (maxCharacters) {
        input.value = input.value.slice(0, maxCharacters);
    }
}

function cutCharatersExcept(regexp, string) {
    return string.replace(regexp(), '')
}

function cutToLength(lenght, string) {
    return string.slice(0, lenght)
}

function partial() {
    var args = [].slice.call(arguments);
    var funct = args.shift();
    return function () {
        var newArgs = [].slice.call(arguments);
        newArgs.map(function (t) {
            args.push(t)
        });
        console.log(newArgs);
        return funct.apply(null, args)
    }
}

//Infrastructure
function exceptNumbers() {
    return /[^\d]/g;
}

function exceptLatinCharactersAndSpace() {
    return /[^A-z\s]/g;
}

//User Methods
function onInputCardNumber(input, except, maxLenght) {
    input.value = except(input.value);
    input.value = maxLenght(input.value);
}

// Проверяет длину введенных данных
function OnChangeOwner(input) {
    var maxLen = 3;
    if (input.value.length < maxLen)
        return alert(`Введите больше ${maxLen} символов`);
}

// Проверяет длину введенных  для CVC кода
function OnChangeCVC(input) {
    var maxLen = 3;
    if (input.value.length < maxLen)
        return alert('Введите 3 символа');
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

