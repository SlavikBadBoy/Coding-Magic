import team from './data/team.js';

export const ourTeamInit = () => {
  const teamList = document.querySelector('.our-team');
  teamList.innerHTML = `  
      <h2 class="title__our-team">Наша команда</h2>
      <button class="left-button" data-controls="left"></button>
      <div class="team-slider">
        <ul class="team-list">
        ${team
          .map(
            teammate =>
              `<li class="team-item">
                    <article class ='teammate__article'>
                        
            <img class="footo__teamate" src="${teammate.img}" alt="person">
                        <p class="name__teammate">${teammate.name}</p>
                        <p class="info__teammate">${teammate.temmeteInfo}</p>
                    </article>
                </li>`
          )
          .join('')}
          </ul>
      </div>
      
      <button class="right-button" data-controls="right"></button>
      <ul class="pagination">
    </ul>
    `;
  const slider = document.querySelector('.team-list');
  const slidesCount = document.querySelectorAll('.team-item').length;
  const paginetion = document.querySelector('.pagination');
  for (let i = 0; i < slidesCount; i++) {
    const dot = document.createElement('li');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    paginetion.appendChild(dot);
  }
  let indexs = 0;
  const dots = document.querySelectorAll('.dot');
  function updateSlider() {
    slider.style.transform = `translateX(${-indexs * 100}%)`;
    dots.forEach(dot => dot.classList.remove('active'));
    dots[indexs].classList.add('active');
  }
  document.querySelector('.right-button').addEventListener('click', () => {
    indexs = (indexs + 1) % slidesCount;
    updateSlider();
  });
  document.querySelector('.left-button').addEventListener('click', () => {
    indexs = (indexs - 1) % slidesCount;
    if (indexs < 0) {
      indexs = 3;
    }
    updateSlider();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      indexs = index;
      updateSlider();
    });
  });
};
