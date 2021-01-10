


$(function(){
    $("#comment").click(function(){
        $(".comment-item").slideToggle(1000);
    })
})


$(function(){
    $("#mob-button").click(function(){
        $(".sub-menu").slideToggle(1000);
    })
})
$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 2000);
    });
});
var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


$(document).ready(function (){
    $("#click").click(function (){
        $('html, body').animate({
            scrollTop: $("#head").offset().top
        }, 2000);
    });
});
