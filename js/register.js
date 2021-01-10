
$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 2000);
    });
});




$(function(){
    $("#mob-button").click(function(){
        $(".sub-menu").slideToggle(1000);
    })
})







$("#login").click(function(){
    $("#account").show();
});



$(function(){
    $("#register").click(function(){
        $("#register-page").show();
    })


$("#register").click(function(){
    $("#account").hide();
    $("#register").css('background-color','blue');
    $("#login").css('background-color','white');
    $("#login-b").css('color','white');
    $("#login-a").css('color','blue');
});

$("#login").click(function(){
    $("#register-page").hide();
    $("#register").css('background-color','white');
    $("#login").css('background-color','blue');
    $("#login-a").css('color','white');
    $("#login-b").css('color','blue');
});


})



