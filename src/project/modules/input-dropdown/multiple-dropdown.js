/* global jQuery */

// plugin styles
//import 'styles/main.scss';

/* eslint-disable func-names */
(function($) {
  const defaults = {
    maxItems: Infinity,
    minItems: 0,
    selectionText: [],
    textPlural: [],
    textDefault: [],
    controls: {
      position: 'right',
      displayCls: 'iqdropdown-content',
      controlsCls: 'iqdropdown-item-controls',
      counterCls: 'counter',
    },
    items: {},
    onChange: () => {},
    beforeDecrement: () => true,
    beforeIncrement: () => true,
  };

  $.fn.multipleDropdown = function(options) {
    this.each(function() {
      const $this = $(this);
      const $selection = $this.find('p.iqdropdown-selection').last();
      const $menu = $this.find('div.iqdropdown-menu');
      const $items = $menu.find('div.iqdropdown-menu-option');
      const settings = $.extend(true, {}, defaults, options);
      const itemCount = {};
      //let totalItems = 0;

      function updateDisplay() {
        $multipleSelection = ``;
        $items.each(function(index) {
          const $item = $(this);
          const id = $item.data('id');
          itemCount[id] == 0 ? $item.addClass("defaultClass").removeClass("activeClass") : $item.removeClass("defaultClass").addClass("activeClass");
          $text = getWordForm(id, index);
          $multipleSelection += itemCount[id] + ` ` + `${$text}, `;

        });
        $selection.html($multipleSelection);

      }

      function getWordForm(id, index) {
        let $lastDigit = itemCount[id] % 10;
        if (itemCount[id] < 5 || itemCount[id] > 20) {
          switch ($lastDigit) {
            case 0:
              return settings.textDefault[index];
            case 1:
              return settings.selectionText[index];
            case 2:
            case 3:
            case 4:
              return settings.textPlural[0][index];
            default:
              return settings.textPlural[1][index];
          }
        } else {
          return settings.textPlural[1][index];
        }
      }

      function setItemSettings(id, $item) {
        const minCount = Number($item.data('mincount'));
        const maxCount = Number($item.data('maxcount'));


        settings.items[id] = {
          minCount: Number.isNaN(Number(minCount)) ? 0 : minCount,
          maxCount: Number.isNaN(Number(maxCount)) ? Infinity : maxCount,
        };
      }

      function addControls(id, $item) {
        const $controls = $('<div />').addClass(settings.controls.controlsCls);
        const $decrementButton = $(`
          <button class="button-decrement">
            <i class="icon-decrement"></i>
          </button>
        `);
        const $incrementButton = $(`
          <button class="button-increment">
            <i class="icon-decrement icon-increment"></i>
          </button>
        `);
        const $counter = $(`<span>${itemCount[id]}</span>`).addClass(settings.controls.counterCls);

        $item.children('div').addClass(settings.controls.displayCls);
        $controls.append($decrementButton, $counter, $incrementButton);

        if (settings.controls.position === 'right') {
          $item.append($controls);
        } else {
          $item.prepend($controls);
        }

        $decrementButton.click((event) => {
          const {
            items,
            minItems,
            beforeDecrement,
            onChange
          } = settings;
          const allowClick = beforeDecrement(id, itemCount);

          if (allowClick && itemCount[id] > items[id].minCount) {
            itemCount[id] -= 1;
            //totalItems -= 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id]);
          }

          event.preventDefault();
        });

        $incrementButton.click((event) => {
          const {
            items,
            maxItems,
            beforeIncrement,
            onChange
          } = settings;
          const allowClick = beforeIncrement(id, itemCount);

          if (allowClick && itemCount[id] < items[id].maxCount) {
            itemCount[id] += 1;
            // totalItems += 1;
            $counter.html(itemCount[id]);
            updateDisplay();
            onChange(id, itemCount[id]);
          }

          event.preventDefault();
        });

        $item.click(event => event.stopPropagation());

        return $item;
      }

      $this.click(() => {
        $this.toggleClass('menu-open');
      });

      $items.each(function() {
        const $item = $(this);
        const id = $item.data('id');
        const defaultCount = Number($item.data('defaultcount') || '0');

        itemCount[id] = defaultCount;
        //totalItems += defaultCount;
        setItemSettings(id, $item);
        addControls(id, $item);
      });

      updateDisplay();
    });

    return this;
  };
}(jQuery));