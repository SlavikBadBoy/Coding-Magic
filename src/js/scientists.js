import scientists from './scientists-array.js';
export const scientistsInit = () => {
  const game = document.querySelector('.scientist');
  game.innerHTML = `<h2 class="scientist__title title">Обери вченого/их</h2>
   <ul class="scientist__list">
   ${scientists
     .map(
       scientist => `
     <li class="scientist__item">  
     <article class="scientist-card" hidden>
          <div class="scientist-card__meta">
            <p class="scientist-card__name">${scientist.name} ${scientist.surname}</p>
            <p class="scientist-card__date">${scientist.born}-${scientist.dead}</p>
          </div>
        </article>
      </li>`
     )
     .join('')}
    </ul>
        <div class="scientist__buttons-container" data-buttons>
      <div class="scientist__buttons">
        <ul class="scientist__buttons-list scientist--buttons-list-left">
          <li>
            <button class="scientist__button" data-action='born-in-19'>
              Які вчені народилися в 19 ст.
            </button>
          </li>
          <li>
            <button class="scientist__button"  data-action='alphabit'>
              Відсортувати вчених за алфавітом
            </button>
          </li>
          <li>
            <button class="scientist__button" data-action='lifetime'>
              Відсортувати вчених за кількістю прожитих років
            </button>
          </li>
          <li>
            <button class="scientist__button" data-action='born-last'>
              Знайти вченого, який народився найпізніше
            </button>
          </li>
        </ul>
        <ul class="scientist__buttons-list scientist--buttons-list-right">
          <li>
            <button class="scientist__button" data-action='albert-einshtein'>
              Знайти рік народження Albert Einshtein
            </button>
          </li>
          <li>
            <button class="scientist__button" data-action='start-c'>
              Знайти вчених, прізвища яких починаються на літеру “С”
            </button>
          </li>
          <li>
            <button class="scientist__button" data-action='start-a'>
              Видалити всіх вчених, ім’я яких починається на “А”
            </button>
          </li>
          <li>
            <button class="scientist__button" data-action='lucky-and-unlucky'>
              Знайти вченого, який прожив найдовше і вченого, який прожив
              найменше
            </button>
          </li>
        </ul>
      </div>
      <button class="scientist__button scientist--button" data-action='similar'>
        1. Знайти вчених, в яких співпадають перші літери імені і прізвища
      </button>
    </div>`;
  const scientistList = document.querySelector('.scientist__list');
  const buttons = document.querySelector('[data-buttons]');
  const buttonHandler = event => {
    const action = event.target.dataset.action;
    const renderScientist = array => {
      scientistList.innerHTML = ` ${array
        .map(
          scientist => `
   <li class="scientist__item">
   <article class="scientist-card">
        <div class="scientist-card__meta">
          <p class="scientist-card__name">${scientist.name} ${scientist.surname}</p>
          <p class="scientist-card__date">${scientist.born}-${scientist.dead}</p>
        </div>
      </article>
    </li>`
        )
        .join('')}`;
    };
    if (action === 'born-in-19') {
      const sortScientists = scientists.filter(
        scientist => scientist.born > 1799 && scientist.born < 1900
      );
      renderScientist(sortScientists);
    }
    if (action === 'alphabit') {
      const sortScientists = scientists.sort(function (first, second) {
        return first.name.localeCompare(second.name);
      });
      renderScientist(sortScientists);
    }
    if (action === 'lifetime') {
      const sortScientists = scientists.sort(function (first, second) {
        return second.dead - second.born - (first.dead - first.born);
      });
      renderScientist(sortScientists);
    }
    if (action === 'born-last') {
      const sortByBorn = (befor, after) => after.born - befor.born;
      const scientist = scientists.sort(sortByBorn)[0];
      const sortScientists = [scientist];
      renderScientist(sortScientists);
    }
    if (action === 'albert-einshtein') {
      const sortScientists = scientists.filter(
        scientist =>
          scientist.name === 'Albert' && scientist.surname === 'Einstein'
      );
      renderScientist(sortScientists);
    }
    if (action === 'start-c') {
      const sortScientists = scientists.filter(scientist =>
        scientist.surname.startsWith('C')
      );
      renderScientist(sortScientists);
    }
    if (action === 'start-a') {
      const sortScientists = scientists.filter(scientist =>
        scientist.name.startsWith('A')
      );
      renderScientist(sortScientists);
    }
    if (action === 'lucky-and-unlucky') {
      const allScientists = scientists.sort(function (first, second) {
        return second.dead - second.born - (first.dead - first.born);
      });
      const sortScientists = [allScientists[0], allScientists[11]];
      renderScientist(sortScientists);
    }
    if (action === 'similar') {
      const sortScientists = scientists.filter(
        scientist => scientist.name.charAt(0) === scientist.surname.charAt(0)
      );
      renderScientist(sortScientists);
    }
  };
  buttons.addEventListener('click', buttonHandler);
};
