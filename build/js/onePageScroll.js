$(document).ready(function() {
    var 
        screen = 0,
        container = $('.maincontent'),
        pages = $('section'),
        inScroll = false;

    $('.section:first-child').addClass('active');

    $('body').on('mousewheel', function(event) {
        var activePage = pages.filter('.active');
    
        if (!inScroll) {
            inScroll = true;
            if (event.deltaY > 0) {
                if (activePage.prev().length) {
                    screen--;
                }    
            } else {
                if (activePage.next().length) {
                    screen++;
                }
            }
        }

        var position = (-screen * 100) + '%';

        container.css('top', position);

        pages.eq(screen).addClass('active').siblings().removeClass('active');
        setTimeout(function() {
            inScroll = false;
        }, 1300);
    });
    
});