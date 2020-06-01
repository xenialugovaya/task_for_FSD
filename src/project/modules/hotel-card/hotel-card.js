/* eslint-disable-next-line no-unused-vars */
import lightslider from 'lightslider';

class ImageSlider {
  constructor(element) {
    this.init(element);
  }

  init(element) {
    this.$element = element;
    this.render();
    this.handleHotelCardMouseEnter = () => {
      this.$element.find('.hotel-card__slider').addClass('hotel-card__slider_with-controls');
    };
    this.handleHotelCardMouseOut = () => {
      this.$element.find('.hotel-card__slider').removeClass('hotel-card__slider_with-controls');
    };
    this.bindEvents();
  }

  bindEvents() {
    const $sliderWrapper = this.$element.find('.lSSlideWrapper');
    this.$element.find('.lSPrev').on('mouseenter', this.handleHotelCardMouseEnter);
    this.$element.find('.lSNext').on('mouseenter', this.handleHotelCardMouseEnter);
    $sliderWrapper.on('mouseenter', this.handleHotelCardMouseEnter);
    $sliderWrapper.on('mouseout', this.handleHotelCardMouseOut);
  }

  render() {
    this.$element.find('.hotel-card__images-list').lightSlider({
      item: 1,
      slideMove: 1,
      loop: true,
      controls: true,
    });
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