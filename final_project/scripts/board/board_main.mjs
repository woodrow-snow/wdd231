// this is the main js file for board games display page
// import statements
import { getFromLocalStorage } from "../functions.mjs";
import { buildBTableRows } from "./build_board_table.mjs";

// Global Vars
const BOARD_LS_NAME = 'boardGames';

// getting boardGames from local storage
let boardGames;
try {
    boardGames = getFromLocalStorage(BOARD_LS_NAME);
}
catch {
    console.log('No board games entered, leaving table empty');
}

// building table rows
buildBTableRows(boardGames);