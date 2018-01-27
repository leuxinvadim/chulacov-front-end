$('body').on('click keypress', '.enter', function(key) {
    $this = $(this);
    $maxLen = 3;
    // ограничение по длине
    if ($this.val().length > $maxLen)
        return false;
    // ограничение по символам
    if (key.charCode < 48 || key.charCode > 57)
        return false;
});

// Удаляет символы, отличные от латиницы и пробелов
function OnInputOwner(input) {
    input.value = input.value.replace(/[^A-z\s]/g, '');
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

$('body').on('click keypress', '.code_CVC', function(key) {
    $this = $(this);
    $maxLen = 2;
    // ограничение по длине
    if ($this.val().length > $maxLen)
        return false;
    // ограничение по символам
    if (key.charCode < 48 || key.charCode > 57)
        return false;
});


function sendform() {

    if (document.forms[0].fname.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname.focus();
        return false
    }

    if (document.forms[0].fname_1.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname_1.focus();
        return false
    }

    if (document.forms[0].fname_2.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname_2.focus();
        return false
    }

    if (document.forms[0].fname_3.value == "") {
        alert('Пожалуйста, введите Номер карты');
        document.card_form.fname_3.focus();
        return false
    }

    if (document.forms[0].card_name.value == "") {
        alert('Пожалуйста, введите Держателя карты');
        document.card_form.card_name.focus();
        return false
    }

    if (document.forms[0].CVC.value == "") {
        alert('Пожалуйста, введите код CVV/CVC2');
        document.card_form.CVC.focus();
        return false
    }

    return true;
}

