const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const asideMenuMobile = document.querySelector('[data-aside-menu-mobile]');
const modal = document.querySelector('[data-modal]');
const employeeImg = document.querySelector('.careers__container__section-four__img');
const employeeQuote = document.querySelector('[data-employee-quote]');
const employeeName = document.querySelector('[data-employee-name]');
const employeeDepartment = document.querySelector('[data-employee-department]');
const employeeTime = document.querySelector('[data-employee-time]');
const buttonLeft = document.querySelector('[data-button-left]');
const buttonRight = document.querySelector('[data-button-right]');

const quotes = [{
    imgSrc: 'url(../img/1920x1080/careersEmployee1.jpg)',
    quote: '"It is not hard to wake up every day when your mission is enabling a permanent human presence in space on a daily basis."',
    name: 'Gareth',
    department: 'Safety & mission assurance',
    time: '7 years',
  },{
    imgSrc: 'url(../img/1920x1080/careersEmployee2.jpg)',
    quote: '"I used to pore over star charts. Now I get to watch my ideas go from the whiteboard to real functioning rocket parts, then all the way to space."',
    name: 'Judith',
    department: 'System engineer',
    time: '2 years',
  },{
    imgSrc: 'url(../img/1920x1080/careersEmployee3.jpg)',
    quote: '"The hard work preparing for flight is always worth it when you see customers getting their hardware back after its trip to space."',
    name: 'Jake',
    department: 'SR. Integration engineer',
    time: '9 months',
  }
]

let currentEmployeNumber = 0;

const setEmployeeContent = function(quoteNumber) {
  employeeImg.style.backgroundImage = quotes[quoteNumber].imgSrc;
  employeeQuote.textContent = quotes[quoteNumber].quote
  employeeName.textContent = quotes[quoteNumber].name
  employeeDepartment.textContent = quotes[quoteNumber].department
  employeeTime.textContent = quotes[quoteNumber].time
}
setEmployeeContent(currentEmployeNumber);

const changeEmployee = function(e) {
  if(this == buttonLeft) {
    currentEmployeNumber--
    if(currentEmployeNumber < 0) {
      currentEmployeNumber = quotes.length - 1
    } 
    setEmployeeContent(currentEmployeNumber)
  } else if (this == buttonRight) {
    currentEmployeNumber++
    if (currentEmployeNumber >= quotes.length) {
      currentEmployeNumber = 0
    }
    setEmployeeContent(currentEmployeNumber)
  }
}

buttonLeft.addEventListener('click', changeEmployee);
buttonRight.addEventListener('click', changeEmployee);

btnHamburger.addEventListener('click', function(){
  btnHamburger.classList.toggle('open');
  asideMenu.classList.toggle('slide');
  asideMenuMobile.classList.toggle('slide');
  modal.classList.toggle('hide');
})

window.addEventListener('scroll', function() {
  modal.style.top = `${window.scrollY}px`
  if(btnHamburger.classList.contains('open')) {
    btnHamburger.classList.toggle('open');
    asideMenu.classList.toggle('slide');
    asideMenuMobile.classList.toggle('slide');
    modal.classList.toggle('hide');
  }
  
})