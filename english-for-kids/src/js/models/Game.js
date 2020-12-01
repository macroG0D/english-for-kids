import cards from '../data/cards';

export default class Game {
  constructor(category) {
    this.category = category;
    this.indexOfCategory = cards[0].indexOf(this.category) + 1;
    this.randomSequence = [];
    this.wordsCounter = 0;
  }

  startGame() {
    // составить массив из слов конкретной категории
    // рандомизировать данный массив
    while (this.randomSequence.length < cards[this.indexOfCategory].length) {
      const r = Math.floor(Math.random() * cards[this.indexOfCategory].length);
      if (this.randomSequence.indexOf(r) === -1) this.randomSequence.push(r);
    }
    // произнести слово
    this.sayNewWord(this.wordsCounter);
    // навесить слушатели на карточки
    // eslint-disable-next-line max-len
    // если значение в нажатой карточке === текущее слово в индексе, перейти к следующему слову массива
    // если слово угадано добавить звездочку полую звездочку иначе добавить контурную
    // если слово угадано воспрозвести соответствующий звук и сделать карточку неактивной
    // если карточка неправильно воспроизвести звук ошибки
    // когда будут угаданы все слова, завершить игру с соответствующим сообщением и звуком
  }

  repeat() {
    const index = this.wordsCounter - 1;
    const audio = new Audio();
    audio.src = `./assets/${cards[this.indexOfCategory][this.randomSequence[index]].audioSrc}`;
    audio.play();
  }

  sayNewWord(index) {
    const audio = new Audio();
    console.log(this.randomSequence[index]);
    audio.src = `./assets/${cards[this.indexOfCategory][this.randomSequence[index]].audioSrc}`;
    audio.play();
    this.wordsCounter += 1;
  }

  endGame() {}
}
