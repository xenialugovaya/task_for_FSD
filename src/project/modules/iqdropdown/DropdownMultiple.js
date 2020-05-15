import Dropdown from './Dropdown';

export default class DropdownMultiple extends Dropdown {
  constructor(element) {
    super(element);
    this.init();
  }

  init() {
    this.wordForms = [
      ['спальня', 'спальни', 'спален'],
      ['кровать', 'кровати', 'кроватей'],
      ['ванная комната', 'ванные комнаты', 'ванных комнат'],
    ];
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
