class GoogleDinosaur {
  constructor() {
    this.dino = document.querySelector('.dino');
    this.gameArea = document.querySelector('.google-dinosaur');
    this.gameOver = false;
    this.isJumping = false;
    this.init();
  }
  init() {
    document.addEventListener('keydown', event => {
      if (event.code === 'Space' && !this.isJumping) {
        this.jump();
      }
      this.renderObstacles();
    });
  }

  jump() {
    this.isJumping = true;
    this.dino.classList.add('jump');

    setTimeout(() => {
      this.isJumping = false;
      this.dino.classList.remove('jump');
    }, 500);
  }

  collision() {
    // зіткнення
  }

  renderObstacles() {
    // рендер перешкод
  }

  endGame() {
    // кінець гри
  }
}

window.addEventListener('load', () => {
  document.querySelector(
    '.google-dinosaur'
  ).innerHTML = `<div class="game__container">
      <div class="dino"></div>
      </div>
      `;
  new GoogleDinosaur();
});
