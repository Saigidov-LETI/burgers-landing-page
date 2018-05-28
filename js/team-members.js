$(document).ready(function(){
    $('.team-members__title').on('click', function(e){
        e.preventDefault();

        var $this = $(this), 
            title = $this.closest('.team-members__title'),
            content = $(document).find('.team-members__content');
            item = $(document).find('.team-members__item');
        
        if (title.parent('.team-members__item').hasClass('active')) {
            title.parent('.team-members__item').removeClass('active');
        } else {
            $('.team-members__title').parent().removeClass('active');
            title.parent('.team-members__item').addClass('active') ;
        }
    });
});
