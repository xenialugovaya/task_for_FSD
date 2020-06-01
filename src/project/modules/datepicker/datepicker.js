/* eslint-disable-next-line no-unused-vars */
import Datepicker from 'air-datepicker';

export default class Calendar {
  constructor(element, isDropdown = false, isDoubleInputs = false) {
    this.init(element, isDropdown, isDoubleInputs);
  }

  init(element, isDropdown = false, isDoubleInputs = false) {
    this.$element = element;
    this.isDropdown = isDropdown;
    this.isDoubleInputs = isDoubleInputs;
    this.handleCalendarInputsWrapInputClick = () => {
      this.$element.find('.calendar-inputs__calendar-dropdown').toggle();
    };
    this.handleDatepickerHereClick = () => {
      const $datepicker = this.getCalendarData();
      const $smallInputs = this.$element.find('.calendar-inputs__input-small');
      this.clearInputs();
      if ($datepicker.selectedDates[0]) {
        $smallInputs.eq(0).val(Calendar.formatDate($datepicker.selectedDates[0]));
      }
      if ($datepicker.selectedDates[1]) {
        $smallInputs.eq(1).val(Calendar.formatDate($datepicker.selectedDates[1]));
      }
    };
    this.handleDocumentClick = (event) => {
      const $targetElement = $(event.target);
      if (!($targetElement.hasClass('datepicker--cell')) && !($targetElement.parents('.calendar-inputs').length)) {
        this.$element.find('.calendar-inputs__calendar-dropdown').hide();
      }
    };
    this.handleCalendarInputsAddButtonClick = () => {
      const parent = this.$element.parent();
      if ($(parent).hasClass('calendar-inputs__calendar-dropdown')) {
        parent.hide();
      } else {
        this.$element.blur();
      }
    };
    if (this.isDropdown) {
      this.render();
    } else if (this.isDoubleInputs) {
      this.bindEventListeners();
    } else {
      Calendar.setHeader(this.$element);
      const $buttonsBlock = this.$element.find('.datepicker--buttons');
      this.addApplyButton($buttonsBlock);
    }
  }

  render() {
    this.datepicker = this.$element.datepicker({
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
    this.$element.find('.calendar-inputs__input-small').on('click', this.handleCalendarInputsWrapInputClick);
    this.$element.find('.datepicker-here').on('click', this.handleDatepickerHereClick);
    $(document).on('click', this.handleDocumentClick);
  }

  clearInputs() {
    this.$element.find('.calendar-inputs__input-small').val('').attr('placeholder', 'ДД.ММ.ГГГГ');
  }

  getCalendarData() {
    const $datepicker = this.$element.find('.datepicker-here').datepicker().data('datepicker');
    return $datepicker;
  }

  addApplyButton(parent) {
    const applyButton = document.createElement('span');
    applyButton.classList.add('calendar-inputs__add-button', 'button-transparent');
    applyButton.innerText = 'Применить';
    parent.append(applyButton);
    $(applyButton).on('click', this.handleCalendarInputsAddButtonClick);
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