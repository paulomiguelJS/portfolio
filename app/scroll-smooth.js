function scrollToSectionClick() {
  const interLinks = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    const top = section.offsetTop - 150;

    window.scrollTo({
      top: top,
      behavior: 'smooth',
    });
  }

  interLinks.forEach((link) => {
    link.addEventListener('click', scrollToSection);
  });
}

scrollToSectionClick();

function scrolltoTop() {
  const btnScrolltoTop = document.querySelector('.btnScrolltoTop');

  btnScrolltoTop.addEventListener('click', function () {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  });
}

scrolltoTop();
