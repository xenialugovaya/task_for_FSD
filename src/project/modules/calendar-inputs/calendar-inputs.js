import Calendar from '../datepicker/datepicker';

function renderComponent() {
  $(() => {
    $('.js-calendar-inputs').each((index, node) => {
      const calendarInputs = new Calendar($(node), false, true);
      return calendarInputs;
    });
  });
}

renderComponent();