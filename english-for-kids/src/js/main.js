import '../styles/main.scss';
import Menu from './models/Menu';
import GameMode from './models/GameMode';
import Home from './models/Home';
import Category from './models/Category';
import Game from './models/Game';
import Statistic from './models/Statistic';
import updateScore from './models/Scores';

const menu = new Menu('trainmode');
let goHome = '';
const body = document.querySelector('body');
// burger and side menu
const burger = document.querySelector('.burger_menu');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const bluredBackgound = document.createElement('div');
bluredBackgound.classList.add('bluredBackgound');

let playMoreButton = document.querySelector('.playMoreButton');

const createPlayMoreButton = function () {
  if (playMoreButton) {
    playMoreButton.remove();
  }
  playMoreButton = document.createElement('button');
  playMoreButton.classList.add('playMoreButton');
  playMoreButton.classList.add('hidden');
  main.appendChild(playMoreButton);
};

const menuController = function (e) {
  if (e.target.classList.contains('burger_menu') || e.target.classList.contains('burger')) {
    if (!menu.opened) {
      menu.showMenu(bluredBackgound);
      body.classList.add('overflow_hidden');
    } else {
      menu.hideMenu(bluredBackgound);
      body.classList.remove('overflow_hidden');
    }
  } else {
    menu.hideMenu(bluredBackgound);
    body.classList.remove('overflow_hidden');
  }
};

const outsideMenu = [burger, main, footer];
outsideMenu.forEach((elem) => {
  elem.addEventListener('click', menuController);
});

header.addEventListener('click', (e) => {
  if (menu.opened && !e.composedPath()[2].classList.contains('header') && !e.composedPath()[2].classList.contains('left_wrapper')) {
    menu.hideMenu(bluredBackgound);
    body.classList.remove('overflow_hidden');
  }
});

let category;
const categoryLinks = document.querySelectorAll('.categoryLink');
let categoryCards = document.querySelectorAll('.categoryCard');
const gameMode = new GameMode(main);
const modeBtn = document.querySelector('.playmode');
const mainLink = document.querySelector('.mainMenu');
const statsLink = document.querySelector('.statistic');
const home = new Home();
const cardsWrapper = document.querySelector('.cards-wrapper');
let endGameWrapper;

function clearCardsWrapper() {
  cardsWrapper.innerHTML = '';
}

function setActiveMenuItem(newAvtiveMenuItem) {
  const prevActiveMenuItem = document.querySelector('.activeMenuItem');
  if (prevActiveMenuItem) {
    prevActiveMenuItem.classList.remove('activeMenuItem');
  }
  if (newAvtiveMenuItem.classList.contains('interactiveMenuItem')) {
    newAvtiveMenuItem.classList.add('activeMenuItem');
  } else {
    const newActive = document.querySelector(`[name="${newAvtiveMenuItem.getAttribute('name')}"]`);
    newActive.classList.add('activeMenuItem');
  }
  createPlayMoreButton();
  playMoreButton.addEventListener('click', goHome);
}

const flipBack = function () {
  category.fliped = false;
  const cardToFlip = this.children[0];
  const titleWrapper = cardToFlip.children[0].children[1];
  cardToFlip.children[0].children[0].removeAttribute('style');
  cardToFlip.removeAttribute('style');
  titleWrapper.removeAttribute('style');
};

const flip = function () {
  category.fliped = true;
  const cardWrapper = this.closest('.wordCardWrapper');
  const cardToFlip = this.closest('.wordCard');
  cardToFlip.style.transform = 'rotateY(180deg)';
  const titleWrapper = cardToFlip.children[0].children[1];
  titleWrapper.style.transform = 'translateY(10rem)';
  cardWrapper.addEventListener('mouseleave', flipBack);
  cardWrapper.children[0].children[0].children[0].style.transform = 'scale(1, 1)';
};

const pronunciation = function () {
  const pronouncedWord = this.getAttribute('alt');
  const pronouncedWordSound = this.getAttribute('sound');
  updateScore('trained', pronouncedWord);
  const audio = new Audio();
  audio.src = `./assets/${pronouncedWordSound}`;
  if (!category.fliped) {
    audio.addEventListener('canplaythrough', () => {
      audio.play();
    });
  }
};

let startGameButton;
let repeatSoundButton;

const startNewGame = function () {
  const game = new Game(category.category);
  game.startGame();
  startGameButton.classList.remove('startGameButton');
  startGameButton.classList.add('repeat');
  startGameButton.textContent = '';
  startGameButton.removeEventListener('click', startNewGame);
  repeatSoundButton = startGameButton;
  repeatSoundButton.style.backgroundImage = 'url(./assets/icons/flip.svg)';
  repeatSoundButton.addEventListener('click', game.repeat.bind(game));

  const starsWrapper = document.createElement('div');
  starsWrapper.classList.add('starsWrapper');
  cardsWrapper.prepend(starsWrapper);

  const cards = document.querySelectorAll('.wordCard');
  cards.forEach((card) => {
    card.addEventListener('click', game.checkIfCorrect.bind(game, card));
  });
};

function removeDeprecatedButtons() {
  // repeat button is inctance of startButton so even if no start button on layout,
  // removing it will also remove the repeat button
  if (startGameButton) {
    startGameButton.remove();
  }
}

function removeEndGameWrapper() {
  endGameWrapper = document.querySelector('.endGameMessageWrapper');
  if (endGameWrapper) {
    endGameWrapper.remove();
  }
}

function removeStatsWrapper() {
  const statsTable = document.querySelector('.statsBackgound');
  const statsButtonsWrapper = document.querySelector('.statsButtonsWrapper');
  if (statsTable) {
    statsTable.remove();
    statsButtonsWrapper.remove();
  }
}

function loadCategoryPage(selected, trainDifficultWords) {
  removeEndGameWrapper();
  removeDeprecatedButtons();
  removeStatsWrapper();
  let selectedCategory;

  if (category) {
    category = null; // set class instance to null
  }

  if (trainDifficultWords === true) {
    category = new Category(selectedCategory, 'repeatDifficult');
    category.init(selected);
  } else {
    setActiveMenuItem(selected);
    selectedCategory = selected.getAttribute('name');
    clearCardsWrapper();
    category = new Category(selectedCategory, gameMode.mode);
    category.init();
  }

  menu.hideMenu(bluredBackgound);
  body.classList.remove('overflow_hidden');
  const flipButtons = document.querySelectorAll('.flipButton');
  if (flipButtons) {
    flipButtons.forEach((flipButton) => {
      flipButton.addEventListener('click', flip);
    });
  }

  const frontSideOfCards = document.querySelectorAll('.categoryCard__image');
  if (category.gameMode !== 'play') {
    frontSideOfCards.forEach((cardFront) => {
      cardFront.addEventListener('click', pronunciation);
    });
  } else {
    startGameButton = document.querySelector('.startGameButton');
    startGameButton.addEventListener('click', startNewGame);
  }
}

let currentMode;

// menu main
goHome = function () {
  removeEndGameWrapper();
  removeDeprecatedButtons();
  clearCardsWrapper();
  removeStatsWrapper();
  home.createHomeCards();
  categoryCards = document.querySelectorAll('.categoryCard');
  menu.hideMenu(bluredBackgound);
  body.classList.remove('overflow_hidden');
  setActiveMenuItem(mainLink);

  categoryCards.forEach((categoryCard) => {
    categoryCard.addEventListener('click', loadCategoryPage.bind(null, categoryCard, false));
  });
  if (currentMode === 'play') {
    categoryCards.forEach((categoryCard) => {
      categoryCard.classList.add('playable');
    });
  }

  categoryLinks.forEach((categoryLink) => {
    categoryLink.addEventListener('click', loadCategoryPage.bind(null, categoryLink, false));
  });
  createPlayMoreButton();
  playMoreButton.addEventListener('click', goHome);
};

const switchMode = function () {
  gameMode.toggleAppMode();
  currentMode = gameMode.currentMode();
  removeEndGameWrapper();
  goHome();
};

modeBtn.addEventListener('click', switchMode);

mainLink.addEventListener('click', goHome);

goHome(); // create home cards on startup

// reload app on logo click
function homepage() {
  window.location.reload();
}
const logo = document.querySelector('.logo');
logo.addEventListener('click', homepage);

const statistic = document.querySelector('.statistic');

const repeatDifficultWords = function (statsPage) {
  loadCategoryPage(statsPage.difficultWords(), true);
};

statistic.addEventListener('click', () => {
  if (gameMode.mode === 'play') {
    switchMode();
  }
  setActiveMenuItem(statsLink);
  removeEndGameWrapper();
  removeDeprecatedButtons();
  clearCardsWrapper();
  removeStatsWrapper();
  menu.hideMenu(bluredBackgound);
  const statsPage = new Statistic();
  statsPage.init();
  const tableHeaders = document.querySelectorAll('.tableHeaders');
  tableHeaders.forEach((th) => {
    th.addEventListener('click', statsPage.sort.bind(statsPage, th));
  });
  const resetButton = document.querySelector('.resetData');
  const repeatDifficultWordsBtn = document.querySelector('.repeatDifficultWords');
  resetButton.addEventListener('click', statsPage.reset.bind(statsPage));
  repeatDifficultWordsBtn.addEventListener('click', repeatDifficultWords.bind(null, statsPage));
});
