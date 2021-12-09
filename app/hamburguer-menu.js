const hamburguer = document.querySelector('.hamburguer-check');

const navBar = document.querySelector('.navBar');
hamburguer.addEventListener('click', () => {
  navBar.classList.toggle('active');
});
