import Calendar from '../datepicker/datepicker';

function renderComponent() {
  $(() => {
    $('.js-input-date-dropdown__input').each((index, node) => {
      const dropCalendar = new Calendar($(node), true);
      return dropCalendar;
    });
  });
}
renderComponent();
