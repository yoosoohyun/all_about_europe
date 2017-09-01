/**
 * Created by Administrator on 2017-09-01.
 */
$(function(){
  $('.nav-width2').on('mouseenter', function(){

    $(this).children('.nav-width2-pd').addClass('on');
    $(this).children('.nav-width2-pd').children('.nav-name').addClass('on');

  });

  $('.nav-width2').on('mouseleave', function(){

    $(this).children('.nav-width2-pd').removeClass('on');
    $(this).children('.nav-width2-pd').children('.nav-name').removeClass('on');

  });




// 사이드바 클릭시 스크롤 이동
  $('.nav-name').on('click', function(e){

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition = $(href).offset().top;

    $('body').stop().animate({
      scrollTop : scrollPosition
    });

  });
});