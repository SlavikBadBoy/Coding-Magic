// import { rockPaperScissorsInit } from '';
// import { dinosaurInit } from './google__dinosaur';

export default [
  {
    id: 1,
    name: 'Високосний калькулятор',
    category: ['numerical', 'all'],
    class: 'calculator-year',
  },
  {
    id: 2,
    name: 'Вгадай число',
    category: ['numerical', 'all'],
    class: 'guess-number',
  },
  {
    id: 3,
    name: 'Камінь-Ножиці-Папір',
    category: ['game', 'all'],
    class: 'rock-paper-scissors',
    init: rockPaperScissorsInit,
  },
  {
    id: 4,
    name: 'Калькулятор',
    category: ['numerical', 'all'],
    class: 'calculator',
  },
  {
    id: 5,
    name: 'Калькулятор часу',
    category: ['numerical', 'all'],
    class: 'time-calculator',
  },
  {
    id: 6,
    name: 'Google динозаврик',
    category: ['game', 'all'],
    class: 'google-dinosaur',
    init: dinosaurInit,
  },
  {
    id: 7,
    name: 'Футбол',
    category: ['game', 'all'],
    class: 'soccer',
  },
  {
    id: 8,
    name: 'Найбільше число',
    category: ['numerical', 'all'],
    class: 'biggest-number',
  },
  {
    id: 9,
    name: 'Наша команда',
    category: ['acquaintance', 'all'],
    class: 'our-team',
  },
  {
    id: 10,
    name: 'Вчений',
    category: ['acquaintance', 'all'],
    class: 'scientist',
  },
];
