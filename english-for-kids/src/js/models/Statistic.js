import {
  STATS_TABLE_HEADERS, ALL_CARDS, WORDS_AMOUNT,
} from '../data/constants';
import { getScores, initStorage } from './Scores';
import cards from '../data/cards';

export default class Statistic {
  constructor() {
    this.statsToShow = [];
  }

  init() {
    initStorage();
    this.allCardsTransform();
    let bluredBackground = document.querySelector('.statsBackgound');
    if (bluredBackground) {
      bluredBackground.remove();
    }

    const headers = STATS_TABLE_HEADERS;
    const main = document.querySelector('main');
    bluredBackground = document.createElement('div');
    bluredBackground.classList.add('statsBackgound');
    main.appendChild(bluredBackground);

    const statsTableHeaders = document.createElement('table');
    statsTableHeaders.classList.add('statsTableHeaders');
    const statsTableHeaderBody = document.createElement('tbody');
    statsTableHeaderBody.classList.add('statsTableHeaderBody');
    const tr = document.createElement('tr');

    // create table headers
    for (let i = 0; i < headers.length; i += 1) {
      const th = document.createElement('th');
      th.classList.add('tableHeaders');
      th.textContent = headers[i];
      th.setAttribute('name', headers[i]);
      tr.appendChild(th);
      statsTableHeaderBody.appendChild(tr);
    }
    statsTableHeaders.appendChild(statsTableHeaderBody);
    bluredBackground.appendChild(statsTableHeaders);

    this.sortAZ19(0); // sort by category before load
    const categoryHeaders = document.querySelectorAll('.tableHeaders');
    categoryHeaders.forEach((header) => {
      if (header.getAttribute('name') === 'category') {
        header.classList.add('tableHeaders__up');
      }
    });
    this.loadStatsPage();
    // create stats buttons
    this.createStatsButtons();
  }

  createStatsButtons() {
    const statsButtonsWrapper = document.createElement('div');
    statsButtonsWrapper.classList.add('statsButtonsWrapper');
    const resetButton = document.createElement('button');
    resetButton.classList.add('resetData');
    const resetButtonText = 'Reset';
    resetButton.textContent = resetButtonText;
    const repeatDifficultWords = document.createElement('button');
    repeatDifficultWords.classList.add('repeatDifficultWords');
    const repeatDifficultWordsText = 'Repeat difficult words';
    repeatDifficultWords.textContent = repeatDifficultWordsText;
    statsButtonsWrapper.appendChild(resetButton);
    statsButtonsWrapper.appendChild(repeatDifficultWords);
    const main = document.querySelector('main');
    main.appendChild(statsButtonsWrapper);
  }

  allCardsTransform() {
    for (let i = 1; i < ALL_CARDS.length; i += 1) {
      for (let k = 0; k < ALL_CARDS.length - 1; k += 1) {
        const wordArr = [];
        wordArr.push(ALL_CARDS[0][i - 1]);
        wordArr.push(ALL_CARDS[i][k].word);
        wordArr.push(ALL_CARDS[i][k].translation);
        wordArr.push(getScores(ALL_CARDS[i][k].word)[0]);
        wordArr.push(getScores(ALL_CARDS[i][k].word)[1]);
        wordArr.push(getScores(ALL_CARDS[i][k].word)[2]);
        wordArr.push(getScores(ALL_CARDS[i][k].word)[3]);
        wordArr.push(getScores(ALL_CARDS[i][k].word)[4]);
        this.statsToShow.push(wordArr);
      }
    }
  }

  loadStatsPage(headers = STATS_TABLE_HEADERS) {
    const deprecatedRows = document.querySelectorAll('.tableRows');
    if (deprecatedRows && deprecatedRows.length > 0) {
      deprecatedRows.forEach((row) => {
        row.remove();
      });
    }
    let statsTable = document.querySelector('.statsTable');
    if (statsTable) {
      statsTable.remove();
    }
    statsTable = document.createElement('table');
    statsTable.classList.add('statsTable');
    const statsTableBody = document.createElement('tbody');
    statsTableBody.classList.add('statsTableBody');

    for (let j = 0; j < WORDS_AMOUNT; j += 1) {
      const tr = document.createElement('tr');
      tr.classList.add('tableRows');
      for (let k = 0; k < headers.length; k += 1) {
        const td = document.createElement('td');
        td.textContent = this.statsToShow[j][k];
        tr.appendChild(td);
      }
      statsTableBody.appendChild(tr);
    }
    statsTable.appendChild(statsTableBody);
    const statsBackgound = document.querySelector('.statsBackgound');
    statsBackgound.appendChild(statsTable);
  }

  sort(context) {
    const indexOfHeader = STATS_TABLE_HEADERS.indexOf(context.getAttribute('name'));
    this.removeDeprecatedArrows(context);
    if (context.classList.contains('tableHeaders__up')) {
      this.sortZA91(indexOfHeader);
      context.classList.remove('tableHeaders__up');
      context.classList.add('tableHeaders__down');
    } else {
      this.sortAZ19(indexOfHeader);
      context.classList.remove('tableHeaders__down');
      context.classList.add('tableHeaders__up');
    }
    this.loadStatsPage(STATS_TABLE_HEADERS, this.statsToShow);
  }

  sortAZ19(indexOfHeader) {
    this.statsToShow.sort((a, b) => {
      if (Number.isNaN(a[indexOfHeader] - b[indexOfHeader])) {
        if ((a[indexOfHeader] === b[indexOfHeader])) {
          return 0;
        }
        if ((a[indexOfHeader] < b[indexOfHeader])) {
          return -1;
        }
        return 1;
      }
      return a[indexOfHeader] - b[indexOfHeader];
    });
  }

  sortZA91(indexOfHeader) {
    this.statsToShow.sort((b, a) => {
      if (Number.isNaN(a[indexOfHeader] - b[indexOfHeader])) {
        if ((a[indexOfHeader] === b[indexOfHeader])) {
          return 0;
        }
        if ((a[indexOfHeader] < b[indexOfHeader])) {
          return -1;
        }
        return 1;
      }
      return a[indexOfHeader] - b[indexOfHeader];
    });
  }

  removeDeprecatedArrows(context) {
    const hasArrowUp = document.querySelector('.tableHeaders__up');
    const hasArrowDown = document.querySelector('.tableHeaders__down');
    if (hasArrowUp && hasArrowUp !== context) {
      hasArrowUp.classList.remove('tableHeaders__up');
    } else if (hasArrowDown && hasArrowDown !== context) {
      hasArrowDown.classList.remove('tableHeaders__down');
    }
  }

  reset() {
    localStorage.removeItem('englishForKidsScores');
    window.location.reload();
  }

  difficultWords() {
    const BOARD_SIZE = 8;
    const weakWordsTemp = Array.from(this.statsToShow);
    const weakWords = []; // is what i need to show when click repeat difficult words
    weakWordsTemp.sort((a, b) => a[7] - b[7]);
    weakWordsTemp.reverse();
    weakWordsTemp.length = BOARD_SIZE;
    weakWordsTemp.forEach((weakWord) => {
      if (weakWord[5] !== '0' && weakWord[6] !== '100.00') {
        const indexOfCategory = cards[0].indexOf(weakWord[0]);
        const currentWeakWord = weakWord[1];
        cards[indexOfCategory + 1].forEach((card) => {
          if (card.word === currentWeakWord) {
            weakWords.push(card);
          }
        });
      }
    });
    return weakWords;
  }
}
