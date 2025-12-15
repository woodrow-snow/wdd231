import { getGameType } from "./get_random_game.mjs";

export function checkForm(){
    // checking for value in people playing
    const playerCount = document.querySelector('#playerCount');
    const pcLabel = document.querySelector('#pcCount');

    let haveWrongValue = false;
    
    if (playerCount.value === ''){
        pcLabel.classList.add('wrong');
        haveWrongValue = true;
    }

    // checking for value in game type
    const gameTypes = document.getElementsByName('gameType');
    const gtField = document.querySelector('#gameTypes');

    if (getGameType(gameTypes) == undefined) {
        gtField.classList.add('wrong');
        haveWrongValue = true;
    }

    // checking for coop type
    const coopTypes = document.getElementsByName('coopType');
    const coopField = document.querySelector('#coopTypes');

    if (getGameType(coopTypes) == undefined) {
        coopField.classList.add('wrong');
        haveWrongValue = true;
    }

    return haveWrongValue;
}