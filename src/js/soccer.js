export const soccerInit = () => {
  const yard = document.querySelector('#soccerYard');
  const ball = document.querySelector('#ball');
  const mouseDownHandler = event => {
    const mouseX = event.offsetX;
    const mouseY = event.offsetY;

    ball.style.top = `${mouseY}px`;
    ball.style.left = `${mouseX}px`;
  };
  yard.addEventListener('mousedown', mouseDownHandler);
};

window.addEventListener('load', () => {
  soccerInit();
});
