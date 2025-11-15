// importing modules
import { getData } from "./get_data.mjs";
import { buildWeatherCard } from "./build_weather.mjs";
import { weatherURL, forecastURL, chamberURL }from "./urls.mjs";
import { buildForecast } from "./build_forecast.mjs";
import { pickMembers } from "./pick_members.mjs";
import { buildBusiness } from "./build_business_card.mjs";

// getting elements from document
const currentWSection = document.querySelector('#weather-info');
const forecastSection = document.querySelector('#forecast');
const membersSection = document.querySelector('#spotlights');

// building and deploying current weather card
getData(weatherURL).then(weather => buildWeatherCard(currentWSection, weather));
getData(forecastURL).then(forecast => buildForecast(forecastSection, forecast));


// getting array of members to create cards for them
async function getMembers() {
    const membersData = await getData(chamberURL);
    const membersArray = pickMembers(membersData);

    membersArray.forEach(m => {
        buildBusiness(m,membersSection);
    });
}

getMembers();