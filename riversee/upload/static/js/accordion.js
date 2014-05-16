/*jQuery time*/
$(document).ready(function(){
  $("#accordian h3").click(function(){
    //slide up all the link lists
    $("#accordian ul ul").slideUp(300);
    //slide down the link list below the h3 clicked - only if its closed
    if(!$(this).next().is(":visible"))
    {
      $(this).next().slideDown(300);
    }
  })
})

$(document).ready(function(){
  
  var top = $('.top');
  var left = $('.left');
  var right = $('.right');
  var bottom = $('.bottom');

  $(top).click(function(){
    $(left).removeClass('active-left');
    $(right).removeClass('active-right');
    $(bottom).removeClass('active-bottom');
    $(top).addClass('active-top');
  });

  $(left).click(function(){
    $(top).removeClass('active-top');
    $(right).removeClass('active-right');
    $(bottom).removeClass('active-bottom');
    $(left).addClass('active-left');
  });

   $(bottom).click(function(){
    $(top).removeClass('active-top');
    $(right).removeClass('active-right');
    $(left).removeClass('active-left');
    $(bottom).addClass('active-bottom');
  });

   $(right).click(function(){
    $(top).removeClass('active-top');
    $(bottom).removeClass('active-bottom');
    $(left).removeClass('active-left');
    $(right).addClass('active-right');
  });

   $('#home-button').click(function(){
    $(top).removeClass('active-top');
    $(bottom).removeClass('active-bottom');
    $(left).removeClass('active-left');
    $(right).removeClass('active-right');
  });
   
});