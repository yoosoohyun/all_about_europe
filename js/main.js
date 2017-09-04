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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRtYXJrLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiLCJzY2hlZHVsZS5qcyIsInRyYW5zcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMwLlxyXG4gKi9cclxuXHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICB2YXIgc2Nyb2xsQW1vdW50ID0gMDtcclxuICAkKHdpbmRvdykub24oJ21vdXNld2hlZWwnLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhKTtcclxuXHJcbiAgICBzY3JvbGxBbW91bnQgKz0gZS5vcmlnaW5hbEV2ZW50LndoZWVsRGVsdGE7XHJcblxyXG4gICAgaWYoc2Nyb2xsQW1vdW50ID49IDApe1xyXG4gICAgICBzY3JvbGxBbW91bnQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc29sZS5sb2coICQoJy5sYW5kLXdyYXA6bGFzdC1jaGlsZCcpLm9mZnNldCgpLmxlZnQgKTtcclxuXHJcblxyXG5cclxuICAgIGlmKCBzY3JvbGxBbW91bnQgPD0gLTMwMDAgKXtcclxuICAgICAgc2Nyb2xsQW1vdW50ID0gLTMwMDA7XHJcbiAgICB9XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhzY3JvbGxBbW91bnQpO1xyXG5cclxuXHJcbiAgICAkKCcubGFuZC13cmFwJykuY3NzKHtcclxuICAgICAgdHJhbnNmb3JtOid0cmFuc2xhdGVYKCcgKyBzY3JvbGxBbW91bnQgKyAncHgpJ1xyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHlvb3Nvb2h5dW4gb24gMjAxNy4gOC4gMjEuLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLm1haW4taG92ZXInKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLm1haW4td3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1haW4td3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHZhciBjb3VudHJ5ID0gJCh0aGlzKS5maW5kKCcubWFpbi10ZXh0LW5hbWUnKS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAkKCcubWFpbi1pbm5lci1ib3gnKS5yZW1vdmVDbGFzcygnZ2VybWFueSBmcmFuY2UgaXRhbHkgc3dpc3MgbmV0aGVybGFuZHMgY3plY2gnKS5hZGRDbGFzcyhjb3VudHJ5KTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yNC5cclxuICovXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcubWVudS10aXRsZS1pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQoJy5tZW51LWxhbmRtYXJrJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5lcSgwKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDIpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5tZW51LXNjaGVkdWxlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuLy8kKGZ1bmN0aW9uKCl7XHJcbi8vICAkKCcubWVudS10aXRsZS1pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAkKCcubWVudS1zY2hlZHVsZScpLmFkZENsYXNzKCdvbicpO1xyXG4vLyAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vICAkKCcubWVudS10aXRsZS1pdGVtJykuZXEoMSkub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vLyAgICAkKCcubWVudS1sYW5kbWFyaycpLmFkZENsYXNzKCdvbicpO1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vICAkKCcubWVudS10aXRsZS1pdGVtJykuZXEoMikub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vLyAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vfSk7IiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA5LTAxLlxyXG4gKi9cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5uYXYtd2lkdGgyJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtd2lkdGgyLXBkJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoMi1wZCcpLmNoaWxkcmVuKCcubmF2LW5hbWUnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5uYXYtd2lkdGgyJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtd2lkdGgyLXBkJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoMi1wZCcpLmNoaWxkcmVuKCcubmF2LW5hbWUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyDvv73vv73vv73Mte+/ve+/ve+/vSDFrO+/ve+/ve+/ve+/vSDvv73vv73Fqe+/ve+/vSDvv73Mte+/vVxyXG4gICQoJy5uYXYtbmFtZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcCA6IHNjcm9sbFBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMS5cclxuICovXHJcblxyXG5cclxuLy8g77+977+977+9zLXvv73vv73vv70g77+977+977+977+9XHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLm5hdi13aWR0aCcpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoLXBkJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoLXBkJykuY2hpbGRyZW4oJy5uYXYtbmFtZScpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcbiAgJCgnLm5hdi13aWR0aCcpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoLXBkJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoLXBkJykuY2hpbGRyZW4oJy5uYXYtbmFtZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG5cclxuXHJcbi8vIO+/ve+/ve+/vcy177+977+977+9IMWs77+977+977+977+9IO+/ve+/vcWp77+977+9IO+/vcy177+9XHJcbiAgJCgnLm5hdi1uYW1lJykub24oJ2NsaWNrJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgIHZhciBocmVmID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XHJcblxyXG4gICAgdmFyIHNjcm9sbFBvc2l0aW9uID0gJChocmVmKS5vZmZzZXQoKS50b3A7XHJcblxyXG4gICAgJCgnYm9keScpLnN0b3AoKS5hbmltYXRlKHtcclxuICAgICAgc2Nyb2xsVG9wIDogc2Nyb2xsUG9zaXRpb25cclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG4vLyDvv73bvu+/vSDvv73Vvce11b3vv71cclxuXHJcbiAgLy92YXIgaTtcclxuICAvL3ZhciBsaW1pdCA9IDEwMDA7XHJcbiAgLy9cclxuICAvL2Z1bmN0aW9uIHNjcm9sbCgpe1xyXG4gIC8vXHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMiAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICg0ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgLy8gIH0pO1xyXG4gIC8vICAkKCcudHJhbnNwb3J0LXRleHQnKS5jc3Moe1xyXG4gIC8vICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDYgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgfSk7XHJcbiAgLy8gICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgLy8gICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoOCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgxMCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgxMiAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgxNCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgxNiAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgxOCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgyMCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgyMiAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvLyAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAvLyAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgyNCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gIC8vICB9KTtcclxuICAvL1xyXG4gIC8vXHJcbiAgLy9cclxuICAvL1xyXG4gIC8vXHJcbiAgLy9cclxuICAvLyAgLy8kKCcudHJhbnNwb3J0LXRleHQnKS5jc3Moe1xyXG4gIC8vICAvL1xyXG4gIC8vICAvLyAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMzAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAvLyAgLy9cclxuICAvLyAgLy99KTtcclxuICAvL1xyXG4gIC8vXHJcbiAgLy9cclxuICAvL1xyXG4gIC8vfVxyXG4gIC8vXHJcbiAgLy8kKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcbiAgLy9cclxuICAvLyAgaSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuICAvL1xyXG4gIC8vXHJcbiAgLy8gIHNjcm9sbCgpO1xyXG4gIC8vXHJcbiAgLy99KTtcclxufSk7XHJcblxyXG4iXX0=
