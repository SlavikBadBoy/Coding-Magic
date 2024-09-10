import scientists from './scientists-array.js';
export const scientistsInit = () => {
  const game = document.querySelector('.scientist');
  game.innerHTML = `<h2 class="scientist__title title">Обери вченого/их</h2>
   <ul class="scientist__list">
   ${scientists
     .map(
       scientist => `
     <li class="scientist__item">  
     <article class="scientist-card hidden">
          <div class="scientist-card__photo">
            <img src="" alt="${scientist.name} ${scientist.surname}" class="scientist-card__img" />
          </div>
          <div class="scientist-card__meta">
            <p class="scientist-card__name">${scientist.name} ${scientist.surname}</p>
            <p class="scientist-card__date">${scientist.born}-${scientist.dead}</p>
          </div>
        </article>
      </li>`
     )
     .join('')}
    </ul>
        <div class="scientist__buttons-container">
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
              Знайти вчених, прізвища яких починаються на на літеру “С”
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
};
window.addEventListener('load', () => {
  scientistsInit();
});
