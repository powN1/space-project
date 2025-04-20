const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const asideMenuMobile = document.querySelector('[data-aside-menu-mobile]');
const modal = document.querySelector('[data-modal]');
const section1Mars = document.querySelector('[data-section-one-mars]');
const section2Mars = document.querySelector('[data-section-two-mars]');
const section3Mars = document.querySelector('[data-section-three-mars]');
const section4Mars = document.querySelector('[data-section-four-mars]');
const header = document.querySelector('header');
const spanYears = document.querySelector('.mars__container__section-three__years');
const spanMonths = document.querySelector('.mars__container__section-three__months');
const spanDays = document.querySelector('.mars__container__section-three__days');
const spanHours = document.querySelector('.mars__container__section-three__hours');
const spanMinutes = document.querySelector('.mars__container__section-three__minutes');
const spanSeconds = document.querySelector('.mars__container__section-three__seconds');

let missionDate = new Date('2030-06-26 10:00:00').getTime();

const updateDate = function() {
  // Countdown timer
  let currentDate = new Date().getTime();
  let gap = missionDate - currentDate;

  let secondsTillMission = Math.floor(gap / 1000) % 60;
  let minutesTillMission = Math.floor(gap / 1000 / 60) % 60;
  let hoursTillMission = Math.floor(gap / 1000 / 60 / 60) % 24;
  let daysTillMission = Math.floor(gap / 1000 /60 / 60 / 24) % 30;
  let monthsTillMission = Math.floor(gap / 1000 /60 / 60 / 24 / 30) % 12;
  let yearsTillMission = Math.floor(gap / 1000 /60 / 60 / 24 / 30 / 12);

  spanYears.textContent = yearsTillMission;
  spanMonths.textContent = monthsTillMission;
  spanDays.textContent = daysTillMission;
  spanHours.textContent = hoursTillMission;
  spanMinutes.textContent = minutesTillMission;
  spanSeconds.textContent = secondsTillMission;
}
updateDate();
setInterval(() => {
  updateDate();
}, 1000)

let sectionTwoMarsState = false;
let sectionThreeMarsState = false;
let sectionFourMarsState = false;
let lastScrollPosition = 0;


btnHamburger.addEventListener('click', function(){
  btnHamburger.classList.toggle('open');
  asideMenu.classList.toggle('slide');
  asideMenuMobile.classList.toggle('slide');
  modal.classList.toggle('hide');

})

window.addEventListener('scroll', function() {
  modal.style.top = `${window.scrollY}px`;
  if(btnHamburger.classList.contains('open')) {
    btnHamburger.classList.toggle('open');
    asideMenu.classList.toggle('slide');
    asideMenuMobile.classList.toggle('slide');
    modal.classList.toggle('hide');
  }

  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if(scrollTop > lastScrollPosition) {
    header.style.opacity = '0';
  } else {
    header.style.opacity = '1'
  }
  lastScrollPosition = scrollTop;
  if((window.scrollY + section1Mars.offsetHeight >= section2Mars.offsetTop + section2Mars.offsetHeight / 2) && !sectionTwoMarsState) {
    if(sectionTwoMarsState) return
    section2Mars.querySelector('.mars__container__section-two__content-container').querySelector('h2').classList.toggle('animation1');
    section2Mars.querySelector('.mars__container__section-two__content-container').querySelector('p:first-of-type').classList.toggle('animation2');
    section2Mars.querySelector('.mars__container__section-two__content-container__parameters').classList.toggle('animation2');
    sectionTwoMarsState = true
  }

})
