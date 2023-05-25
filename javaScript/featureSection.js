
// Dynamic Html feature section

const games = [
  {
    image:'/images/gamesCovers/diabloIII.jpg',
    title:'Diablo III',
    releaseDate:'May 15 2012',
    company:'Blizzard Entertainment',
    description:'Diablo III is a hack-and-slash action role-playing game developed and published by Blizzard Entertainment as the third installment in the Diablo franchise.',
  },
  {
    image:'/images/gamesCovers/dragonQuest.jpg',
    title:'Dragon quest',
    releaseDate:'November 27 2004',
    company:'Square Enix, Level-5, Armor Project',
    description:'Dragon Quest VIII: Journey of the Cursed King is a role-playing video game developed by Level-5 and published by Square Enix for the PlayStation 2.',
  },
  {
    image:'/images/gamesCovers/scurge.jpg',
    title:'Scurge',
    releaseDate:'July 3 2013',
    company:'Tragnarion Studios',
    description:'Scourge: Outbreak is a third-person shooter video game developed by Spanish studio Tragnarion Studios and published by UFO Interactive Games.',
  },
  {
    image:'/images/gamesCovers/shadowOfTheColossus.jpg',
    title:'Shadow of the colossus',
    releaseDate:'October 18 2005',
    company:"Team ICO's",
    description:'Shadow of the Colossus is a 2005 action-adventure game developed by Japan Studio and Team Ico, and published by Sony Computer Entertainment for the PlayStation 2.',
  },
  {
    image:'/images/gamesCovers/Skyrim.jpg',
    title:'Skyrim',
    releaseDate:'November 11 2011',
    company:'Bethesda Game Studios',
    description:'It is the fifth main installment in The Elder Scrolls series, following The Elder Scrolls IV: Oblivion (2006), and was released worldwide for Microsoft Windows, PlayStation 3, and Xbox 360',
  },
  {
    image:'/images/gamesCovers/superMarioGalaxy.jpg',
    title:'Super Mario Galaxy',
    releaseDate:'November 1 2007',
    company:'Nintendo Entertainment Analysis & Development',
    description:'Super Mario Galaxy is a 2007 platform game developed and published by Nintendo for the Wii. It is the third 3D game in the Super Mario series.',
  }
];

const makeGames = ()=> {
  let gamesContainer = document.querySelector(".feature-section__games-container");
  for (let i = 0; i <= games.length; i++){
    let currentGame = games[i];
    let gameHtml = `
      <div class="feature-section__game-container cont${i}">
        <div class="feature-section__image-container">
        <img class="feature-section__image" src="${currentGame.image}">
        <img class="feature-section__chess" src="/images/chessBoard.png">
        </div>
        <ul class="feature-section__list">
          <li class="feature-section__game-title-container">
            <p class="feature-section__game-title">${currentGame.title}</p>
          </li>
          <li class="feature-section__release-date-container">
            <p class="feature-section__release-date">${currentGame.releaseDate}</p>
          </li>
          <li class="feature-section__company-container">
            <p class="feature-section__company">${currentGame.company}</p>
          </li>
          <li class="feature-section__description-container">
            <p class="feature-section__description">${currentGame.description}</p>
          </li>
        </ul>
      </div>
    `;
    gamesContainer.insertAdjacentHTML('afterbegin', gameHtml);
  }
  
}

document.addEventListener('DOMContentLoaded', ()=>{
  makeGames();
});

// More button

let moreButton = document.querySelector(".feature-section__button");

moreButton.addEventListener("click", ()=>{
  for (let i = 0; i < 3; i++){
    let con = document.querySelector(`.cont${i}`);
    let more = document.querySelector(".more");
    let less = document.querySelector(".less");
    let arrowDown = document.querySelector(".arrow");
    let arrowUp =document.querySelector(".arrowUp");
    if (con.style.display == "none"){
      con.style.display = "flex";
      more.style.display = "inline";
      less.style.display = "none";
      arrowDown.style.display = "none";
      arrowUp.style.display = "inline";
    }
    else {
      con.style.display = "none";
      more.style.display = "none";
      less.style.display = "inline"
      arrowDown.style.display = "inline"
      arrowUp.style.display = "none";
    }
  }
});

