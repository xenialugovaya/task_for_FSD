/* eslint-disable-next-line no-unused-vars */
import lightslider from 'lightslider';

class ImageSlider {
  constructor(element) {
    this.$elem = element;
    this.render();
    this.bindEvents();
  }

  bindEvents() {
    const $sliderWrapper = this.$elem.find('.lSSlideWrapper');
    this.$elem.find('.lSPrev').on('mouseenter', this.handleHotelCardMouseEnter.bind(this));
    this.$elem.find('.lSNext').on('mouseenter', this.handleHotelCardMouseEnter.bind(this));
    $sliderWrapper.on('mouseenter', this.handleHotelCardMouseEnter.bind(this));
    $sliderWrapper.on('mouseout', this.handleHotelCardMouseOut.bind(this));
  }

  render() {
    this.$elem.find('.hotel-card__images-list').lightSlider({
      item: 1,
      slideMove: 1,
      loop: true,
      controls: true,
    });
  }

  handleHotelCardMouseEnter() {
    this.$elem.find('.hotel-card__slider').addClass('hotel-card__slider_with-controls');
  }

  handleHotelCardMouseOut() {
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
