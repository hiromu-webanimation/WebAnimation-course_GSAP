jQuery(function ($) {
  // animation

  // header is-scrolled
  ScrollTrigger.create({
    start: 'top -100',
    end: 'max',
    toggleClass: {
      targets: '.header',
      className: 'is-scrolled',
    },
  });

  //img scrub
  const imgScrubElements = document.querySelectorAll('.js-img-scrub');
  imgScrubElements.forEach((imgScrubElement) => {
    gsap.fromTo(
      imgScrubElement,
      {
        clipPath: 'inset(10% 10% 10% 10% rounded 30px)',
      },
      {
        clipPath: 'inset(0% 0% 0% 0% round 0px)',
        scrollTrigger: {
          trigger: imgScrubElement,
          start: 'top bottom',
          end: 'bottom center',
          scrub: 1,
        },
      }
    );
  });

  // parallax
  let parallaxes = document.querySelectorAll('.js-parallax');
  parallaxes.forEach((parallax) => {
    gsap.fromTo(
      parallax.querySelector('img'),
      {
        yPercent: -15,
      },
      {
        yPercent: 0,
        scrollTrigger: {
          trigger: parallax,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );
  });

  // stagger
  let staggerElements = document.querySelectorAll('.js-stagger');
  staggerElements.forEach((staggerElement) => {
    gsap.fromTo(
      staggerElement.querySelectorAll('.js-stagger-item'),
      {
        opacity: 0,
        y: -10,
      },
      {
        opacity: 1,
        stagger: 0.1,
        duration: 0.8,
        ease: 'power3.inOut',
        scrollTrigger: {
          trigger: staggerElement,
          start: 'top 90%',
        },
      }
    );
  });
});
