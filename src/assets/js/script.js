import { CountUp } from 'countup.js';
import SmoothScroll from 'smooth-scroll';
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider';
import animateDesktopNav from './animateDesktopNav';
import animateMobileNav from './animateMobileNav';
import animateScroll from './animateScroll';
import scrollSpy from './scrollSpy';

import '../sass/main.scss';


// Initializing carousel

const aboutUsSlider = tns({
  container: '.slide-1__slide',
  gutter: 20,
  mouseDrag: true, //testing, remove later
  controls: true,
  controlsText: ["<", ">"],
  autoWidth: true,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  rewind: true,
})

const gallerySlider = tns({
  container: '.slider2',
  gutter: 20,
  mouseDrag: true,
  controls: true,
  controlsText: ["<", ">"],
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  rewind: true,
  responsive: {
    1200: {
      items: 5,
    },
    1000: {
      items: 4,
    },
    700: {
      items: 3,
    },
    600: {
      items: 2,
    },
    0: {
      items: 1,
    }
  }

});

// Initializing Count up
const countUp250 = new CountUp('250', 250, { duration: 3 });
const countUp40 = new CountUp('40', 40, { duration: 3 });
const countUp23k = new CountUp('23k', 23, { duration: 3 });
const countUp130k = new CountUp('130k', 130, { duration: 3 });

const statsSec = document.querySelector('.stats__cards');
const statsOptions = {
  thresholds: 1,
  rootMargin: '0px 0px -100px 0px'
};

const statsCountUp = new IntersectionObserver(function (entries, statsCountUp) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    }
    countUp250.start();
    countUp40.start();
    countUp23k.start();
    countUp130k.start();
    statsCountUp.unobserve(entry.target);


  })
}, statsOptions);

statsCountUp.observe(statsSec);

// Initializing smooth scroll
const isMobileContactUs = window.matchMedia('(max-width: 900px)');

const scroll = new SmoothScroll('a[href*="#"]', {
  header: '.navigation',
  speed: 500,
  durationMin: 1500,
  offset: function (anchor, toggle) {
    if ((toggle.id === 'nav-contact-us') && isMobileContactUs.matches) {
      return -5;
    } else if (toggle.id === 'nav-contact-us') {
      return -100;
    } else {
      return 40;
    }

  },
  easing: 'easeInOutQuart',
});

// detect if it is the device is mobile
const isDesktop = window.matchMedia('(min-width: 901px)');

// Initializing nav animations and scroll animations
animateDesktopNav(isDesktop);
animateMobileNav();
animateScroll();
scrollSpy(isDesktop);
