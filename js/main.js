/**
 * Created by Administrator on 2017-08-30.
 */



$(function(){

  var scrollAmount = 0;
  $(window).on('mousewheel', function(e){

    //console.log(e.originalEvent.wheelDelta);

    scrollAmount += e.originalEvent.wheelDelta;

    if(scrollAmount >= 0){
      scrollAmount = 0;
    }

    //console.log( $('.land-wrap:last-child').offset().left );



    if( scrollAmount <= -3000 ){
      scrollAmount = -3000;
    }

    //console.log(scrollAmount);


    $('.land-wrap').css({
      transform:'translateX(' + scrollAmount + 'px)'
    });

  });


});
/**
 * Created by yoosoohyun on 2017. 8. 21..
 */

$(function(){

  $('.main-hover').on('mouseenter', function(){

    $('.main-wrap').removeClass('on');
    $(this).children('.main-wrap').addClass('on');

    var country = $(this).find('.main-text-name').text().toLowerCase();

    $('.main-inner-box').removeClass('germany france italy swiss netherlands czech').addClass(country);

  });

});











/**
 * Created by Administrator on 2017-08-24.
 */

//$(function(){
//
//  $('.menu-title-link').on('mouseenter', function(){
//    $('.menu-landmark').removeClass('on');
//
//    $(this).on('mouseenter', function(){
//      $('.menu-schedule').addClass('on');
//    });
//
//  });
//
//
//  $('.menu-title-item').on('mouseenter', function(){
//    $('.menu-schedule').removeClass('on');
//
//    $(this).on('mouseenter', function(){
//      $('.menu-landmark').addClass('on');
//    });
//
//  });
//
//});



//
//$(function(){
//  $('.menu-title-item').on('mouseenter', function(){
//    $('.menu-schedule').addClass('on');
//    $('.menu-landmark').removeClass('on');
//  });
//
//  $('.menu-title-item').eq(0).on('mouseenter', function(){
//    $('.menu-schedule').removeClass('on');
//    $('.menu-landmark').addClass('on');
//  });
//
//  $('.menu-title-item').eq(2).on('mouseenter', function(){
//    $('.menu-schedule').removeClass('on');
//    $('.menu-landmark').removeClass('on');
//  });
//
//
//});


//$(function(){
//  $('.menu-title-item').on('mouseenter', function(){
//
//    //$('menu-schedule').removeClass('on');
//
//    $('.menu-landmark').addClass('on');
//  });
//
//  $('.menu-title-item').on('mouseleave', function(){
//    $('.menu-landmark').removeClass('on');
//  });
//
//  $('.menu-title-item').children().on('mouseenter', function(){
//    $('.menu-landmark').removeClass('on');
//    $('.menu-schedule').addClass('on');
//  });
//});
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

  //var i;
  //var limit = 1000;
  //
  //function scroll(){
  //
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (2 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (4 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (6 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (8 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (10 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (12 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (14 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (16 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (18 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (20 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (22 * (i / limit)) + "px,0)"
  //  });
  //  $('.transport-text').css({
  //    "transform":"translate3d(0," + (24 * (i / limit)) + "px,0)"
  //  });
  //
  //
  //
  //
  //
  //
  //  //$('.transport-text').css({
  //  //
  //  //  "transform":"translate3d(0," + (30 * (i / limit)) + "px,0)"
  //  //
  //  //});
  //
  //
  //
  //
  //}
  //
  //$(window).on('scroll', function(){
  //
  //  i = $(window).scrollTop();
  //
  //
  //  scroll();
  //
  //});
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRtYXJrLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiLCJzY2hlZHVsZS5qcyIsInRyYW5zcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNsRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzAuXHJcbiAqL1xyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gIHZhciBzY3JvbGxBbW91bnQgPSAwO1xyXG4gICQod2luZG93KS5vbignbW91c2V3aGVlbCcsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIC8vY29uc29sZS5sb2coZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGEpO1xyXG5cclxuICAgIHNjcm9sbEFtb3VudCArPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICBpZihzY3JvbGxBbW91bnQgPj0gMCl7XHJcbiAgICAgIHNjcm9sbEFtb3VudCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyggJCgnLmxhbmQtd3JhcDpsYXN0LWNoaWxkJykub2Zmc2V0KCkubGVmdCApO1xyXG5cclxuXHJcblxyXG4gICAgaWYoIHNjcm9sbEFtb3VudCA8PSAtMzAwMCApe1xyXG4gICAgICBzY3JvbGxBbW91bnQgPSAtMzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKHNjcm9sbEFtb3VudCk7XHJcblxyXG5cclxuICAgICQoJy5sYW5kLXdyYXAnKS5jc3Moe1xyXG4gICAgICB0cmFuc2Zvcm06J3RyYW5zbGF0ZVgoJyArIHNjcm9sbEFtb3VudCArICdweCknXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeW9vc29vaHl1biBvbiAyMDE3LiA4LiAyMS4uXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcubWFpbi1ob3ZlcicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcubWFpbi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWFpbi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgdmFyIGNvdW50cnkgPSAkKHRoaXMpLmZpbmQoJy5tYWluLXRleHQtbmFtZScpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICQoJy5tYWluLWlubmVyLWJveCcpLnJlbW92ZUNsYXNzKCdnZXJtYW55IGZyYW5jZSBpdGFseSBzd2lzcyBuZXRoZXJsYW5kcyBjemVjaCcpLmFkZENsYXNzKGNvdW50cnkpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI0LlxyXG4gKi9cclxuXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy9cclxuLy8gICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gICAgfSk7XHJcbi8vXHJcbi8vICB9KTtcclxuLy9cclxuLy9cclxuLy8gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICQoJy5tZW51LXNjaGVkdWxlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vXHJcbi8vICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAgICQoJy5tZW51LWxhbmRtYXJrJykuYWRkQ2xhc3MoJ29uJyk7XHJcbi8vICAgIH0pO1xyXG4vL1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vfSk7XHJcblxyXG5cclxuXHJcbi8vXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDApLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDIpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL1xyXG4vL1xyXG4vL30pO1xyXG5cclxuXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICAgLy8kKCdtZW51LXNjaGVkdWxlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vXHJcbi8vICAgICQoJy5tZW51LWxhbmRtYXJrJykuYWRkQ2xhc3MoJ29uJyk7XHJcbi8vICB9KTtcclxuLy9cclxuLy8gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICQoJy5tZW51LWxhbmRtYXJrJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vICB9KTtcclxuLy9cclxuLy8gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5jaGlsZHJlbigpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL30pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOS0wMS5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcubmF2LXdpZHRoMicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoMi1wZCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aDItcGQnKS5jaGlsZHJlbignLm5hdi1uYW1lJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubmF2LXdpZHRoMicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoMi1wZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aDItcGQnKS5jaGlsZHJlbignLm5hdi1uYW1lJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuLy8g77+977+977+9zLXvv73vv73vv70gxazvv73vv73vv73vv70g77+977+9xanvv73vv70g77+9zLXvv71cclxuICAkKCcubmF2LW5hbWUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKGhyZWYpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuXHJcbi8vIO+/ve+/ve+/vcy177+977+977+9IO+/ve+/ve+/ve+/vVxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5uYXYtd2lkdGgnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLmNoaWxkcmVuKCcubmF2LW5hbWUnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5uYXYtd2lkdGgnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLmNoaWxkcmVuKCcubmF2LW5hbWUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyDvv73vv73vv73Mte+/ve+/ve+/vSDFrO+/ve+/ve+/ve+/vSDvv73vv73Fqe+/ve+/vSDvv73Mte+/vVxyXG4gICQoJy5uYXYtbmFtZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcCA6IHNjcm9sbFBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuLy8g77+9277vv70g77+91b3HtdW977+9XHJcblxyXG4gIC8vdmFyIGk7XHJcbiAgLy92YXIgbGltaXQgPSAxMDAwO1xyXG4gIC8vXHJcbiAgLy9mdW5jdGlvbiBzY3JvbGwoKXtcclxuICAvL1xyXG4gIC8vICAkKCcudHJhbnNwb3J0LXRleHQnKS5jc3Moe1xyXG4gIC8vICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDIgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoNCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICg2ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgLy8gIH0pO1xyXG4gIC8vICAkKCcudHJhbnNwb3J0LXRleHQnKS5jc3Moe1xyXG4gIC8vICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDggKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMTAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMTIgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMTQgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMTYgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMTggKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMjAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMjIgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMjQgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vXHJcbiAgLy9cclxuICAvL1xyXG4gIC8vXHJcbiAgLy8gIC8vJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgLy9cclxuICAvLyAgLy8gIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDMwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgLy8gIC8vXHJcbiAgLy8gIC8vfSk7XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vXHJcbiAgLy9cclxuICAvL31cclxuICAvL1xyXG4gIC8vJCh3aW5kb3cpLm9uKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xyXG4gIC8vXHJcbiAgLy8gIGkgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XHJcbiAgLy9cclxuICAvL1xyXG4gIC8vICBzY3JvbGwoKTtcclxuICAvL1xyXG4gIC8vfSk7XHJcbn0pO1xyXG5cclxuIl19
