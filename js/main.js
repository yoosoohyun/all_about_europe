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

    var indexNumber = $(this).index('.main-hover')
    $('.main-wrap').removeClass('on');
    $(this).children('.main-wrap').addClass('on');

    $('.main-bg').removeClass('on');
    $('.main-bg').eq(indexNumber).addClass('on');

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


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRtYXJrLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiLCJzY2hlZHVsZS5qcyIsInRyYW5zcG9ydC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0zMC5cclxuICovXHJcblxyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgdmFyIHNjcm9sbEFtb3VudCA9IDA7XHJcbiAgJCh3aW5kb3cpLm9uKCdtb3VzZXdoZWVsJywgZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgLy9jb25zb2xlLmxvZyhlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YSk7XHJcblxyXG4gICAgc2Nyb2xsQW1vdW50ICs9IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgIGlmKHNjcm9sbEFtb3VudCA+PSAwKXtcclxuICAgICAgc2Nyb2xsQW1vdW50ID0gMDtcclxuICAgIH1cclxuXHJcbiAgICAvL2NvbnNvbGUubG9nKCAkKCcubGFuZC13cmFwOmxhc3QtY2hpbGQnKS5vZmZzZXQoKS5sZWZ0ICk7XHJcblxyXG5cclxuXHJcbiAgICBpZiggc2Nyb2xsQW1vdW50IDw9IC0zMDAwICl7XHJcbiAgICAgIHNjcm9sbEFtb3VudCA9IC0zMDAwO1xyXG4gICAgfVxyXG5cclxuICAgIC8vY29uc29sZS5sb2coc2Nyb2xsQW1vdW50KTtcclxuXHJcblxyXG4gICAgJCgnLmxhbmQtd3JhcCcpLmNzcyh7XHJcbiAgICAgIHRyYW5zZm9ybTondHJhbnNsYXRlWCgnICsgc2Nyb2xsQW1vdW50ICsgJ3B4KSdcclxuICAgIH0pO1xyXG5cclxuICB9KTtcclxuXHJcblxyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSB5b29zb29oeXVuIG9uIDIwMTcuIDguIDIxLi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5tYWluLWhvdmVyJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgIHZhciBpbmRleE51bWJlciA9ICQodGhpcykuaW5kZXgoJy5tYWluLWhvdmVyJylcclxuICAgICQoJy5tYWluLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tYWluLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICAkKCcubWFpbi1iZycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLm1haW4tYmcnKS5lcShpbmRleE51bWJlcikuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjQuXHJcbiAqL1xyXG5cclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5tZW51LXNjaGVkdWxlJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS10aXRsZS1pdGVtJykuZXEoMCkub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5tZW51LWxhbmRtYXJrJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5lcSgyKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDEpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDIpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy8gIH0pO1xyXG4vL1xyXG4vL30pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOS0wMS5cclxuICovXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcubmF2LXdpZHRoMicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoMi1wZCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aDItcGQnKS5jaGlsZHJlbignLm5hdi1uYW1lJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubmF2LXdpZHRoMicpLm9uKCdtb3VzZWxlYXZlJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubmF2LXdpZHRoMi1wZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aDItcGQnKS5jaGlsZHJlbignLm5hdi1uYW1lJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuLy8g77+977+977+9zLXvv73vv73vv70gxazvv73vv73vv73vv70g77+977+9xanvv73vv70g77+9zLXvv71cclxuICAkKCcubmF2LW5hbWUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKGhyZWYpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG59KTsiLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzEuXHJcbiAqL1xyXG5cclxuXHJcbi8vIO+/ve+/ve+/vcy177+977+977+9IO+/ve+/ve+/ve+/vVxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5uYXYtd2lkdGgnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLmNoaWxkcmVuKCcubmF2LW5hbWUnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG4gICQoJy5uYXYtd2lkdGgnKS5vbignbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm5hdi13aWR0aC1wZCcpLmNoaWxkcmVuKCcubmF2LW5hbWUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcblxyXG4vLyDvv73vv73vv73Mte+/ve+/ve+/vSDFrO+/ve+/ve+/ve+/vSDvv73vv73Fqe+/ve+/vSDvv73Mte+/vVxyXG4gICQoJy5uYXYtbmFtZScpLm9uKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xyXG5cclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICB2YXIgaHJlZiA9ICQodGhpcykuYXR0cignaHJlZicpO1xyXG5cclxuICAgIHZhciBzY3JvbGxQb3NpdGlvbiA9ICQoaHJlZikub2Zmc2V0KCkudG9wO1xyXG5cclxuICAgICQoJ2JvZHknKS5zdG9wKCkuYW5pbWF0ZSh7XHJcbiAgICAgIHNjcm9sbFRvcCA6IHNjcm9sbFBvc2l0aW9uXHJcbiAgICB9KTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxuXHJcbi8vIO+/vdu+77+9IO+/vdW9x7XVve+/vVxyXG5cclxuICB2YXIgaTtcclxuICB2YXIgbGltaXQgPSAxMDA7XHJcblxyXG4gIGZ1bmN0aW9uIHNjcm9sbCgpe1xyXG5cclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgLSAoNCAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICAkKHdpbmRvdykub24oJ3Njcm9sbCcsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgaSA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcclxuXHJcbiAgICBzY3JvbGwoKTtcclxuXHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcblxyXG4iXX0=
