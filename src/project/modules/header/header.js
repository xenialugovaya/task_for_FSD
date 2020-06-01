/* eslint-disable-next-line no-unused-vars */
import mmenu from 'jquery.mmenu';
import mburger from 'mburger-css';


class MobileMenu {
  constructor(element) {
    this.$element = element;
    this.render();
  }

  render() {
    this.$element.mmenu();
  }
}

function renderMobileMenu() {
  $(() => {
    $('.js-header__menu-mobile').each((index, node) => {
      const mobileMenu = new MobileMenu($(node));
      return mobileMenu;
    });
  });
}

renderMobileMenu();