import './calendar-inputs.scss';
import 'air-datepicker/dist/js/datepicker.js'
import $ from 'jquery';

class CalendarInputs {
  constructor($element) {
    this.$elem = $element;
    this.showCalendar();
    this.setDatesToInputs();
    this.hideCalendar();
  }

  showCalendar() {
    this.$elem.find('.input_small', this.$elem).on('click', () => {
      this.$elem.find('.calendar-dropdown', this.$elem).toggle();
    });
  }

  hideCalendar() {
    this.$elem.find('span[data-action="add"]', this.$elem).on('click', () => {
      this.$elem.find('.calendar-dropdown', this.$elem).hide();
    });
  }

  setDatesToInputs() {
    let $datepicker = this.getCalendarData();
    this.$elem.find('.datepicker-here', this.$elem).on("click", () => {
      this.clearInputs();
      if ($datepicker.selectedDates[0]) {
        $('.input_small', this.$elem).eq(0).val(this.formatDate($datepicker.selectedDates[0]));
      }
      if ($datepicker.selectedDates[1]) {
        $('.input_small', this.$elem).eq(1).val(this.formatDate($datepicker.selectedDates[1]));
      }
    });
  }

  clearInputs() {
    this.$elem.find('.input_small', this.$elem).val(' ');
  }

  getCalendarData() {
    let $datepicker = this.$elem.find('.datepicker-here', this.$elem).datepicker().data('datepicker');
    return $datepicker;
  }

  formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = '0' + dd;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = '0' + mm;
    let yy = date.getFullYear();
    return dd + '.' + mm + '.' + yy;
  }
}

export default function renderComponent() {
  $(() => {
    $('.js-calendar-inputs').each((index, node) => {
      new CalendarInputs($(node));
    });
  });
}

renderComponent();