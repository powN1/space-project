const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');

btnHamburger.addEventListener('click', function(){
  asideMenu.classList.toggle('hide');
  asideMenu.classList.toggle('slide');
  modal.classList.toggle('hide-modal');
})