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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtZW51LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeW9vc29vaHl1biBvbiAyMDE3LiA4LiAyMS4uXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcubWFpbi1ob3ZlcicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcubWFpbi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWFpbi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgdmFyIGNvdW50cnkgPSAkKHRoaXMpLmZpbmQoJy5tYWluLXRleHQtbmFtZScpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICQoJy5tYWluLWlubmVyLWJveCcpLnJlbW92ZUNsYXNzKCdnZXJtYW55IGZyYW5jZSBpdGFseSBzd2lzcyBuZXRoZXJsYW5kcyBjemVjaCcpLmFkZENsYXNzKGNvdW50cnkpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIiwiLyoqXHJcbiAqIENyZWF0ZWQgYnkgQWRtaW5pc3RyYXRvciBvbiAyMDE3LTA4LTI0LlxyXG4gKi9cclxuXHJcbi8vJChmdW5jdGlvbigpe1xyXG4vL1xyXG4vLyAgJCgnLm1lbnUtdGl0bGUtbGluaycpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuLy9cclxuLy8gICAgJCh0aGlzKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuLy8gICAgfSk7XHJcbi8vXHJcbi8vICB9KTtcclxuLy9cclxuLy9cclxuLy8gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICQoJy5tZW51LXNjaGVkdWxlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vXHJcbi8vICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAgICQoJy5tZW51LWxhbmRtYXJrJykuYWRkQ2xhc3MoJ29uJyk7XHJcbi8vICAgIH0pO1xyXG4vL1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vfSk7XHJcblxyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubWVudS1zY2hlZHVsZScpLmFkZENsYXNzKCdvbicpO1xyXG4gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDApLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5tZW51LXNjaGVkdWxlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcubWVudS1sYW5kbWFyaycpLmFkZENsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuICAkKCcubWVudS10aXRsZS1pdGVtJykuZXEoMikub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQoJy5tZW51LWxhbmRtYXJrJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG5cclxufSk7XHJcbiJdfQ==
