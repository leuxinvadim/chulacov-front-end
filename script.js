$('body').on('click keypress', '.enter', function(key) {
    $this = $(this);
    $maxLen = 3;
    // ограничение по длине
    if ($this.val().length > $maxLen)
        return false;
    // ограничение по вводу нуля в начале
    if ($this.val().length == 0 && key.charCode == 48)
        return false;
    // ограничение по символам
    if (key.charCode < 48 || key.charCode > 57)
        return false;
});