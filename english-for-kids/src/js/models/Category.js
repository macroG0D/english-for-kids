import cards from '../data/cards';

export default class Category {
  constructor(category, gameMode) {
    this.category = category;
    this.gameMode = gameMode;
    this.init();
    this.fliped = false;
  }

  init() {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const categoryIndex = cards[0].indexOf(this.category);
    const categoryCardsList = cards[categoryIndex + 1];
    categoryCardsList.forEach((card) => {
      const wordCardWrapper = document.createElement('div');
      wordCardWrapper.classList.add('wordCardWrapper');
      const wordCard = document.createElement('div');
      wordCard.classList.add('wordCard');
      wordCard.setAttribute('name', card.word);
      const front = document.createElement('div');
      front.classList.add('front');
      const back = document.createElement('div');
      back.classList.add('back');
      const wordCardImage = document.createElement('img');

      wordCardImage.classList.add('categoryCard__image');
      wordCardImage.src = `./assets/${card.image}`;
      wordCardImage.setAttribute('alt', card.word);
      front.appendChild(wordCardImage);
      const translation = document.createElement('h2');
      translation.classList.add('translationText');
      translation.innerText = card.translation;
      back.appendChild(translation);
      wordCard.appendChild(front);
      wordCard.appendChild(back);
      if (this.gameMode !== 'play') {
        wordCardImage.setAttribute('sound', card.audioSrc);
        const wordCardTitleWrapper = document.createElement('div');
        wordCardTitleWrapper.classList.add('title-wrapper');
        const wordCardTitle = document.createElement('h2');
        wordCardTitle.textContent = card.word;
        wordCardTitleWrapper.appendChild(wordCardTitle);
        front.appendChild(wordCardTitleWrapper);
        const flipButton = document.createElement('button');
        flipButton.classList.add('flipButton');
        const flipIcon = document.createElement('img');
        flipIcon.src = './assets/icons/flip.svg';
        flipButton.appendChild(flipIcon);
        wordCardTitleWrapper.appendChild(flipButton);
      }
      wordCardWrapper.appendChild(wordCard);
      cardsWrapper.appendChild(wordCardWrapper);
    });
    if (this.gameMode === 'play') {
      const startGameButton = document.createElement('button');
      startGameButton.classList.add('startGameButton');
      startGameButton.textContent = 'Start Game';
      const main = document.querySelector('main');
      main.appendChild(startGameButton);
    }
  }
}
