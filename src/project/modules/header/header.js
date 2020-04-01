import './header.scss';

class MobileMenu {
  constructor(element) {
    this.$elem = element;
    this.render();
  }
  render() {
    this.$elem.mmenu();
  }
}

export default function renderMobileMenu() {
  $(() => {
    $('.js-header__menu-mobile').each((index, node) => {
      new MobileMenu($(node));
    });
  });
}

renderMobileMenu();