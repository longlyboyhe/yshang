
$('#mb-box').css('width',$(window).width())
function info(){
    if($(window).width()<950){
        $('#mb-box').css('display','block')
        $('#pc-box').css('display','none')
    }else{
        $('#mb-box').css('display','none')
        $('#pc-box').css('display','block')
    }
}
info();
$(window).resize(function(){
    var boxwidth = $(window).width();
    $('#mb-box').css('width',boxwidth);
    info();
})
$('.shouye').click(function(){$(window).attr('location','index.html')})
// ---------------
$('#ds-case').click(function(){$(window).attr('location','e-commerce.html')})
$('#dsju-case').click(function(){$(window).attr('location','e-commerce.html')})
$('#mb-dsju-case').click(function(){$(window).attr('location','e-commerce.html')})
$('#ypt-case').click(function(){$(window).attr('location','cloud-platform.html')})
$('#mb-ypt-case').click(function(){$(window).attr('location','cloud-platform.html')})
$('#gyl-case').click(function(){$(window).attr('location','supplysolutions.html')})
$('#mb-gyl-case').click(function(){$(window).attr('location','supplysolutions.html')})
// ----------------
$('.cloud-service').click(function(){$(window).attr('location','cloud-service.html')});
// ----------------
$('#cpzx').click(function(){$(window).attr('location','productcenter.html')});
$('#mb-cpzx').click(function(){$(window).attr('location','productcenter.html')});
$('#p-b2b').click(function(){$(window).attr('location','b2bprodect.html')});
$('#mb-p-b2b').click(function(){$(window).attr('location','b2bprodect.html')});
$('.li-b2b').click(function(){$(window).attr('location','b2bprodect.html')});
$('#p-b2c').click(function(){$(window).attr('location','b2cprd.html')});
$('#mb-p-b2c').click(function(){$(window).attr('location','b2cprd.html')});
$('.li-b2c').click(function(){$(window).attr('location','b2cprd.html')});
$('#p-b2b2c').click(function(){$(window).attr('location','B2B2C.html')});
$('#mb-p-b2b2c').click(function(){$(window).attr('location','B2B2C.html')});
$('.li-b2b2c').click(function(){$(window).attr('location','B2B2C.html')});
$('#p-tms').click(function(){$(window).attr('location','TMS.html')});
$('#mb-p-tms').click(function(){$(window).attr('location','TMS.html')});
$('.s-case').click(function(){$(window).attr('location','successful-case.html')});
$('.more').click(function(){$(window).attr('location','successful-case.html')});
$('.partner').click(function(){$(window).attr('location','partner.html')});
$('.about-us').click(function(){$(window).attr('location','about-us.html')});
$('.heart-top .nav>li').mouseover(function(){
    $(this).addClass('actives').siblings().removeClass('actives');
})
$('.heart-top .nav>li').mouseleave(function(){
    $('#pageone').addClass('actives').siblings().removeClass('actives');
})
$(window).scroll(function(){
    var top = $(document).scrollTop()
    if(top>=100){
        $('.heart-top').addClass('header-mini')
    }else{
        $('.heart-top').removeClass('header-mini')
    }
})

$('.up-top').click(function(){
    $("html,body").animate({scrollTop:0}, 500);
})
$('.msg-our').click(function(){
    $('.contact-us').fadeIn()
})
$('.x-out').click(function(){
    $('.contact-us').fadeOut()
})
$('.min-heart .mune img').click(function(){
    $('.nav-list').toggle();
    $(this).toggleClass('active')
})
$('.mb-solve').click(function(){
    $('.so-list').toggle();
})
$('.mb-product').click(function(){
    $('.pr-list').toggle();
})

$('.mb-solve').click(function(){
    $('.mb-solve img').toggleClass('xuanzhuan');
})
$('.mb-product').click(function(){
    $('.mb-product img').toggleClass('xuanzhuan');
})