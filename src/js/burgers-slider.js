/* const left = document.querySelector(#arrow-left);
const right = document.querySelector(#arrow-right);
const list = document.querySelector(#burgers);
const computed = getComputedStyle(burgers__list);
 */

$(document).ready(function(){
    $("#burgers").owlCarousel({
        items: 1,
        dots: false,
        nav: true,
        navText: ["<img src=\"img/icons/arrow-scroll.svg\">","<img src=\"img/icons/arrow-scroll.svg\">"],
        loop: true
    });
    
  });

  