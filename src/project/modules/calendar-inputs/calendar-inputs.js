class CalendarInputs {
  constructor($element) {
    this.$elem = $element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    this.$elem.find('.calendar-inputs__wrap-input').on('click', this.handleCalendarInputsWrapInputClick.bind(this));
    this.$elem.find('.calendar-inputs__add-button').on('click', this.handleCalendarInputsAddButtonClick.bind(this));
    this.$elem.find('.datepicker-here').on('click', this.handleDatepickerHereClick.bind(this));
    $(document).on('click', this.handleDocumentClick.bind(this));
  }

  handleCalendarInputsWrapInputClick() {
    this.$elem.find('.calendar-inputs__calendar-dropdown').toggle();
  }

  handleCalendarInputsAddButtonClick() {
    this.$elem.find('.calendar-inputs__calendar-dropdown').hide();
  }

  handleDatepickerHereClick() {
    const $datepicker = this.getCalendarData();
    this.clearInputs();
    if ($datepicker.selectedDates[0]) {
      this.$elem.find('.calendar-inputs__input-small').eq(0).val(CalendarInputs.formatDate($datepicker.selectedDates[0]));
    }
    if ($datepicker.selectedDates[1]) {
      this.$elem.find('.calendar-inputs__input-small').eq(1).val(CalendarInputs.formatDate($datepicker.selectedDates[1]));
    }
  }

  handleDocumentClick(e) {
    if (!($(e.target).hasClass('datepicker--cell')) && !($(e.target).parents('.calendar-inputs').length)) {
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

  static formatDate(date) {
    let dd = date.getDate();
    if (dd < 10) dd = `0${dd}`;
    let mm = date.getMonth() + 1;
    if (mm < 10) mm = `0${mm}`;
    const yy = date.getFullYear();
    return `${dd}.${mm}.${yy}`;
  }
}

function renderComponent() {
  $(() => {
    $('.js-calendar-inputs').each((index, node) => {
      const calendarInputs = new CalendarInputs($(node));
      return calendarInputs;
    });
  });
}

renderComponent();
