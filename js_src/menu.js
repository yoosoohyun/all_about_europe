/**
 * Created by Administrator on 2017-08-24.
 */



$(function(){
  $('.menu-title-item').on('mouseenter', function(){
    $('.menu-schedule').addClass('on');
    $('.menu-landmark').removeClass('on');
  });

  $('.menu-title-item').eq(0).on('mouseenter', function(){
    $('.menu-schedule').removeClass('on');
    $('.menu-landmark').addClass('on');
  });

  $('.menu-title-item').eq(2).on('mouseenter', function(){
    $('.menu-schedule').removeClass('on');
    $('.menu-landmark').removeClass('on');
  });

});


//$(function(){
//  $('.menu-title-item').on('mouseenter', function(){
//    $('.menu-schedule').addClass('on');
//    $('.menu-landmark').removeClass('on');
//  });
//
//  $('.menu-title-item').eq(1).on('mouseenter', function(){
//    $('.menu-schedule').removeClass('on');
//    $('.menu-landmark').addClass('on');
//  });
//
//  $('.menu-title-item').eq(2).on('mouseenter', function(){
//    $('.menu-schedule').removeClass('on');
//    $('.menu-landmark').removeClass('on');
//  });
//
//});