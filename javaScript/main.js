// Navigator mobile menu
const hamburger = document.querySelector('.navigator-menu__burger');
const menu = document.querySelector('.hidden-menu');
const closeButton = document.querySelector('.hidden-menu__x-element');

hamburger.addEventListener('click', () => {
  menu.style.display = 'block';
  document.body.style.overflow = 'hidden';
});

closeButton.addEventListener('click', () => {
  menu.style.display = 'none';
  document.body.style.overflow = 'visible';
});
