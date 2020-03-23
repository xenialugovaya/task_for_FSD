import './input-dropdown.scss';
import 'item-quantity-dropdown/src/index.js'
import 'item-quantity-dropdown/lib/item-quantity-dropdown.min.css'


class DropdownSingle {
  constructor(element) {
    this.$elem = element;
    this.render();
    this.addButtonsBlock();
    this.addApplyButton();
    this.addClearButtonIfSelected();
  }

  render() {
    this.$elem.iqDropdown({
      selectionText: 'гость',
      textPlural: 'гостя',
      textDefault: 'Cколько гостей',
    });

  }

  addButtonsBlock() {
    let menu = this.$elem.find('.iqdropdown-menu');
    let buttonsBlock = document.createElement('div');
    buttonsBlock.classList.add('buttons-block');
    menu.append(buttonsBlock);
    $(buttonsBlock).click(event => event.stopPropagation());
  }

  addClearButton() {
    let clearButton = document.createElement('button');
    clearButton.classList.add('clear-button', 'button-transparent', 'button-transparent_disabled');
    clearButton.innerText = 'Очистить';
    this.$elem.find('.buttons-block').append(clearButton);
    $(clearButton).on('click', () => {

      let $controls = this.$elem.find('.iqdropdown-item-controls');

      $controls.each((index, node) => {
        let $counter = $(node).find('.counter');
        let $decrement = $(node).find('.button-decrement');
        while (parseInt($counter.html()) > 0) {
          $decrement.click();
        }
      });

    });
  }

  removeClearButton() {
    let clearButton = this.$elem.find('.clear-button');
    clearButton.remove();

  }

  addApplyButton() {
    let applyButton = document.createElement('button');
    applyButton.classList.add('apply-button', 'button-transparent');
    applyButton.innerText = 'Применить';
    this.$elem.find('.buttons-block').append(applyButton);
    $(applyButton).on('click', () => {
      this.$elem.removeClass('menu-open');

    });

  }

  addClearButtonIfSelected() {
    let controls = this.$elem.find('.iqdropdown-item-controls');
    let input = this.$elem.find('.iqdropdown-selection');
    controls.each((index, node) => {
      $(node).on('click', () => {
        let selectedSum = parseInt(input.html());
        let clearButton = this.$elem.find('.clear-button');
        if (selectedSum && clearButton.length === 0) {
          this.addClearButton();
        }
        if (!selectedSum) {
          this.removeClearButton();
        }
      });
    });
  }

}

class DropdownMultiple {
  constructor(element) {
    this.$elem = element;
    this.render();
  }

  render() {
    this.$elem.multipleDropdown({
      selectionText: ['спальня', 'кровать', 'ванная комната'],
      textPlural: [
        ['спальни', 'кровати', 'ванные комнаты'],
        ['спален', 'кроватей', 'ванных комнат']
      ],
      textDefault: ['спален', 'кроватей', 'ванных комнат'],
    });

  }
}

export default function renderComponent() {
  $(() => {
    $('.js-input_dropdown-single').each((index, node) => {
      new DropdownSingle($(node));
    })
    $('.js-input_dropdown-multiple').each((index, node) => {
      new DropdownMultiple($(node));
    })
  });
}

renderComponent();