
// MOBILE MENU

$('.mobil-menu').on('click', function(e) {
  $('.menu').toggleClass('active');
})

$('section').on('click', function(e) {
  $('.menu').removeClass('active');
})

// SLIDER

const mySwiper = new Swiper('.swiper', {
  direction : 'horizontal',
  breakpoints: {
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      // spaceBetween: 30
    },
    // when window width is >= 540px
    767: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    // when window width is >= 720px
    991 : {
        slidesPerView: 3,
        spaceBetween: 20
    },
    // when window width is >= 960px
    1199 : {
        slidesPerView: 3,
        spaceBetween: 20
    }
      },
      loop : true,
      stopOnLastSlide : false,
      autoplay : {
        delay : 3000
      },

})

// CTICK MENU


window.addEventListener("scroll", function() {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 667)
})

window.addEventListener("scroll", function() {
  var nav = document.querySelector("nav");
  nav.classList.toggle("sticky-menu", window.scrollY > 667)
})

// VIDEO

// $(".offer-video").on("mouseover", "video", function(){
//   this.play();
// });
// $(".offer-video").on("mouseleave", "video", function(){
//   this.pause();
// })

// setTimeout( function() {
//   document.querySelector('video').muted = false
// }, 2000)

// $('video').on('click', function(e) {
//   document.querySelector('video').muted = false
// })



jQuery(".photos__img").click(function (e){
  jQuery(e.target).animate({width: '+=20px', height: '+=20px'}, 100);
});

var image = document.getElementsByClassName('.photos__img');
image.onclick = function(){
   this.style.height = '500px';
   this.style.width= '500px';
}
