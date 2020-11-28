import '../styles/main.scss';
// import image from '../assets/images/tonyem.jpg';
// import Model from './models/Model';

// const model = new Model('English-for-kids');

// burger and side menu
const sideMenu = document.querySelector('.sideMenu');
const burger = document.querySelector('.burger_menu');
const main = document.querySelector('main');

const bluredBackgound = document.createElement('div');
bluredBackgound.classList.add('bluredBackgound');

const hideMenu = function () {
  burger.style.transform = 'rotateZ(0deg)';
  burger.classList.remove('burger_menu__active');
  sideMenu.style.left = '-32rem';
  bluredBackgound.remove();
};

const showMenu = function () {
  burger.style.transform = 'rotateZ(-90deg)';
  burger.classList.add('burger_menu__active');
  sideMenu.style.left = '0';
  main.append(bluredBackgound);
  main.addEventListener('mouseenter', hideMenu);
};

burger.addEventListener('mouseenter', showMenu);

// train/play mode
const modeBtn = document.querySelector('.playmode');
const playmodeText = document.querySelector('.playmode__text');
const elipse = document.querySelector('.elipse');

const toggleAppMode = function () {
  main.classList.toggle('mainTrain');
  main.classList.toggle('mainPlay');
  if (modeBtn.classList.contains('train')) {
    elipse.style.right = '0.3rem';
    elipse.style.removeProperty('left');
    playmodeText.textContent = 'Play';
    elipse.style.backgroundColor = '#C57AFF';
  } else {
    elipse.style.removeProperty('right');
    elipse.style.left = '0.3rem';
    elipse.style.backgroundColor = '#8bffab';
    playmodeText.textContent = 'Train';
  }
  modeBtn.classList.toggle('train');
  modeBtn.classList.toggle('play');
};

modeBtn.addEventListener('click', toggleAppMode);
