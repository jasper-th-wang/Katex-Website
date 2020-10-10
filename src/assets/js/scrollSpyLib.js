/**
 * This is the scrollspy library I am experimenting making
 * This is the scroll spy for the page:
 * this illumainates the nav list item on nav bar when the viewport 
 * is on the corresponding section
 */

export default function scrollSpyLib(isDesktop) {
  // Homemade scroll spy

  let vh = window.innerHeight;

  //the section
  let aboutUs = document.querySelector('.about-us').offsetTop - 200;
  let portfolio = document.querySelector('.portfolio').offsetTop - 200;
  let privateLabel = document.querySelector('.private-label').offsetTop - 200;
  let contactUs = document.querySelector('.contact-us').offsetTop;

  //the menu list item
  let navAbout = document.getElementById('nav-about-us');
  let navPort = document.getElementById('nav-portfolio');
  let navPrivate = document.getElementById('nav-private-label');
  let navContact = document.getElementById('nav-contact-us');

  // the previous active menu list item, made to be targeted and remove .active class
  let navActive = document.querySelector('.active');

  // ??, i remember it's there to avoid error or something
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
    let contactUsOffset = 0;
    if (!isDesktop.matches) contactUsOffset = 300;
    contactUs = document.querySelector('.contact-us').offsetTop - contactUsOffset;
  });
}