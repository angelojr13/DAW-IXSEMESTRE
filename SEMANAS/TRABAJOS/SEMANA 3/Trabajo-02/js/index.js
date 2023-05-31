const $header = document.querySelector('.header');
const $refMenu = document.querySelector('.menu');
const $refMenuBtn = document.querySelector('.menu-btn');
const $logo = document.getElementById('logo');

window.addEventListener('scroll', () => {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > 140) {
    $logo.src = 'images/tr-logo-2.png';
  } else {
    $logo.src = 'images/tr-logo.png';
  }

  scrollTop > 140
    ? $header.classList.add('bg-header') &&
      $refMenu.classList.add('bg-header')
    : $header.classList.remove('bg-header') &&
      $refMenu.classList.remove('bg-header');
});

const handleToggleMenu = () => {
  $refMenuBtn.firstElementChild?.classList.toggle('none');
  $refMenuBtn.lastElementChild?.classList.toggle('none');
  $refMenu.classList.toggle('is-active');
};

const handleCloseMenu = (e) => {
  if (!e.target.matches('.menu a')) {
    return false;
  }

  $refMenuBtn.firstElementChild.classList.remove('none');
  $refMenuBtn.lastElementChild.classList.add('none');
  $refMenu.classList.remove('is-active');
};

const array = ['A', 'B', 'C', 'D', 'E'];

console.log(...array);
