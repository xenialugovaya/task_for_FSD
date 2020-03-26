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
    $('.rating').each((index, node) => {
      new Ratings($(node));
    });
  });
}

renderComponent();