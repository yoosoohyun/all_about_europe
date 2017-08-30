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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRtYXJrLmpzIiwibWFpbi5qcyIsIm1lbnUuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoibGFuZG1hcmsuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBBZG1pbmlzdHJhdG9yIG9uIDIwMTctMDgtMzAuXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG4gICQoJy5iZycpLm9uKCdtb3VzZXdoZWVsJyxmdW5jdGlvbihlKXtcclxuXHJcbiAgICB2YXIgd2hlZWxEZWx0YSA9IGUub3JpZ2luYWxFdmVudC53aGVlbERlbHRhO1xyXG5cclxuICAgIGlmKHdoZWVsRGVsdGEgPiAwKXtcclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKFwidXBcIik7XHJcblxyXG4gICAgICAkKHRoaXMpLnNjcm9sbExlZnQoLXdoZWVsRGVsdGEgKyAkKHRoaXMpLnNjcm9sbExlZnQoKSk7XHJcblxyXG4gICAgfWVsc2V7XHJcblxyXG4gICAgICBjb25zb2xlLmxvZyhcImRvd25cIik7XHJcblxyXG4gICAgICAkKHRoaXMpLnNjcm9sbExlZnQoLXdoZWVsRGVsdGEgKyAkKHRoaXMpLnNjcm9sbExlZnQoKSk7XHJcblxyXG4gICAgfVxyXG5cclxuICB9KTtcclxuXHJcbn0pO1xyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IHlvb3Nvb2h5dW4gb24gMjAxNy4gOC4gMjEuLlxyXG4gKi9cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuXHJcbiAgJCgnLm1haW4taG92ZXInKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcblxyXG4gICAgJCgnLm1haW4td3JhcCcpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCh0aGlzKS5jaGlsZHJlbignLm1haW4td3JhcCcpLmFkZENsYXNzKCdvbicpO1xyXG5cclxuICAgIHZhciBjb3VudHJ5ID0gJCh0aGlzKS5maW5kKCcubWFpbi10ZXh0LW5hbWUnKS50ZXh0KCkudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAkKCcubWFpbi1pbm5lci1ib3gnKS5yZW1vdmVDbGFzcygnZ2VybWFueSBmcmFuY2UgaXRhbHkgc3dpc3MgbmV0aGVybGFuZHMgY3plY2gnKS5hZGRDbGFzcyhjb3VudHJ5KTtcclxuXHJcbiAgfSk7XHJcblxyXG59KTtcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yNC5cclxuICovXHJcblxyXG4vLyQoZnVuY3Rpb24oKXtcclxuLy9cclxuLy8gICQoJy5tZW51LXRpdGxlLWxpbmsnKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbi8vICAgICQoJy5tZW51LWxhbmRtYXJrJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbi8vXHJcbi8vICAgICQodGhpcykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAgICQoJy5tZW51LXNjaGVkdWxlJykuYWRkQ2xhc3MoJ29uJyk7XHJcbi8vICAgIH0pO1xyXG4vL1xyXG4vLyAgfSk7XHJcbi8vXHJcbi8vXHJcbi8vICAkKCcubWVudS10aXRsZS1pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4vLyAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4vL1xyXG4vLyAgICAkKHRoaXMpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuLy8gICAgICAkKCcubWVudS1sYW5kbWFyaycpLmFkZENsYXNzKCdvbicpO1xyXG4vLyAgICB9KTtcclxuLy9cclxuLy8gIH0pO1xyXG4vL1xyXG4vL30pO1xyXG5cclxuXHJcbiQoZnVuY3Rpb24oKXtcclxuICAkKCcubWVudS10aXRsZS1pdGVtJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG4gICAgJCgnLm1lbnUtc2NoZWR1bGUnKS5hZGRDbGFzcygnb24nKTtcclxuICAgICQoJy5tZW51LWxhbmRtYXJrJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgfSk7XHJcblxyXG4gICQoJy5tZW51LXRpdGxlLWl0ZW0nKS5lcSgwKS5vbignbW91c2VlbnRlcicsIGZ1bmN0aW9uKCl7XHJcbiAgICAkKCcubWVudS1zY2hlZHVsZScpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gICAgJCgnLm1lbnUtbGFuZG1hcmsnKS5hZGRDbGFzcygnb24nKTtcclxuICB9KTtcclxuXHJcbiAgJCgnLm1lbnUtdGl0bGUtaXRlbScpLmVxKDIpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuICAgICQoJy5tZW51LXNjaGVkdWxlJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKCcubWVudS1sYW5kbWFyaycpLnJlbW92ZUNsYXNzKCdvbicpO1xyXG4gIH0pO1xyXG5cclxuXHJcbn0pO1xyXG4iXX0=
