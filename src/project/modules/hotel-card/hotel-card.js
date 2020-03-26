import './hotel-card.scss';
import 'lightslider/src/js/lightslider.js'
import 'lightslider/src/css/lightslider.css'

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
    $('.hotel-images-list').each((index, node) => {
      new ImageSlider($(node));
    });
  });
}

renderElement();