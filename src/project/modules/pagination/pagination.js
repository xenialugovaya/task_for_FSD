import './pagination.scss';
/*
class PaginationControls {
  constructor(element) {
    this.$elem = element;
    this.handleButtonClick();
    this.handleNextClick();
    this.handlePrevClick();
  }

  togglePrevControl(currentButton) {
    let prevControl = this.$elem.find('.prev');
    if (currentButton.text() === '1') {
      prevControl.hide();
    } else {
      prevControl.show();
    }
  }

  toggleNextControl() {
    let nextControl = this.$elem.find('.next');
    if (this.$elem.find('.pagination__button').last().hasClass('active')) {
      nextControl.hide();
    } else {
      nextControl.show();
    }
  }

  handleButtonClick() {
    let button = this.$elem.find('.pagination__button');

    button.click((e) => {
      let buttonActive = this.$elem.find('.active');
      let currentButton = e.target;
      $(currentButton).addClass('active');
      buttonActive.removeClass('active');
      this.togglePrevControl($(currentButton));
      this.toggleNextControl();
    });
  }

  handleNextClick() {
    let nextControl = this.$elem.find('.next');


    nextControl.click(() => {
      let buttonActive = this.$elem.find('.active');
      buttonActive.removeClass('active');
      buttonActive.next().addClass('active');
      if (buttonActive.prev().hasClass('prev') === false) {
        let detached = this.$elem.find('.pagination__button').first().detach();
        let NumToShow = parseInt(this.$elem.find('.pagination__divider').prev().text()) + 1;
        this.$elem.find('.pagination__divider').before(detached.text(NumToShow));
      }
      let lastPageNum = this.$elem.find('.pagination__button').last().text();

      let dividerDetached;
      if (parseInt(buttonActive.next().text()) + 1 == lastPageNum) {
        dividerDetached = this.$elem.find('.pagination__divider').detach();
      } else {
        this.$elem.find('.pagination__button').last().before(dividerDetached);
      }

      this.togglePrevControl(buttonActive.next());
      this.toggleNextControl();
    });
  }

  handlePrevClick() {
    let prevControl = this.$elem.find('.prev');

    prevControl.click(() => {
      let buttonActive = this.$elem.find('.active');
      buttonActive.removeClass('active');
      if (buttonActive.prev().hasClass('prev') === true) {
        let detachedButton = this.$elem.find('.pagination__divider').prev().detach();
        let NumToShow = parseInt(buttonActive.text()) - 1;
        this.$elem.find('.pagination__button').first().before(detachedButton.text(NumToShow));
      }
      buttonActive.next().addClass('active');

      this.togglePrevControl(buttonActive.next());
      this.toggleNextControl();
    });
  }
}
export default function renderPagination() {
  $(() => {
    $('.pagination').each((index, node) => {
      new PaginationControls($(node));
    });
  });
}

renderPagination();


$(() => {
  $('.pagination__button').click((e) => {
    $('.pagination').find('.active').removeClass('active');
    let currentPage = e.target;
    $(currentPage).addClass('active');
    if ($(currentPage).prev().length !== 0 && $(currentPage).prev().hasClass('prev') === false) {
      let detached = $('.pagination').find('.pagination__button').first().detach();
      let NumToShow = parseInt($('.pagination').find('.pagination__divider').prev().text()) + 1;
      $('.pagination').find('.pagination__divider').before(detached.text(NumToShow));
    }
    let prevControl = $('.pagination').find('.prev');
    let nextControl = $('.pagination').find('.next');

    if ($(currentPage).text() === '1') {
      prevControl.hide();
    } else {
      prevControl.show();
    }

    if ($('.pagination').find('.pagination__button').last().hasClass('active')) {
      nextControl.hide();
    } else {
      nextControl.show();
    }
  });

  $('.next').click(() => {
    let currentPage = $('.pagination').find('.active');
    currentPage.removeClass('active');
    currentPage.next().addClass('active');

    if ($(currentPage).prev().length !== 0 && $(currentPage).prev().hasClass('prev') === false) {
      let detached = $('.pagination').find('.pagination__button').first().detach();
      let NumToShow = parseInt($('.pagination').find('.pagination__divider').prev().text()) + 1;
      $('.pagination').find('.pagination__divider').before(detached.text(NumToShow));
    }
    let prevControl = $('.pagination').find('.prev');
    if ($(currentPage).text() === '1') {
      prevControl.hide();
    } else {
      prevControl.show();
    }
  });


  $('.prev').click(() => {
    let currentPage = $('.pagination').find('.active');
    currentPage.removeClass('active');
    if ($(currentPage).prev().length === 0 || $(currentPage).prev().hasClass('prev') === true) {
      let detached = $('.pagination').find('.pagination__divider').prev().detach();
      let NumToShow = parseInt($(currentPage).text()) - 1;
      $('.pagination').find('.pagination__button').first().before(detached.text(NumToShow));
    }
    currentPage.prev().addClass('active');

    let prevControl = $('.pagination').find('.prev');
    if ($('.pagination').find('.pagination__button').first().hasClass('active')) {
      prevControl.hide();
    } else {
      prevControl.show();
    }
  });
});
*/