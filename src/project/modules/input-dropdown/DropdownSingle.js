import Dropdown from './Dropdown';

export default class DropdownSingle extends Dropdown {
  constructor(element) {
    super(element);
    this.wordForms = ['гость', 'гостя', 'гостей'];
    this.render({
      onChange: (id, itemCount, totalItems) => {
        this.updateText(totalItems);
        if (totalItems > 0) {
          this.addClearButton();
        } else {
          this.removeClearButton();
        }
        if (itemCount === 0) {
          this.addDefaultClass(id);
        } else {
          this.removeDefaultClass(id);
        }
      },
    });
    this.setInputText('Сколько гостей');
    this.addButtonsBlock();
    this.addApplyButton();
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

  addButtonsBlock() {
    const menu = this.$elem.find('.iqdropdown-menu');
    const buttonsBlock = document.createElement('div');
    buttonsBlock.classList.add('buttons-block');
    menu.append(buttonsBlock);
    $(buttonsBlock).click((event) => event.stopPropagation());
  }

  addClearButton() {
    let clearButton = this.$elem.find('.clear-button');
    if (clearButton.length === 0) {
      clearButton = document.createElement('button');
      clearButton.classList.add('clear-button', 'button-transparent', 'button-transparent_disabled');
      clearButton.innerText = 'Очистить';
      this.$elem.find('.buttons-block').append(clearButton);
      $(clearButton).on('click', this.handleClearButtonClick.bind(this));
    }
  }

  removeClearButton() {
    const clearButton = this.$elem.find('.clear-button');
    clearButton.remove();
  }

  addApplyButton() {
    const applyButton = document.createElement('button');
    applyButton.classList.add('apply-button', 'button-transparent');
    applyButton.innerText = 'Применить';
    this.$elem.find('.buttons-block').append(applyButton);
    $(applyButton).on('click', this.handleApplyButtonClick.bind(this));
  }

  handleApplyButtonClick() {
    this.$elem.removeClass('menu-open');
  }

  handleClearButtonClick() {
    const $controls = this.$elem.find('.iqdropdown-item-controls');
    $controls.each((index, node) => {
      const $counter = $(node).find('.counter');
      const $decrement = $(node).find('.button-decrement');
      while (parseInt($counter.html(), 10) > 0) {
        $decrement.click();
      }
    });
    this.addDefaultClass();
  }

  updateText(totalItems) {
    const wordForm = Dropdown.getWordForm(totalItems, this.wordForms);
    const text = `${totalItems} ${wordForm}`;
    this.setInputText(text);
  }
}