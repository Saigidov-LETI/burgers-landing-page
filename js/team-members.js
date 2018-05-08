$(document).ready(function(){
    $('.team-members__title').on('click', function(e){
        e.preventDefault();

        var $this = $(this), 
            title = $this.closest('.team-members__title'),
            content = $(document).find('.team-members__content');
            item = $(document).find('.team-members__item');
            // for (var i = 0; i < 5; i++ ) {
            //     if (item[i].hasClass('active')) {
            //         console.log(item[i]);
            //         $this.removeClass('active');
            //     }     
            // }
        title.parent('.team-members__item').toggleClass('active');
    });
});
