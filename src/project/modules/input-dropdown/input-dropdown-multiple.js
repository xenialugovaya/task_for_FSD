import Dropdown from './Dropdown';

class DropdownMultiple extends Dropdown {
  constructor(element) {
    super(element);
    this.wordForms = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    ];
    this.render({
      onChange: () => {
        const text = this.updateText();
        this.setInputText(text);
      },
    });
    this.setInputText('0 спален, 0 кроватей, 0 ванных комнат');
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

function renderComponent() {
  $(() => {
    $('.js-input_dropdown-multiple').each((index, node) => {
      const dropdownMultiple = new DropdownMultiple($(node));
      return dropdownMultiple;
    });
  });
}


renderComponent();
