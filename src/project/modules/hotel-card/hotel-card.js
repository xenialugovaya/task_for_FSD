/* eslint-disable-next-line no-unused-vars */
import lightslider from 'lightslider';

class ImageSlider {
  constructor(element) {
    this.$elem = element;
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    this.$elem.find('.lSPrev').on('mouseenter', this.addHoverState.bind(this));
    this.$elem.find('.lSNext').on('mouseenter', this.addHoverState.bind(this));
    this.$elem.find('.lSSlideWrapper').on('mouseenter', this.addHoverState.bind(this));
    this.$elem.find('.lSSlideWrapper').on('mouseout', this.addDefaultState.bind(this));
  }

  render() {
    this.$elem.find('.hotel-card__images-list').lightSlider({
      item: 1,
      slideMove: 1,
      loop: true,
      controls: true,
    });
  }

  addHoverState() {
    this.$elem.find('.hotel-card__slider').addClass('hotel-card__slider_with-controls');
  }

  addDefaultState() {
    this.$elem.find('.hotel-card__slider').removeClass('hotel-card__slider_with-controls');
  }
}

function renderElement() {
  $(() => {
    $('.js-hotel-card').each((index, node) => {
      const imageSlider = new ImageSlider($(node));
      return imageSlider;
    });
  });
}

renderElement();