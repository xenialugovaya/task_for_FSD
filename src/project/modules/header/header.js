import 'jquery.mmenu/dist/jquery.mmenu.all.css';
import 'jquery.mmenu/dist/jquery.mmenu.all';
import 'mburger-css/dist/mburger';
import 'mburger-css/dist/mburger.css';

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
      const mobileMenu = new MobileMenu($(node));
      return mobileMenu;
    });
  });
}

renderMobileMenu();
