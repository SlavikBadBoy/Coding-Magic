export const timeCalculatorInit = () => {
  const timeCalculatorContainer = document.querySelector('.time-calculator');
  timeCalculatorContainer.innerHTML = `<section class="time-calculator"></section>
  <div class="time-calculator__container">
    <h1 class="time-calculator__title">Калькулятор часу</h1>
    <div class="time-calculator__formcontainer">
    <div class="time-calculator__form"><input class="time-calculator__input" type="number" placeholder="Введіть число" id="timeCalculatorInput"/>
      <button class="time-calculator__button" id="timeCalculatorBtn"></button></div>
      
      <p class="time-calculator_result" id="timeCalculatorResult">3 дн. 15:45:01</p>
    </div>
  </div>
</section>`;

  const timeCalculatorInput = document.querySelector('#timeCalculatorInput');
  const timeCalculatorBtn = document.querySelector('#timeCalculatorBtn');
  const timeCalculatorResult = document.querySelector('#timeCalculatorResult');
  timeCalculatorBtn.addEventListener('click', () => {
    const minutes = 'шоб вс код не ругався';
  });
};

window.addEventListener('load', () => {
  timeCalculatorInit(); //Видалити
});
