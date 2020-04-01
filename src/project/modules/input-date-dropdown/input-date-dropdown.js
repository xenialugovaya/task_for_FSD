import './input-date-dropdown.scss';


class DropCalendar {
  constructor(element) {
    this.$elem = element;
    this.render();
  }

  render() {
    this.$elem.datepicker({
      range: true,
      clearButton: true,
      addButton: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'd M',
    });
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-input_date-dropdown').each((index, node) => {
      new DropCalendar($(node));
    });
  })
}
renderComponent();