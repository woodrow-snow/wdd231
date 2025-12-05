// this is the main js file for board games display page
// import statements
import { getFromLocalStorage } from "../functions.mjs";
import { buildBTableRows } from "../board/build_board_table.mjs";

// Global Vars
const CARD_LS_NAME = 'cardGames';

// getting boardGames from local storage
let cardGames;
try {
    cardGames = getFromLocalStorage(CARD_LS_NAME);
}
catch {
    console.log('No card games entered, leaving table empty');
}

//building table rows
buildBTableRows(cardGames);