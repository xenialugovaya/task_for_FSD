import './checkbox-expandable.scss';

class CheckboxExpandable {
  constructor(element) {
    this.$elem = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$elem.on('click', this.toggleElement.bind(this));
  }

  toggleElement() {
    this.$elem.next().toggle();
    this.$elem.toggleClass('checkbox-expandable_closed');
    this.$elem.toggleClass('checkbox-expandable_open');
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-checkbox-expandable__title').each((index, node) => {
      const checkboxExpandable = new CheckboxExpandable($(node));
      return checkboxExpandable;
    });
  });
}

renderComponent();
