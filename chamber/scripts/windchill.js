const weather = {
  apiKey: "4a21eeb6818a6efbe082b97dad0224ab",
  async fetchWeather() {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=14.5243&lon=121.0792&units=metric&appid=${this.apiKey}`
    );

    if (response.ok) {
      const data = await response.json();
      this.displayWeather(data);
    }
  },
  displayWeather(data) {
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
    ).textContent = `Wind Speed: ${speed} km/h`;
    document.querySelector(
      ".weather__chill"
    ).textContent = `Wind Chill: ${this.calculateWindChill(
      temp * 1.8 + 32,
      speed
    )} °F`;
  },
  calculateWindChill(temp, speed) {
    const windChill =
      35.74 +
      0.6215 * temp -
      35.75 * speed ** 0.16 +
      0.4275 * temp * speed ** 0.16;

    return windChill.toFixed(2);
  },
};

weather.fetchWeather();
