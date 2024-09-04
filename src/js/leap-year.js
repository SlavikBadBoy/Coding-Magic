const calculatorYear = document.querySelector('#year');
const result = document.querySelector('#result');
const button = document.querySelector('#checkYearButton');
const checkCalculatorYear = () => {
  const year = parseInt(calculatorYear.value);
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    result.innerHTML = 'Ви народилися у високосний рік!';
    result.style.color = 'green';
  } else {
    result.innerHTML = 'Ви народилися не в високосний рік.';
    result.style.color = 'red';
  }
};
button.addEventListener('click', checkCalculatorYear);
