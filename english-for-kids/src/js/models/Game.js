import cards from '../data/cards';
import {
  CORRECT_SOUND_URL, ERROR_SOUND_URL, CORRECT_STAR_URL, WRONG_STAR_URL, SUCCESS_SOUND_URL,
  WIN_IMAGE_URL, LOOSE_IMAGE_URL, FAILURE_SOUND_URL,
} from '../data/constants';

export default class Game {
  constructor(category) {
    this.category = category;
    this.indexOfCategory = (cards[0]?.indexOf(this.category) > -1
      ? cards[0].indexOf(this.category) : 0) + 1;
    this.randomSequence = [];
    this.wordsCounter = 0;
    this.win = true;
  }

  startGame() {
    while (this.randomSequence.length < cards[this.indexOfCategory].length) {
      const r = Math.floor(Math.random() * cards[this.indexOfCategory].length);
      if (this.randomSequence.indexOf(r) === -1) this.randomSequence.push(r);
    }
    this.sayNewWord(this.wordsCounter);
  }

  cardsShortcut(index) {
    return cards[this.indexOfCategory][this.randomSequence[index]];
  }

  checkIfCorrect(card) {
    const index = this.wordsCounter - 1;
    if (card.getAttribute('name') === this.cardsShortcut(index).word) {
      card.closest('.wordCardWrapper').classList.add('guessed');
      this.addStar(true);
      if (this.wordsCounter < cards[this.indexOfCategory].length) {
        setTimeout(() => { this.sayNewWord(this.wordsCounter); }, 1000);
      } else {
        this.endGame();
      }
    } else {
      this.addStar(false);
      this.win = false;
      setTimeout(() => { this.repeat(); }, 1000);
    }
  }

  // updateStats(word, result) {

  // }

  addStar(correct) {
    const starsWrapper = document.querySelector('.starsWrapper');
    const newStar = document.createElement('img');
    newStar.classList.add('star');
    const correctSound = new Audio();
    correctSound.src = CORRECT_SOUND_URL;
    const wrondSound = new Audio();
    wrondSound.src = ERROR_SOUND_URL;
    if (correct) {
      correctSound.play();
      newStar.src = CORRECT_STAR_URL;
    } else {
      wrondSound.play();
      newStar.src = WRONG_STAR_URL;
    }
    starsWrapper.append(newStar);
  }

  repeat() {
    const index = this.wordsCounter - 1;
    const audio = new Audio();
    audio.src = `./assets/${this.cardsShortcut(index).audioSrc}`;
    audio.addEventListener('canplaythrough', () => {
      audio.play();
    });
  }

  sayNewWord(index) {
    const audio = new Audio();
    audio.src = `./assets/${this.cardsShortcut(index).audioSrc}`;
    audio.addEventListener('canplaythrough', () => {
      audio.play();
    });
    this.wordsCounter += 1;
  }

  endGame() {
    const image = document.createElement('img');
    const message = document.createElement('h2');
    const playMoreButton = document.querySelector('.playMoreButton');
    const starsWrapper = document.querySelector('.starsWrapper');
    const stars = document.querySelectorAll('.star');
    stars.forEach((star) => {
      starsWrapper.appendChild(star);
    });
    const playMoreText = 'Play more';
    playMoreButton.textContent = playMoreText;
    const endGameSound = new Audio();
    const endGameMessageWrapper = document.createElement('div');
    endGameMessageWrapper.classList.add('endGameMessageWrapper');
    const endGameMessageBG = document.createElement('div');
    endGameMessageBG.classList.add('bluredBackgound');
    const endGameMessage = document.createElement('div');
    endGameMessage.classList.add('endGameMessage');
    endGameMessageWrapper.appendChild(endGameMessageBG);
    endGameMessageWrapper.appendChild(endGameMessage);
    const main = document.querySelector('main');
    main.append(endGameMessageWrapper);
    const repeatButton = document.querySelector('.repeat');
    repeatButton.remove();
    this.randomSequence = [];
    if (this.win) {
      const youWon = 'You Won';
      message.textContent = youWon;
      endGameSound.src = SUCCESS_SOUND_URL;
      endGameSound.play();
      image.src = WIN_IMAGE_URL;
    } else {
      const youLost = 'You Lost';
      message.textContent = youLost;
      endGameSound.src = FAILURE_SOUND_URL;
      endGameSound.play();
      image.src = LOOSE_IMAGE_URL;
    }
    endGameMessage.appendChild(image);
    endGameMessage.appendChild(message);
    endGameMessage.appendChild(starsWrapper);
    playMoreButton.classList.remove('hidden');
    endGameMessage.appendChild(playMoreButton);
  }
}