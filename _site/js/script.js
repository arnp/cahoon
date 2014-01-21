$(document).ready(function(){       

  var scroll_pos = 0;
  $(document).scroll(function() { 
    scroll_pos = $(this).scrollTop();
    if(scroll_pos > 210) {
      $(".sidebar").stop().animate({opacity: '.3'},'slow');
    } else {
      $(".sidebar").stop().animate({opacity: '1'},100);
    }

    $('.sidebar').on('mouseover', function () {
      $(".sidebar").stop().animate({opacity: '1'},100); 
    });

  });

  $('.scroll').click(function(){
    $("html, body").animate({ scrollTop: 0 }, "fast");
    return false;
  });

/*
 $('.logo').on('mouseover', function () {
  $(".logo").airport(['Ravi','Robins']);
});*/

});








