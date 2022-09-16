const lastModified = document.querySelector('.last-modified');
lastModified.dateTime = document.lastModified;
lastModified.insertAdjacentText('afterbegin', document.lastModified);