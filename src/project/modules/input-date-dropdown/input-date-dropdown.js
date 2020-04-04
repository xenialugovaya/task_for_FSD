import './input-date-dropdown.scss';
import $ from 'jquery';

class DropCalendar {
  constructor(element) {
    this.$elem = element;
    this.render();
  }

  render() {
    this.datepicker = this.$elem.datepicker({
      range: true,
      clearButton: true,
      multipleDatesSeparator: ' - ',
      dateFormat: 'd M',
      language: {
        monthsShort: ['янв', 'фев', 'мар', 'апр', 'май', 'июн', 'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'],
      },
    }).data('datepicker');
    const $buttonsBlock = $(this.datepicker.$datepicker).find('.datepicker--buttons');
    this.addApplyButton($buttonsBlock);
    return this.datepicker;
  }

  addApplyButton(parent) {
    const applyButton = document.createElement('span');
    applyButton.classList.add('datepicker--button');
    applyButton.setAttribute('data-action', 'add');
    applyButton.innerText = 'Применить';
    parent.append(applyButton);
    $(applyButton).on('click', this.handleApplyEvent.bind(this));
  }

  handleApplyEvent() {
    this.$elem.find('.datepicker').hide();
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-input_date-dropdown').each((index, node) => {
      const dropCalendar = new DropCalendar($(node));
      return dropCalendar;
    });
  });
}
renderComponent();
