// importing modules
import { getData } from "./get_data.mjs";
import { buildWeatherCard } from "./build_weather.mjs";
import { weatherURL, forecastURL, chamberURL }from "./urls.mjs";
import { buildForecast } from "./build_forecast.mjs";

// getting elements from document
const currentWSection = document.querySelector('#weather-info');
const forecastSection = document.querySelector('#forecast');

// building and deploying current weather card
getData(weatherURL).then(weather => buildWeatherCard(currentWSection, weather));
getData(forecastURL).then(forecast => buildForecast(forecastSection, forecast));

// --- temp code ---
// // getting array of members to create cards for
// const membersArray = getData(chamberURL).then(members => pickMembers())
// // creating cards
// add code for creating cards