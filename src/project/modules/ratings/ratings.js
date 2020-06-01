class StarRating {
  constructor(element) {
    this.init(element);
  }

  init(element) {
    this.$element = element;
    this.handleRatingStarClick = (event) => {
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
    };
    this.handleRatingStarMouseEnter = (event) => {
      const currentIndex = event.data.index;
      const $starElements = this.getStarElements();
      $starElements.each((index, item) => {
        if (currentIndex > index) {
          $(item).addClass('star-hover');
        }
      });
    };
    this.handleRatingStarMouseOut = () => {
      const $starElements = this.getStarElements();
      $starElements.each((index, item) => {
        $(item).removeClass('star-hover');
      });
    };
    this.bindEventListeners();
  }

  bindEventListeners() {
    const $starElements = this.getStarElements();
    $starElements.each((index, item) => {
      $(item).on('click', {
        index,
      }, this.handleRatingStarClick);
      $(item).on('mouseenter', {
        index,
      }, this.handleRatingStarMouseEnter);
      $(item).on('mouseout', this.handleRatingStarMouseOut);
    });
  }

  getStarElements() {
    const $starElements = this.$element.find('.rating__star-wrap').find('.rating__star');
    return $starElements;
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