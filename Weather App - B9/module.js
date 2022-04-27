import { controlRecipes } from "./controller.js";
import { API_GEOLOCATION_URL, API_WEATHER_URL, API_KEY } from "./config.js";
export const state = {
  recipe: {},
  time: {},
};
export const resolveData = async function (geoCurr) {
  try {
    const data = await fetch(
      `${API_GEOLOCATION_URL}q=${geoCurr}&limit=5${API_KEY}`
    );
    if (!data) return;
    const getJsonData = await data.json();
    const dataWeather = await fetch(
      `${API_WEATHER_URL}lat=${getJsonData[0].lat}&lon=${getJsonData[0].lon}${API_KEY}`
    );
    const getJsonDataWeather = await dataWeather.json();
    const timezoneEl = new Date(
      Date.now() + 1000 * getJsonDataWeather.timezone
    );
    const currentTime = timezoneEl.toISOString().split("T");
    state.recipe = {
      name: geoCurr.toUpperCase(),
      country: getJsonDataWeather.sys.country,
      celius: Math.floor(getJsonDataWeather.main.temp - 273.15),
      weather: getJsonDataWeather.weather[0].main,
      visibility: getJsonDataWeather.visibility,
      wind: getJsonDataWeather.wind.speed,
      clouds: getJsonDataWeather.clouds.all,
      day: currentTime[0].split("-").reverse().join("-"),
      time: currentTime[1].split(".")[0],
    };
  } catch (err) {
    throw err;
  }
};
