const temp = document.querySelector('#current-temp');
const icon = document.querySelector('#weather-icon');
const caption = document.querySelector('figcaption');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.74&lon=6.63&appid=83faa16b8a9d622015b9ea06a347f7f1&units=imperial';

// creating apiFetch function

const apiFetch = async (apiStr) => {
    try {
        const response = await fetch(apiStr); //getting information form api

        // testing response
        if (response.ok) {
            const data = await response.json();
            console.log(data); // for testing purposes
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    };
};

function displayResults(data){
    // setting temp
    temp.innerHTML = `${data.main.temp}&deg;F`;

    // setting icon
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    icon.setAttribute('src', iconsrc);
    icon.setAttribute('alt', data.weather[0].description);

    // setting description
    caption.textContent = data.weather[0].description;
}

apiFetch(url);

