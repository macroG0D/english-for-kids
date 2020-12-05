import cards from '../data/cards';
import { FLIP_ICON_URL } from '../data/constants';

export default class Category {
  constructor(category, gameMode) {
    this.category = category;
    this.gameMode = gameMode;
    this.fliped = false;
  }

  init(difficultWords) {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    let categoryCardsList;

    if (this.gameMode === 'repeatDifficult') {
      categoryCardsList = difficultWords;
    } else {
      const categoryIndex = cards[0].indexOf(this.category);
      categoryCardsList = cards[categoryIndex + 1];
    }

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
        flipIcon.src = FLIP_ICON_URL;
        flipButton.appendChild(flipIcon);
        wordCardTitleWrapper.appendChild(flipButton);
      }
      wordCardWrapper.appendChild(wordCard);
      cardsWrapper.appendChild(wordCardWrapper);
    });

    if (categoryCardsList.length === 0) {
      const emptyStatsMessageWrapper = document.createElement('div');
      emptyStatsMessageWrapper.classList.add('emptyStatsMessageWrapper');
      const emptyStatsMessage = document.createElement('h1');
      emptyStatsMessage.textContent = 'No weak words yet';
      emptyStatsMessage.classList.add('emptyStatsMessage');
      const playMoreButton = document.querySelector('.playMoreButton');
      playMoreButton.classList.remove('hidden');
      const TO_MAIN_PAGE_TEXT = 'Main page';
      playMoreButton.textContent = TO_MAIN_PAGE_TEXT;
      emptyStatsMessageWrapper.appendChild(emptyStatsMessage);
      emptyStatsMessageWrapper.appendChild(playMoreButton);
      cardsWrapper.appendChild(emptyStatsMessageWrapper);
    }

    if (this.gameMode === 'play') {
      const startGameButton = document.createElement('button');
      startGameButton.classList.add('startGameButton');
      startGameButton.textContent = 'Start Game';
      const main = document.querySelector('main');
      main.appendChild(startGameButton);
    }
  }
}
