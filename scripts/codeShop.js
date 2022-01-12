const btnHamburger = document.querySelector('[data-shop-hamburger-mobile]');
const asideMenuMobile = document.querySelector('.shop-aside-categories-mobile');
const modal = document.querySelector('[data-modal]');
const header = document.querySelector('.header-shop');
const menuBigUl = document.querySelector('.nav__list');
const menuLiElements = [...document.querySelectorAll('.nav__list__element')];
const menuPositions = [...document.querySelectorAll('.shop-link')];
const menuPositionsUl = [...document.querySelectorAll('.shop-link-ul')];
const searchButton = document.querySelector('a.search-items');
const searchButtonMobile = document.querySelector('[data-shop-search-mobile]');
const searchCloseButton = document.querySelector('.search-box__close');
const searchBox = document.querySelector('.search-box');
const categoriesList = document.querySelector('[data-mobile-categories-list]');
const categoriesListElements = [...categoriesList.querySelectorAll(':scope > li')].slice(0, categoriesList.querySelectorAll(':scope > li').length - 1);
const categoriesListCloseButtons = document.querySelectorAll('[data-mobile-categories-list] li .close-container');
const categoriesCloseButton = document.querySelector('[data-aside-shop-mobile-close-button]');

let activeCategory = null;

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
    asideMenuMobile.classList.toggle('slide');
    modal.classList.toggle('hide');
  }
  if(searchBoxVisible) {
    searchBoxVisible = !searchBoxVisible
    searchBox.style.top = '0'
    modal.classList.toggle('hide');
  }
  categoriesListElements.forEach(category => {
    category.classList.remove('open-list');
    category.querySelector('ul').classList.remove('show-items');
    category.querySelector('.close-container').querySelector('.first-line').classList.remove('rotate-first-line');
    category.querySelector('.close-container').querySelector('.second-line').classList.remove('rotate-second-line');
  })
})

const toggleSearchBox = function() {
  modal.classList.toggle('hide');
  if(!searchBoxVisible) {
    searchBoxVisible = !searchBoxVisible
    searchBox.style.top = '10vh'
  } else {
    searchBoxVisible = !searchBoxVisible
    searchBox.style.top = '0'
  }
}

searchButton.addEventListener('click', toggleSearchBox);
searchButtonMobile.addEventListener('click', toggleSearchBox);

searchCloseButton.addEventListener('click', function() {
  searchBox.style.top = '0'
  modal.classList.add('hide');
  searchBoxVisible = !searchBoxVisible;
})

categoriesListElements.forEach(element => {
  element.addEventListener('click', function() {
    activeCategory = this.dataset.listNumber;
    passiveCategories = categoriesListElements.filter(li => li.dataset.listNumber !== activeCategory);
    passiveCategories.forEach(category => {
      category.classList.remove('open-list');
      category.querySelector('ul').classList.remove('show-items');
      category.querySelector('.close-container').querySelector('.first-line').classList.remove('rotate-first-line');
      category.querySelector('.close-container').querySelector('.second-line').classList.remove('rotate-second-line');
    })

    this.classList.toggle('open-list');
    this.querySelector('ul').classList.toggle('show-items');
    this.querySelector('.first-line').classList.toggle('rotate-first-line');
    this.querySelector('.second-line').classList.toggle('rotate-second-line');
  })
})

categoriesCloseButton.addEventListener('click', function() {
  asideMenuMobile.classList.toggle('slide');
  modal.classList.toggle('hide');
  categoriesListElements.forEach(category => {
    category.classList.remove('open-list');
    category.querySelector('ul').classList.remove('show-items');
    category.querySelector('.close-container').querySelector('.first-line').classList.remove('rotate-first-line');
    category.querySelector('.close-container').querySelector('.second-line').classList.remove('rotate-second-line');
  })
})

btnHamburger.addEventListener('click', function() {
  btnHamburger.classList.add('open');
  asideMenuMobile.classList.toggle('slide');
  modal.classList.toggle('hide');
})
