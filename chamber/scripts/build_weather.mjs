// This module creates the current weather card

// import statements
import { convertUnixTime } from "./utility_functions.mjs";

export function buildWeatherCard(card, data) {
    // getting elements from document
    const wIcon = document.querySelector('#weather-icon');

    // creating elements
    const temp = document.createElement('p');
    const conditions = document.createElement('p');
    const high = document.createElement('p')
    const low = document.createElement('p')
    const humidity = document.createElement('p')
    const sRise = document.createElement('p')
    const sSet = document.createElement('p')
    
    //adding attributes to icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`
    wIcon.setAttribute('src', iconsrc);
    const wDescript = data.weather[0].description;
    wIcon.setAttribute('alt', wDescript)

    // populating data into consts
    temp.innerHTML = `${data.main.temp}&deg;F`;
    conditions.innerHTML = wDescript;
    high.innerHTML = `High: ${data.main.temp_max}&deg;F`;
    low.innerHTML = `Low: ${data.main.temp_min}&deg;F`; //not working i think
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    // populating data for sunrise and set
    const riseTime = convertUnixTime(data.sys.sunrise);
    const setTime = convertUnixTime(data.sys.sunset);

    sRise.innerHTML = `Sunrise: ${riseTime.toLocaleTimeString()}`;
    sSet.innerHTML = `Sunset: ${setTime.toLocaleTimeString()}`;

    // adding elements document
    card.appendChild(temp);
    card.appendChild(conditions);
    card.appendChild(high);
    card.appendChild(low);
    card.appendChild(humidity);
    card.appendChild(sRise);
    card.appendChild(sSet);
}