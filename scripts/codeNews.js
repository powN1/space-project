const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const header = document.querySelector('header');
const form = document.querySelector('[data-form]')
const input = document.querySelector('[data-input]');
const buttonSubmit = document.querySelector('[data-button-submit]');
const checkbox = document.querySelector('.subscribe-checkbox');

let lastScrollPosition = 0;
let checkboxChecked = false;
let pContent = form.querySelector('p').textContent;
const p = form.querySelector('p');
let intervalOne;
let intervalTwo;
let intervalThree;

const resetText = function() {
  p.style.fontStyle = 'italic'
  p.style.color = '#fff'
  p.style.fontSize = `1.4rem`
  form.querySelector('p').textContent = pContent
  }

form.addEventListener('submit', function(e) {

  if(!checkboxChecked) {
    e.preventDefault()
    p.style.fontStyle = 'normal'
    p.style.color = 'red'
    p.style.fontSize = `1.8rem`
    form.querySelector('p').textContent = 'You need to agree to the terms in order to proceed.'
    intervalOne = setTimeout(resetText, 6000)
  } else if(checkboxChecked) {
    if(!input.value) {
    e.preventDefault()
    p.style.fontStyle = 'normal'
    p.style.color = 'red'
    p.style.fontSize = `1.8rem`
    form.querySelector('p').textContent = 'Please type your email.'
    intervalTwo = setTimeout(resetText, 6000)
    } else if (input.value) {
      if(!input.value.includes('@') || !input.value.includes('.')) {
        e.preventDefault()
        p.style.fontStyle = 'normal'
    p.style.color = 'red'
    p.style.fontSize = `1.8rem`
    form.querySelector('p').textContent = 'Wrong email address.'
    intervalThree = setTimeout(resetText, 6000)
      }
    }
  }
})

checkbox.addEventListener('click', function(e){
  resetText();
  clearInterval(intervalOne);
  clearInterval(intervalTwo);
  clearInterval(intervalThree);
  if(!checkboxChecked) {
    checkboxChecked = !checkboxChecked
    checkbox.querySelector('span').style.opacity = '1'
    checkbox.querySelector('span').style.visibility = 'visible'
  } else {
    checkboxChecked = !checkboxChecked
    checkbox.querySelector('span').style.opacity = '0'
    checkbox.querySelector('span').style.visibility = 'hidden'
  } 
})

btnHamburger.addEventListener('click', function(){
  btnHamburger.classList.toggle('open');
  asideMenu.classList.toggle('slide');
  modal.classList.toggle('hide');
})

window.addEventListener('scroll', function() {
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