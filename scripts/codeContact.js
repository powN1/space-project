const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const modal = document.querySelector('[data-modal]');
const contactEmailInput = document.querySelector('[data-contact-email]');
const contactEmailLabel = document.querySelector('[data-contact-email-label]');
const contactForm = document.querySelector('[data-contact-form]');
const contactNumber = document.querySelector('[data-contact-phone-number]');


contactNumber.addEventListener('click', function() {
  let text = contactNumber.textContent;
  navigator.clipboard.writeText(text).then(function() {
    document.querySelector('span.copy').style.visibility = 'visible';
    document.querySelector('span.copy').style.opacity = '1';
    setTimeout(()=> {
      document.querySelector('span.copy').style.visibility = 'hidden';
    document.querySelector('span.copy').style.opacity = '0';
    }, 3000)
  }, function(err) {
  });
})

contactEmailInput.addEventListener('input', function() {
  console.log(this)
  if(contactEmailLabel.querySelector('span')) {
    contactEmailLabel.querySelector('span').remove();
    this.classList.remove('wrong')
  }
})

contactForm.addEventListener('submit', function(e){
  if(!contactEmailInput.value.includes('@') || !contactEmailInput.value.includes('.') ) {
    e.preventDefault()
    contactEmailInput.classList.add('wrong');
    const spanError = document.createElement('span');
    spanError.textContent = `Wrong email address.`
    spanError.style.color = 'red';
    contactEmailLabel.appendChild(spanError);
  }
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