/**
 * Created by Administrator on 2017-08-31.
 */


// ���̵�� ����
$(function(){

  $('.nav-width').on('mouseenter', function(){

    $(this).children('.nav-width-pd').addClass('on');
    $(this).children('.nav-width-pd').children('.nav-name').addClass('on');

  });

  $('.nav-width').on('mouseleave', function(){

    $(this).children('.nav-width-pd').removeClass('on');
    $(this).children('.nav-width-pd').children('.nav-name').removeClass('on');

  });




// ���̵�� Ŭ���� ��ũ�� �̵�
  $('.nav-name').on('click', function(e){

    e.preventDefault();

    var href = $(this).attr('href');

    var scrollPosition = $(href).offset().top;

    $('body').stop().animate({
      scrollTop : scrollPosition
    });

  });



// �۾� �սǵս�

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

