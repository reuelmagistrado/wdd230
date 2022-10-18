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

// Weather

const weather = {
  apiKey: "4a21eeb6818a6efbe082b97dad0224ab",
  fetchWeather: async function () {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=14.5243&lon=121.0792&units=metric&appid=${this.apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      this.displayWeather(data);
    }
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    document
      .querySelector(".weather__title")
      .insertAdjacentText("beforeend", ` in ${name}`);
    document.querySelector(".weather__temp").textContent = `${temp}°C`;
    document.querySelector(
      ".weather__icon"
    ).src = `https://openweathermap.org/img/wn/${icon}.png`;
    document.querySelector(
      ".weather__description"
    ).textContent = `${description[0].toUpperCase()}${description.slice(1)}`;
    document.querySelector(
      ".weather__humidity"
    ).textContent = `Humidity: ${humidity}%`;
    document.querySelector(
      ".weather__wind"
    ).textContent = `Wind speed: ${speed} km/h`;
  },
};

weather.fetchWeather();
