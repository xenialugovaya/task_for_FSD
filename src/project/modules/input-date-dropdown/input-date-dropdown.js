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
    applyButton.classList.add('calendar-inputs__add-button');
    applyButton.classList.add('button-transparent');
    applyButton.innerText = 'Применить';
    parent.append(applyButton);
    $(applyButton).on('click', this.handleCalendarInputsAddButtonClick.bind(this));
  }

  handleCalendarInputsAddButtonClick() {
    this.$elem.blur();
  }
}

function renderComponent() {
  $(() => {
    $('.js-input-date-dropdown__input').each((index, node) => {
      const dropCalendar = new DropCalendar($(node));
      return dropCalendar;
    });
  });
}
renderComponent();