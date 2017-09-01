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