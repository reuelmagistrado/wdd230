const footerText = document.querySelector('.footer__text:last-child');
const time = document.createElement('time');
time.className = 'last-modified';
time.dateTime = document.lastModified;
time.textContent = document.lastModified;
footerText.insertAdjacentElement('beforeend', time);