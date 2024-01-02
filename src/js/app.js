/* eslint-disable import/extensions */
// TODO: write code here
import FieldWidget from './field-widget/field-widget.js';

const board = new FieldWidget(document.querySelector('.field'));

let curBox;
let newBox;
const gameOn = setInterval(() => {
  do {
    newBox = Math.floor(Math.random() * 16) + 1;
  } while (curBox === newBox);
  try {
    board.removeMuzzle(curBox);
  } catch (err) {
    //
  }
  board.addMuzzle(newBox);
  curBox = newBox;
}, 1500);

document.addEventListener('click', (e) => {
  if (e.target.contains(document.querySelector('.active'))) {
    board.removeMuzzle();
  }
});
