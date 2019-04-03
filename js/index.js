$(function () {
    $('#demo').fullpage({
        navigation: true,
        sectionsColor: ['#f9dd67', '#84a2d4', '#ef674d', '#ffeedd', '#cf4759', '#85d9ed', '#8ac060', '#84d9ed'],
        afterLoad: function (a, index) {
            $('.section').eq(index-1).addClass('animation').siblings().removeClass('animation');
            /* 
                jQuery动画是添加在行内,所以当afterLoad执行时先清空所添加的动画效果,而后执行之后的动画,达到复原动画
                小bug,stop()清除jq动画队列排队;
            */
            $('.section>div div,.section>div img').stop().removeAttr('style')//section下的第一个div是由本身的插件自动生成的 第二个div或者img才是我们添加的动画的效果的 
            //.section>div div,.section>div img 逗号为交集
            if (index == 2) {
                $('.section2 .search1 ').animate({
                    marginLeft: -111,
                }, '1000', 'easeOutBack', function () {
                    $(this).hide()
                    $('.section2 .search2 ').show().delay(500).animate({
                        marginLeft: 100,
                        marginBottom:448,
                        width:160
                    },1000)
                    $('.section2 .sofas ').delay(500).animate({
                        width:441,
                },1000)
                })
                
            }else if(index==4){
                $('.section .carBox').animate({
                    marginLeft:1000
                },3500,'easeInElastic',function () {
                    $('.section4 .keyboard').animate({
                        opacity: 1,
                    },1000)
                  })
            }else if(index==6){
                $('.section .bigBox').animate({
                    top:435,
                },1000,function(){
                    $('.section .street').animate({
                        backgroundPositionX:-1300,
                    },2000,function(){
                        $('.section6 .man').animate({
                            // marginRight:-180,
                            height:122,
                        },1000,function () {
                            $('.section6 .man').animate({
                                marginRight:-104,
                            },1000,function(){
                                $('.section .doorAndGirl').animate({
                                    opacity:1
                                },1000,function(){
                                    $('.section .girl').animate({
                                        opacity:1
                                    })
                                })
                            })
                          })
                    })
                })
                
            }

            /* 第八屏 */
            $('.section8 ').mousemove(function(e){
                // console.log(1111);
                $('.section .hand').css('left',e.pageX-65)
                $('.section .hand').css('top',e.pageY-10)
            })
            $('.section8 .again').on('click',function(){
                // location.reload()//刷新页面,将active(如果添加这个类后每次刷新都将定格到这个页面)或者回到第一页
                $.fn.fullpage.moveTo(1);
            })
        }

    })
})