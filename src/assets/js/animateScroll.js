/**
 * This is for handling scroll animation
 */

export default function animateScroll() {
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
}