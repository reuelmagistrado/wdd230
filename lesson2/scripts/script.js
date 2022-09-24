const footerText = document.querySelector('small:last-child');
const time = document.createElement('time');
time.dateTime = document.lastModified;
time.textContent = document.lastModified;
footerText.insertAdjacentElement('beforeend', time);