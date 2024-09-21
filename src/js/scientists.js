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
    console.log(action);
    if (action === 'born-in-19') {
      const sortBy19 = () => {
        const sortScientists = scientists.filter(
          scientist => scientist.born > 1799 && scientist.born < 1900
        );
        scientistList.innerHTML = ` ${sortScientists
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
      console.log(sortBy19());
    }
    if (event.target.dataset.action === 'alphabit') {
      alert('ifhbhbvfbhivwfbhi');
      const sortByAlphabet = () => {
        const sortScientists = scientist.sort(function (first, second) {
          return first.name.localeCompare(second.name);
        });
        scientistList.innerHTML = ` ${sortScientists
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
      console.log(sortByAlphabet());
    }
    if (event.target.dataset.action === 'born-last') {
      const bornLast = () => {
        const sortByBorn = (befor, after) => after.born - befor.born;
        const sortScientists = scientists.sort(sortByBorn)[0];
        scientistList.innerHTML = `
     <li class=".scientist-one-card">
     <article class="scientist-card">
          <div class="scientist-card__meta">
            <p class="scientist-card__name">${sortScientists.name} ${sortScientists.surname}</p>
            <p class="scientist-card__date">${sortScientists.born}-${sortScientists.dead}</p>
          </div>
        </article>
      </li>`;
      };
      console.log(bornLast());
    }
    if (event.target.dataset.action === 'albert-einshtein') {
      const findAlbert = () => {
        const sortScientists = scientists.find(
          scientist =>
            scientist.name === 'Albert' && scientist.surname === 'Einstein'
        );
        scientistList.innerHTML = ` ${sortScientists.map(
          scientist => `
     <li class="scientist__item">
     <article class="scientist-card">
          <div class="scientist-card__meta">
            <p class="scientist-card__name">${scientist.name} ${scientist.surname}</p>
            <p class="scientist-card__date">${scientist.born}-${scientist.dead}</p>
          </div>
        </article>
      </li>`
        )}`;
      };
      console.log(findAlbert());
    }
    if (event.target.dataset.action === 'start-c') {
      const surnameStartC = () => {
        const sortScientists = scientists.filter(scientist =>
          scientist.surname.startsWith('C')
        );
        scientistList.innerHTML = ` ${sortScientists
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
      console.log(surnameStartC());
    }
    if (event.target.dataset.action === 'start-a') {
      const nameStartA = () => {
        const sortScientists = scientists.filter(scientist =>
          scientist.name.startsWith('A')
        );
        scientistList.innerHTML = ` ${sortScientists
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
      console.log(nameStartA());
    }
    if (event.target.dataset.action === 'similar') {
      const similarLetter = () => {
        const sortScientists = scientists.filter(
          scientist => scientist.name.charAt(0) === scientist.surname.charAt(0)
        );
        scientistList.innerHTML = ` ${sortScientists
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
      console.log(similarLetter());
    }
  };
  buttons.addEventListener('click', buttonHandler);
  //!!!!!!!!!!!!!!!!
  // const sortByAlphabet = () => {
  //   const sort = (prev, after) => {
  //     prev.name.localeCompare(after.name);
  //   };
  //   return console.log(scientists.sort(sort));
  // };
  // console.log(sortByAlphabet());
  //!!!!!!!!!!!!!!!!!!!!!!!!
  // const sortByLifetime = () => {
  //   const sortLifetime = (even, after) => ;
  //   return scientists.sort(sortByLifetime);
  // };
  // console.log(sortByLifetime());
  // const bornAlbert = () => {
  //   return scientists.find(
  //     scientist =>
  //       scientist.name === 'Albert' && scientist.surname === 'Einstein'
  //   );
  // };
  // console.log(bornAlbert());
  //
  // const surnameStartByC = () => {
  //   return scientists.filter(scientist => scientist.surname.startsWith('C'));
  // };
  // console.log(surnameStartByC());
  // const nameStartByA = () => {
  //   return scientists.filter(scientist => scientist.name.startsWith('A'));
  // };
  // console.log(nameStartByA());
  //!!!!!!!!!!!!!!!!!
  // const luckyAndUnlucky = () => {
  //   return scientists.filter(scientist => scientist.name.startsWith('A'));
  // };
  // console.log(nameStartByA());
  //   const similarLetter = () => {
  //     return scientists.filter(
  //       scientist => scientist.name.charAt(0) === scientist.surname.charAt(0)
  //     );
  //   };
  //   console.log(similarLetter());
};
window.addEventListener('load', () => {
  scientistsInit();
});
