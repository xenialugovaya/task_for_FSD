import './input.scss';
import $ from 'jquery';
import 'jquery.maskedinput/src/jquery.maskedinput';

class MaskedInput {
  constructor(element) {
    this.$elem = element;

    this.render();
  }

  render() {
    $.mask.definitions.y = '[12]';
    $.mask.definitions.m = '[01]';
    $.mask.definitions.d = '[0-3]';
    this.$elem.mask('d9.m9.y999');
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
