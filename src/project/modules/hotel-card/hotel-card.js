/* eslint-disable-next-line no-unused-vars */
import lightslider from 'lightslider';

class ImageSlider {
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

function renderElement() {
  $(() => {
    $('.js-hotel-images-list').each((index, node) => {
      const imageSlider = new ImageSlider($(node));
      return imageSlider;
    });
  });
}

renderElement();
