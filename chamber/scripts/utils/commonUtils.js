const header = document.querySelector("header");
const now = new Date();
const time = document.createElement("time");
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  now
);

export function displayDate() {
  time.id = "banner";
  time.dateTime = now;
  time.textContent = fulldate;
  time.className = "date";
  header.insertAdjacentElement("afterbegin", time);
}

export const menuBtn = document.querySelector(".hamburger-btn");
const navList = document.querySelector(".navigation__list");

export function toggleClose() {
  menuBtn.classList.toggle("change");
  navList.classList.toggle("show-list");
}

const yearHolder = document.querySelector(".date-modified");
const currentYear = now.getFullYear();
const time1 = document.createElement("time");

export function displayYear() {
  time1.dateTime = now;
  time1.innerHTML = `&copy; ${currentYear} |`;
  yearHolder.insertAdjacentElement("afterbegin", time1);
}

const time2 = document.createElement("time");

export function displayDateModified() {
  time2.dateTime = now;
  time2.innerHTML = `Last&nbsp;Modified: ${document.lastModified}`;
  yearHolder.insertAdjacentElement("beforeend", time2);
}

export function displayBanner() {
  const banner = document.querySelector("#banner");
  const currentDay = now.getDay();

  if (currentDay === 1 || currentDay === 2) {
    banner.textContent =
      "🤝🏼 Come join us for the chamber meet and greet Wednesday at 7:00 p.m.";
  }
}
