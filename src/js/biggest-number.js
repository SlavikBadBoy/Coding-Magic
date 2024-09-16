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
  // console.log(biggestNumberContainer);
  const biggestNumberText = document.querySelector('[data-biggestnubmer-text]');
  const biggestNumberInput = document.querySelectorAll(
    '[data-biggestnumber-input]'
  );
 biggestNumberInput.forEach(input => input.addEventListener("change", inputHandler) )  
 
};
window.addEventListener('load', () => {
  biggestNubmerInit(); //Видалити
});
