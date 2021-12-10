const hamburguer = document.querySelector('.hamburguer-check');

const navBar = document.querySelectorAll('.navBar');

hamburguer.addEventListener('click', () => {
  navBar.forEach((e) => {
    e.classList.toggle('active');
  });
});
