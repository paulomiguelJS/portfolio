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
