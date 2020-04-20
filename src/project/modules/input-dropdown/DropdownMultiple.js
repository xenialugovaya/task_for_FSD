import Dropdown from './Dropdown';

export default class DropdownMultiple extends Dropdown {
  constructor(element) {
    super(element);
    this.wordForms = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    ];
    this.init();
  }

  init() {
    this.render({
      onChange: (id, itemCount, totalItems) => {
        const text = this.updateText();
        this.setInputText(text);
        if (itemCount === 0) {
          this.addDefaultClass(id);
        } else {
          this.removeDefaultClass(id);
        }
      },
    });
    this.setInputText('0 спален, 0 кроватей, 0 ванных комнат');
    this.addDefaultClass();
  }

  addDefaultClass(id = '') {
    if (id) {
      const $item = this.$elem.find(`[data-id=${id}]`);
      const $control = $item.find('.iqdropdown-item-controls');
      $control.addClass('defaultClass');
    } else {
      const $controls = this.$elem.find('.iqdropdown-item-controls');
      $controls.addClass('defaultClass');
    }
  }

  removeDefaultClass(id = '') {
    if (id) {
      const $item = this.$elem.find(`[data-id=${id}]`);
      const $control = $item.find('.iqdropdown-item-controls');
      $control.removeClass('defaultClass');
    } else {
      const $controls = this.$elem.find('.iqdropdown-item-controls');
      $controls.removeClass('defaultClass');
    }
  }

  getMenuItems() {
    const $items = this.$elem.find('div.iqdropdown-menu').find('div.iqdropdown-menu-option');
    return $items;
  }

  updateText() {
    const $items = this.getMenuItems();
    let text = '';
    $items.each((index, item) => {
      const $counter = $(item).find('.counter');
      const itemCount = parseInt($counter.text(), 10);
      const wordForm = Dropdown.getWordForm(itemCount, this.wordForms[index]);
      if (index === 0) {
        text += `${itemCount} ${wordForm}`;
      } else {
        text += `, ${itemCount} ${wordForm}`;
      }
    });
    return text;
  }
}