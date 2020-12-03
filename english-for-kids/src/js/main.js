import '../styles/main.scss';
import Menu from './models/Menu';
import GameMode from './models/GameMode';
import Home from './models/Home';
import Category from './models/Category';
import Game from './models/Game';

const menu = new Menu('trainmode');

// burger and side menu
const burger = document.querySelector('.burger_menu');
const main = document.querySelector('main');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const bluredBackgound = document.createElement('div');
bluredBackgound.classList.add('bluredBackgound');

const menuController = function (e) {
  if (e.target.classList.contains('burger_menu') || e.target.classList.contains('burger')) {
    if (!menu.opened) {
      menu.showMenu(bluredBackgound);
    } else {
      menu.hideMenu(bluredBackgound);
    }
  } else {
    menu.hideMenu(bluredBackgound);
  }
};

const outsideMenu = [burger, main, footer];
outsideMenu.forEach((elem) => {
  elem.addEventListener('click', menuController);
});

header.addEventListener('click', (e) => {
  if (menu.opened && !e.composedPath()[2].classList.contains('header') && !e.composedPath()[2].classList.contains('left_wrapper')) {
    menu.hideMenu(bluredBackgound);
  }
});

let category;
const categoryLinks = document.querySelectorAll('.categoryLink');
let categoryCards = document.querySelectorAll('.categoryCard');
const gameMode = new GameMode(main);
const modeBtn = document.querySelector('.playmode');
const mainLink = document.querySelector('.mainMenu');
const home = new Home();
const cardsWrapper = document.querySelector('.cards-wrapper');
let endGameWrapper;

function clearCardsWrapper() {
  cardsWrapper.innerHTML = ''; // remove all from
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
  const pronouncedWord = this.getAttribute('sound');
  const audio = new Audio();
  audio.src = `./assets/${pronouncedWord}`;
  if (!category.fliped) {
    audio.play();
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
    card.addEventListener('click', game.chechIfCorrect.bind(game, card));
  });
};

function removeRepeatButton() {
  const repeatButton = document.querySelector('.repeat');
  if (repeatButton) {
    repeatButton.remove();
  }
  // startGameButton = document.querySelector('.startGameButton');
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

function loadCategoryPage(selected) {
  removeEndGameWrapper();
  removeRepeatButton();
  setActiveMenuItem(selected);
  const selectedCategory = selected.getAttribute('name');
  clearCardsWrapper();
  if (category) {
    category = null; // set class instance to null
  }
  category = new Category(selectedCategory, gameMode.mode);
  menu.hideMenu(bluredBackgound);
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
function goHome() {
  removeRepeatButton();
  clearCardsWrapper();
  home.createHomeCards();
  categoryCards = document.querySelectorAll('.categoryCard');
  menu.hideMenu(bluredBackgound);
  setActiveMenuItem(mainLink);

  categoryCards.forEach((categoryCard) => {
    categoryCard.addEventListener('click', loadCategoryPage.bind(null, categoryCard));
  });
  if (currentMode === 'play') {
    categoryCards.forEach((categoryCard) => {
      categoryCard.classList.add('playable');
    });
  }

  categoryLinks.forEach((categoryLink) => {
    categoryLink.addEventListener('click', loadCategoryPage.bind(null, categoryLink));
  });
}

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
statistic.addEventListener('click', () => {
  console.log('statistic');
});
