export const soccerInit = () => {
  const gameContainer = document.querySelector('.soccer__container');
  const title = document.createElement('h2');
  title.classList.add('title');
  title.textContent = 'Футбол';
  gameContainer.prepend(title);
  const soccer = document.querySelector('.soccer');
  soccer.innerHTML = `  
      <div class="soccer__yard" id="soccerYard">
        <div class="ball" id="ball"></div>
      </div>`;
  const yard = document.querySelector('#soccerYard');
  const ball = document.querySelector('#ball');
  const mouseDownHandler = event => {
    ball.classList.add('rotate');
    setTimeout(() => {
      ball.classList.remove('rotate');
    }, 2000);
    const gameProces = () => {
      const mouseX = event.offsetX;
      const mouseY = event.offsetY;

      ball.style.top = `${mouseY}px`;
      ball.style.left = `${mouseX}px`;
    };
    requestAnimationFrame(gameProces);
  };

  yard.addEventListener('mousedown', mouseDownHandler);
};
