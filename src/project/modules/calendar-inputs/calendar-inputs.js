import $ from 'jquery';
import 'air-datepicker/dist/js/datepicker';
import './calendar-inputs.scss';

class CalendarInputs {
  constructor($element) {
    this.$elem = $element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$elem.find('.input_small').on('click', this.showCalendar.bind(this));
    this.$elem.find('span[data-action="add"]').on('click', this.hideCalendar.bind(this));
    this.$elem.find('.datepicker-here').on('click', this.setDatesToInputs.bind(this));
  }

  showCalendar() {
    this.$elem.find('.calendar-inputs__calendar-dropdown').toggle();
  }

  hideCalendar() {
    this.$elem.find('.calendar-inputs__calendar-dropdown').hide();
  }

  setDatesToInputs() {
    const $datepicker = this.getCalendarData();
    this.clearInputs();
    if ($datepicker.selectedDates[0]) {
      this.$elem.find('.input_small').eq(0).val(CalendarInputs.formatDate($datepicker.selectedDates[0]));
    }
    if ($datepicker.selectedDates[1]) {
      this.$elem.find('.input_small').eq(1).val(CalendarInputs.formatDate($datepicker.selectedDates[1]));
    }
  }

  clearInputs() {
    this.$elem.find('.input_small').val(' ');
  }

  getCalendarData() {
    const $datepicker = this.$elem.find('.datepicker-here').datepicker().data('datepicker');
    return $datepicker;
  }

  static formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    const yy = date.getFullYear();
    return `${dd}.${mm}.${yy}`;
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-calendar-inputs').each((index, node) => {
      const calendarInputs = new CalendarInputs($(node));
      return calendarInputs;
    });
  });
}

renderComponent();
