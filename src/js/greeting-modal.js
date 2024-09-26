const backdrop = document.querySelector('[data-backdrop]');
const modal = document.querySelector('[data-modal]');

const closeModalHandler = event => {
  if (event.target.closest('[data-modal-close]')) {
    backdrop.classList.add('is-hidden');
    modal.removeEventListener('click', closeModalHandler); // Спочатку видаляємо обробник події
    document.body.classList.remove('no-scroll');
    setTimeout(() => {
      backdrop.remove();
    }, 250);
  }
};

modal.addEventListener('click', closeModalHandler);

const form = document.querySelector('[data-modal-form]');
const input = document.querySelector('[data-modal-input]');
const output = document.querySelector('[data-modal-output]');
const modalFormHandler = event => {
  event.preventDefault();
  let inputValue = input.value.trim();

  if (inputValue.length > 0) {
    output.innerHTML = `Вітаємо, ${inputValue}!`;

    backdrop.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
    modal.removeEventListener('click', closeModalHandler); // Спочатку видаляємо обробник події
    setTimeout(() => {
      backdrop.remove();
    }, 250);
  } else alert("Введіть ваше ім'я!");
};

form.addEventListener('submit', modalFormHandler);
