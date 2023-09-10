/* eslint-disable import/extensions */
// TODO: write code here
import FieldWidget from './field-widget/field-widget.js';

const board = new FieldWidget(document.querySelector('.field'));

setInterval(() => {
  board.addMuzzle();
}, 3000);

setInterval(() => {
  board.removeMuzzle();
}, 3500);

document.addEventListener('click', (e) => {
  if (e.target.contains(document.querySelector('.active'))) {
    board.removeMuzzle();
  }
});
