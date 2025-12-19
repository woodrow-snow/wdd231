// this is the main js file for video games display page
// import statements
import { getFromLocalStorage } from "../functions.mjs";
import { buildBTableRows } from "../board/build_board_table.mjs";

// Global Vars
const VIDEO_LS_NAME = 'videoGames';

// getting boardGames from local storage
let videoGames;
try {
    videoGames = getFromLocalStorage(VIDEO_LS_NAME);
}
catch {
    console.log('No board games entered, leaving table empty');
}

// building table rows
buildBTableRows(videoGames);
