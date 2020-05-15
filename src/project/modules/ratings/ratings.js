class StarRating {
  constructor(element) {
    this.init(element);
  }

  init(element) {
    this.$elem = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      $(item).on('click', {
        index,
      }, this.handleRatingStarClick.bind(this));
      $(item).on('mouseenter', {
        index,
      }, this.handleRatingStarMouseEnter.bind(this));
      $(item).on('mouseout', this.handleRatingStarMouseOut.bind(this));
    });
  }

  getStarElements() {
    const $starElements = this.$elem.find('.rating__star-wrap').find('.rating__star');
    return $starElements;
  }

  handleRatingStarClick(event) {
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

  handleRatingStarMouseEnter(event) {
    const currentIndex = event.data.index;
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      if (currentIndex > index) {
        $(item).addClass('star-hover');
      }
    });
  }

  handleRatingStarMouseOut() {
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      $(item).removeClass('star-hover');
    });
  }
}


function renderStarRating() {
  $(() => {
    $('.js-rating').each((index, node) => {
      const starRating = new StarRating($(node));
      return starRating;
    });
  });
}

renderStarRating();
