import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';

/**
 * This is for handling animation for the mobile nav menu
 */


export default function animateMobileNav() {
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
  const navItems = document.querySelectorAll('.navigation__menu-item');
  const navLogo = document.querySelector('.navigation__logo');
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
}