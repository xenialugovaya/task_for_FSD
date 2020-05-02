import DropdownMultiple from './DropdownMultiple';
import DropdownSingle from './DropdownSingle';

function renderComponent() {
  $(() => {
    $('.js-input-dropdown_single').each((index, node) => {
      const dropdownSingle = new DropdownSingle($(node));
      return dropdownSingle;
    });
    $('.js-input-dropdown_multiple').each((index, node) => {
      const dropdownMultiple = new DropdownMultiple($(node));
      return dropdownMultiple;
    });
  });
}


renderComponent();
