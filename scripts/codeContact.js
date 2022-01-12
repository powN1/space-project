const btnHamburger = document.querySelector('[data-hamburger-button]');
const asideMenu = document.querySelector('[data-aside-menu]');
const asideMenuMobile = document.querySelector('[data-aside-menu-mobile]');
const modal = document.querySelector('[data-modal]');
const contactFirstNameInput = document.querySelector('[data-first-name]');
const contactFirstNameLabel = document.querySelector('[data-first-name-label]');
const contactLastNameInput = document.querySelector('[data-last-name]');
const contactLastNameLabel = document.querySelector('[data-last-name-label]');
const contactEmailInput = document.querySelector('[data-contact-email]');
const contactEmailLabel = document.querySelector('[data-contact-email-label]');
const contactTextarea = document.querySelector('[data-contact-textarea]');
const contactTextareaLabel = document.querySelector('[data-contact-textarea-label]');
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
  if(contactEmailLabel.querySelector('span')) {
    contactEmailLabel.querySelector('span').remove();
    this.classList.remove('wrong');
  }
})
contactFirstNameInput.addEventListener('input', function() {
  if(contactFirstNameLabel.querySelector('span')) {
    contactFirstNameLabel.querySelector('span').remove();
    this.classList.remove('wrong');
  }
})
contactLastNameInput.addEventListener('input', function() {
  if(contactLastNameLabel.querySelector('span')) {
    contactLastNameLabel.querySelector('span').remove();
    this.classList.remove('wrong');
  }
})
contactTextarea.addEventListener('input', function() {
  if(contactTextareaLabel.querySelector('span')) {
    contactTextareaLabel.querySelector('span').remove();
    this.classList.remove('wrong');
  }
})

contactForm.addEventListener('submit', function(e){
  if(!contactFirstNameInput.value) {
    e.preventDefault();
    if(contactFirstNameLabel.innerHTML.includes('span')) {
      contactFirstNameLabel.querySelector('span').textContent = 'Type your first name.'
    } else {
      contactFirstNameInput.classList.add('wrong');
      const spanError = document.createElement('span');
      spanError.textContent = `Type your first name.`
      spanError.style.color = 'red';
      contactFirstNameLabel.appendChild(spanError);
    }
  }
  if(!contactLastNameInput.value) {
    e.preventDefault();
    if(contactLastNameLabel.innerHTML.includes('span')) {
      contactLastNameLabel.querySelector('span').textContent = 'Type your first name.'
    } else {
      contactLastNameInput.classList.add('wrong');
      const spanError = document.createElement('span');
      spanError.textContent = `Type your first name.`
      spanError.style.color = 'red';
      contactLastNameLabel.appendChild(spanError);
    }
  }
  if(!contactEmailInput.value) {
    e.preventDefault();
    if(contactEmailLabel.innerHTML.includes('span')) {
      contactEmailLabel.querySelector('span').textContent = 'Type your email address.'
    } else {
      contactEmailInput.classList.add('wrong');
      const spanError = document.createElement('span');
      spanError.textContent = `Type your email address.`
      spanError.style.color = 'red';
      contactEmailLabel.appendChild(spanError);
    }
  } else if (contactEmailInput.value && !contactEmailInput.value.includes('@') || !contactEmailInput.value.includes('.')) {
    e.preventDefault();
    if(contactEmailLabel.innerHTML.includes('span')) {
      contactEmailLabel.querySelector('span').textContent = 'Wrong email address.'
    } else {
      contactEmailInput.classList.add('wrong');
      const spanError = document.createElement('span');
      spanError.textContent = `Wrong email address.`
      spanError.style.color = 'red';
      contactEmailLabel.appendChild(spanError);
    }
  }
  if(!contactTextarea.value) {
    e.preventDefault();
    if(contactTextareaLabel.innerHTML.includes('span')) {
      contactTextareaLabel.querySelector('span').textContent = 'Type your message.'
    } else {
      contactTextarea.classList.add('wrong');
      const spanError = document.createElement('span');
      spanError.textContent = `Type your message.`
      spanError.style.color = 'red';
      contactTextareaLabel.appendChild(spanError);
    }
  } else if(contactTextarea.value.length < 20) {
    e.preventDefault();
    if(contactTextareaLabel.innerHTML.includes('span')) {
      contactTextareaLabel.querySelector('span').textContent = 'At least 20 characters long.'
    } else {
      contactTextarea.classList.add('wrong');
      const spanError = document.createElement('span');
      spanError.textContent = `At least 20 characters long.`
      spanError.style.color = 'red';
      contactTextareaLabel.appendChild(spanError);
    }
  }
})

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