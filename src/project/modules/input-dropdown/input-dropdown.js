import DropdownMultiple from './DropdownMultiple';
import DropdownSingle from './DropdownSingle';

function renderComponent() {
  $(() => {
    $('.js-input_dropdown-single').each((index, node) => {
      const dropdownSingle = new DropdownSingle($(node));
      return dropdownSingle;
    });
    $('.js-input_dropdown-multiple').each((index, node) => {
      const dropdownMultiple = new DropdownMultiple($(node));
      return dropdownMultiple;
    });
  });
}


renderComponent();