/* eslint-disable-next-line no-unused-vars */
import mask from 'jquery.maskedinput/src/jquery.maskedinput';

class MaskedInput {
  constructor(element) {
    this.$element = element;
    this.render();
  }

  render() {
    $.mask.definitions.y = '[12]';
    $.mask.definitions.m = '[01]';
    $.mask.definitions.d = '[0-3]';
    this.$element.mask('d9.m9.y999');
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-input_masked').each((index, node) => {
      const maskedInput = new MaskedInput($(node));
      return maskedInput;
    });
  });
}

renderComponent();