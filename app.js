const navSlide = () => {
  const burger = document.querySelector('.c-nav__burger');
  const nav = document.querySelector('.c-nav__list');
  const navLinks = document.querySelectorAll('.c-nav__menu-item');
  const navSection = document.querySelector('.nav');

  burger.addEventListener('click', () => {
    // Toggles nav
    nav.classList.toggle('c-nav__list--active');
    navSection.classList.toggle('active');

    // Animate links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.5s ease forwards ${index / 5 + .7}s`;
      }
    });

    // Toggle burger animation
    burger.classList.toggle('toggle');
  });
}

const copyrightDate = () => {
  const date = new Date();
  const year = date.getFullYear();
  const element = document.querySelector('.c-footer__date');
  element.innerHTML = year;
}

const App = () => {
  navSlide();
  copyrightDate();
}

App();

