!function(){function e(e,t,n,a){Object.defineProperty(e,t,{get:n,set:a,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},r={},o=n.parcelRequire1ad7;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in r){var t=r[e];delete r[e];var n={id:e,exports:{}};return a[e]=n,t.call(n.exports,n,n.exports),n.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){r[e]=t},n.parcelRequire1ad7=o),o.register("iE7OH",(function(t,n){var a,r;e(t.exports,"register",(function(){return a}),(function(e){return a=e})),e(t.exports,"resolve",(function(){return r}),(function(e){return r=e}));var o={};a=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)o[t[n]]=e[t[n]]},r=function(e){var t=o[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),o.register("aNJCr",(function(t,n){var a;e(t.exports,"getBundleURL",(function(){return a}),(function(e){return a=e}));var r={};function o(e){return(""+e).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(e){var t=r[e];return t||(t=function(){try{throw new Error}catch(t){var e=(""+t.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(e)return o(e[2])}return"/"}(),r[e]=t),t}})),o("iE7OH").register(JSON.parse('{"EVgbq":"index.a90b1b48.js","bJUYZ":"maksym.b1912634.jpg","55Ttn":"vlad.3df8a975.jpg","7LFus":"vyacheslav.2e83140c.jpg","fhvbA":"anya.c8dcf676.jpg"}'));var c={};Object.defineProperty(c,"__esModule",{value:!0}),c.default=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")};var i={};function s(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}Object.defineProperty(i,"__esModule",{value:!0}),i.default=function(e,t,n){t&&s(e.prototype,t);n&&s(e,n);return e};var l,u=function(){"use strict";function e(){t(c)(this,e),this.robotScore=0,this.userScore=0,this.game=document.querySelector(".rock-paper-scissors"),this.gameContainer=document.querySelector(".rock-paper-scissors__container"),this.buttons=[{name:"rock",class:"rock"},{name:"scissors",class:"scissors"},{name:"paper",class:"paper"}],this.init()}return t(i)(e,[{key:"init",value:function(){this.renderButtons(),this.addEventListeners(),this.renderScore(),this.renderResult()}},{key:"renderButtons",value:function(){var e=document.createElement("h2");e.classList.add("rock-paper-scissors__title"),e.classList.add("title"),e.textContent="Камінь - ножиці - папір",this.gameContainer.prepend(e);var t=document.createElement("div");t.classList.add("rock-paper-scissors__buttons"),this.game.append(t),t.innerHTML=this.buttons.map((function(e){return"<button type='button' class='button rock-paper-scissors__button--".concat(e.class," rock-paper-scissors__button' data-name = '").concat(e.name,"'></button>")})).join("")}},{key:"addEventListeners",value:function(){var e=this;this.game.querySelectorAll(".button").forEach((function(t){var n=e;t.addEventListener("click",(function(e){n.buttonsScoreHandler(e)}))}))}},{key:"buttonsScoreHandler",value:function(e){var t=e.target.dataset.name,n=this.robotPick(),a=this.getResult(t,n),r=document.querySelector(".result__text");"user"===a&&(r.innerHTML="Ви виграли раунд!",r.style.color="#039900",this.userScore+=1),"robot"===a&&(r.innerHTML="Комп’ютер виграв раунд!",r.style.color="#990000",this.robotScore+=1),"draw"===a&&(r.innerHTML="Нічия!",r.style.color="#039900",this.robotScore+=1,this.userScore+=1),document.querySelector(".result__button").innerHTML="Варіант комп'ютера: ".concat(n),this.renderScore()}},{key:"robotPick",value:function(){var e=this.buttons.map((function(e){return e.name}));return e[Math.floor(Math.random()*e.length)]}},{key:"getResult",value:function(e,t){return"scissors"===e&&"paper"===t||"paper"===e&&"rock"===t||"rock"===e&&"scissors"===t?"user":e===t?"draw":"robot"}},{key:"renderScore",value:function(e){var t=this.game.querySelector(".score__container");t||((t=document.createElement("div")).classList.add("score__container"),this.game.append(t)),t.innerHTML='\n    <h2 class="result__title">Рахунок:</h2>\n    <p class="robot__output">Комп’ютер - '.concat(this.robotScore,'</p>\n    <p class="user__output">Ви - ').concat(this.userScore,"</p>\n  ")}},{key:"renderResult",value:function(){var e=document.createElement("div");e.classList.add("result__container"),this.gameContainer.appendChild(e);var t=document.createElement("p");t.classList.add("result__text"),t.innerHTML="Щоб почати гру натисніть на будь який варіант!";var n=document.createElement("p");n.type="button",n.classList.add("result__button"),n.innerHTML="Варіант комп'ютера",e.append(t,n)}}]),e}(),d=function(){"use strict";function e(){t(c)(this,e),document.querySelector(".google-dinosaur").innerHTML='<div class="game__container--dino">\n        <div class="dino"></div>\n        </div>\n        ',this.dino=document.querySelector(".dino"),this.gameArea=document.querySelector(".game__container--dino"),this.gameContainer=document.querySelector(".google-dinosaur__container"),this.gameOver=!1,this.isJumping=!1,this.renderTitle(),this.gameModalStart()}return t(i)(e,[{key:"gameModalStart",value:function(){var e=this;this.gameArea.insertAdjacentHTML("beforeend",'\n    <div class="dinosaur__modal show">\n      <p class="dinosaur__lose">Гугл динозаврик!</p>\n      <button class="dinosaur__restart button">Почати гру!</button>\n    </div>\n    ');var t=this.gameArea.querySelector(".dinosaur__modal");this.gameArea.querySelector(".dinosaur__restart").addEventListener("click",(function(){t.classList.remove("show"),setTimeout((function(){t.remove()}),250),e.init()}))}},{key:"init",value:function(){var e=this;document.addEventListener("keydown",(function(t){"Space"!==t.code||e.isJumping||e.gameOver||e.jump()})),document.addEventListener("mousedown",(function(t){e.isJumping||e.gameOver||e.jump()})),this.renderObstacles(),this.checkCollision()}},{key:"renderTitle",value:function(){var e=document.createElement("h2");e.classList.add("title"),e.textContent="Google динозавр",this.gameContainer.prepend(e)}},{key:"jump",value:function(){var e=this;this.isJumping=!0,this.dino.classList.add("jump"),setTimeout((function(){e.isJumping=!1,e.dino.classList.remove("jump")}),500)}},{key:"checkCollision",value:function(){var e=this,t=function(){if(!0!==e.gameOver){var n=e.gameArea.querySelector(".cactus"),a=n.getBoundingClientRect(),r=e.dino.getBoundingClientRect();r.right>a.left&&r.left<a.right&&r.bottom>a.top?e.endGame(n):requestAnimationFrame(t)}};requestAnimationFrame(t)}},{key:"renderObstacles",value:function(){var e=this,t=document.createElement("div");t.classList.add("cactus"),t.style.height=this.randomHeight(),this.gameArea.appendChild(t);var n=function(){t.removeEventListener("animationiteration",n),e.gameArea.removeChild(t),e.gameOver||e.renderObstacles()};t.addEventListener("animationiteration",n)}},{key:"randomHeight",value:function(){return"".concat(30*Math.random()+40,"px")}},{key:"endGame",value:function(e){e.style.animationPlayState="paused",this.gameOver=!0,this.gameOverModal()}},{key:"gameOverModal",value:function(){var e=this;this.gameArea.insertAdjacentHTML("beforeend",'\n    <div class="dinosaur__modal">\n      <p class="dinosaur__lose">Ви програли!</p>\n      <button class="dinosaur__restart button">Спробувати знову</button>\n    </div>\n    ');var t=this.gameArea.querySelector(".dinosaur__modal");setTimeout((function(){t.classList.add("show")}),10),this.gameArea.querySelector(".dinosaur__restart").addEventListener("click",(function(){return e.restartGame()}))}},{key:"restartGame",value:function(){this.gameArea.querySelector(".dinosaur__modal").remove(),this.gameArea.querySelector(".cactus").remove(),this.gameOver=!1,this.renderObstacles(),this.checkCollision()}}]),e}(),m=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}];l=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("bJUYZ");var b;b=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("55Ttn");var v;v=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("7LFus");var p;p=o("aNJCr").getBundleURL("EVgbq")+o("iE7OH").resolve("fhvbA");var _=[{img:t(v),name:"В'ячеслав",temmeteInfo:"Секції: 3-числа, Калькулятор часу"},{img:t(b),name:"Влад ",temmeteInfo:'Секції: header та модальне вікно, "камінь-ножниці-папір", динозаврик'},{img:t(l),name:"Макс",temmeteInfo:"Секції: Високосний-рік, Футбол, Вгадай число, Наша-команда"},{img:t(p),name:"Аня",temmeteInfo:"Секції: Калькулятор, Підвал сайту, Вчені"}],f=[{id:1,name:"Високосний калькулятор",category:["numerical","all"],class:"calculator-year",init:function(){var e=document.querySelector("main"),t=document.createElement("h2");t.classList.add("main-title"),e.prepend(t),t.textContent="Популярні інетрактивні ігри";var n=document.querySelector(".calculator-year__container"),a=document.createElement("h2");a.classList.add("title__leap-year"),a.classList.add("title"),a.textContent="Перевір в який рік ти народився",n.prepend(a),document.querySelector(".calculator-year").innerHTML='  <form action="#" class="form__check-year">      <input\nclass="input__check-year"\ntype="number"\nid="year"\nplaceholder="Введіть рік народження"\n/>\n<button class="button__check-year" id="checkYearButton"></button>\n</form>\n\n<p class="result__check-year" id="result">Щоб почати, введи свій рік народження!</p>\n';var r=document.querySelector("#year"),o=document.querySelector("#result");document.querySelector("#checkYearButton").addEventListener("click",(function(e){e.preventDefault(),0===r.value.trim().length&&(o.innerHTML="Введіть ваш рік!",o.style.color="red");var t=parseInt(r.value);t%4==0&&t%100!=0||t%400==0?(o.innerHTML="Ви народилися у високосний рік!",o.style.color="green"):(o.innerHTML="Ви народилися не в високосний рік.",o.style.color="red")}))}},{id:2,name:"Вгадай число",category:["numerical","all"],class:"guess-number",init:function(){var e=document.querySelector(".guess-number__container"),t=document.createElement("h2");t.classList.add("title"),t.classList.add("title__numerical"),t.textContent="Вгадай число, яке загадав комп’ютер",e.prepend(t),document.querySelector(".guess-number").innerHTML='<form action="#" class="form__numerical">\n<input\n  class="input__numerical"\n  type="number"\n  id="number"\n  placeholder="Введіть число"\n/>\n<button type=\'button\' class="button__numerical" id="checkNumber"></button>\n</form>\n\n<p class="result__numerical" id="result-numerical">Щоб почати гру, напишіть будь яке число від 1 до 10!</p>\n';var n=document.querySelector("#number"),a=document.querySelector("#checkNumber"),r=document.querySelector("#result-numerical"),o=Math.floor(10*Math.random())+1;a.addEventListener("click",(function(){var e=parseInt(n.value);e===o?(r.innerHTML="Вітаю, ви вгадали число! ".concat(o),r.style.color="green"):e<o&&(r.innerHTML="Ви не вгадали, чило ".concat(o),r.style.color="red"),o=Math.floor(10*Math.random())+1}))}},{id:3,name:"Камінь-Ножиці-Папір",category:["game","all"],class:"rock-paper-scissors",init:function(){new u}},{id:4,name:"Калькулятор",category:["numerical","all"],class:"calculator",init:function(){document.querySelector(".calculator").innerHTML='   \n  <h2 class="calculator__title title">Калькулятор</h2>\n    <div class="calculator__main">\n      <label for="calculator-first-number">Перше число</label>\n      <input\n        type="number"\n        class="calculator__input"\n        id="calculator-first-number"\n        placeholder="Введіть число"\n      />\n      <div class="calculator__operators" data-actions>\n        <button class="calculator__operator" data-action=\'+\'>+</button>\n        <button class="calculator__operator" data-action=\'*\'>\n          *\n        </button>\n        <button class="calculator__operator" data-action=\'-\'>-</button>\n        <button class="calculator__operator" data-action=\'/\'>/</button>\n      </div>\n      <label for="calculator-second-number">Друге число</label>\n      <input\n        type="number"\n        class="calculator__input"\n        id="calculator-second-number"\n        placeholder="Введіть число"\n      />\n      <button class="calculator__operator" id="operator-equals">=</button>\n      <span class="calculator__input" id="calculator-result">Результат</span>\n    </div>\n  ';var e=document.querySelector("#calculator-first-number"),t=document.querySelector("#calculator-second-number"),n=document.querySelector("#calculator-result"),a=document.querySelector("[data-actions]"),r=document.querySelector("#operator-equals"),o=null,c="";a.addEventListener("click",(function(e){var t=e.target;c=t.dataset.action,o&&(o.style.border="none"),t.style.border="1px solid green",o=t}));r.addEventListener("focus",(function(){switch(c){case"+":n.textContent=parseFloat(e.value)+parseFloat(t.value);break;case"*":n.textContent=parseFloat(e.value)*parseFloat(t.value);break;case"-":n.textContent=parseFloat(e.value)-parseFloat(t.value);break;case"/":n.textContent=parseFloat(e.value)/parseFloat(t.value),0===parseFloat(t.value)&&(n.textContent="Помилка")}}))}},{id:5,name:"Калькулятор часу",category:["numerical","all"],class:"time-calculator",init:function(){document.querySelector(".time-calculator").innerHTML='\n  <section class="time-calculator"></section>\n  <div class="time-calculator__container">\n    <h1 class="time-calculator__title title">Калькулятор часу</h1>\n    <div class="time-calculator__formcontainer">\n    <div class="time-calculator__form">\n      <input class="time-calculator__input" type="number" placeholder="Введіть число" id="timeCalculatorInput"/>\n      <button class="time-calculator__button" id="timeCalculatorBtn"></button>\n    </div>\n      <p class="time-calculator_result" id="timeCalculatorResult">0 дн. 0:0</p>\n    </div>\n  </div>\n</section>';var e=document.querySelector("#timeCalculatorInput"),t=document.querySelector("#timeCalculatorBtn"),n=document.querySelector("#timeCalculatorResult");t.addEventListener("click",(function(){var t=parseFloat(e.value),a=t/60,r=Math.floor(a/24),o=Math.floor(a%24),c=Math.floor(t%60);n.textContent="".concat(r," дн. ").concat(o,":").concat(c)}))}},{id:6,name:"Google динозаврик",category:["game","all"],class:"google-dinosaur",init:function(){new d}},{id:7,name:"Футбол",category:["game","all"],class:"soccer",init:function(){var e=document.querySelector(".soccer__container"),t=document.createElement("h2");t.classList.add("title"),t.textContent="Футбол",e.prepend(t),document.querySelector(".soccer").innerHTML='  \n      <div class="soccer__yard" id="soccerYard">\n        <div class="ball" id="ball"></div>\n      </div>';var n=document.querySelector("#soccerYard"),a=document.querySelector("#ball");n.addEventListener("mousedown",(function(e){a.classList.add("rotate"),setTimeout((function(){a.classList.remove("rotate")}),2e3);requestAnimationFrame((function(){var t=e.offsetX,n=e.offsetY;a.style.top="".concat(n,"px"),a.style.left="".concat(t,"px")}))}))}},{id:8,name:"Найбільше число",category:["numerical","all"],class:"biggest-number",init:function(){document.querySelector(".biggest-number").innerHTML=' <h1 class="maximum__title title">Введіть 3 числа</h1>\n    <div class="maximum__inputs">\n      <input\n        data-biggestnumber-input\n        class="maximum__input input"\n        type="number"\n        placeholder="Введіть число"\n      />\n      <input\n      data-biggestnumber-input\n        class="maximum__input input"\n        type="number"\n        placeholder="Введіть число"\n      />\n      <input\n      data-biggestnumber-input\n        class="maximum__input input"\n        type="number"\n        placeholder="Введіть число"\n      />\n    </div>\n    <p data-biggestnubmer-text class="maximum__text">Найбільше число, яке ви ввели - </p>';var e=document.querySelector("[data-biggestnubmer-text]"),t=document.querySelectorAll("[data-biggestnumber-input]"),n=function(){for(var n=Array.from(t).map((function(e){return e.value})),a=!0,r=0;r<n.length;r+=1)if(""===n[r]){a=!1;break}if(a){var o=Array.from(t).reduce((function(e,t){return Math.max(e,Number(t.value)||0)}),0);e.textContent="Найбільше число, яке ви ввели - ".concat(o)}};t.forEach((function(e){return e.addEventListener("input",n)}))}},{id:9,name:"Наша команда",category:["acquaintance","all"],class:"our-team",init:function(){document.querySelector(".our-team").innerHTML='  \n      <h2 class="title__our-team">Наша команда</h2>\n      <button class="left-button" data-controls="left"></button>\n      <div class="team-slider">\n        <ul class="team-list">\n        '.concat(_.map((function(e){return'<li class="team-item">\n                    <article class =\'teammate__article\'>\n                        <div class = \'teammate__photo\'> \n                            <img class="footo__teamate" src="'.concat(e.img,'" alt="person">\n                        </div>\n                        <p class="name__teammate">').concat(e.name,'</p>\n                        <p class="info__teammate">').concat(e.temmeteInfo,"</p>\n                    </article>\n                </li>")})).join(""),'\n          </ul>\n      </div>\n      \n      <button class="right-button" data-controls="right"></button>\n      <ul class="pagination">\n    </ul>\n    ');for(var e=document.querySelector(".team-list"),t=document.querySelectorAll(".team-item").length,n=document.querySelector(".pagination"),a=0;a<t;a++){var r=document.createElement("li");r.classList.add("dot"),0===a&&r.classList.add("active"),n.appendChild(r)}var o=0,c=document.querySelectorAll(".dot");function i(){e.style.transform="translateX(".concat(100*-o,"%)"),c.forEach((function(e){return e.classList.remove("active")})),c[o].classList.add("active")}document.querySelector(".right-button").addEventListener("click",(function(){o=(o+1)%t,i()})),document.querySelector(".left-button").addEventListener("click",(function(){(o=(o-1)%t)<0&&(o=3),i()})),c.forEach((function(e,t){e.addEventListener("click",(function(){o=t,i()}))}))}},{id:10,name:"Вчений",category:["acquaintance","all"],class:"scientist",init:function(){document.querySelector(".scientist").innerHTML='<h2 class="scientist__title title">Обери вченого/их</h2>\n   <ul class="scientist__list">\n   '.concat(m.map((function(e){return'\n     <li class="scientist__item">  \n     <article class="scientist-card" hidden>\n          <div class="scientist-card__meta">\n            <p class="scientist-card__name">'.concat(e.name," ").concat(e.surname,'</p>\n            <p class="scientist-card__date">').concat(e.born,"-").concat(e.dead,"</p>\n          </div>\n        </article>\n      </li>")})).join(""),'\n    </ul>\n        <div class="scientist__buttons-container" data-buttons>\n      <div class="scientist__buttons">\n        <ul class="scientist__buttons-list scientist--buttons-list-left">\n          <li>\n            <button class="scientist__button" data-action=\'born-in-19\'>\n              Які вчені народилися в 19 ст.\n            </button>\n          </li>\n          <li>\n            <button class="scientist__button"  data-action=\'alphabit\'>\n              Відсортувати вчених за алфавітом\n            </button>\n          </li>\n          <li>\n            <button class="scientist__button" data-action=\'lifetime\'>\n              Відсортувати вчених за кількістю прожитих років\n            </button>\n          </li>\n          <li>\n            <button class="scientist__button" data-action=\'born-last\'>\n              Знайти вченого, який народився найпізніше\n            </button>\n          </li>\n        </ul>\n        <ul class="scientist__buttons-list scientist--buttons-list-right">\n          <li>\n            <button class="scientist__button" data-action=\'albert-einshtein\'>\n              Знайти рік народження Albert Einshtein\n            </button>\n          </li>\n          <li>\n            <button class="scientist__button" data-action=\'start-c\'>\n              Знайти вчених, прізвища яких починаються на літеру “С”\n            </button>\n          </li>\n          <li>\n            <button class="scientist__button" data-action=\'start-a\'>\n              Видалити всіх вчених, ім’я яких починається на “А”\n            </button>\n          </li>\n          <li>\n            <button class="scientist__button" data-action=\'lucky-and-unlucky\'>\n              Знайти вченого, який прожив найдовше і вченого, який прожив\n              найменше\n            </button>\n          </li>\n        </ul>\n      </div>\n      <button class="scientist__button scientist--button" data-action=\'similar\'>\n        1. Знайти вчених, в яких співпадають перші літери імені і прізвища\n      </button>\n    </div>');var e=document.querySelector(".scientist__list");document.querySelector("[data-buttons]").addEventListener("click",(function(t){var n=t.target.dataset.action,a=function(t){e.innerHTML=" ".concat(t.map((function(e){return'\n   <li class="scientist__item">\n   <article class="scientist-card">\n        <div class="scientist-card__meta">\n          <p class="scientist-card__name">'.concat(e.name," ").concat(e.surname,'</p>\n          <p class="scientist-card__date">').concat(e.born,"-").concat(e.dead,"</p>\n        </div>\n      </article>\n    </li>")})).join(""))};"born-in-19"===n&&a(m.filter((function(e){return e.born>1799&&e.born<1900})));"alphabit"===n&&a(m.sort((function(e,t){return e.name.localeCompare(t.name)})));"lifetime"===n&&a(m.sort((function(e,t){return t.dead-t.born-(e.dead-e.born)})));if("born-last"===n){a([m.sort((function(e,t){return t.born-e.born}))[0]])}"albert-einshtein"===n&&a(m.filter((function(e){return"Albert"===e.name&&"Einstein"===e.surname})));"start-c"===n&&a(m.filter((function(e){return e.surname.startsWith("C")})));"start-a"===n&&a(m.filter((function(e){return e.name.startsWith("A")})));if("lucky-and-unlucky"===n){var r=m.sort((function(e,t){return t.dead-t.born-(e.dead-e.born)}));a([r[0],r[11]])}"similar"===n&&a(m.filter((function(e){return e.name.charAt(0)===e.surname.charAt(0)})))}))}}],h=function(e,t){var n=document.querySelector("#main"),a=e.filter((function(e){return"all"===t||e.category.includes(t)}));n.innerHTML=a.map((function(e){return"<section class='section' id='".concat(e.class,"'>\n    <div class=\"container ").concat(e.class,'__container game__container">\n      <div class="game ').concat(e.class,'"></div>\n    </div>\n  </section>')})).join(""),a.forEach((function(e){e.init&&e.init()}))};document.addEventListener("DOMContentLoaded",(function(){h(f,"all")}));document.querySelector(".submenu").addEventListener("click",(function(e){switch(e.target.dataset.category){case"numerical":h(f,"numerical"),document.querySelector("main").classList.add("fiximg");break;case"games":h(f,"game"),document.querySelector("main").classList.add("fiximg");break;case"acquaintance":h(f,"acquaintance"),document.querySelector("main").classList.add("fiximg")}}));var y=document.querySelector("[data-backdrop]"),g=document.querySelector("[data-modal]"),L=function(e){e.target.closest("[data-modal-close]")&&(y.classList.add("is-hidden"),g.removeEventListener("click",L),document.body.classList.remove("no-scroll"),setTimeout((function(){y.remove()}),250))};g.addEventListener("click",L);var S=document.querySelector("[data-modal-form]"),q=document.querySelector("[data-modal-input]"),k=document.querySelector("[data-modal-output]");S.addEventListener("submit",(function(e){e.preventDefault();var t=q.value.trim();t.length>0?(k.innerHTML="Вітаємо, ".concat(t,"!"),y.classList.add("is-hidden"),document.body.classList.remove("no-scroll"),g.removeEventListener("click",L),setTimeout((function(){y.remove()}),250)):alert("Введіть ваше ім'я!")}));var E=document.querySelector(".switch__input");E.addEventListener("change",(function(){"dark"!==document.documentElement.dataset.theme&&E.checked&&(document.documentElement.setAttribute("data-theme","dark"),document.querySelector("main").classList.remove("img")),E.checked||(document.documentElement.removeAttribute("data-theme"),document.querySelector("main").classList.add("img"))}))}();
//# sourceMappingURL=index.a90b1b48.js.map
