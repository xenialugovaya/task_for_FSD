class CheckboxExpandable {
  constructor(element) {
    this.init(element);
  }

  init(element) {
    this.$element = element;
    this.handleCheckboxExpandableClick = () => {
      this.$element.next().toggle();
      this.$element.toggleClass('checkbox-expandable__title_open');
    };
    this.handleDocumentClick = (event) => {
      const $targetElement = $(event.target);
      const notBody = !($targetElement.hasClass('checkbox-expandable__title')) && !($targetElement.hasClass('checkbox-expandable__items'));
      const notButtons = !($targetElement.hasClass('checkbox__input')) && !($targetElement.hasClass('checkbox__title'));
      if (notBody && notButtons) {
        this.$element.next().hide();
        this.$element.removeClass('checkbox-expandable__title_open');
      }
    };
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$element.on('click', this.handleCheckboxExpandableClick);
    $(document).on('click', this.handleDocumentClick);
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