$(document).ready(function () {
    setInterval(function(){
        if($("#i1").is(":visible")) {
            $("#i1").hide();
            $("#i2").show();
        }else if ($("#i2").is(":visible")){
            $("#i2").hide();
            $("#i3").show();
        } else if ($("#i3").is(":visible")){
            $("#i3").hide();
            $("#i4").show();
        }else if ($("#i4").is(":visible")){
            $("#i4").hide();
            $("#i1").show();
        }
    },1500);
    
})