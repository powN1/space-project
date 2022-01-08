const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const sectionThree = document.querySelector('[data-about-us-section-three]');
const backgroundDiv = document.querySelector('[data-about-us-section-background-div]');
const headingLaunch = document.querySelector('[data-about-us-launch]');
const headingLand = document.querySelector('[data-about-us-land]');
const headingRepeat = document.querySelector('[data-about-us-repeat]');

let imageNumber = 0;
let intervalID = null;
let intervalID2 = null;
let transitionTimeMiliseconds = 10;
let currentSlide = null;

const changeBackground = function() {
  
  intervalID = setInterval(()=> {
    if(imageNumber >= 3) imageNumber = 0;
    if(imageNumber === 0) {
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.15))), url(../img/aboutusbg2launch.jpg)';
      headingLaunch.style.opacity = '1';
      headingLand.style.opacity = '.3';
      headingRepeat.style.opacity = '.3';
    } else if (imageNumber === 1) {
      backgroundDiv.style.backgroundImage = `-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.15))), url("../img/bg2.jpg")`;
      headingLand.style.opacity = '1';
      headingLaunch.style.opacity = '.3';
      headingRepeat.style.opacity = '.3';
    } else if (imageNumber === 2) {
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.3))), url(../img/aboutusbg3repeat.jpg)';
      headingRepeat.style.opacity = '1';
      headingLaunch.style.opacity = '.3';
      headingLand.style.opacity = '.3';
    }
    imageNumber++
  }, 5000)
}

const changeImage = function() {
  clearInterval(intervalID);
  if(this === headingLaunch) {
    if(currentSlide === 'launch') return
    currentSlide = 'launch';
    backgroundDiv.style.animation = 'none';
    setTimeout(function() {
      backgroundDiv.style.animation = '';
  },transitionTimeMiliseconds)
    setTimeout(function() {
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.15))), url(../img/aboutusbg2launch.jpg)';
      headingLaunch.style.opacity = '1';
      headingLand.style.opacity = '.3';
      headingRepeat.style.opacity = '.3';
      imageNumber = 0;
      imageNumber++
    },transitionTimeMiliseconds)
  } else if (this === headingLand) {
    if(currentSlide === 'land') return
    currentSlide = 'land';
    backgroundDiv.style.animation = 'none';
    setTimeout(function() {
      backgroundDiv.style.animation = '';
  },transitionTimeMiliseconds)
    setTimeout(function(){

      backgroundDiv.style.backgroundImage = `-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.15))), url("../img/bg2.jpg")`;
      headingLand.style.opacity = '1';
      headingLaunch.style.opacity = '.3';
      headingRepeat.style.opacity = '.3';
      imageNumber = 1;
      imageNumber++
    },transitionTimeMiliseconds)
  } else if (this === headingRepeat) {
    if(currentSlide === 'repeat') return
    currentSlide = 'repeat';
    backgroundDiv.style.animation = 'none';
    setTimeout(function(){
      backgroundDiv.style.animation = '';
  },transitionTimeMiliseconds)
    setTimeout(function(){
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.3))), url(../img/aboutusbg3repeat.jpg)';
      headingRepeat.style.opacity = '1';
      headingLaunch.style.opacity = '.3';
      headingLand.style.opacity = '.3';
      imageNumber = 2;
      imageNumber++
    },transitionTimeMiliseconds)
  }
  
  changeBackground();
}

headingLaunch.addEventListener('mouseenter', changeImage);
headingLand.addEventListener('mouseenter', changeImage);
headingRepeat.addEventListener('mouseenter', changeImage);
window.addEventListener('load', changeBackground);

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