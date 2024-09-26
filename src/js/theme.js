const switchInput = document.querySelector('.switch__input');

switchInput.addEventListener('change', () => {
  if (
    document.documentElement.dataset.theme !== 'dark' &&
    switchInput.checked
  ) {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.querySelector('main').classList.remove('img');
  }
  if (!switchInput.checked) {
    document.documentElement.removeAttribute('data-theme');
    document.querySelector('main').classList.add('img');
  }
});
