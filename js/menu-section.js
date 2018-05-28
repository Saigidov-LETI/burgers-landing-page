$(function() {
    var btn = $('.menu-list__title');
    var activeClass = "menu-list__item_active";

    btn.click(function (event) {
        event.preventDefault();
        var parent = $(this).parent();

        if (parent.hasClass(activeClass)) {
            parent.removeClass(activeClass);
        } else {
            btn.parent().removeClass(activeClass);
            parent.addClass(activeClass) ;
        }
    });
 
});
 