import games from './data/games.js';

const renderGames = (games, category) => {
  const main = document.querySelector('#main');

  const filteredGames = games.filter(
    game => category === 'all' || game.category.includes(category)
  );

  main.innerHTML = filteredGames
    .map(
      game =>
        `<section class='section' id='${game.class}'>
    <div class="container ${game.class}__container game__container">
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
      document.querySelector('main').classList.add('fiximg');
      break;
    case 'games':
      renderGames(games, 'game');
      document.querySelector('main').classList.add('fiximg');
      break;
    case 'acquaintance':
      renderGames(games, 'acquaintance');
      document.querySelector('main').classList.add('fiximg');
      break;

    default:
      break;
  }
};

submenu.addEventListener('click', submenuHandler);
