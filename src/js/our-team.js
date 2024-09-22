export const ourTeamInit = () => {
  const teamList = document.querySelector('.our-team');
  const team = [
    { img: './...', name: 'Учасник 1', temmeteInfo: 'Про учасника 1' },
    { img: './...', name: 'Учасник 1', temmeteInfo: 'Про учасника 2' },
    { img: './...', name: 'Учасник 1', temmeteInfo: 'Про учасника 3' },
  ];
  teamList.innerHTML = `  
      <h2>Наша команда</h2>
      <div class="team-slider">
        <ul class="team-list">
        ${team
          .map(
            teammate =>
              `<li class="team-item">
                    <article>
                        <picture></picture>
                        <p>${teammate.name}</p>
                        <p>${teammate.temmeteInfo}</p>
                    </article>
                </li>`
          )
          .join('')}
          </ul>
      </div>
      <button class="controls-left" data-controls="left">left</button>
      <button class="controls-right" data-controls="right">right</button>
      <ul class="pagination">
    </ul>
    `;
};
