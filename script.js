function cutCharactersExceptNumbers(input, maxCharacters) {
    input.value = input.value.replace(/[^\d]/g, '');
    input.value = input.value.slice(0, maxCharacters);
}

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

function sendform(form) {

    console.log(form);

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

