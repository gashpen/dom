/* eslint-disable no-underscore-dangle */
export default class FieldWidget {
  constructor(element) {
    this._element = element;
  }

  addMuzzle() {
    const fieldBlock = this._element.querySelectorAll('.field_block');

    const index = Math.floor(Math.random() * fieldBlock.length);

    fieldBlock[index].classList.add('active');
  }

  removeMuzzle() {
    const fieldBlock = this._element.querySelectorAll('.field_block');

    fieldBlock.forEach((element) => {
      if (element.contains(this._element.querySelector('.active'))) {
        element.classList.remove('active');
      }
    });
  }
}
