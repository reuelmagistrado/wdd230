const url =
  "https://api.openweathermap.org/data/2.5/weather?q=Taguig&units=imperial&appid=4a21eeb6818a6efbe082b97dad0224ab";

export async function apiFetch() {
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
