// this is the main js file for the thank you page for adding board and card games
// import statements
import { getFromLocalStorage, setInLocalStorage } from "../functions.mjs";

// getting elements from docuemnt
const thankYou = document.querySelector('#thank-you-message');



// getting info from browser 
const data = new URLSearchParams(window.location.search);

// Global Vars
const BOARD_LS_NAME = `${data.get('gameType')}Games`;

// info from localStorage
let boardGames; 
try {
    boardGames = getFromLocalStorage(BOARD_LS_NAME);
}
catch {
    boardGames = [];
}

// creating message
thankYou.innerHTML = `
    <h1>Thank you!</h1>
    <h2>Your ${data.get('gameType')} game has been added!</h2>
    <h3>Name: ${data.get('name')}</h3>
    <p>Number of Players: ${data.get('pMin')} to ${data.get('pMax')}</p>
    <p>Recommended Age: ${data.get('age')}+</p>
`;

// adding data to localStorage
// creating object for info to go into
const newGame = {
    id:-1,
    name:data.get('name'),
    p_min:data.get('pMin'),
    p_max:data.get('pMax'),
    time:data.get('length'),
    age:data.get('age')
}

// setting the id for the new game
let newGameID = -1;

console.log(boardGames);
if (boardGames.length == 0){
    newGameID = 1;
}
else {
    newGameID = boardGames.length + 1;
}

newGame.id = newGameID;

// adding new game to array
boardGames.push(newGame);

// saving data to localStorage
setInLocalStorage(BOARD_LS_NAME,boardGames);