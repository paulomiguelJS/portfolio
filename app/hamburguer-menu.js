const hamburguer = document.querySelector('.hamburguer-check');

const navBar = document.querySelector('#navBar');

const links = document.querySelectorAll('.link');

hamburguer.addEventListener('click', () => {
  navBar.classList.toggle('active');
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    navBar.classList.remove('active');
  });
});
