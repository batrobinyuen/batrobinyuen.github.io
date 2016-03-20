var main = function(){
    $(".overlay").css({
        left:$(".current").offset().left,
        width:$(".current").innerWidth()
    });

    $(".slider .nav > ul > li").mouseenter(
        function(event){
            $(".overlay").stop();
            var position = $(event.target).offset();
            $(".overlay").animate({
                left:position.left,
                width:$(event.target).innerWidth()
            }, 500)
        }
    );

    $(".nav").mouseleave(
        function(event){
            $(".overlay").stop().animate({
                left:$(".current").offset().left,
                width:$(".current").innerWidth()
            }, 750);
        }
    );
    
    window.onresize = function(event){
        $(".overlay").stop().animate({
            left:$(".current").offset().left,
            width:$(".current").innerWidth()
        }, 750);
    }
   
    $('.hover').on('touchstart', function(e) {
        e.preventDefault();
        $(this).toggleClass('hover_effect');
    });

    $(".nav-arrow").click(function(e){
        e.preventDefault();
        $(".content .nav ul").slideToggle("slow");
    });

    $(".news-arrow").click(function(e){
        e.preventDefault();
        $(".content .news ul").slideToggle("slow");
    });

    $("#menu-icon").tap(function(e){
        e.preventDefault();
        $(".slider .nav ul").slideToggle("slow");
        $(".logo").fadeToggle("slow");
        
    });
    
   $("#myCarousel").swiperight(function() {  
      $("#myCarousel").carousel('prev');  
    });  
   $("#myCarousel").swipeleft(function() {  
      $("#myCarousel").carousel('next');  
   });

    $(".ui-loader").hide();

};


$(document).ready(main);