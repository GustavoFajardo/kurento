$(document).ready(function (){

if (hasConsole === 'false'){
$('#console').css('display','none');
}

if(tipo === 'cliente'){
$('#buttonCall').remove();
$('#register').text('Acceda a la fila');
}

});
