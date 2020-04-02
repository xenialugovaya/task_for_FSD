import $ from 'jquery';

export default class StarRating {
  constructor(element) {
    this.$elem = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      $(item).on('click', { index }, this.ratingChangeState.bind(this));
      $(item).on('mouseenter', { index }, this.ratingHoverState.bind(this));
      $(item).on('mouseout', this.ratingDefaultState.bind(this));
    });
  }

  getStarElements() {
    const $starElements = this.$elem.find('.rating__star-wrap').find('.rating__star');
    return $starElements;
  }

  ratingChangeState(event) {
    const currentIndex = event.data.index;
    const $currentStar = $(event.currentTarget);
    const $starElements = this.getStarElements();
    if ($currentStar.hasClass('star-checked')) {
      $starElements.each((index, item) => {
        if (currentIndex <= index) {
          $(item).removeClass('star-checked');
        }
      });
    } else {
      $starElements.each((index, item) => {
        if (currentIndex >= index) {
          $(item).addClass('star-checked');
        }
      });
    }
  }

  ratingHoverState(event) {
    const currentIndex = event.data.index;
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      if (currentIndex > index) {
        $(item).addClass('star-hover');
      }
    });
  }

  ratingDefaultState() {
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      $(item).removeClass('star-hover');
    });
  }
}
