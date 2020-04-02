import $ from 'jquery';
import './ratings.scss';


class Ratings {
  constructor(element) {
    this.$elem = element;
    this.render();
  }

  render() {
    this.$elem.rating();
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-rating').each((index, node) => {
      new Ratings($(node));
    });
  });
}

renderComponent();
