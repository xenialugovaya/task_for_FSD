import './hotel-card.scss';

class imageSlider {
  constructor(element) {
    this.$elem = element;
    this.render();
  }

  render() {
    this.$elem.lightSlider({
      item: 1,
      slideMove: 1,
      loop: true,
      controls: true,
    });
  }
}

export default function renderElement() {
  $(() => {
    $('.hotel-images-list').each((index, node) => {
      new imageSlider($(node));
    });
  });
}

renderElement();