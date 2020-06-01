import 'item-quantity-dropdown/lib/item-quantity-dropdown.min';

export default class Dropdown {
  constructor(element) {
    this.superInit(element);
  }

  superInit(element) {
    this.$element = element;
    this.bindEventListeners();
  }

  bindEventListeners() {
    $(document).on('click', this.handleDocumentClick.bind(this));
    this.$element.find('.iqdropdown-menu').on('click', (event) => event.stopPropagation());
  }

  handleDocumentClick(event) {
    if (!($(event.target).hasClass('iqdropdown')) && !($(event.target).hasClass('iqdropdown-selection'))) {
      this.$element.removeClass('menu-open');
    }
  }

  render(options) {
    this.$element.iqDropdown(options);
  }

  setInputText(text) {
    const $selection = this.$element.find('p.iqdropdown-selection').last();
    $selection.html(text);
  }

  getMenuItems() {
    const $items = this.$element.find('div.iqdropdown-menu').find('div.iqdropdown-menu-option');
    return $items;
  }

  addDefaultClass(id = '') {
    if (id) {
      const $item = this.$element.find(`[data-id=${id}]`);
      const $control = $item.find('.iqdropdown-item-controls');
      $control.addClass('defaultClass');
    } else {
      const $controls = this.$element.find('.iqdropdown-item-controls');
      $controls.addClass('defaultClass');
    }
  }

  removeDefaultClass(id = '') {
    if (id) {
      const $item = this.$element.find(`[data-id=${id}]`);
      const $control = $item.find('.iqdropdown-item-controls');
      $control.removeClass('defaultClass');
    } else {
      const $controls = this.$element.find('.iqdropdown-item-controls');
      $controls.removeClass('defaultClass');
    }
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