// Home-screen animate
//---------------------------------------------
$(document).ready(function(){
    $(".s-name, .r-name").css({
        display: "block"
    });

    $(".tag-line, .s-menu, .r-discription, .arrow-down, .full-name, .p-name").css({
        visibility: "visible"
    });

    $(".full-name").css({
        opacity: 0
    });
    
    $(".tag-line").css({
        opacity: 0
    });
    
    $(".s-menu").css({
        opacity: 0
    });

    
    $(".light-screen").mouseenter(function(){
    
        $(this).find(".s-name").animate({
            opacity: 0
        }, 300);
        
        $(this).find(".tag-line").stop(true).delay(200).animate({
            opacity: 1,
            top: "0px"
        }, 200);

         $(this).find(".full-name").stop(true).delay(200).animate({
            opacity: 1,
            top: "0px"
        }, 400);
        
        $(this).find(".s-menu").stop(true).delay(200).animate({
            opacity: 1,
            top: "0px"
        }, 400);
        
    });
    $(".light-screen").mouseleave(function(){
    
        $(this).find(".s-name").animate({
            opacity: 1,
        }, 500);
        
        $(this).find(".tag-line").stop(true).animate({
            opacity: 0,
            top: "10px"
        }, 200);

        $(this).find(".full-name").stop(true).animate({
            opacity: 0,
            top: "-20px"
        }, 200);
        
        $(this).find(".s-menu").stop(true).animate({
            opacity: 0,
            top: "20px"
        }, 200);
        
        
    });

    var learning = $('#learning');
    var submit = $('#story-here');
    var wall = $('#story-wall');

$(submit).click(function () {
    if ($(learning).hasClass("active-learning")) {
        $(learning).removeClass('active-learning');
        $('#video-explain').stop(true).delay(500).animate({
            opacity: '0'
        }, 300);
        document.getElementById('video-explain').style.display = "none";
    } else {}
});

$(wall).click(function () {
    if ($(learning).hasClass("active-learning")) {
        $(learning).removeClass('active-learning');
        $('#video-explain').stop(true).delay(500).animate({
            opacity: '0'
        }, 300);
        document.getElementById('video-explain').style.display = "none";
    } else {}
});

$(learning).click(function () {
    if ($(learning).hasClass("active-learning")) {
        $(learning).removeClass('active-learning');
        $('#video-explain').stop(true).delay(500).animate({
            opacity: '0'
        }, 300);
        document.getElementById('video-explain').style.display = "none";
    } else {
        $(learning).addClass('active-learning');
        document.getElementById('video-explain').style.display = "block";
        $('#video-explain').stop(true).animate({
            opacity: '1'
        }, 300);
    }
});
    
});

// Darkscreen animate
//---------------------------------------------


$(document).ready(function(){

	 $(".r-discription, .p-name, .arrow-down").css({
        visibility: "visible"
    });
     
     $(".r-description").css({
        opacity: 0
    });

     $(".p-name").css({
        opacity: 0
    });
    
    $(".arrow-down").css({
        opacity: 0
    });
    
    
    $(".blue").mouseenter(function(){

    	$(this).find(".r-name").animate({
            opacity: 0
        }, 300);
        
        $(this).find(".r-description").stop(true).delay(200).animate({
            opacity: 1,
            top: "0px"
        }, 400);

        $(this).find(".arrow-down").stop(true).delay(200).animate({
            opacity: 1,
            top: "60px"
        }, 300);
        
        $(this).find(".p-name").stop(true).delay(200).animate({
            opacity: 1,
            top: "-30px"
        }, 400);
        
    });
    $(".blue").mouseleave(function(){
    
        $(this).find(".r-name").animate({
            opacity: 1
        }, 500);
        
        $(this).find(".r-description").stop(true).animate({
            opacity: 0,
            top: "20px"
        }, 200);

        $(this).find(".arrow-down").stop(true).animate({
            opacity: 0,
            top: "90px"
        }, 200);
        
        $(this).find(".p-name").stop(true).animate({
            opacity: 0,
            top: "-50px"
        }, 200);
        
    });
});

//--- Home Screen Size (Not sure if necessary)


$(document).ready(function () {
    function viewport_height() {
        var sub = $('.sub');
        var window_width = $(window).width();
        var window_height = $(window).height();
        $('#big-section').width(window_width * 3);
        $('#content').height(window_height);
        $('.section').height(window_height);
        $(sub).width(window_width);
        $(sub).height(window_height);
        $('#section4').css({
            left: (window_width) + "px"
        });
        $('#home').css({
            left: (window_width) + "px"
        });
        $('.story-content').css({
        	height: (window_height * .7) + "px"
        });
    }

    viewport_height();

    $(window).resize(function () {
        viewport_height();
    });

    $('#navigation').css({
        display: 'none'
    });

    $('.border-nav a').css({
        height: '0px'
    });

    $('#arrow').click(function () {
        document.getElementById('navigation').style.display = "block";
        $('.border-nav a').stop(true).delay(500).animate({
            height: '40px'
        }, 300);
    });

    $('#story-wall').click(function () {
        document.getElementById('navigation').style.display = "block";
        $('.border-nav a').stop(true).delay(500).animate({
            height: '40px'
        }, 300);
    });

    $('#home-button').click(function () {
        document.getElementById('navigation').style.display = "none";
        $('.border-nav a').stop(true).delay(500).animate({
            height: '0px'
        }, 300);
    });

});

jQuery(document).ready(function ($) {
  
  var $container = $('.grid').masonry({
    columnWidth: 280,
    itemSelector: '.item',
    isFitWidth: true
  });
  
  var arrGreen = new Array($('.i1'),$('.i3'),$('.i6'),$('.i7'));
  var arrRed = new Array($('.i2'),$('.i4'),$('.i5'),$('.i8'), $('.i9'),$('.i10'),$('.i11'),$('.i12'), $('.i13'),$('.i14'),$('.i15'));
  
  $('input').click(function () {
    $('.item').removeClass('expand');
    
    if ($('.green').is(':checked')) {
      $container.masonry('hide', arrRed);
      $(arrGreen).each(function (index, element) {
        element.show();
      });
      $container.masonry();
    } else if ($('.red').is(':checked')) {
      $container.masonry('hide', arrGreen);
      $(arrRed).each(function (index, element) {
        element.show();
      });
      $container.masonry();
    } else if ($('.all').is(':checked')) {
      $(arrGreen).each(function (index, element) {
        element.show();
      });
      $(arrRed).each(function (index, element) {
        element.show();
      });
      $container.masonry();
    }
  });
  
  $('.item').click(function () {
    $(this).toggleClass('expand');
  });
  
});

// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36  location.reload();

 










