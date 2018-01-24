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

$(function() {
    jQuery(function($) {
        $('#cyr').on('keypress', function() {

            var that = this;
            setTimeout(function() {
                var res = /[^A-z ]/g.exec(that.value);
                that.value = that.value.replace(res, '');
            }, 0);


            $this = $(this);
            $maxLen = 3;
            // ограничение по длине
            if ($this.val().length < $maxLen)
                return alert('Введите больше 3х символов');

        });
    });
});

jQuery('body').on('click keypress', '.code_CVC', function(key) {
    $this = $(this);
    $maxLen = 2;
    // ограничение по длине
    if ($this.val().length > $maxLen)
        return false;
    // ограничение по символам
    if (key.charCode < 48 || key.charCode > 57)
        return false;
});