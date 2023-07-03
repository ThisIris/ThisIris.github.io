
$(document).ready(function() {
                  
$('.customer-lvl').removeClass('open');
$('.firstNavLayer').css('display' , 'none');

                  
  $('.sub-nav > a').click(function() {
    if ($(this).parent('.sub-nav').hasClass('open')) {
      $(this).parent('.sub-nav').removeClass('open');
      $(this).parent('.sub-nav').children('ul').slideUp("slow");
    } else {
      $(this).parent('.sub-nav').addClass('open');
      $(this).parent('.sub-nav').children('ul').slideDown("slow");
    };
  });
});



