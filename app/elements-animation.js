document.addEventListener('DOMContentLoaded', () => {
  let tl = gsap.timeline();

  tl.to('.menu-1', {
    duration: 1,
    x: 0,
    opacity: 0,
  })
    .from('.menu-2', {
      duration: 1,
      opacity: 0,
      delay: 1,
    })
    .from('.menu-3', {
      duration: 1,
      opacity: 0,
      delay: 2,
    })
    .from('.menu-4', {
      duration: 1,
      opacity: 0,
      delay: 2,
    })
    .from('.menu-5', {
      duration: 1,
      opacity: 0,
      delay: 2,
    });
});
