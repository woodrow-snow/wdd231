// this is the main js file for the thank you page for adding board and card games
// import statements
import { getFromLocalStorage, setInLocalStorage, updateLocalNav } from "../functions.mjs";

// getting info from browser 
const data = new URLSearchParams(window.location.search);

// ---------- updating html on thankyou page for better nav identification ----------
updateLocalNav(data.get('gameType'));

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
const gameCoopType = data.get('coopType');
let displayCoopType;

if (gameCoopType == 'coop') {
    displayCoopType = 'Co-op';
}
else if (gameCoopType == 'comp') {
    displayCoopType = "Competitive";
}

// if the gameType is video then create a new string to add to the thankYou.innerHTML
let videoStr = '';
if (data.get('gameType') == 'video'){
    videoStr = `<p>Platform: ${data.get('platform')}</p>`;
}

// creating message
thankYou.innerHTML = `
    <h1>Thank you!</h1>
    <h2>Your ${data.get('gameType')} game has been added!</h2>
    <h3>Name: ${data.get('name')}</h3>
    <p>Number of Players: ${data.get('pMin')} to ${data.get('pMax')}</p>
    <p>Recommended Age: ${data.get('age')}+</p>
    <p>Cooperation Type: ${displayCoopType}</p>
    ${videoStr}
    <p>Instructions Link: <a href="${data.get('link')}">${data.get('link')}</a></p>
`;

// adding data to localStorage
// creating object for info to go into
let newGame;

if (data.get('platform') == undefined) {
    newGame = {
        id:-1,
        name:data.get('name'),
        p_min:data.get('pMin'),
        p_max:data.get('pMax'),
        time:data.get('length'),
        age:data.get('age'),
        link:data.get('link'),
        'co-opType':gameCoopType
    }
}
else {
    newGame = {
        id:-1,
        name:data.get('name'),
        p_min:data.get('pMin'),
        p_max:data.get('pMax'),
        time:data.get('length'),
        age:data.get('age'),
        link:data.get('link'),
        'co-opType':gameCoopType,
        platform:data.get('platform')
    }
}

// setting the id for the new game
let newGameID = -1;

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

// ---------- Adding go back button ----------
const backBtn = document.querySelector('#goBack');

backBtn.href = `${data.get('gameType')}.html`