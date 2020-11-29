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
const categoryLinks = document.querySelectorAll('.sideMenu__listItem');
let categoryCards = document.querySelectorAll('.categoryCard');
const gameMode = new GameMode(main);
const modeBtn = document.querySelector('.playmode');

const home = new Home();
// home.createHomeCards();
const cardsWrapper = document.querySelector('.cards-wrapper');

function clearCardsWrapper() {
  cardsWrapper.innerHTML = ''; // remove all from
}

function loadCategoryPage(selected) {
  const selectedCategory = selected.getAttribute('name');
  clearCardsWrapper();
  if (category) {
    category = null; // set class instance to null
  }
  category = new Category(selectedCategory, gameMode.mode);
  menu.hideMenu(bluredBackgound);
}

// menu main
function goHome() {
  clearCardsWrapper();
  home.createHomeCards();
  categoryCards = document.querySelectorAll('.categoryCard');
  menu.hideMenu(bluredBackgound);

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
  // const titleWrappers = document.querySelectorAll('.title-wrapper');
  // if (titleWrappers) {
  //   titleWrappers.forEach((titleWrapper) => {
  //     titleWrapper.classList.toggle('hidden');
  //   });
  // }
};

modeBtn.addEventListener('click', switchMode);

const mainLink = document.querySelector('.mainMenu');
mainLink.addEventListener('click', goHome);

goHome(); // create home cards on startup

// reload app on logo click
function homepage() {
  window.location.reload();
}
const logo = document.querySelector('.logo');
logo.addEventListener('click', homepage);
