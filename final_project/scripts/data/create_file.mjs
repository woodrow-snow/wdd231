// import statement
import { getFromLocalStorage } from '../functions.mjs' 

export function createDownloadFile(downloadBtn,gameType){
    // getting data from localStorage
    const data = getFromLocalStorage(`${gameType}Games`);
    
    // create blob and url
    const gameBlob = new Blob([JSON.stringify(data, null, 2)], {type: "application/json"});
    const gameURL = window.URL.createObjectURL(gameBlob);

    downloadBtn.href = gameURL;
    downloadBtn.download = `${gameType}Games.json`;

    return gameURL;
}

// export function createBothDownloadFile(downloadBtn){
//     // getting data from localStorage
//     const cardData = getFromLocalStorage('cardGames');
//     const boardData = getFromLocalStorage('boardGames');

//     // creating blob and url for card games
//     const combined = {cardGames: cardData, boardGames: boardData};
//     const blob = new Blob([JSON.stringify(combined,null,2)], {type: "application/json"});
//     const url = window.URL.createObjectURL(blob);

//     downloadBtn.href = url;
//     downloadBtn.download = `allGames.json`;

//     return url;
// }