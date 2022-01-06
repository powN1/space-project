const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const header = document.querySelector('header');

let lastScrollPosition = 0;

btnHamburger.addEventListener('click', function(){
  btnHamburger.classList.toggle('open');
  asideMenu.classList.toggle('slide');
  modal.classList.toggle('hide');
})

window.addEventListener('scroll', function() {
  console.log(document.querySelector('footer').offsetTop);
  modal.style.top = `${window.scrollY}px`;
  if(btnHamburger.classList.contains('open')) {
    btnHamburger.classList.toggle('open');
    asideMenu.classList.toggle('slide');
    modal.classList.toggle('hide');
  }
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollPosition) {
    header.style.opacity = '0';
  } else {
    header.style.opacity = '1'
  }
  lastScrollPosition = scrollTop;
})