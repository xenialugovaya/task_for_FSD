import 'air-datepicker/dist/js/datepicker';
import $ from 'jquery';


class Calendar {
  constructor(element) {
    this.$elem = element;
    this.addApplyButton();
    this.setHeader();
  }

  addApplyButton() {
    const applyButton = document.createElement('span');
    applyButton.classList.add('datepicker--button');
    applyButton.setAttribute('data-action', 'add');
    applyButton.innerText = 'Применить';
    const $buttonsBlock = this.$elem.find('.datepicker--buttons');
    $buttonsBlock.append(applyButton);
    $(applyButton).on('click', this.handleApplyEvent.bind(this));
  }

  setHeader() {
    const $calendarHeader = this.$elem.find('.datepicker--nav-title');
    const $headerText = $calendarHeader.text();
    $calendarHeader.innerText = $headerText.split(',').join('');
  }

  handleApplyEvent() {
    const parent = this.$elem.parent();
    if ($(parent).hasClass('calendar-inputs__calendar-dropdown')) {
      parent.hide();
    }
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-calendar').each((index, node) => {
      const calendar = new Calendar($(node));
      return calendar;
    });
  });
}
renderComponent();
