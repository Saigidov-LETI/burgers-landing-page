$(document).ready(function() {

    $('.burgers__composition').each(function() {
        $(this).click(function() {
            $('.composition-list').toggleClass('composition-list--active');
            
        });
    });

    $("#burgers").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ["<img src=\"build/img/icons/arrow-scroll.svg\">","<img src=\"build/img/icons/arrow-scroll.svg\">"],
        loop: true
    });
    
    /* $(function() {
        initMobileHamburger();
    }); */
    
    function initMobileHamburger() {
        var btn = $('.js-hamburger-menu');
        var activeclass = "header--active";
        var nav = $('#header-id');
      
        btn.click(function (event) {
          event.preventDefault();
          nav.toggleClass(activeclass);
          $('body, html').toggleClass('active');
        });
    };

    initMobileHamburger();


    /* $(function() {
        initMap();
    }); */
    /* 
    function initMap() {
        var element = document.getElementById('map');
        var cordinates = {
            lat: 59.905711, 
            lng: 30.2926403
        };

        var map = new google.maps.Map(element, {
            zoom: 11,
            center: cordinates
        });

        var image = 'build/img/icons/map-marker.svg';

        function addMarker(markerCordinates) {
            var marker = new google.maps.Marker({
                position: markerCordinates,
                map: map,
                icon: image
            });
        }

        addMarker({ lat: 59.943116, lng: 30.380792 });
        addMarker({ lat: 59.974191, lng: 30.312069 });
        addMarker({ lat: 59.886129, lng: 30.303641 });
        addMarker({ lat: 59.907195, lng: 30.504854 });
    };

    $(function() {
        initMap();
    });
     */
    function menuSlider() {
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
     
    };

    menuSlider();
    
    // $(document).ready(function()
/*     function onePageScroll() {
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
        
    };

    onePageScroll(); */

    function teamMembers() {
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
    };

    function ancCreateOverlay() {
        const openButton = document.querySelector(".openOverlay");
        const template = document.querySelector("#overlayTemplate").innerHTML;
        const overlay = createOverlay(template);
    
        openButton.addEventListener("click", function(e) {
            e.preventDefault();
            overlay.open();
            overlay.setContent("Сообщение отправлено");
            $("body").css("overflow", "hidden");
        });    
    };
    
    function createOverlay(template) {
        ancCreateOverlay();

        let fragment = document.createElement('div');

        fragment.innerHTML = template;

        const overlayElement = fragment.querySelector(".overlay");
        const contentElement = fragment.querySelector(".content");
        const closeElement = fragment.querySelector(".close");
        
        fragment = null;

        overlayElement.addEventListener("click", e => {
            if (e.target === overlayElement) {
            closeElement.click();
            }
        });

        closeElement.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector('.order').removeChild(overlayElement);
            $("body").css("overflow", "auto");
        });

        return {
            open() {
            document.querySelector('.order').appendChild(overlayElement);
            },

            close() {
            closeElement.click();
            },

            setContent(content) {
            contentElement.innerHTML = content;
            }
        };
    };

    function ancCreateOverlayFeedback() {
        const overlayFeedback = createOverlay();
        const contentFeedbackName = overlayFeedback.querySelector(".contentFeedbackName");
        const contentFeedbackComment = overlayFeedback.querySelector(".contentFeedbackComment");
            
        $('.jsBtnFeedback').each(function() {
            $(this).click(function(e) {
                e.preventDefault();
                document.querySelector('.feedback').appendChild(overlayFeedback);
                $("body").css("overflow", "hidden");
                var z = this;
                var popParent = z.parentNode;
                const name = popParent.querySelector(".feedback__title");
                const comment = popParent.querySelector(".feedback__hover p");
                contentFeedbackName.textContent = name.innerHTML;
                contentFeedbackComment.textContent = comment.innerHTML;
            })
        }); 
        
        $('.jsBtnFeedbackMobile').each(function() {
            $(this).click(function(e) {
                e.preventDefault();
                document.querySelector('.feedback').appendChild(overlayFeedback);
                $("body").css("overflow", "hidden");
                var z = this;
                var popParent = z.parentNode;
                const name = popParent.querySelector(".feedback__title");
                const comment = popParent.querySelector(".feedback__hover p");
                contentFeedbackName.textContent = name.innerHTML;
                contentFeedbackComment.textContent = comment.innerHTML;
            })
        });
    };

    function createOverlay() {   
        const overlayElement = document.createElement('div');
        overlayElement.classList.add('overlayFeedback');
        const template = document.querySelector('#overlayTemplateFeedback');
        overlayElement.innerHTML = template.innerHTML;
        
        const closeElement = overlayElement.querySelector(".closeFeedbackModal");
        closeElement.addEventListener("click", e => {
            e.preventDefault();
            document.querySelector('.feedback').removeChild(overlayElement);
            $("body").css("overflow", "auto");
        });
    
        overlayElement.addEventListener("click", e => {
            if (e.target == overlayElement) {
              closeElement.click();
            }
        });
    
        return overlayElement;
    };

    ancCreateOverlayFeedback();
  });
