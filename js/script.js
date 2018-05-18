(function($){
    
    if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
};
    
//===================My Photo Position=============

    $(window).resize(function(){
        if ($(window).width() < 314) {
                    $("#imag").css({
                    "top": "250px",
                    "left": "14%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 385) {
                    $("#imag").css({
                    "top": "200px",
                    "left": "18%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 460) {
                    $("#imag").css({
                    "top": "180px",
                    "left": "28%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 719) {
                    $("#imag").css({
                    "top": "125px",
                    "left": "30%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 820) {
                    $("#imag").css({
                    "top": "100px",
                    "left": "5%",
                    "position": "absolute",
                    });
                }else {
                    $("#imag").css({
                    "top": "50px",
                    });
                };
    
    });
    if ($(window).width() < 314) {
                    $("#imag").css({
                    "top": "250px",
                    "left": "14%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 385) {
                    $("#imag").css({
                    "top": "200px",
                    "left": "18%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 460) {
                    $("#imag").css({
                    "top": "180px",
                    "left": "28%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 719) {
                    $("#imag").css({
                    "top": "125px",
                    "left": "30%",
                    "position": "absolute",
                    });
                }else if($(window).width() < 820) {
                    $("#imag").css({
                    "top": "100px",
                    "left": "5%",
                    "position": "absolute",
                    });
                }else {
                    $("#imag").css({
                    "top": "50px",
                    });
                };
    

//....................Left Content.....................
    $(window).resize(function() {
                if ($(window).width() < 790) {
                    $(".left_content").css({
                    "padding-top": "200px",
                    
                    });
                }else {
                    $(".left_content").css({
                        "padding-top": "100px",
                    });
                };
     });
    
    
    if ($(window).width() < 790) {
                    $(".left_content").css({
                    "padding-top": "200px",
                    
                    });
                }else {
                    $(".left_content").css({
                        "padding-top": "100px",
                    });
                };
    
    
}) (jQuery);