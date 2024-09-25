//знайдені елементи
const submitBtn = document.querySelector('#submit-footer-button');
const closeBtn = document.querySelector('[data-login-close]');
const menu = document.querySelector('[data-footer-menu]');
const backdrop = document.querySelector('[data-backdrop]');
const form = document.querySelector('.footer__form');
//функціі
const submitBtnHandler = event => {
  event.preventDefault();
  menu.classList.remove('hidden');
  document.body.classList.toggle('no-scroll');
  backdrop.classList.toggle('backdrop');
};
const closeBtnHandler = () => {
  menu.classList.toggle('hidden');
  document.body.classList.remove('no-scroll');
  backdrop.classList.remove('backdrop');
};
//слухачі подій
form.addEventListener('submit', submitBtnHandler);
closeBtn.addEventListener('click', closeBtnHandler);
