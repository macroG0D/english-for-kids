// create table
// table th: category, word, Translation, trained, correct, incorrect, %
// repeat difficult words
// reset
// table takes data from local storage
// can be sorted by th
import {
  STATS_TABLE_HEADERS, ALL_CARDS, WORDS_AMOUNT,
} from '../data/constants';

export default class Statistic {
  constructor() {
    this.data = localStorage.getItem('stats');
    this.statsToShow = [];
  }

  init() {
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
  }

  allCardsTransform() {
    for (let i = 1; i < ALL_CARDS.length; i += 1) {
      for (let k = 0; k < ALL_CARDS.length - 1; k += 1) {
        const wordArr = [];
        wordArr.push(ALL_CARDS[0][i - 1]);
        wordArr.push(ALL_CARDS[i][k].word);
        wordArr.push(ALL_CARDS[i][k].translation);
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
}
