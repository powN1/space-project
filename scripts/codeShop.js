const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const header = document.querySelector('.header-shop');
const menuBigUl = document.querySelector('.nav__list');
const menuLiElements = [...document.querySelectorAll('.nav__list__element')];
const menuPositions = [...document.querySelectorAll('.shop-link')];
const menuPositionsUl = [...document.querySelectorAll('.shop-link-ul')];

// console.log(menuPositions[0].dataset.link)

// Make specific ul list pop down after hovering over specific a element in the menu with forEach.


menuPositions.forEach((position, index) => {
  position.addEventListener('mouseenter', function(e) {
    menuPositionsUl.forEach(ul => ul.style.opacity = '0');
    menuPositionsUl[this.dataset.link * 1].style.opacity = '1';
    menuPositionsUl[this.dataset.link * 1].style.visibility = 'visible';
    menuPositionsUl[this.dataset.link * 1].querySelector('span').style.transform = `translateX(0%)`
  })
  menuBigUl.addEventListener('mouseleave', function() {
    menuPositionsUl.forEach(ul => {
      ul.style.opacity = '0';
      ul.style.visibility = 'hidden';
      ul.querySelector('span').style.transform = `translateX(-100%)`
    });
  })
})

btnHamburger.addEventListener('click', function(){
  btnHamburger.classList.toggle('open');
  asideMenu.classList.toggle('slide');
  modal.classList.toggle('hide');
})

window.addEventListener('scroll', function() {
  modal.style.top = `${window.scrollY}px`
  if(btnHamburger.classList.contains('open')) {
    btnHamburger.classList.toggle('open');
    asideMenu.classList.toggle('slide');
    modal.classList.toggle('hide');
  }
  
})