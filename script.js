$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {       
        $('#return-to-top').fadeIn(500);    
    } else {
        $('#return-to-top').fadeOut(500);   
    }
});
$('#return-to-top').click(function() {      
    $('body,html').animate({
        scrollTop : 0                     
    }, 500);
});

$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
        event.preventDefault();
        $('html, body').stop().animate({
            scrollTop: target.offset().top
        }, 1200);
    }
});