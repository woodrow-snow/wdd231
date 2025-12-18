// this is the main file for the edit_game.html page
// import statements
import { updateTitle } from "./update_title.mjs";
import { getFromLocalStorage, updateLocalNav } from "../functions.mjs"
import { displaySelectedGame } from "./display_game.mjs";

// getting information from browser
const data = new URLSearchParams(window.location.search);

// ---------- Updating Nav for better user navigation ----------
updateLocalNav(data.get('gameType'));

// ---------- updating title ----------
updateTitle(data.get('gameType'));

// ---------- getting game data ----------
const games = getFromLocalStorage(`${data.get('gameType')}Games`);

// ---------- displaying game info ----------
displaySelectedGame(games,Number(data.get('gid')),`${data.get('gameType')}Games`);