// import statement
import { getFromLocalStorage } from '../functions.mjs' 
import { makeUnclickable } from './make_unclickable.mjs';

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