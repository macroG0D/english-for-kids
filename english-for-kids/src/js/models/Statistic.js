// create table
// table th: category, word, Translation, trained, correct, incorrect, %
// repeat difficult words
// reset
// table takes data from local storage
// can be sorted by th
export default class Statistic {
  constructor(stats) {
    this.stats = stats;
    this.data = localStorage.getItem('stats');
  }
}
