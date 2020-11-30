import '../styles/main.scss';
import Menu from './models/Menu';
import GameMode from './models/GameMode';
import Home from './models/Home';
import Category from './models/Category';

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
  const cardToFlip = this.children[0];
  const titleWrapper = cardToFlip.children[0].children[1];
  cardToFlip.children[0].children[0].removeAttribute('style');
  cardToFlip.removeAttribute('style');
  titleWrapper.removeAttribute('style');
};
const flip = function () {
  const cardWrapper = this.closest('.wordCardWrapper');
  const cardToFlip = this.closest('.wordCard');
  cardToFlip.style.transform = 'rotateY(180deg)';
  const titleWrapper = cardToFlip.children[0].children[1];
  titleWrapper.style.transform = 'translateY(10rem)';
  cardWrapper.addEventListener('mouseleave', flipBack);
  cardWrapper.children[0].children[0].children[0].style.transform = 'scale(1, 1)';
  // transform: scale(1, 1);
};

function loadCategoryPage(selected) {
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
}

// menu main
function goHome() {
  clearCardsWrapper();
  home.createHomeCards();
  categoryCards = document.querySelectorAll('.categoryCard');
  menu.hideMenu(bluredBackgound);
  setActiveMenuItem(mainLink);

  categoryCards.forEach((categoryCard) => {
    categoryCard.addEventListener('click', loadCategoryPage.bind(null, categoryCard));
  });

  categoryLinks.forEach((categoryLink) => {
    categoryLink.addEventListener('click', loadCategoryPage.bind(null, categoryLink));
  });
}

const switchMode = function () {
  goHome();
  gameMode.toggleAppMode();
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
