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
  if (visitsDisplay) {
    visitsDisplay.textContent = numVisits;
  }
} else {
  if (visitsDisplay) {
    visitsDisplay.textContent = `This is your first visit!`;
  }
}

// increment the number of visits.
numVisits++;
// store the new number of visits value
localStorage.setItem("visits-ls", numVisits);
// show todays date.

// WEATHER API
const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Taguig&units=imperial&appid=4a21eeb6818a6efbe082b97dad0224ab";

async function apiFetch() {
  try {
    const response = await fetch(url);

    if (response.ok) {
      const weatherData = await response.json();
      displayResults(weatherData);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

function displayResults(weatherData) {
  const weatherContainer = document.querySelector(".weather__container");
  const cityName = document.createElement("h3");
  const weatherTemperature = document.createElement("div");
  const weatherDescription = document.createElement("div");
  const weatherHumidity = document.createElement("div");
  const windSpeed = document.createElement("div");
  const weatherChill = document.createElement("div");
  const weatherIcon = document.createElement("img");
  const hr = document.createElement("hr");

  cityName.textContent = weatherData.name;
  weatherIcon.src = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
  weatherTemperature.innerHTML = `${weatherData.main.temp}°<sup>F</sup>`;
  weatherTemperature.classList.add("weather_temp");
  const desc = weatherData.weather[0].description;
  const words = desc.split(" ");
  const capitalizedDesc = words
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  weatherDescription.textContent = capitalizedDesc;
  weatherDescription.classList.add("weather_desc");
  weatherHumidity.textContent = `Humidity: ${weatherData.main.humidity}`;
  windSpeed.textContent = `Wind Speed: ${weatherData.wind.speed}`;

  const chill = calculateWindChill(weatherData.main.temp);
  if (chill) {
    weatherChill.innerHTML = `Wind Chill: ${chill.toFixed(2)}°<sup>F</sup>`;
  } else {
    weatherChill.textContent = "Wind Chill: N/A";
  }

  weatherContainer.append(
    cityName,
    weatherIcon,
    weatherTemperature,
    weatherDescription,
    hr,
    weatherHumidity,
    windSpeed,
    weatherChill
  );
}

function calculateWindChill(temperature, speed) {
  const windChill =
    35.74 +
    0.6215 * temperature -
    35.75 * speed ** 0.16 +
    0.4275 * temperature * speed ** 0.16;

  return windChill;
}

// DISCOVER

const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector(".company-cards-container");

// The following code could be written cleaner. How? We may have to simplfiy our HTMl and think about a default view.
if (gridbutton) {
  gridbutton.addEventListener("click", () => {
    // example using arrow function
    display.classList.add("grid");
    display.classList.remove("list");
  });
}

if (listbutton) {
  listbutton.addEventListener("click", showList); // example using defined function
}

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");
}

async function getResponse() {
  const response = await fetch("./json/data.json");
  if (response.ok) {
    const data = await response.json();
    displayCompanies(data);
  }
}

function displayCompanies(data) {
  const article = document.querySelector(".grid");

  data.companies.forEach((company) => {
    const image = document.createElement("img");
    const section = document.createElement("section");
    const h2 = document.createElement("h2");
    const para = document.createElement("p");
    const address = document.createElement("address");
    const address1 = document.createElement("address");
    const link = document.createElement("a");

    image.src = company.logo;
    image.alt = `${company.name} logo.`;
    h2.textContent = company.name;
    para.textContent = company.membershipLevel;
    address.textContent = company.address;
    address1.textContent = company.contact;
    link.href = company.url;
    link.target = "__blank";
    link.textContent = "Website";
    section.classList = "company-cards";
    section.append(image, h2, para, address, address1, link);
    article.append(section);
  });
}
getResponse();
