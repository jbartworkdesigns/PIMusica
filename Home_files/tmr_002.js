var slideout = new Slideout({
  'panel': document.getElementById('main'),
  'menu': document.getElementById('menu'),
  'padding': 256,
  'tolerance': 70,
  'easing': 'cubic-bezier(.32,2,.55,.27)',
  'touch': false
});

document.querySelector('.js-slideout-toggle').addEventListener('click', function() {
  slideout.toggle();
});

/*
The following three lines, along with the touch: false option prevent swiping to open the menu. Once the menu is open, touch is reenabled until menu is closed again.
This is necessary because the touch enabled carousel on the Past Events page would conflict with the menu when swiped.
 */
slideout.once('open', slideout._initTouchEvents);
slideout.on('open', slideout.enableTouch);
slideout.on('close', slideout.disableTouch);

var fixed = document.querySelector('.header');

slideout.on('translate', function(translated) {
  fixed.style.transform = 'translateX(' + translated + 'px)';
});

slideout.on('beforeopen', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(256px)';
});

slideout.on('beforeclose', function () {
  fixed.style.transition = 'transform 300ms ease';
  fixed.style.transform = 'translateX(0px)';
});

slideout.on('open', function () {
  fixed.style.transition = '';
});

slideout.on('close', function () {
  fixed.style.transition = '';
});

var width = $(window).width();

$(window).on('resize', function($){
  if (jQuery(this).width() !== width){
    width = jQuery(this).width();
    if (slideout.isOpen()) {
      slideout.close();
    }
  }
});
