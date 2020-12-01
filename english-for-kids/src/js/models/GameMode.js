export default class GameMode {
  constructor(main) {
    this.mode = 'train';
    this.modeBtn = document.querySelector('.playmode');
    this.playmodeText = document.querySelector('.playmode__text');
    this.elipse = document.querySelector('.elipse');
    this.main = main;
  }

  toggleAppMode() {
    this.main.classList.toggle('mainTrain');
    this.main.classList.toggle('mainPlay');
    if (this.mode === 'train') {
      this.mode = 'play';
      this.elipse.style.right = '0.3rem';
      this.elipse.style.removeProperty('left');
      this.playmodeText.textContent = 'Play';
      this.elipse.style.backgroundColor = '#C57AFF';
    } else {
      this.mode = 'train';
      this.elipse.style.removeProperty('right');
      this.elipse.style.left = '0.3rem';
      this.elipse.style.backgroundColor = '#8bffab';
      this.playmodeText.textContent = 'Train';
    }
    this.modeBtn.classList.toggle('train');
    this.modeBtn.classList.toggle('play');
  }

  currentMode() {
    return this.mode;
  }
}
