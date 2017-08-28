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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgeW9vc29vaHl1biBvbiAyMDE3LiA4LiAyMS4uXHJcbiAqL1xyXG5cclxuJChmdW5jdGlvbigpe1xyXG5cclxuICAkKCcubWFpbi1ob3ZlcicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcclxuXHJcbiAgICAkKCcubWFpbi13cmFwJykucmVtb3ZlQ2xhc3MoJ29uJyk7XHJcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWFpbi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XHJcblxyXG4gICAgdmFyIGNvdW50cnkgPSAkKHRoaXMpLmZpbmQoJy5tYWluLXRleHQtbmFtZScpLnRleHQoKS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICQoJy5tYWluLWlubmVyLWJveCcpLnJlbW92ZUNsYXNzKCdnZXJtYW55IGZyYW5jZSBpdGFseSBzd2lzcyBuZXRoZXJsYW5kcyBjemVjaCcpLmFkZENsYXNzKGNvdW50cnkpO1xyXG5cclxuICB9KTtcclxuXHJcbn0pOyIsIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yNC5cclxuICovXHJcbiJdfQ==
