export const timeCalculatorInit = () => {
  const timeCalculatorContainer = document.querySelector('.time-calculator');
  timeCalculatorContainer.innerHTML = `
  <section class="time-calculator"></section>
  <div class="time-calculator__container">
    <h1 class="time-calculator__title title">Калькулятор часу</h1>
    <div class="time-calculator__formcontainer">
    <div class="time-calculator__form">
      <input class="time-calculator__input" type="number" placeholder="Введіть число" id="timeCalculatorInput"/>
      <button class="time-calculator__button" id="timeCalculatorBtn"></button>
    </div>
      <p class="time-calculator_result" id="timeCalculatorResult"></p>
    </div>
  </div>
</section>`;

  const timeCalculatorInput = document.querySelector('#timeCalculatorInput');
  const timeCalculatorBtn = document.querySelector('#timeCalculatorBtn');
  const timeCalculatorResult = document.querySelector('#timeCalculatorResult');
  const convertMinutes = () => {
    const summaryTime = parseFloat(timeCalculatorInput.value);
    const numberHours = summaryTime / 60;
    const days = Math.floor(numberHours / 24);
    const hours = Math.floor(numberHours % 24);
    const minutes = Math.floor(summaryTime % 60);

    timeCalculatorResult.textContent = `${days} дн. ${hours}:${minutes}`;
  };
  timeCalculatorBtn.addEventListener('click', convertMinutes);
};


