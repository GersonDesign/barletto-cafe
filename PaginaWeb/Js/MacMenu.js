/*
 * AppleMenu
 * Author: Lucas Forchino
 * WebSite: http://www.jqueryload.com
 *
 */

$(document).ready(function(){

    // this is just to center the options,
    // I fix the size according the options number
    $('.mac-inner').find('ul').each(function(){
        var liCount=$(this).find('li').size();
        var ulsize=liCount*137;
        $(this).css('width',ulsize);
    })

    // All animations are here, this include the arrow
    // and the options move.

    $('.mac-menu').find('a').bind('click',function(){
        var position=$('.mac-menu').find('a').index(this);
        var pos=position*960;
        var iconsMove='left';
        if (pos>position)
            {
                iconsMove='right';
            }

        $('.mac-window').animate({'scrollLeft' : pos},1000,'easeInExpo',function(){
                var effect=50;
                if (iconsMove=='left'){
                    effect=effect*(-1);
                }
                $('.mac-submenu').find('a').animate({'margin-left':effect},100,'easeInOutCirc').animate({'margin-left':0},200,'easeOutBounce');
        });
        var linkPos=$(this).position();
        var left=linkPos.left;
        var siz= $(this).width();
        left=left + (siz/2) -5;
        $('.mac-active').animate({'left' : left});
        $('.mac-menu').find('a').removeClass('mac-menu-active');
        $(this).addClass('mac-menu-active');
    })

})
