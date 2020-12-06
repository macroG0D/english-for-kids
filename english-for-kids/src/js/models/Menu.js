export default class Menu {
  constructor(status) {
    this.status = status;
    this.opened = false;
    this.sideMenu = document.querySelector('.sideMenu');
    this.burger = document.querySelector('.burger_menu');
    this.main = document.querySelector('main');
  }

  hideMenu(bluredBackgound) {
    this.opened = false;
    this.burger.classList.remove('burger_menu__active');
    this.sideMenu.style.left = '-32rem';
    bluredBackgound.remove();
  }

  showMenu(bluredBackgound) {
    this.opened = true;
    this.burger.classList.add('burger_menu__active');
    this.sideMenu.style.left = '0';
    this.main.append(bluredBackgound);
  }
}
