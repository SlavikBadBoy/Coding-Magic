class e{init(){this.renderButtons(),this.addEventListeners(),this.renderScore(),this.renderResult()}renderButtons(){const e=document.createElement("h2");e.classList.add("rock-paper-scissors__title"),e.classList.add("title"),e.textContent="Камінь - ножиці - папір",this.gameContainer.prepend(e);const t=document.createElement("div");t.classList.add("rock-paper-scissors__buttons"),this.game.append(t),t.innerHTML=this.buttons.map((e=>`<button type='button' class='button rock-paper-scissors__button--${e.class} rock-paper-scissors__button' data-name = '${e.name}'></button>`)).join("")}addEventListeners(){this.game.querySelectorAll(".button").forEach((e=>{e.addEventListener("click",(e=>{this.buttonsScoreHandler(e)}))}))}buttonsScoreHandler(e){const t=e.target.dataset.name,s=this.robotPick(),a=this.getResult(t,s),n=document.querySelector(".result__text");"user"===a&&(n.innerHTML="Ви виграли раунд!",n.style.color="#039900",this.userScore+=1),"robot"===a&&(n.innerHTML="Комп’ютер виграв раунд!",n.style.color="#990000",this.robotScore+=1),"draw"===a&&(n.innerHTML="Нічия!",n.style.color="#039900",this.robotScore+=1,this.userScore+=1);document.querySelector(".result__button").innerHTML=`Варіант комп'ютера: ${s}`,this.renderScore()}robotPick(){const e=this.buttons.map((e=>e.name));return e[Math.floor(Math.random()*e.length)]}getResult(e,t){return"scissors"===e&&"paper"===t||"paper"===e&&"rock"===t||"rock"===e&&"scissors"===t?"user":e===t?"draw":"robot"}renderScore(e){let t=this.game.querySelector(".score__container");t||(t=document.createElement("div"),t.classList.add("score__container"),this.game.append(t)),t.innerHTML=`\n    <h2 class="result__title">Рахунок:</h2>\n    <p class="robot__output">Комп’ютер - ${this.robotScore}</p>\n    <p class="user__output">Ви - ${this.userScore}</p>\n  `}renderResult(){const e=document.createElement("div");e.classList.add("result__container"),this.gameContainer.appendChild(e);const t=document.createElement("p");t.classList.add("result__text"),t.innerHTML="Щоб почати гру натисніть на будь який варіант!";const s=document.createElement("p");s.type="button",s.classList.add("result__button"),s.innerHTML="Варіант комп'ютера",e.append(t,s)}constructor(){this.robotScore=0,this.userScore=0,this.game=document.querySelector(".rock-paper-scissors"),this.gameContainer=document.querySelector(".rock-paper-scissors__container"),this.buttons=[{name:"rock",class:"rock"},{name:"scissors",class:"scissors"},{name:"paper",class:"paper"}],this.init()}}class t{init(){document.addEventListener("keydown",(e=>{"Space"!==e.code||this.isJumping||this.gameOver||this.jump()})),document.addEventListener("mousedown",(e=>{this.isJumping||this.gameOver||this.jump()})),this.renderObstacles(),this.checkCollision()}jump(){this.isJumping=!0,this.dino.classList.add("jump"),setTimeout((()=>{this.isJumping=!1,this.dino.classList.remove("jump")}),500)}checkCollision(){const e=()=>{if(!0===this.gameOver)return;const t=this.gameArea.querySelector(".cactus"),s=t.getBoundingClientRect(),a=this.dino.getBoundingClientRect();a.right>s.left&&a.left<s.right&&a.bottom>s.top?this.endGame(t):requestAnimationFrame(e)};requestAnimationFrame(e)}renderObstacles(){const e=document.createElement("div");e.classList.add("cactus"),e.style.height=this.randomHeight(),this.gameArea.appendChild(e);const t=()=>{e.removeEventListener("animationiteration",t),this.gameArea.removeChild(e),this.gameOver||this.renderObstacles()};e.addEventListener("animationiteration",t)}randomHeight(){return 30*Math.random()+40+"px"}endGame(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}gameOverModal(){this.gameArea.insertAdjacentHTML("beforeend",'\n    <div class="dinosaur__modal">\n      <p class="dinosaur__lose">Ви програли!</p>\n      <button class="dinosaur__restart button">Спробувати знову</button>\n    </div>\n    ');const e=this.gameArea.querySelector(".dinosaur__modal");setTimeout((()=>{e.classList.add("show")}),10);this.gameArea.querySelector(".dinosaur__restart").addEventListener("click",(()=>this.restartGame()))}restartGame(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision()}constructor(){document.querySelector(".google-dinosaur").innerHTML='<div class="game__container--dino">\n        <div class="dino"></div>\n        </div>\n        ',this.dino=document.querySelector(".dino"),this.gameArea=document.querySelector(".game__container--dino"),this.gameOver=!1,this.isJumping=!1,this.init()}}var s=[{id:1,name:"Високосний калькулятор",category:["numerical","all"],class:"calculator-year"},{id:2,name:"Вгадай число",category:["numerical","all"],class:"guess-number"},{id:3,name:"Камінь-Ножиці-Папір",category:["game","all"],class:"rock-paper-scissors",init:()=>{new e}},{id:4,name:"Калькулятор",category:["numerical","all"],class:"calculator"},{id:5,name:"Калькулятор часу",category:["numerical","all"],class:"time-calculator"},{id:6,name:"Google динозаврик",category:["game","all"],class:"google-dinosaur",init:()=>{new t}},{id:7,name:"Футбол",category:["game","all"],class:"soccer"},{id:8,name:"Найбільше число",category:["numerical","all"],class:"biggest-number"},{id:9,name:"Наша команда",category:["acquaintance","all"],class:"our-team"},{id:10,name:"Вчений",category:["acquaintance","all"],class:"scientist"}];const a=(e,t)=>{const s=document.querySelector("#main"),a=e.filter((e=>"all"===t||e.category.includes(t)));s.innerHTML=a.map((e=>`<section class='section'>\n    <div class="container ${e.class}__container game__container">\n      <div class="game ${e.class}"></div>\n    </div>\n  </section>`)).join(""),a.forEach((e=>{e.init&&e.init()}))};document.addEventListener("DOMContentLoaded",(()=>{a(s,"all")}));document.querySelector(".submenu").addEventListener("click",(e=>{switch(e.target.dataset.category){case"numerical":a(s,"numerical");break;case"games":a(s,"game");break;case"acquaintance":a(s,"acquaintance")}}));
//# sourceMappingURL=index.89ae681d.js.map
