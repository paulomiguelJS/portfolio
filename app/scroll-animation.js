function initAnimeScroll() {
  function animeScroll() {
    const sections = document.querySelectorAll('.js-scroll');
    const halfWindow = window.innerHeight * 0.6;

    sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - halfWindow < 0;
      if (isSectionVisible) {
        section.classList.add('active');
      } else {
        section.classList.remove('active');
      }
    });
  }
  window.addEventListener('scroll', animeScroll);
}

initAnimeScroll();

/*
function animeTitleRight() {
  const animeTitles = document.querySelector('.text-right');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.2;
    animeTitles.style.transform = `translateX(${-0.13 * val}%)`;
  });
}

animeTitleRight();

function animeTitleLeft() {
  const animeTitles = document.querySelector('.text-left');

  window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const val = scrolled * 0.2;
    animeTitles.style.transform = `translateX(${0.3 * val}%)`;
  });
}

animeTitleLeft();
*/
