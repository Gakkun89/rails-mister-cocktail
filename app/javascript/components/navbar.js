const initUpdateNavbarOnScroll = () => {
  const navbar = document.querySelector('.navbar-lewagon');
  if (navbar) {
    window.addEventListener('scroll', () => {
      if (window.scrollY >= (window.innerHeight - 200)){
        navbar.classList.add('navbar-lewagon-color');
      } else {
        navbar.classList.remove('navbar-lewagon-color');
      }
    });
  }
}

export { initUpdateNavbarOnScroll };
