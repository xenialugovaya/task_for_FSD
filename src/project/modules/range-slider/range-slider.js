import './range-slider.scss';


class RangeSlider {
  constructor(element) {
    this.$elem = element;
    this.render();
    this.setValuesToInput();
  }
  render() {
    this.$elem.find('.js-range-slider__body').slider({
      range: true,
      min: 0,
      max: 16000,
      values: [5000, 10000],
      slide: (event, ui) => {
        this.$elem.find('.selected-amount').val(ui.values[0].toLocaleString() + "\u20BD - " + ui.values[1].toLocaleString() + "\u20BD");
      }
    });
  }

  setValuesToInput() {
    this.$elem.find('.selected-amount').val(this.$elem.find('.js-range-slider__body').slider('values', 0).toLocaleString() + "\u20BD  - " +
      this.$elem.find('.js-range-slider__body').slider('values', 1).toLocaleString() + "\u20BD");
  }
}

export default function renderComponent() {
  $(() => {
    $('.range-slider').each((index, node) => {
      new RangeSlider($(node));
    });
  });
}

renderComponent();