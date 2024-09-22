export const calculatorYearInit = () => {
  const title = document.querySelector('.calculator-year__container');
  const createTitle = document.createElement('h2');

  createTitle.classList.add('title__leap-year');
  createTitle.textContent = 'Перевір в який рік ти народився';
  title.prepend(createTitle);
  const leapYear = document.querySelector('.calculator-year');
  leapYear.innerHTML = `  <form action="#" class="form__check-year">      <input
class="input__check-year"
type="number"
id="year"
placeholder="Введіть рік народження"
/>
<button class="button__check-year" id="checkYearButton"></button>
</form>

<p class="result__check-year" id="result"></p>
`;
  const calculatorYear = document.querySelector('#year');
  const result = document.querySelector('#result');
  const button = document.querySelector('#checkYearButton');

  const checkCalculatorYear = () => {
    const year = parseInt(calculatorYear.value);
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
      result.innerHTML = 'Ви народилися у високосний рік!';
      result.style.color = `green`;
    } else {
      result.innerHTML = 'Ви народилися не в високосний рік.';
      result.style.color = 'red';
    }
  };
  button.addEventListener('click', checkCalculatorYear);
};
