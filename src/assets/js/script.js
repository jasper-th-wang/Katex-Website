import { CountUp } from 'countup.js';
// import { tns } from './tiny-slider.js';
import SmoothScroll from 'smooth-scroll';
import { tns } from '../../../node_modules/tiny-slider/src/tiny-slider';
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import '../sass/main.scss';


// Carousel

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

// media query at 900px for converting slider to gallery and vice versa
const gallerySlider = tns({
  container: '.slider2',
  gutter: 20,
  mouseDrag: true, //testing, remove later
  controls: true,
  controlsText: ["<", ">"],
  // autoWidth: true,
  autoplay: true,
  autoplayButtonOutput: false,
  nav: false,
  rewind: true,
  // center: true,
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

// Nav bar observer

const headerSec = document.querySelector('.header-banner');
const navigationSec = document.querySelector('.navigation');
const navLogo = document.querySelector('.navigation__logo');
const navBg = document.querySelector('.navigation__white-Bg');
const navItems = document.querySelectorAll('.navigation__menu-item');
const hamburgerInner = document.querySelector('.hamburger-inner');


const headerOptions = {
  threshold: 1
};
// hamburger-inner--scrolled
const headerObserver = new IntersectionObserver(function (entries, headerObserver) {
  entries.forEach(entry => {

    if (!entry.isIntersecting) {
      navigationSec.classList.add('navigation--scrolled');
      navLogo.classList.add('navigation__logo--scrolled');
      navBg.classList.add('navigation__white-Bg--scrolled');
      navItems.forEach(el => {
        el.classList.add('navigation--green');
      });
      hamburgerInner.classList.add('hamburger-inner--scrolled');

    } else {
      navigationSec.classList.remove('navigation--scrolled');
      navLogo.classList.remove('navigation__logo--scrolled');
      navBg.classList.remove('navigation__white-Bg--scrolled');
      navItems.forEach(el => {
        el.classList.remove('navigation--green');
      });
      hamburgerInner.classList.remove('hamburger-inner--scrolled');
    }

  })

}, headerOptions);


// if min-width = 901px then cancel the scrolled menu effect
const isDesktop = window.matchMedia('(min-width: 901px)');

const toggleDesktopMenu = () => {
  if (isDesktop.matches) {
    headerObserver.observe(headerSec);
  } else {
    headerObserver.unobserve(headerSec);
    navigationSec.classList.add('navigation--scrolled');
    navLogo.classList.add('navigation__logo--scrolled');
    navBg.classList.add('navigation__white-Bg--scrolled');
  }
}

toggleDesktopMenu();

isDesktop.addEventListener('change', toggleDesktopMenu);


// Slide-in observer
const slideNormals = document.querySelectorAll('.slide-in-bottom');
const slideOptions = {
  rootMargin: '0px 0px -100px 0px'
};
const slideOnScroll = new IntersectionObserver(function (entries, slideOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      entry.target.classList.remove('appear');

    } else {
      entry.target.classList.add('appear');

    }

  })
}, slideOptions)

slideNormals.forEach(el => {
  slideOnScroll.observe(el);
})

// contact form slide in observer
const slideLg = document.querySelector('.slide-in-bottom--lg');
const contactSec = document.querySelector('.contact-us');

const slideLgOptions = {
  rootMargin: '0px 0px -100px 0px'
  // thresholds = .2
};
const slideLgOnScroll = new IntersectionObserver(function (entries, slideLgOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      slideLg.classList.remove('appear');
    } else {
      slideLg.classList.add('appear');

    }

  })

}, slideLgOptions)

slideLgOnScroll.observe(contactSec);

//dim grey when leaving the header-banner
const unselectOptions = {
  // threshold: ,
  rootMargin: '-100px'
}


const unselectObserver = new IntersectionObserver(function (entries, unselectObserver) {

  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      navigationSec.classList.add('unselected');
    } else {
      navigationSec.classList.remove('unselected');
    }
  })

}, unselectOptions)

unselectObserver.observe(headerSec);

// Homemade scroll spy

let vh = window.innerHeight;

let aboutUs = document.querySelector('.about-us').offsetTop - 200;
let portfolio = document.querySelector('.portfolio').offsetTop - 200;
let privateLabel = document.querySelector('.private-label').offsetTop - 200;
let contactUs = document.querySelector('.contact-us').offsetTop;
let navAbout = document.getElementById('nav-about-us');
let navPort = document.getElementById('nav-portfolio');
let navPrivate = document.getElementById('nav-private-label');
let navContact = document.getElementById('nav-contact-us');
let navActive = document.querySelector('.active');
let navPlaceHolder = document.getElementById('nav-placeholder');

let scrolling = false;
window.addEventListener('scroll', (event) => {
  scrolling = true;
})

function checkSection() {
  if (window.pageYOffset < aboutUs) {
    navAbout.classList.remove('active');
    navPlaceHolder.classList.add('active');
  } else if (window.pageYOffset >= aboutUs && window.pageYOffset < portfolio) {
    navActive.classList.remove('active');
    navAbout.classList.add('active');
  } else if (window.pageYOffset >= portfolio && window.pageYOffset < privateLabel) {
    navActive.classList.remove('active');
    navPort.classList.add('active');
  } else if (window.pageYOffset >= privateLabel && window.pageYOffset < contactUs) {
    navActive.classList.remove('active');
    navPrivate.classList.add('active');
  } else if (window.pageYOffset >= contactUs) {
    navActive.classList.remove('active');
    navContact.classList.add('active');
  }
}

setInterval(function () {
  if (scrolling) {
    navActive = document.querySelector('.active');
    checkSection();
    scrolling = false;
  }
}, 400);

window.addEventListener('resize', (event) => {
  aboutUs = document.querySelector('.about-us').offsetTop - 200;
  portfolio = document.querySelector('.portfolio').offsetTop - 200;
  privateLabel = document.querySelector('.private-label').offsetTop - 200;
  contactUs = document.querySelector('.contact-us').offsetTop;
});



// Count up
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

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenuList = document.querySelector('.navigation__menu-list');
const mobileMenu = document.querySelector('.navigation__menu');


const toggleMenu = () => {
  hamburger.classList.toggle('is-active');
  mobileMenuList.classList.toggle('mobile-menu-active');
  mobileMenu.classList.toggle('navigation__menu--scrolled');

}

// Body Lock Scroll
let lockScrollState = 0; // 0 closed, 1 is opened
const lockScroll = () => {
  if (lockScrollState === 0) {
    disableBodyScroll(mobileMenuList);
    lockScrollState = 1;
  } else {
    enableBodyScroll(mobileMenuList);
    lockScrollState = 0;
  }
}

// hamburger handler
hamburger.addEventListener('click', () => {
  toggleMenu();
  lockScroll();

})

// close menu on click call back

const closeMenu = () => {
  hamburger.classList.remove('is-active');
  mobileMenuList.classList.remove('mobile-menu-active');
  enableBodyScroll(mobileMenuList);
  lockScrollState = 0;
}

// close mobile menu and disable lock scroll
const navItem = [...navItems];
navItem.forEach(item => {
  item.addEventListener('click', () => {
    setTimeout(() => mobileMenu.classList.remove('navigation__menu--scrolled'), 400)
    closeMenu();
  });
});

navLogo.addEventListener('click', () => {
  setTimeout(() => mobileMenu.classList.remove('navigation__menu--scrolled'), 400)
  closeMenu();
});



