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
    const notBody = !($(e.target).hasClass('checkbox-expandable__title')) && !($(e.target).hasClass('checkbox-expandable__items'));
    const notButtons = !($(e.target).hasClass('checkbox-button__input')) && !($(e.target).hasClass('checkbox-button__title'));
    if (notBody && notButtons) {
      this.$elem.next().hide();
      this.$elem.removeClass('checkbox-expandable_open');
      this.$elem.addClass('checkbox-expandable_closed');
    }
  }

  handleCheckboxExpandableClick() {
    this.$elem.next().toggle();
    this.$elem.toggleClass('checkbox-expandable_closed');
    this.$elem.toggleClass('checkbox-expandable_open');
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
