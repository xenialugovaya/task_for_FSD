import $ from 'jquery';
import 'lightslider/src/js/lightslider';
import 'lightslider/src/css/lightslider.css';
import './hotel-card.scss';

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

export default function renderElement() {
  $(() => {
    $('.js-hotel-images-list').each((index, node) => {
      const imageSlider = new ImageSlider($(node));
      return imageSlider;
    });
  });
}

renderElement();
