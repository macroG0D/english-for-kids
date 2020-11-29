import cards from '../data/cards';

export default class Category {
  constructor(category, gameMode) {
    this.category = category;
    this.gameMode = gameMode;
    this.init();
  }

  init() {
    const cardsWrapper = document.querySelector('.cards-wrapper');
    const categoryIndex = cards[0].indexOf(this.category);
    const categoryCardsList = cards[categoryIndex + 1];
    categoryCardsList.forEach((card) => {
      const wordCard = document.createElement('div');
      wordCard.classList.add('wordCard');
      wordCard.setAttribute('name', card.word);
      const wordCardImage = document.createElement('img');
      wordCardImage.classList.add('categoryCard__image');
      wordCardImage.src = `./assets/${card.image}`;
      wordCardImage.setAttribute('alt', card.word);
      wordCard.appendChild(wordCardImage);
      if (this.gameMode !== 'play') {
        const wordCardTitleWrapper = document.createElement('div');
        wordCardTitleWrapper.classList.add('title-wrapper');
        const wordCardTitle = document.createElement('h2');
        wordCardTitle.textContent = card.word;
        wordCardTitleWrapper.appendChild(wordCardTitle);
        wordCard.appendChild(wordCardTitleWrapper);
      }
      cardsWrapper.appendChild(wordCard);
    });
  }
}
