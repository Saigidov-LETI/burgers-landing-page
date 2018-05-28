$(function() {
    initMobileHamburger();
});

function initMobileHamburger() {
    var btn = $('.js-hamburger-menu');
    var activeclass = "header--active";
    var nav = $('#header-id');
  
    btn.click(function (event) {
    //   console.log('click');
      event.preventDefault();
      nav.toggleClass(activeclass);
      $('body, html').toggleClass('active');
    });
  }