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