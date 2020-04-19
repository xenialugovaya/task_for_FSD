import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class Dropdown {
  constructor(element) {
    this.$elem = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDocumentClick.bind(this));
  }

  handleDocumentClick(e) {
    if (!($(e.target).hasClass('iqdropdown'))) {
      this.$elem.removeClass('menu-open');
    }
  }

  render(options) {
    this.$elem.iqDropdown(options);
  }

  setInputText(text) {
    const $selection = this.$elem.find('p.iqdropdown-selection').last();
    $selection.html(text);
  }

  getMenuItems() {
    const $items = this.$elem.find('div.iqdropdown-menu').find('div.iqdropdown-menu-option');
    return $items;
  }

  static getWordForm(totalItems, wordForms) {
    const $lastDigit = totalItems % 10;
    if (totalItems < 5 || totalItems > 20) {
      switch ($lastDigit) {
        case 0:
          return wordForms[2];
        case 1:
          return wordForms[0];
        case 2:
        case 3:
        case 4:
          return wordForms[1];
        default:
          return wordForms[2];
      }
    } else {
      return wordForms[2];
    }
  }
}