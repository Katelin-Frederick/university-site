// NavBar
const navToggle = () => {
  // DOM Elements
  const toggler = document.getElementById('toggler');
  const nav = document.getElementById('navList');
  const navLinks = document.querySelectorAll('.navItem');
  const menu = document.querySelector('.menu');

  toggler.addEventListener('click', () => {
    // Toggler/Close Button Animation
    toggler.classList.toggle('toggleOpenClose');

    // Animate Links
    navLinks.forEach((link, index) => {
      if(link.style.animation) {
        link.style.animation = '';
      } else {
        link.style.animation = `navLinkFade 0.7s ease forwards ${index / 6 + 0.8}s`;
      }
    });

    menu.classList.toggle('navToggle');
  });
}

navToggle();

// Smooth Scrolling
const navLogo = new SmoothScroll('nav span a[href*="#"]', {speed: 1200});
const learnMoreBtn = new SmoothScroll('header div div #learnMoreBtn[href*="#"]', {speed: 2000});