export const numericalInit = () => {
  const title = document.querySelector('.guess-number__container');
  const createTitle = document.createElement('h2');

  createTitle.classList.add('title__numerical');
  createTitle.textContent = 'Вгадай число, яке загадав комп’ютер';
  title.prepend(createTitle);
  const numerical = document.querySelector('.guess-number');
  numerical.innerHTML = `<form action="#" class="form__numerical">
<input
  class="input__numerical"
  type="number"
  id="number"
  placeholder="Введіть число"
/>
<button type='button' class="button__numerical" id="checkNumber"></button>
</form>

<p class="result__numerical" id="result">вгадай число</p>
`;

  const number = document.querySelector('#number');
  const buttonCheckNumber = document.querySelector('#checkNumber');
  const result = document.querySelector('#result');

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  const checkNumber = () => {
    const userGuess = parseInt(number.value);

    if (userGuess === randomNumber) {
      result.innerHTML = `Вітаю, ви вгадали число! ${randomNumber}`;
      result.style.color = 'green';
    } else if (userGuess < randomNumber) {
      result.innerHTML = `Ви не вгадали, чило ${randomNumber}`;
      result.style.color = 'red';
    }
    randomNumber = Math.floor(Math.random() * 10) + 1;
  };
  buttonCheckNumber.addEventListener('click', checkNumber);
};
