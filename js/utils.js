$(document).ready(function () {

    if (hasConsole === 'false') {
        $('#console').css('display', 'none');
    }

    if (tipo === 'cliente') {
        $('#buttonCall').remove();
        $('#register').text('Acceda a la fila');
        if (screen.width>414) {
            $('#funcPanel').css('left', '360px');
        }

    }

});
