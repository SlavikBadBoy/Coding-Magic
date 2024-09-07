import games from './games';

const main = document.querySelector('#main');

const renderGames = (games, category) => {
  main.innerHTML = games
    .filter(game => category === 'all' || game.category.includes(category))
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
  renderGames(games, 'all');
});

const submenu = document.querySelector('.submenu');
const submenuHandler = event => {
  switch (event.target.dataset.category) {
    case 'numerical':
      renderGames(games, 'numerical');
      break;
    case 'games':
      renderGames(games, 'game');
      break;
    case 'acquaintance':
      renderGames(games, 'acquaintance');
      break;

    default:
      break;
  }
};

submenu.addEventListener('click', submenuHandler);
