import games from './games';

const renderGames = (games, category) => {
  const main = document.querySelector('#main');
  const filteredGames = games.filter(
    game => category === 'all' || game.category.includes(category)
  );

  main.innerHTML = filteredGames
    .map(
      game =>
        `<section class='section'>
      <div class="container">
        <div class="game ${game.class}"></div>
      </div>
    </section>`
    )
    .join('');

  filteredGames.forEach(element => {
    if (element.init) {
      element.init();
    }
  });
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
      tt;
    case 'acquaintance':
      renderGames(games, 'acquaintance');
      break;

    default:
      break;
  }
};

submenu.addEventListener('click', submenuHandler);
