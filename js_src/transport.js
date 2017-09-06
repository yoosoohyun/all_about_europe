/**
 * Created by Administrator on 2017-08-31.
 */


// 사이드바 구현
$(function(){

  $('.nav-width').on('mouseenter', function(){

    $(this).children('.nav-width-pd').addClass('on');
    $(this).children('.nav-width-pd').children('.nav-name').addClass('on');

  });

  $('.nav-width').on('mouseleave', function(){

    $(this).children('.nav-width-pd').removeClass('on');
    $(this).children('.nav-width-pd').children('.nav-name').removeClass('on');

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



// 글씨 둥실둥실

  var i;
  var limit = 100;

  function scroll(){

    $('.transport-text').css({
      "transform":"translate3d(0," + - (4 * (i / limit)) + "px,0)"
    });
  }

  $(window).on('scroll', function(){

    i = $(window).scrollTop();

    scroll();

  });


});

