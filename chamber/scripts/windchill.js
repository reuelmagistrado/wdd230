const temp = document.querySelector(".weather__temp").dataset.value;
const speed = document.querySelector(".weather__wind").dataset.value;
const windChill = document.querySelector(".weather__chill");
function calculateWindChill(temp, speed) {
  const windChill =
    35.74 +
    0.6215 * temp -
    35.75 * speed ** 0.16 +
    0.4275 * temp * speed ** 0.16;

  return windChill.toFixed(2);
}

const chill = calculateWindChill(temp, speed);
windChill.insertAdjacentText("beforeend", `${chill}°F`);
