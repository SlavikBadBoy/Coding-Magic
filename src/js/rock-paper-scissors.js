class rockPaperScissors {
  constructor() {
    this.robotScore = 0;
    this.userScore = 0;
    this.game = document.querySelector('.rock-paper-scissors');
    this.buttons = [
      { name: 'rock', class: 'button__rock' },
      { name: 'scissors', class: 'button__scissors' },
      { name: 'paper', class: 'button__paper' },
    ];
    this.init();
  }

  init() {
    this.renderButtons();
    this.addEventListeners();
    this.renderScore();
  }

  renderButtons() {
    // Контейнер
    const gameButtons = document.createElement('div');
    gameButtons.classList.add('game__buttons');
    this.game.append(gameButtons);

    // Кнопки
    gameButtons.innerHTML = this.buttons
      .map(
        button =>
          `<button type='button' class='button ${button.class}' data-name = '${button.name}'>${button.name}</button>`
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

    if (result === 'user') {
      this.userScore += 1;
    }
    if (result === 'robot') {
      this.robotScore += 1;
    }
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
    <p class="robot__output">${this.robotScore}</p>
    <p class="user__output">${this.userScore}</p>
  `;
  }
}

window.addEventListener('load', () => {
  new rockPaperScissors();
});

document.querySelector('.submenu').addEventListener('click', () => {
  new rockPaperScissors();
});
