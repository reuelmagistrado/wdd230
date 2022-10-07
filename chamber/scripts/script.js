const header = document.querySelector("header");

const now = new Date();
const time = document.createElement("time");
const fulldate = new Intl.DateTimeFormat("en-UK", { dateStyle: "full" }).format(
  now
);
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

const theme = document.querySelector(".theme");
const icon = document.querySelector("#icon");
function changeTheme() {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "./images/sun.png";
  } else {
    icon.src = "./images/moon.png";
  }
}

theme.addEventListener("click", changeTheme);
