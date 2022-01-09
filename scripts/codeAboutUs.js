const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const backgroundDiv = document.querySelector('[data-about-us-section-background-div]');
const headingLaunch = document.querySelector('[data-about-us-launch]');
const headingLand = document.querySelector('[data-about-us-land]');
const headingRepeat = document.querySelector('[data-about-us-repeat]');
const divPlay = document.querySelector('[data-play]');
const divPlayContainer = document.querySelector('[data-play-container]');
const divPlayContainerButton = document.querySelector('[data-play-container] button');
const video = document.querySelector('[data-play-container] video');

const sectionOne = document.querySelector('[data-about-us-section1]')
const articleOne = document.querySelector('[data-about-us-article1]');
const articleTwo = document.querySelector('[data-about-us-article2]');
const articleThree = document.querySelector('[data-about-us-article3]');
const articleFour = document.querySelector('[data-about-us-article4]');

let articleOneDisplayed = false;
let articleTwoDisplayed = false;
let articleThreeDisplayed = false;
let articleFourDisplayed = false;

let imageNumber = 0;
let intervalID = null;
let intervalID2 = null;
let transitionTimeMiliseconds = 10;
let currentSlide = null;

let scrollPositionY;

const changeBackground = function() {
  intervalID = setInterval(()=> {
    if(imageNumber >= 3) imageNumber = 0;
    if(imageNumber === 0) {
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.1))), url(../img/aboutusbg2launch.jpg)';
      headingLaunch.style.opacity = '1';
      headingLand.style.opacity = '.3';
      headingRepeat.style.opacity = '.3';
    } else if (imageNumber === 1) {
      backgroundDiv.style.backgroundImage = `-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.1))), url("../img/bg2.jpg")`;
      headingLand.style.opacity = '1';
      headingLaunch.style.opacity = '.3';
      headingRepeat.style.opacity = '.3';
    } else if (imageNumber === 2) {
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.2))), url(../img/aboutusbg3repeat.jpg)';
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
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.1))), url(../img/aboutusbg2launch.jpg)';
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

      backgroundDiv.style.backgroundImage = `-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.1))), url("../img/bg2.jpg")`;
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
      backgroundDiv.style.backgroundImage = '-webkit-gradient(linear, 0% 0%, 0% 100%, from(rgba(0, 0, 0, 0.2))), url(../img/aboutusbg3repeat.jpg)';
      headingRepeat.style.opacity = '1';
      headingLaunch.style.opacity = '.3';
      headingLand.style.opacity = '.3';
      imageNumber = 2;
      imageNumber++
    },transitionTimeMiliseconds)
  }
  
  changeBackground();
}

const preventScrolling = function() {
 if(scrollY >= scrollPositionY || scrollY <= scrollPositionY) window.scrollTo(0, scrollPositionY)
}

const togglePlayScreen = function() {
  if(this === divPlay) {
    scrollPositionY = scrollY
    divPlayContainer.style.top = `${scrollPositionY}px`
    divPlayContainer.classList.toggle('hide');
    setTimeout(()=> {
      video.volume = 0.5;
      video.play();
    }, 500)
    
  } else if (this === divPlayContainerButton) {
    divPlayContainer.classList.toggle('hide');
    scrollPositionY = undefined;
    setTimeout(()=> {
      video.pause();
      video.load();
    }, 750)
    
  }
}


headingLaunch.addEventListener('mouseenter', changeImage);
headingLand.addEventListener('mouseenter', changeImage);
headingRepeat.addEventListener('mouseenter', changeImage);
window.addEventListener('load', changeBackground);
window.addEventListener('scroll', preventScrolling)
divPlay.addEventListener('click', togglePlayScreen);
divPlayContainerButton.addEventListener('click', togglePlayScreen);

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

  if((window.scrollY + sectionOne.offsetHeight >= sectionOne.offsetHeight + articleOne.offsetHeight / 4) && !articleOneDisplayed) {
    articleOneDisplayed = true;
    articleOne.querySelector('.about-us__container__section-two__article__text-container').style.transform = `translateX(0)`;
    articleOne.querySelector('.about-us__container__section-two__article__text-container').style.opacity = `1`;
  }
  if((window.scrollY + sectionOne.offsetHeight >= sectionOne.offsetHeight + articleOne.offsetHeight + articleTwo.offsetHeight / 4) && !articleTwoDisplayed) {
    articleTwoDisplayed = true;
    articleTwo.querySelector('.about-us__container__section-two__article__text-container').style.transform = `translateX(0)`;
    articleTwo.querySelector('.about-us__container__section-two__article__text-container').style.opacity = `1`;
  }
  if((window.scrollY + sectionOne.offsetHeight >= sectionOne.offsetHeight + articleOne.offsetHeight + articleTwo.offsetHeight + articleThree.offsetHeight / 4) && !articleThreeDisplayed) {
    articleThreeDisplayed = true;
    articleThree.querySelector('.about-us__container__section-two__article__text-container').style.transform = `translateX(0)`;
    articleThree.querySelector('.about-us__container__section-two__article__text-container').style.opacity = `1`;
  }
  if((window.scrollY + sectionOne.offsetHeight >= sectionOne.offsetHeight + articleOne.offsetHeight + articleTwo.offsetHeight + articleThree.offsetHeight + articleFour.offsetHeight / 4) && !articleFourDisplayed) {
    articleFourDisplayed = true;
    articleFour.querySelector('.about-us__container__section-two__article__text-container').style.transform = `translateX(0)`;
    articleFour.querySelector('.about-us__container__section-two__article__text-container').style.opacity = `1`;
  }

})