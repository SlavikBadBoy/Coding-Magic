export const biggestNubmerInit = () => {
  const biggestNumberContainer = document.querySelector('.biggest-number');
  biggestNumberContainer.innerHTML = ` <h1 class="maximum__title title">Введіть 3 числа</h1>
    <div class="maximum__inputs">
      <input
        data-biggestnumber-input
        class="maximum__input input"
        type="number"
        placeholder="Введіть число"
      />
      <input
      data-biggestnumber-input
        class="maximum__input input"
        type="number"
        placeholder="Введіть число"
      />
      <input
      data-biggestnumber-input
        class="maximum__input input"
        type="number"
        placeholder="Введіть число"
      />
    </div>
    <p data-biggestnubmer-text class="maximum__text">Найбільше число, яке ви ввели - </p>`;
  const biggestNumberText = document.querySelector('[data-biggestnubmer-text]');
  const biggestNumberInput = document.querySelectorAll(
    '[data-biggestnumber-input]'
  );
  const inputHandler = () => {
    const values = Array.from(biggestNumberInput).map(input => input.value);
    let allFilled = true;
    for (let i = 0; i < values.length; i += 1) {
      if (values[i] === '') {
        allFilled = false;
        break;
      }
    }
    if (allFilled) {
      const maxNumber = Array.from(biggestNumberInput).reduce(
        (max, input) => Math.max(max, Number(input.value) || 0),
        0
      );
      biggestNumberText.textContent = `Найбільше число, яке ви ввели - ${maxNumber}`;
    }
  };

  biggestNumberInput.forEach(input =>
    input.addEventListener('change', inputHandler)
  );
};