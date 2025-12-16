jQuery(function ($) {
  // animation
  // parallax

  ScrollTrigger.create({
    start: 'top -100',
    end: 'max',
    toggleClass: {
      targets: '.header',
      className: 'is-scrolled',
    },
  });
});
