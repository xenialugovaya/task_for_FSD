import './input-dropdown.scss';
import $ from 'jquery';
import DropdownSingle from './DropdownSingle';
import DropdownMultiple from './DropdownMultiple';

export default function renderDropdown() {
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


renderDropdown();
