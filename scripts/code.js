const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const section1 = document.querySelector('[data-section-one]')
const section2 = document.querySelector('[data-section-two]')
const section3 = document.querySelector('[data-section-three]')

let sectionThreeState = false;
let sectionTwoState = false;

btnHamburger.addEventListener('click', function(){
  btnHamburger.classList.toggle('open');
  asideMenu.classList.toggle('slide');
  modal.classList.toggle('hide');
})

window.addEventListener('scroll', function() {
  if((window.scrollY + section1.offsetHeight >= section3.offsetTop + section3.offsetHeight / 2) && !sectionThreeState) {
    if(sectionThreeState) return
    section3.querySelector('h3').classList.toggle('animation1');
    section3.querySelector('h2').classList.toggle('animation2');
    section3.querySelector('button').classList.toggle('animation2');
    sectionThreeState = true
  }
  if((window.scrollY + section1.offsetHeight >= section2.offsetTop + section2.offsetHeight / 2) && !sectionTwoState) {
    if(sectionTwoState) return
    section2.querySelector('h3').classList.toggle('animation1');
    section2.querySelector('h2').classList.toggle('animation2');
    section2.querySelector('button').classList.toggle('animation2');
    sectionTwoState = true
  }
})