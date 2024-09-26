//змінні елементів
const firstNumber = document.querySelector('#calculator-first-number');
const secondNumber = document.querySelector('#calculator-second-number');
const result = document.querySelector('#calculator-result');
const plus = document.querySelector('#operator-plus');
const multiplication = document.querySelector('#operator-multiplication');
const minus = document.querySelector('#operator-minus');
const division = document.querySelector('#operator-division');
const equals = document.querySelector('#operator-equals');
let operator = '';
//кольорові рамки
const handlerPlus = () => {
  operator = '+';
  plus.style.border = 'solid 2px #039900';
  return operator;
};
const handlerPlusBlur = () => {
  plus.style.border = 'none';
};
plus.addEventListener('focus', handlerPlus);
plus.addEventListener('blur', handlerPlusBlur);
const handlerMultiplication = () => {
  operator = '*';
  multiplication.style.border = 'solid 2px #039900';
  return operator;
};
const handlerMultiplicationBlur = () => {
  multiplication.style.border = 'none';
};
multiplication.addEventListener('focus', handlerMultiplication);
multiplication.addEventListener('blur', handlerMultiplicationBlur);
const handlerMinus = () => {
  operator = '-';
  minus.style.border = 'solid 2px #039900';
  return operator;
};
const handlerMinusBlur = () => {
  minus.style.border = 'none';
};
minus.addEventListener('focus', handlerMinus);
minus.addEventListener('blur', handlerMinusBlur);
const handlerDivision = () => {
  operator = '/';
  division.style.border = 'solid 2px #039900';
  return operator;
};
const handlerDivisionBlur = () => {
  division.style.border = 'none';
};
division.addEventListener('focus', handlerDivision);
division.addEventListener('blur', handlerDivisionBlur);
//сам калькулятор
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
        division.style.border = 'solid 2px #990000';
        result.textContent = 'Помилка';
      }
      break;
  }
};
equals.addEventListener('focus', handlerResult);
