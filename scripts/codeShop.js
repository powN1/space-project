const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const header = document.querySelector('.header-shop');
const menuBigUl = document.querySelector('.nav__list');
const menuLiElements = [...document.querySelectorAll('.nav__list__element')];
const menuPositions = [...document.querySelectorAll('.shop-link')];
const menuPositionsUl = [...document.querySelectorAll('.shop-link-ul')];
const searchButton = document.querySelector('a.search-items');
const searchCloseButton = document.querySelector('.search-box__close');
const searchBox = document.querySelector('.search-box');

let searchBoxVisible = false;

menuPositions.forEach((position, index) => {
  position.addEventListener('mouseenter', function(e) {
    menuPositionsUl.forEach(ul => {
      //Every time a user hovers over a link, it makes sure that all the lists are not seen. Both visibly and in structure.
      ul.style.opacity = '0'
      ul.style.display = 'none'
    });
    menuPositionsUl[this.dataset.link * 1].style.display = 'flex'
    setTimeout(()=> {
      //A little timeout after display:flex so the transition is smooth.
      menuPositionsUl[this.dataset.link * 1].style.opacity = '1';
      menuPositionsUl[this.dataset.link * 1].style.visibility = 'visible';
      menuPositionsUl[this.dataset.link * 1].querySelector('span').style.transform = `translateX(0%)`
    }, 25)
    
  })
  menuBigUl.addEventListener('mouseleave', function() {
    //Everytime a user leaves navigation the lists dissapear.
    menuPositionsUl.forEach(ul => {
      ul.style.opacity = '0';
      ul.style.visibility = 'hidden';
      ul.querySelector('span').style.transform = `translateX(-100%)`
      setTimeout(()=> {
        ul.style.display = 'none';
      }, 200)
    });
  })
})

window.addEventListener('scroll', function() {
  modal.style.top = `${window.scrollY}px`
  if(btnHamburger.classList.contains('open')) {
    btnHamburger.classList.toggle('open');
    asideMenu.classList.toggle('slide');
    modal.classList.toggle('hide');
  }
  
})

searchButton.addEventListener('click', function() {
  modal.classList.toggle('hide');
  if(!searchBoxVisible) {
    searchBoxVisible = !searchBoxVisible
    searchBox.style.top = '10vh'
  } else {
    searchBoxVisible = !searchBoxVisible
    searchBox.style.top = '0'

  }
  
})
searchCloseButton.addEventListener('click', function() {
  searchBox.style.top = '0'
  modal.classList.add('hide');
  searchBoxVisible = !searchBoxVisible;
})