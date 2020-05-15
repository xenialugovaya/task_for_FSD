/* eslint-disable-next-line no-unused-vars */
import Datepicker from 'air-datepicker';

export default class Calendar {
  constructor(element, isDropdown = false, isDoubleInputs = false) {
    this.init(element, isDropdown, isDoubleInputs);
  }

  init(element, isDropdown = false, isDoubleInputs = false) {
    this.$elem = element;
    this.isDropdown = isDropdown;
    this.isDoubleInputs = isDoubleInputs;
    if (this.isDropdown) {
      this.render();
    } else if (this.isDoubleInputs) {
      this.bindEventListeners();
    } else {
      Calendar.setHeader(this.$elem);
      const $buttonsBlock = this.$elem.find('.datepicker--buttons');
      this.addApplyButton($buttonsBlock);
    }
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
    Calendar.setHeader($(this.datepicker.$datepicker));
    return this.datepicker;
  }

  bindEventListeners() {
    this.$elem.find('.calendar-inputs__wrap-input').on('click', this.handleCalendarInputsWrapInputClick.bind(this));
    this.$elem.find('.datepicker-here').on('click', this.handleDatepickerHereClick.bind(this));
    $(document).on('click', this.handleDocumentClick.bind(this));
  }

  handleCalendarInputsWrapInputClick() {
    this.$elem.find('.calendar-inputs__calendar-dropdown').toggle();
  }

  handleDatepickerHereClick() {
    const $datepicker = this.getCalendarData();
    const $smallInputs = this.$elem.find('.calendar-inputs__input-small');
    this.clearInputs();
    if ($datepicker.selectedDates[0]) {
      $smallInputs.eq(0).val(Calendar.formatDate($datepicker.selectedDates[0]));
    }
    if ($datepicker.selectedDates[1]) {
      $smallInputs.eq(1).val(Calendar.formatDate($datepicker.selectedDates[1]));
    }
  }

  handleDocumentClick(e) {
    const $targetElem = $(e.target);
    if (!($targetElem.hasClass('datepicker--cell')) && !($targetElem.parents('.calendar-inputs').length)) {
      this.$elem.find('.calendar-inputs__calendar-dropdown').hide();
    }
  }

  clearInputs() {
    this.$elem.find('.calendar-inputs__input-small').val('').attr('placeholder', 'ДД.ММ.ГГГГ');
  }

  getCalendarData() {
    const $datepicker = this.$elem.find('.datepicker-here').datepicker().data('datepicker');
    return $datepicker;
  }

  addApplyButton(parent) {
    const applyButton = document.createElement('span');
    applyButton.classList.add('calendar-inputs__add-button', 'button-transparent');
    applyButton.innerText = 'Применить';
    parent.append(applyButton);
    $(applyButton).on('click', this.handleCalendarInputsAddButtonClick.bind(this));
  }

  handleCalendarInputsAddButtonClick() {
    const parent = this.$elem.parent();
    if ($(parent).hasClass('calendar-inputs__calendar-dropdown')) {
      parent.hide();
    } else {
      this.$elem.blur();
    }
  }

  static formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    const yy = date.getFullYear();
    return `${dd}.${mm}.${yy}`;
  }

  static setHeader(parent) {
    const $calendarHeader = parent.find('.datepicker--nav-title');
    const $headerText = $calendarHeader.text();
    $calendarHeader.text($headerText.split(',').join(''));
  }
}

function renderComponent() {
  $(() => {
    $('.js-calendar').each((index, node) => {
      const calendar = new Calendar($(node));
      return calendar;
    });
  });
}
renderComponent();
