const footerYear = document.querySelector(".year");
const time = document.createElement("time");
const currentDate = new Date();
const currentYear = currentDate.getFullYear();
time.textContent = currentYear;
footerYear.insertAdjacentElement("beforeend", time);

const footerText = document.querySelector("footer");
const time1 = document.createElement("time");
time1.dateTime = document.lastModified;
time1.textContent = document.lastModified;
footerText.insertAdjacentElement("beforeend", time1);
