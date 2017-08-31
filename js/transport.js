/**
 * Created by Administrator on 2017-08-30.
 */

$(function(){
  $('.bg').on('mousewheel',function(e){

    var wheelDelta = e.originalEvent.wheelDelta;

    if(wheelDelta > 0){

      console.log("up");

      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }else{

      console.log("down");

      $(this).scrollLeft(-wheelDelta + $(this).scrollLeft());

    }

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
  var limit = 1000;

  function scroll(){

    $('.transport-text').css({
      "transform":"translate3d(0," + (2 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (4 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (6 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (8 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (10 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (12 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (14 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (16 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (18 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (20 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (22 * (i / limit)) + "px,0)"
    });
    $('.transport-text').css({
      "transform":"translate3d(0," + (24 * (i / limit)) + "px,0)"
    });






    //$('.transport-text').css({
    //
    //  "transform":"translate3d(0," + (30 * (i / limit)) + "px,0)"
    //
    //});




  }

  $(window).on('scroll', function(){

    i = $(window).scrollTop();


    scroll();

  });
});


//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRtYXJrLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiLCJ0cmFuc3BvcnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoidHJhbnNwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMwLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcuYmcnKS5vbignbW91c2V3aGVlbCcsZnVuY3Rpb24oZSl7XHJcblxyXG4gICAgdmFyIHdoZWVsRGVsdGEgPSBlLm9yaWdpbmFsRXZlbnQud2hlZWxEZWx0YTtcclxuXHJcbiAgICBpZih3aGVlbERlbHRhID4gMCl7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcInVwXCIpO1xyXG5cclxuICAgICAgJCh0aGlzKS5zY3JvbGxMZWZ0KC13aGVlbERlbHRhICsgJCh0aGlzKS5zY3JvbGxMZWZ0KCkpO1xyXG5cclxuICAgIH1lbHNle1xyXG5cclxuICAgICAgY29uc29sZS5sb2coXCJkb3duXCIpO1xyXG5cclxuICAgICAgJCh0aGlzKS5zY3JvbGxMZWZ0KC13aGVlbERlbHRhICsgJCh0aGlzKS5zY3JvbGxMZWZ0KCkpO1xyXG5cclxuICAgIH1cclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSB5b29zb29oeXVuIG9uIDIwMTcuIDguIDIxLi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5tYWluLWhvdmVyJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5tYWluLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tYWluLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB2YXIgY291bnRyeSA9ICQodGhpcykuZmluZCgnLm1haW4tdGV4dC1uYW1lJykudGV4dCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgJCgnLm1haW4taW5uZXItYm94JykucmVtb3ZlQ2xhc3MoJ2dlcm1hbnkgZnJhbmNlIGl0YWx5IHN3aXNzIG5ldGhlcmxhbmRzIGN6ZWNoJykuYWRkQ2xhc3MoY291bnRyeSk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7XHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4iLCIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMjQuXHJcbiAqL1xyXG5cclxuLy8kKGZ1bmN0aW9uKCl7XHJcbi8vXHJcbi8vICAkKCcubWVudS10aXRsZS1saW5rJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vL1xyXG4vLyAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgICAkKCcubWVudS1zY2hlZHVsZScpLmFkZENsYXNzKCdvbicpO1xyXG4vLyAgICB9KTtcclxuLy9cclxuLy8gIH0pO1xyXG4vL1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy9cclxuLy8gICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gICAgfSk7XHJcbi8vXHJcbi8vICB9KTtcclxuLy9cclxuLy99KTtcclxuXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcbiAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5tZW51LXNjaGVkdWxlJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS10aXRsZS1pdGVtJykuZXEoMCkub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5tZW51LWxhbmRtYXJrJykuYWRkQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5lcSgyKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcblxyXG59KTtcclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTMxLlxyXG4gKi9cclxuXHJcblxyXG4vLyDvv73vv73vv73Mte+/ve+/ve+/vSDvv73vv73vv73vv71cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcubmF2LXdpZHRoJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtd2lkdGgtcGQnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtd2lkdGgtcGQnKS5jaGlsZHJlbignLm5hdi1uYW1lJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuICAkKCcubmF2LXdpZHRoJykub24oJ21vdXNlbGVhdmUnLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtd2lkdGgtcGQnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5uYXYtd2lkdGgtcGQnKS5jaGlsZHJlbignLm5hdi1uYW1lJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcblxyXG5cclxuLy8g77+977+977+9zLXvv73vv73vv70gxazvv73vv73vv73vv70g77+977+9xanvv73vv70g77+9zLXvv71cclxuICAkKCcubmF2LW5hbWUnKS5vbignY2xpY2snLCBmdW5jdGlvbihlKXtcclxuXHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgdmFyIGhyZWYgPSAkKHRoaXMpLmF0dHIoJ2hyZWYnKTtcclxuXHJcbiAgICB2YXIgc2Nyb2xsUG9zaXRpb24gPSAkKGhyZWYpLm9mZnNldCgpLnRvcDtcclxuXHJcbiAgICAkKCdib2R5Jykuc3RvcCgpLmFuaW1hdGUoe1xyXG4gICAgICBzY3JvbGxUb3AgOiBzY3JvbGxQb3NpdGlvblxyXG4gICAgfSk7XHJcblxyXG4gIH0pO1xyXG5cclxuXHJcbi8vIO+/vdu+77+9IO+/vdW9x7XVve+/vVxyXG5cclxuICB2YXIgaTtcclxuICB2YXIgbGltaXQgPSAxMDAwO1xyXG5cclxuICBmdW5jdGlvbiBzY3JvbGwoKXtcclxuXHJcbiAgICAkKCcudHJhbnNwb3J0LXRleHQnKS5jc3Moe1xyXG4gICAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICgyICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDQgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAgIH0pO1xyXG4gICAgJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAgICAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoNiAqIChpIC8gbGltaXQpKSArIFwicHgsMClcIlxyXG4gICAgfSk7XHJcbiAgICAkKCcudHJhbnNwb3J0LXRleHQnKS5jc3Moe1xyXG4gICAgICBcInRyYW5zZm9ybVwiOlwidHJhbnNsYXRlM2QoMCxcIiArICg4ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDEwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDEyICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDE0ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDE2ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDE4ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDIwICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDIyICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuICAgICQoJy50cmFuc3BvcnQtdGV4dCcpLmNzcyh7XHJcbiAgICAgIFwidHJhbnNmb3JtXCI6XCJ0cmFuc2xhdGUzZCgwLFwiICsgKDI0ICogKGkgLyBsaW1pdCkpICsgXCJweCwwKVwiXHJcbiAgICB9KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgIC8vJCgnLnRyYW5zcG9ydC10ZXh0JykuY3NzKHtcclxuICAgIC8vXHJcbiAgICAvLyAgXCJ0cmFuc2Zvcm1cIjpcInRyYW5zbGF0ZTNkKDAsXCIgKyAoMzAgKiAoaSAvIGxpbWl0KSkgKyBcInB4LDApXCJcclxuICAgIC8vXHJcbiAgICAvL30pO1xyXG5cclxuXHJcblxyXG5cclxuICB9XHJcblxyXG4gICQod2luZG93KS5vbignc2Nyb2xsJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICBpID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xyXG5cclxuXHJcbiAgICBzY3JvbGwoKTtcclxuXHJcbiAgfSk7XHJcbn0pO1xyXG5cclxuIl19
