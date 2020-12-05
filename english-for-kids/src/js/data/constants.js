import cards from './cards';
// ASSETS URLS
const SOUNDS_URL = './assets/sounds';
const ICONS_URL = './assets/icons';
const IMAGES_URL = './assets/images';
export const CORRECT_SOUND_URL = `${SOUNDS_URL}/correct.mp3`;
export const ERROR_SOUND_URL = `${SOUNDS_URL}/wrong.mp3`;
export const SUCCESS_SOUND_URL = `${SOUNDS_URL}/success.mp3`;
export const FAILURE_SOUND_URL = `${SOUNDS_URL}/failure.mp3`;
export const CORRECT_STAR_URL = `${ICONS_URL}/star-correct.svg`;
export const WRONG_STAR_URL = `${ICONS_URL}/star-wrong.svg`;
export const FLIP_ICON_URL = `${ICONS_URL}/flip.svg`;
export const WIN_IMAGE_URL = `${IMAGES_URL}/win.jpg`;
export const LOOSE_IMAGE_URL = `${IMAGES_URL}/loose.jpg`;

// STATISTICS
export const STATS_TABLE_HEADERS = ['category', 'word', 'translation', 'trained', 'correct', 'incorrect %'];
export const ALL_CARDS = cards;
export const WORDS_AMOUNT = ALL_CARDS[0].length * (ALL_CARDS.length - 1);
