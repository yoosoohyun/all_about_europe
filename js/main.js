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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiLCJtZW51LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2pCQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBDcmVhdGVkIGJ5IHlvb3Nvb2h5dW4gb24gMjAxNy4gOC4gMjEuLlxuICovXG5cbiQoZnVuY3Rpb24oKXtcblxuICAkKCcubWFpbi1ob3ZlcicpLm9uKCdtb3VzZWVudGVyJywgZnVuY3Rpb24oKXtcblxuICAgICQoJy5tYWluLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcbiAgICAkKHRoaXMpLmNoaWxkcmVuKCcubWFpbi13cmFwJykuYWRkQ2xhc3MoJ29uJyk7XG5cbiAgICB2YXIgY291bnRyeSA9ICQodGhpcykuZmluZCgnLm1haW4tdGV4dC1uYW1lJykudGV4dCgpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAkKCcubWFpbi1pbm5lci1ib3gnKS5yZW1vdmVDbGFzcygnZ2VybWFueSBmcmFuY2UgaXRhbHkgc3dpc3MgbmV0aGVybGFuZHMgY3plY2gnKS5hZGRDbGFzcyhjb3VudHJ5KTtcblxuICB9KTtcblxufSk7IiwiLyoqXG4gKiBDcmVhdGVkIGJ5IEFkbWluaXN0cmF0b3Igb24gMjAxNy0wOC0yNC5cbiAqL1xuIl19
