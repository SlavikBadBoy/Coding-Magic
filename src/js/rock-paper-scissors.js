class rockPaperScissors {
  constructor() {
    this.robotScore = 0;
    this.userScore = 0;
    this.game = document.querySelector('.rock-paper-scissors');
    this.gameContainer = document.querySelector(
      '.rock-paper-scissors__container'
    );
    this.buttons = [
      { name: 'rock', class: 'rock' },
      { name: 'scissors', class: 'scissors' },
      { name: 'paper', class: 'paper' },
    ];
    this.init();
  }

  init() {
    this.renderButtons();
    this.addEventListeners();
    this.renderScore();
    this.renderResult();
  }

  renderButtons() {
    // Тайтл секції
    const gameTitle = document.createElement('h2');
    gameTitle.classList.add('rock-paper-scissors__title');
    gameTitle.classList.add('title');
    gameTitle.textContent = 'Камінь - ножиці - папір';
    this.gameContainer.prepend(gameTitle);

    // Контейнер
    const gameButtons = document.createElement('div');
    gameButtons.classList.add('rock-paper-scissors__buttons');
    this.game.append(gameButtons);

    // Кнопки
    gameButtons.innerHTML = this.buttons
      .map(
        button =>
          `<button type='button' class='button rock-paper-scissors__button--${button.class} rock-paper-scissors__button' data-name = '${button.name}'></button>`
      )
      .join('');
  }

  addEventListeners() {
    const buttons = this.game.querySelectorAll('.button');
    buttons.forEach(button => {
      button.addEventListener('click', event => {
        this.buttonsScoreHandler(event);
      });
    });
  }

  buttonsScoreHandler(event) {
    const userChoice = event.target.dataset.name;
    const robotChoice = this.robotPick();
    const result = this.getResult(userChoice, robotChoice);

    const resultText = document.querySelector('.result__text');
    const robotWinMessage = 'Комп’ютер виграв раунд!';
    const userWinMessage = 'Ви виграли раунд!';
    const drawMessage = 'Нічия!';

    if (result === 'user') {
      resultText.innerHTML = userWinMessage;
      resultText.style.color = '#039900'; // зелений
      this.userScore += 1;
    }
    if (result === 'robot') {
      resultText.innerHTML = robotWinMessage;
      resultText.style.color = '#990000'; // червоний
      this.robotScore += 1;
    }
    if (result === 'draw') {
      resultText.innerHTML = drawMessage;
      resultText.style.color = '#039900'; // зелений
      this.robotScore += 1;
      this.userScore += 1;
    }

    const resultButton = document.querySelector('.result__button');
    resultButton.innerHTML = `Варіант комп'ютера: ${robotChoice}`;
    this.renderScore();
  }

  robotPick() {
    const choices = this.buttons.map(button => button.name);
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
  }

  getResult(userChoice, robotChoice) {
    if (
      (userChoice === 'scissors' && robotChoice === 'paper') ||
      (userChoice === 'paper' && robotChoice === 'rock') ||
      (userChoice === 'rock' && robotChoice === 'scissors')
    ) {
      return 'user';
    } else if (userChoice === robotChoice) {
      return 'draw';
    } else {
      return 'robot';
    }
  }

  renderScore(event) {
    let scoreContainer = this.game.querySelector('.score__container');

    if (!scoreContainer) {
      scoreContainer = document.createElement('div');
      scoreContainer.classList.add('score__container');
      this.game.append(scoreContainer);
    }
    // Container

    // content
    scoreContainer.innerHTML = `
    <h2 class="result__title">Рахунок:</h2>
    <p class="robot__output">Комп’ютер - ${this.robotScore}</p>
    <p class="user__output">Ви - ${this.userScore}</p>
  `;
  }

  renderResult() {
    const resultContainer = document.createElement('div');
    resultContainer.classList.add('result__container');
    this.gameContainer.appendChild(resultContainer);

    const resultText = document.createElement('p');
    resultText.classList.add('result__text');
    resultText.innerHTML = 'Щоб почати гру натисніть на будь який варіант!';

    const resultButton = document.createElement('p');
    resultButton.type = 'button';
    resultButton.classList.add('result__button');
    resultButton.innerHTML = "Варіант комп'ютера";

    resultContainer.append(resultText, resultButton);
  }
}

window.addEventListener('load', () => {
  new rockPaperScissors();
});

document.querySelector('.submenu').addEventListener('click', () => {
  new rockPaperScissors();
});
