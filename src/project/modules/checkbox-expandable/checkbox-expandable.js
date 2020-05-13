class CheckboxExpandable {
  constructor(element) {
    this.$elem = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$elem.on('click', this.handleCheckboxExpandableClick.bind(this));
    $(document).on('click', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(e) {
    const $targetElem = $(e.target);
    const notBody = !($targetElem.hasClass('checkbox-expandable__title')) && !($targetElem.hasClass('checkbox-expandable__items'));
    const notButtons = !($targetElem.hasClass('checkbox__input')) && !($targetElem.hasClass('checkbox__title'));
    if (notBody && notButtons) {
      this.$elem.next().hide();
      this.$elem.removeClass('checkbox-expandable__title_open');
      this.$elem.addClass('checkbox-expandable__title_closed');
    }
  }

  handleCheckboxExpandableClick() {
    this.$elem.next().toggle();
    this.$elem.toggleClass('checkbox-expandable__title_closed');
    this.$elem.toggleClass('checkbox-expandable__title_open');
  }
}

function renderComponent() {
  $(() => {
    $('.js-checkbox-expandable__title').each((index, node) => {
      const checkboxExpandable = new CheckboxExpandable($(node));
      return checkboxExpandable;
    });
  });
}

renderComponent();
