const header = document.querySelector("header");

const now = new Date();
const time = document.createElement("time");
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  now
);
time.id = "banner";
time.dateTime = now;
time.textContent = fulldate;
time.className = "date";
header.insertAdjacentElement("afterbegin", time);

const menuBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".navigation__list");
function toggleClose() {
  menuBtn.classList.toggle("change");
  navList.classList.toggle("show-list");
}
menuBtn.addEventListener("click", toggleClose);

const yearHolder = document.querySelector(".date-modified");
const currentYear = now.getFullYear();
const time1 = document.createElement("time");
time1.dateTime = now;
time1.innerHTML = `&copy; ${currentYear} |`;

yearHolder.insertAdjacentElement("afterbegin", time1);

const time2 = document.createElement("time");
time2.dateTime = now;
time2.innerHTML = `Last&nbsp;Modified: ${document.lastModified}`;

yearHolder.insertAdjacentElement("beforeend", time2);

// BANNER

const banner = document.querySelector("#banner");
const currentDay = now.getDay();

if (currentDay === 1 || currentDay === 2) {
  banner.textContent =
    "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
}
