console.log('hi');


// const navBar=document.getElementById('navBar');
// const homeLogo=document.getElementById('homeLogo');
// const navColorScroll=document.getElementById('navColorScroll');
// function changeBackgroundColor(){
//     let scroll = window.scrollY;
//     if(scroll > 539.318){
//         navBar.style.backgroundColor='#a19ba0';
//         homeLogo.setAttribute('src',"img/logo tableau2.png");
        
//     }else{
//         navBar.style.backgroundColor='white';
//         homeLogo.setAttribute('src',"img/tableaumoderne-logo.png");
//     }
// }
// window.addEventListener('scroll',changeBackgroundColor);

// changeNavBarWhenScrollUsingJq:-

// $('.navbar')
// let hightTop = $('.tableaux .header h2').offset().top;


$(window).scroll(function () { 
    let scr = $(window).scrollTop();
    if(scr > 534.62){
        $('.navbar').css('backgroundColor', 'black');
        $('.nav-link').css('color', '#ffffff');
        $('.navbar-nav').css('padding', '10px 20px 10px 0');
        $('#homeLogo').attr('src',"img/logo tableau2.png");
        $('#upBtn').fadeIn(500);
        // $('.tableaux .header h2').css('padding', '0 0 30px 0');
        // $('.tableaux .tableau').css('padding', '0 0 30px 0');
    }
    else{
        $('.navbar').css('backgroundColor', '#ffffff');
        $('.nav-link').css('color', '#1d1d1d');
        $('#homeLogo').attr('src',"img/tableaumoderne-logo.png");
        $('.navbar-nav').css('padding', '10px');
        $('#upBtn').fadeOut(500);
    }
});
$('#upBtn').click(function(){
    $('html , body').animate({scrollTop :0},1000) ;
});

$('a[href^="#"]').click(function(e){
    // console.log(e.target);
    let getHref=e.target.getAttribute('href');
    let sectionOffset = $(getHref).offset().top;
    $('html , body').animate({scrollTop : sectionOffset}, 1000)
})
$('#homeLogo').click(function(){
    $('html , body').animate({scrollTop : 0},1000);
})



// $(document).ready(function () {
//     $('.lds-facebook').fadeOut(1000 , ()=> {
//         $('.loading').fadeOut(1000);
//         $('.loading').remove();
//     })
    
    
// });
$(document).ready(function () {
    let colorsWidth = $('.colors').outerWidth();
    $('.change_color').animate({'left': `-${colorsWidth}px`},0);
        $('.loading').fadeOut(1000 ,()=>{
            $('body').css('overflow-y', 'auto');
            $('.loading').remove();
        });
        
        $('#colorBtn').click(function () { 
            let colorsWidth = $('.colors').outerWidth();
            if($('.change_color').css('left') == '0px'){
                $('.change_color').animate({'left': `-${colorsWidth}px`},1000);
            }else{
                $('.change_color').animate({'left': '0px'},1000);
            }
            
        });
    
    
});


let colorItem = $('.color_item');
colorItem.eq(0).css('backgroundColor', 'red');
colorItem.eq(1).css('backgroundColor', 'blue');
colorItem.eq(2).css('backgroundColor', 'gray');
colorItem.eq(3).css('backgroundColor', 'pink');
colorItem.eq(4).css('backgroundColor', 'tomato');
$('.color_item').click(function (e) { 
    let colorChange= $(e.target).css('backgroundColor');
    $('#navBar').css('backgroundColor',`${colorChange}`);
    $('h1').css('color',`${colorChange}`)
    
});