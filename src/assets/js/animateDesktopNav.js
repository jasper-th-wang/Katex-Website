/**
 * This is for performing navbar animation including:
 * 1. showing navbar when scrolled pass hero
 * 2. cancel the 1. animation when display is below 901px width (because it's buggy on mobile)
 * 3. dim nav list item when scrolled pass hero and when navbar is showing
 */

export default function animateDesktopNav(isDesktop) {

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
  // const isDesktop = window.matchMedia('(min-width: 901px)');

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

}

