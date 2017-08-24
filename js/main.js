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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSB5b29zb29oeXVuIG9uIDIwMTcuIDguIDIxLi5cclxuICovXHJcblxyXG4kKGZ1bmN0aW9uKCl7XHJcblxyXG4gICQoJy5tYWluLWhvdmVyJykub24oJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xyXG5cclxuICAgICQoJy5tYWluLXdyYXAnKS5yZW1vdmVDbGFzcygnb24nKTtcclxuICAgICQodGhpcykuY2hpbGRyZW4oJy5tYWluLXdyYXAnKS5hZGRDbGFzcygnb24nKTtcclxuXHJcbiAgICB2YXIgY291bnRyeSA9ICQodGhpcykuZmluZCgnLm1haW4tdGV4dC1uYW1lJykudGV4dCgpLnRvTG93ZXJDYXNlKCk7XHJcblxyXG4gICAgJCgnLm1haW4taW5uZXItYm94JykucmVtb3ZlQ2xhc3MoJ2dlcm1hbnkgZnJhbmNlIGl0YWx5IHN3aXNzIG5ldGhlcmxhbmRzIGN6ZWNoJykuYWRkQ2xhc3MoY291bnRyeSk7XHJcblxyXG4gIH0pO1xyXG5cclxufSk7Il19
