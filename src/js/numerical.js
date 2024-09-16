export const numericalInit = () => {
  const numerical = document.querySelector('.guess-number');
  numerical.innerHTML = `<form action="#" class="form__numerical">
<input
  class="input__numerical"
  type="number"
  id="number"
  placeholder="Введіть число"
/>
<button class="button__numerical" id="checkNumber"></button>
</form>

<p class="result__numerical" id="result"></p>
`;

  const number = document.querySelector('#number');
  const buttonCheckNumber = document.querySelector('#checkNumber');
  const result = document.querySelector('#result');
  buttonCheckNumber.addEventListener('click', checkNumber);

  let randomNumber = Math.floor(Math.random() * 10) + 1;

  const checkNumber = () => {
    const userGuess = parseInt(number.value);

    if (userGuess === randomNumber) {
      result.innerHTML = `Вітаю, ви вгадали число! ${randomNumber}`;
      result.style.color = 'green';
    } else if (userGuess < randomNumber) {
      result.innerHTML = 'Ви не вгадали';
      result.style.color = 'red';
    }
    randomNumber = Math.floor(Math.random() * 10) + 1;
  };
};
