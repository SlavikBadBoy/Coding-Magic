import games from './games';

const renderGames = games => {
  document.querySelector('#main').innerHTML = games
    .map(
      game =>
        `<section class='section'>
      <div class="container">
        <div class="game ${game.class}"></div>
      </div>
    </section>`
    )
    .join('');
};

document.addEventListener('DOMContentLoaded', () => {
  renderGames();
});
