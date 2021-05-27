


function calculaSacolas(divisao, total)
{
    return Math.ceil(total/divisao);
}


$('button').on("click", function(){
    alert("sdfdsf");
    var qtItemSeco = $("#valor1a").val();
    var TotalItemSeco = $("#valor1b").val();
    var resItemSeco = calculaSacolas(qtItemSeco, TotalItemSeco);

    var qtItemMolhado = $("#valor2a").val();
    var TotalItemMolhado = $("#valor2b").val();
    var resItemMolhado = calculaSacolas(qtItemMolhado, TotalItemMolhado);

    var qtItemFragil = $("#valor3a").val();
    var TotalItemFragil = $("#valor3b").val();
    var resItemFragil = calculaSacolas(qtItemFragil, TotalItemFragil);



    if (qtItemSeco == "" | qtItemSeco <= 0 | qtItemSeco == null)
    {
        alert("aaaa");
        //formatError("#alerta1a");
        formatError("#valor1a");
        
    }
    if (TotalItemSeco == "") {
        formatError("#valor1b");
    }
    if (qtItemMolhado == "") {
        formatError("#valor2a");
    }
    if (TotalItemMolhado == "") {
        formatError("#valor2b");
    }
    if (qtItemFragil == "") {
        formatError("#valor3a");
    }
    if (TotalItemFragil == "") {
        formatError("#valor3b");
    }

});

function formatError(divName)
{
    $(divName).val("Preencha o campo corretamente.")
        .css({
            color: "white",
            border: "3px solid black",
            backgroundColor: "red",
        });
}

function calcular()
{

    var qtItemSeco = document.getElementById("valor1a").value;
    var TotalItemSeco = document.getElementById("valor1b").value;
    var resItemSeco = calculaSacolas(qtItemSeco, TotalItemSeco);

    var qtItemMolhado = document.getElementById("valor2a").value;
    var TotalItemMolhado = document.getElementById("valor2b").value;
    var resItemMolhado = calculaSacolas(qtItemMolhado, TotalItemMolhado);

    var qtItemFragil = document.getElementById("valor3a").value;
    var TotalItemFragil = document.getElementById("valor3b").value;
    var resItemFragil = calculaSacolas(qtItemFragil, TotalItemFragil);

    var msg = "Quantidade de sacolas que o cliente precisa é de:\n" +
        "Itens Seco: " + TotalItemSeco + ", divididos em: " + resItemSeco + " Sacolas.\n" +
    "Itens Molhados: " + TotalItemMolhado + ", divididos em: " + resItemMolhado + " Sacolas.\n" +
    "Itens Seco: " + TotalItemFragil + ", divididos em: " + resItemFragil + " Sacolas.";

    alert(msg);
}

function clearHover(text)
{
    var secoText = document.getElementById("hide1");
    var moladoText = document.getElementById("hide2");
    var fragilText = document.getElementById("hide3");

    if (text == "fragil")
        fragilText.style.backgroundColor = "transparent";
    else if (text == "molhado")
        moladoText.style.backgroundColor = "transparent";
    else if (text == "seco")
        secoText.style.backgroundColor = "transparent";
    
}

function setHover(text)
{
    var secoText = document.getElementById("hide1");
    var moladoText = document.getElementById("hide2");
    var fragilText = document.getElementById("hide3");

    if(text == "fragil")
        fragilText.style.backgroundColor = "darkBlue";
    else if (text == "molhado")
        moladoText.style.backgroundColor = "darkBlue";
    else if (text == "seco")
        secoText.style.backgroundColor = "darkBlue";
}





$(function() {
    $("#valor1a").focus(function(){
        $("#valor1a").css("background-color", "black");
        $("#valor1a").css("color", "white");
        $(this).val(this.value.replace(/\D/g, ''));

    });

    $("#valor1a").blur(function(){
        $("#valor1a").css("background-color", "white");
        $("#valor1a").css("color", "black");
        $(this).val(this.value.replace(/\D/g, ''));

    });
    
    $("#valor1b").focus(function(){
        $("#valor1b").css("background-color", "black");
        $("#valor1b").css("color", "white");
        $(this).val(this.value.replace(/\D/g, ''));

    });

    $("#valor1b").blur(function(){
        $("#valor1b").css("background-color", "white");
        $("#valor1b").css("color", "black");
        $(this).val(this.value.replace(/\D/g, ''));

    });
        
    $("#valor2a").focus(function(){
        $("#valor2a").css("background-color", "black");
        $("#valor2a").css("color", "white");
        $(this).val(this.value.replace(/\D/g, ''));

    });

    $("#valor2a").blur(function(){
        $("#valor2a").css("background-color", "white");
        $("#valor2a").css("color", "black");
        $(this).val(this.value.replace(/\D/g, ''));

    });
        
    $("#valor2b").focus(function(){
        $("#valor2b").css("background-color", "black");
        $("#valor2b").css("color", "white");
        $(this).val(this.value.replace(/\D/g, ''));

    });

    $("#valor2b").blur(function(){
        $("#valor2b").css("background-color", "white");
        $("#valor2b").css("color", "black");
        $(this).val(this.value.replace(/\D/g, ''));

    });
        
    $("#valor3a").focus(function(){
        $("#valor3a").css("background-color", "black");
        $("#valor3a").css("color", "white");
        $(this).val(this.value.replace(/\D/g, ''));

    });

    $("#valor3a").blur(function(){
        $("#valor3a").css("background-color", "white");
        $("#valor3a").css("color", "black");
        $(this).val(this.value.replace(/\D/g, ''));

    });
        
    $("#valor3b").focus(function(){
        $("#valor3b").css("background-color", "black");
        $("#valor3b").css("color", "white");
        $(this).val(this.value.replace(/\D/g, ''));

    });

    $("#valor3b").blur(function(){
        $("#valor3b").css("background-color", "white");
        $("#valor3b").css("color", "black");
        $(this).val(this.value.replace(/\D/g, ''));

    });
});

