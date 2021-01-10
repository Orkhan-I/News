var owl = $('.owl-carousel');
owl.owlCarousel({
    items:1,
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true,dots:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[3000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
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



$(function(){

    $(window).on("scroll",function(){
        var scrollPos = $(this).scrollTop(),
            headerHeight = $('#head').height();

        if(scrollPos > headerHeight){
            $(".sub-menu").css("position","fixed");
        }
        else {
            $(".sub-menu").css("position","absolute");
        }


        })
    })









