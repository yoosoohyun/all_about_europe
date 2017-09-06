/**
 * Created by yoosoohyun on 2017. 8. 21..
 */

$(function(){

  $('.main-hover').on('mouseenter', function(){

    var indexNumber = $(this).index('.main-hover')
    $('.main-wrap').removeClass('on');
    $(this).children('.main-wrap').addClass('on');

    $('.main-bg').removeClass('on');
    $('.main-bg').eq(indexNumber).addClass('on');

  });

});










