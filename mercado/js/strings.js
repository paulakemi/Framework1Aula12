$(document).ready(function() {
    $('#boraenviar').click(function(){
        var texto = $('#texto').val();
        if (texto.length < 5 | texto.indexOf(' ') < 0){
            alert("Nome inválido, coloque o sobrenome");
        }else{

            var patt1 = /\s\w*/;
            var result = texto.match(patt1);


            alert(`Sr(a). ${result}` )
        }
    })
})