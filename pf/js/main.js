$(function(){
    var sw=0;
    $('.menu1').click(function(){
        $('.menu_btn').removeClass('on');
        $('.cover').hide();
        var s2 = $('.section2').offset().top;
        $('body,html').animate({'scrollTop':s2-100},500);
        sw=0;
    })
    $('.menu2').click(function(){
        $('.menu_btn').removeClass('on');
        $('.cover').hide();
        var s3 = $('.section3').offset().top;
        $('body,html').animate({'scrollTop':s3-100},500);
        sw=0;
    })
    $('.menu3').click(function(){
        $('.menu_btn').removeClass('on');
        $('.cover').hide();
        var s4 = $('.section4').offset().top;
        $('body,html').animate({'scrollTop':s4-100},500);
        sw=0;
    })
    $('.menu4').click(function(){
        $('.menu_btn').removeClass('on');
        $('.cover').hide();
        var s5 = $('.section5').offset().top;
        $('body,html').animate({'scrollTop':s5-100},500);
        sw=0;
    })
    $('.menu5').click(function(){
        $('.menu_btn').removeClass('on');
        $('.cover').hide();
        var s6 = $('.section6').offset().top;
        $('body,html').animate({'scrollTop':s6-100},500);
        sw=0;
    })
    
    $('.menu_btn').click(function(){
        if(sw==0){
            $('.menu_btn').addClass('on');
            $('.cover').stop().fadeIn(); 
            sw=1;
        }else{
            $('.menu_btn').removeClass('on');
            $('.cover').stop().fadeOut();
            sw=0;
        }
        console.log(sw);
    });
    $('.section3 ul li').mouseenter(function(){
        $(this).find('a').find('.list_cover').stop().fadeIn(200);
        $(this).find('a').find('.brand_text').stop().fadeIn(200);
    });
    $('.section3 ul li').mouseleave(function(){
        $(this).find('a').find('.list_cover').stop().fadeOut(200);
        $(this).find('a').find('.brand_text').stop().fadeOut(200);
    })
    $(window).scroll(function(){
        var s1 = $('body,html').scrollTop();
        if(s1>=100){
            $('#header').addClass('on')
            $('.btn_top').addClass('on')
        }else{
            $('#header').removeClass('on')
            $('.btn_top').removeClass('on')
        }
    })
    
   
    $('.btn_top').click(function(){
        $('body,html').animate({'scrollTop':0},500);
    });

    $('.arrow1').click(function(){
        var s4 = $('.section4').offset().top;
        $('body,html').animate({'scrollTop':s4-100},500);
    });
    $('.arrow2').click(function(){
        var s5 = $('.section5').offset().top;
        $('body,html').animate({'scrollTop':s5-100},500);
    });
    $('.arrow3').click(function(){
        var s6 = $('.section6').offset().top;
        $('body,html').animate({'scrollTop':s6-100},500);
    });
});