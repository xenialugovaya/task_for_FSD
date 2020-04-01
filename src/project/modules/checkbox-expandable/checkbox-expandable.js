import './checkbox-expandable.scss'

class CheckboxExpandable {
  constructor(element) {
    this.$elem = element;
    this.addEvent();
  }
  addEvent() {
    this.$elem.click((e) => {
      const target = e.target;
      $(target).next().toggle();
      $(target).toggleClass('checkbox-expandable_closed');
      $(target).toggleClass('checkbox-expandable_open');
    });
  }


}

export default function renderComponent() {
  $(() => {
    $('.js-checkbox-expandable__title').each((index, node) => {
      new CheckboxExpandable($(node));
    });
  });
}

renderComponent();