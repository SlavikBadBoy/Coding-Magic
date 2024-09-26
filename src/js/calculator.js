export const calculatorInit = () => {
  const calculatorContainer = document.querySelector('.calculator');
  calculatorContainer.innerHTML = `   
  <h2 class="calculator__title title">Калькулятор</h2>
    <div class="calculator__main">
      <label for="calculator-first-number">Перше число</label>
      <input
        type="number"
        class="calculator__input"
        id="calculator-first-number"
        placeholder="Введіть число"
      />
      <div class="calculator__operators" data-actions>
        <button class="calculator__operator" data-action='+'>+</button>
        <button class="calculator__operator" data-action='*'>
          *
        </button>
        <button class="calculator__operator" data-action='-'>-</button>
        <button class="calculator__operator" data-action='/'>/</button>
      </div>
      <label for="calculator-second-number">Друге число</label>
      <input
        type="number"
        class="calculator__input"
        id="calculator-second-number"
        placeholder="Введіть число"
      />
      <button class="calculator__operator" id="operator-equals">=</button>
      <span class="calculator__input" id="calculator-result">Результат</span>
    </div>
  `;
  //змінні елементів
  const firstNumber = document.querySelector('#calculator-first-number');
  const secondNumber = document.querySelector('#calculator-second-number');
  const result = document.querySelector('#calculator-result');
  const actions = document.querySelector('[data-actions]');
  const equals = document.querySelector('#operator-equals');
  let selectedButton = null;
  let operator = '';
  //кольорові рамки
  const actionHandler = event => {
    const clickedButton = event.target;
    operator = clickedButton.dataset.action;

    if (selectedButton) {
      selectedButton.style.border = 'none';
    }

    clickedButton.style.border = '1px solid green';
    selectedButton = clickedButton;
  };
  actions.addEventListener('click', actionHandler);

  const handlerResult = () => {
    switch (operator) {
      case '+':
        result.textContent =
          parseFloat(firstNumber.value) + parseFloat(secondNumber.value);

        break;
      case '*':
        result.textContent =
          parseFloat(firstNumber.value) * parseFloat(secondNumber.value);
        break;
      case '-':
        result.textContent =
          parseFloat(firstNumber.value) - parseFloat(secondNumber.value);
        break;
      case '/':
        result.textContent =
          parseFloat(firstNumber.value) / parseFloat(secondNumber.value);
        if (parseFloat(secondNumber.value) === 0) {
          result.textContent = 'Помилка';
        }
        break;
    }
  };
  equals.addEventListener('focus', handlerResult);
};
