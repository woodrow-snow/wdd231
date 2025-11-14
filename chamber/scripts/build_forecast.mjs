// this module building the 3 day forecast

// import statements
import { convertUnixTime, getDayString } from "./utility_functions.mjs";


export function buildForecast(card, foreData){
    // creating elements
    const today = document.createElement('p');
    const tommorrow = document.createElement('p');
    const dayAfter = document.createElement('p');

    // populating today's info
    today.innerHTML = `Today: <strong>${foreData.list[0].main.temp_max}&deg;F</strong>`;

    // populating next days info
    updateInfo(8, tommorrow, foreData);
    

    // populating day afters info
    updateInfo(16, dayAfter, foreData);

    // adding elements to card
    card.appendChild(today);        
    card.appendChild(tommorrow);
    card.appendChild(dayAfter);
}

function updateInfo(foreIndex, ent, data){
    const dateTime = convertUnixTime(data.list[foreIndex].dt);
    const dateStr = getDayString(dateTime);

    ent.innerHTML = `${dateStr}: <strong>${data.list[foreIndex].main.temp_max}&deg;F</strong>`
}