$('html, body').stop().animate({
    scrollTop : 0
}, 1000)
$('#menu li').eq(0).addClass('on')
$('#menu li a').on('click', function(e){
    e.preventDefault()
    $(this).parent().addClass('on')
    $(this).parent().siblings().removeClass('on')
    var num = $(this).parent().index()
    var secDist = $('section').eq(num).offset().top
    $('html, body').stop().animate({
        scrollTop : secDist
    }, 1000)
    
})


var sDist0 = $('#sect1').offset().top
var sDist1 = $('#sect2').offset().top
var sDist2 = $('#sect3').offset().top

// 마지막구간이 윈도우높이보다 클때
var lastSect = $('#sect4').offset().top             
// 마지막구간이 윈도우높이보다 작을때
// var lastSect = $('body').height() - $(window).height()

$(window).on('scroll', function(){
    // var wh = $(this).height()
    var sct = $(this).scrollTop()

    if ( sct>=sDist0 && sct<sDist1 ) {
        $('#menu li').eq(0).addClass('on')
        $('#menu li').eq(0).siblings().removeClass('on')
    } else if ( sct>=sDist1 && sct<sDist2 ) {
        $('#menu li').eq(1).addClass('on')
        $('#menu li').eq(1).siblings().removeClass('on')
    } else if ( sct>=sDist2 && sct<lastSect ) {
        $('#menu li').eq(2).addClass('on')
        $('#menu li').eq(2).siblings().removeClass('on')
    } else if ( sct>=lastSect ) {
        $('#menu li').eq(3).addClass('on')
        $('#menu li').eq(3).siblings().removeClass('on')
    } 

    
    $('section').on('mousewheel', function(event, delta){
            
            if (delta>0) {    // 마우스휠을 위로 굴리면 양수
                $('html, body').stop().animate({
                    scrollTop: $(this).prev().offset().top
                }, 600)
            } else if (delta<0) {  // 마우스휠을 아래로 굴리면 음수
                $('html, body').stop().animate({
                    scrollTop: $(this).next().offset().top
                }, 600)
            }
    })





})