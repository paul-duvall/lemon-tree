const navSlide = () => {
  const burger = document.querySelector('.c-nav__burger');
  const nav = document.querySelector('.c-nav__list');
  const navLinks = document.querySelectorAll('.c-nav__menu-item');

  burger.addEventListener('click', () => {
    // Toggles nav
    nav.classList.toggle('c-nav__list--active');

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

navSlide();