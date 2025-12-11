// this is the main js file for the thank you page for adding board and card games
// import statements
import { getFromLocalStorage, setInLocalStorage } from "../functions.mjs";

// updating html on thankyou page for better nav identification
// getting nav from page
const cardNav = document.querySelector('.card');
const boardNav = document.querySelector('.board');

// getting info from browser 
const data = new URLSearchParams(window.location.search);

if (boardNav.classList.contains('current') && data.get('gameType') == 'card'){
    boardNav.classList.remove('current');
    cardNav.classList.add('current');
}

// getting elements from docuemnt
const thankYou = document.querySelector('#thank-you-message');

// Global Vars
const TYPE_LS_NAME = `${data.get('gameType')}Games`;

// info from localStorage
let allGames = getFromLocalStorage(TYPE_LS_NAME);

if (allGames == null) {
    allGames = [];
}

console.log(allGames);

// getting cooperation type
let gameCoopType = data.get('coopType');

if (gameCoopType == 'coop') {
    gameCoopType = 'Co-op';
}
else if (gameCoopType == 'comp') {
    gameCoopType = "Competitive";
}

// creating message
thankYou.innerHTML = `
    <h1>Thank you!</h1>
    <h2>Your ${data.get('gameType')} game has been added!</h2>
    <h3>Name: ${data.get('name')}</h3>
    <p>Number of Players: ${data.get('pMin')} to ${data.get('pMax')}</p>
    <p>Recommended Age: ${data.get('age')}+</p>
    <p>Cooperation Type: ${gameCoopType}</p>
`;

// adding data to localStorage
// creating object for info to go into
const newGame = {
    id:-1,
    name:data.get('name'),
    p_min:data.get('pMin'),
    p_max:data.get('pMax'),
    time:data.get('length'),
    age:data.get('age'),
    'co-opType':gameCoopType
}

// setting the id for the new game
let newGameID = -1;

console.log(allGames);
if (allGames.length == 0){
    newGameID = 1;
}
else {
    newGameID = allGames.length + 1;
}

newGame.id = newGameID;

// adding new game to array
allGames.push(newGame);

// saving data to localStorage
setInLocalStorage(TYPE_LS_NAME,allGames);