// MENU MOBILE
$(function() {
  $('.main_header_content_menu_mobile_obj').on('click', function() {
    $('.main_header_content_menu_mobile_sub').toggleClass('ds_none');
    $(this).toggleClass('main_header_content_menu_mobile_obj_active');
  });
});

// SMOTH SCROLL
var $doc = $('html, body');
$('.smothScroll').click(function(){
  $doc.animate({
    scrollTop:$($.attr(this,'href')).offset().top
  }, 700);
  return false;
});

// LOCAL VARIABLES
var _containerBtn = $(".btn_back");

// BACK TO TOP ACTION
$(window).scroll(function(){
  if($(window).scrollTop() > 400){
    _containerBtn.fadeIn();
  }else{
    _containerBtn.fadeOut();
  }
});
