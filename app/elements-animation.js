document.addEventListener('DOMContentLoaded', () => {
  let tl = gsap.timeline();

  tl.from('.menu-1', {
    duration: 1,
    y: 50,
    opacity: 0,
    delay: 0.8,
    ease: 'power3.out',
  })
    .from(
      '.menu-2',
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      },
      '-=0.8',
    )
    .from(
      '.menu-3',
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      },
      '-=0.8',
    )
    .from(
      '.menu-4',
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      },
      '-=0.8',
    )
    .from(
      '.menu-5',
      {
        duration: 1,
        y: 50,
        opacity: 0,
        ease: 'power3.out',
      },
      '-=0.8',
    )
    .from(
      '.container-item div',
      {
        duration: 1,
        y: 300,
        opacity: 0,
        stagger: { each: 0.2 },
        ease: 'power3.out',
      },
      '-=0.8',
    );
});
