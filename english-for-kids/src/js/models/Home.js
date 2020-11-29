export default class Home {
  constructor(size = 8) {
    this.size = size;
    this.cardsImages = ['actions_1', 'actions_2', 'actions_3', 'animals_1', 'animals_2', 'clothes', 'emotions', 'technology'];
    this.cardsTitles = ['Actions I', 'Actions II', 'Actions III', 'Animals I', 'Animals II', 'Clothes', 'Emotions', 'Technology'];
    this.cardsWrapper = document.querySelector('.cards-wrapper');
  }

  createHomeCards() {
    for (let i = 0; i < this.size; i += 1) {
      const categoryCard = document.createElement('div');
      categoryCard.classList.add('categoryCard');
      categoryCard.setAttribute('name', this.cardsTitles[i]);
      const categoryCardImage = document.createElement('img');
      categoryCardImage.classList.add('categoryCard__image');
      categoryCardImage.src = `./assets/images/${this.cardsImages[i]}.png`;
      categoryCardImage.setAttribute('alt', this.cardsTitles[i]);
      categoryCard.appendChild(categoryCardImage);
      const cardTitle = document.createElement('h2');
      cardTitle.textContent = this.cardsTitles[i];
      categoryCard.appendChild(cardTitle);
      this.cardsWrapper.append(categoryCard);
    }
  }
}
