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

const imagesToLoad = document.querySelectorAll("img[data-src]");

const loadImages = (image) => {
  image.src = image.getAttribute("data-src");
  image.onload = () => {
    image.removeAttribute("data-src");
  };
};

const imgOptions = {
  threshold: 0,
  rootMargin: "0px 0px -100px 0px",
};

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((items, observer) => {
    items.forEach((item) => {
      if (item.isIntersecting) {
        loadImages(item.target);
        observer.unobserve(item.target);
      }
    });
  }, imgOptions);
  imagesToLoad.forEach((img) => {
    observer.observe(img);
  });
} else {
  imagesToLoad.forEach((img) => {
    loadImages(img);
  });
}

// initialize display element
const visitsDisplay = document.querySelector(".visits");

// get the stored value in localStorage
let numVisits = Number(window.localStorage.getItem("visits-ls"));

// determine if this is the first visit or display the number of visits.
if (numVisits !== 0) {
  visitsDisplay.textContent = numVisits;
} else {
  visitsDisplay.textContent = `This is your first visit!`;
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.
