// this module is dedicated to the choosing of a random game. This is the main hub for the button on the index page
// import statements
import { generateNumber } from "./randon_num.mjs";
import { getData } from '../get_data.mjs';
import { getFromLocalStorage } from "../functions.mjs";
import { handleNoBoard, handleNoVideo } from "./no_board.mjs";
import { deleteMsgs } from "./delete_error_msg.mjs";

// global vars
const DEFAULT_GAMES_COUNT = 10;
const CARD = 'cardGames';
const BOARD = 'boardGames';
const VIDEO = 'videoGames';

export async function getRandomGame(baseURL){
    // check what game type
    // selecting all radio buttons from DOM
    const gameTypes = document.getElementsByName('gameType');

    // deleteing error messages if any
    deleteMsgs();
        
    // finding which button was checked
    const type = getGameType(gameTypes);

    // getting the cooperation type
    const coopTypes = document.getElementsByName('coopType');
    const coopType = getGameType(coopTypes);
    console.log(coopType);

    // getting information form users localStorage
    let cardGames = getFromLocalStorage(CARD);
    let boardGames = getFromLocalStorage(BOARD);
    let videoGames = getFromLocalStorage(VIDEO);

    // making sure there is an empty array if they return null
    if (cardGames == null) {
        cardGames = [];
    }

    if (boardGames == null) {
        boardGames = [];
    }

    if (videoGames == null) {
        videoGames = [];
    }

    // getting highest index number based on game type and creating array of all needed games
    const allGames = [];
    let highestIndex = 0;

    // creating array for all games to go in then filling in if statement
    if (type == 'all'){

        // creating array with all games
        // adding base card games
        const gameData = await getData(baseURL);
        fillBaseGames(allGames,gameData);
        
        //adding board games
        boardGames.forEach(b => {
            allGames.push(b);
        }); 
        
        //adding card games
        cardGames.forEach(c => {
            allGames.push(c);
        });
    }
    else if (type == 'board') {
        if (boardGames.length != 0) {
            //adding board games
            boardGames.forEach(b => {
                allGames.push(b);
            });
        }
        else {
            // handle the event where there are no board games
            handleNoBoard();
        }
    }
    else if (type == 'card'){
        // getting highest index
        if (cardGames.length != 0) {
            highestIndex += cardGames.length;
        }

        const gameData = await getData(baseURL);
        fillBaseGames(allGames,gameData);

        //adding card games
        cardGames.forEach(c => {
            allGames.push(c);
        }); 
    }
    else if (type == 'video') {
        if (videoGames.length != 0) {
            // adding video games
            videoGames.forEach(v => {
                allGames.push(v);
            });
        }
        else {
            handleNoVideo();
        }   
    }

    // ensuring all games have a co-opType key:value pair
    allGames.forEach(game => {
        if(!('co-opType' in game)){
            game['co-opType'] = null;
        }
    });

    // filtering allGames to only specified game types
    let filteredGames;
    if (coopType != 'allCoop') {
        filteredGames = allGames.filter(g => {
            // filtering to ensure games of choosen co-op type are in the new list. This includes NULL games
            return g['co-opType'] == coopType || g['co-opType'] == null
        });
    }
    else {
        filteredGames = allGames;
    }

    console.log(filteredGames);

    // getting the highest index
    highestIndex = filteredGames.length - 1;

    // select random game
    let chosenGame = chooseGame(filteredGames,highestIndex) // on both, is reading undefined, might need to add a conidition to filter for both

    // getting player amount
    const playerAmount = document.querySelector('#playerCount').value;

    // check to make sure it fits player amount and cooperation type    
    while(true){
        console.log(chosenGame);

        // getting choosen games min and mix
        let player_max = chosenGame.p_max;
        let player_min = chosenGame.p_min;

        // might have to revist how to do this
        if (playerAmount < player_min || playerAmount > player_max ){
            chosenGame = chooseGame(filteredGames,highestIndex);
        }
        else {
            break;
        }
    }

    // building the dialog
    // getting dialog form document
    const dialog = document.querySelector('#pickedGame');
    buildDialog(chosenGame, dialog);

    // open dialog
    dialog.showModal();
}

function chooseGame(games,index){
    let chosenNum = generateNumber(0,index);
    return games[chosenNum]; 
}

export function getGameType(types){
    let gt;  // gt = game type
    for (const t of types) {
            if (t.checked) {
                gt = t.value;
                break;
            }
        }
    
    return gt;
}

export function fillBaseGames(games,data) {
    // the reason this function works is because
    const trueData = data.baseCardGames;

    trueData.forEach(game => {
        games.push(game);
    });    
}

function buildDialog(game, dialog){

    // deleting everything before creating
    const allLoadedElements = document.querySelectorAll('dialog > *');

    allLoadedElements.forEach(e => {
        e.remove();
    });
    
    // creating close button
    const closeBtn = document.createElement('button');
    closeBtn.innerHTML = '&#88;';
    closeBtn.classList.add('close-btn');

    closeBtn.addEventListener('click', () => {
        dialog.close();
    });

    // creating game information
    const name = document.createElement('h2');
    name.textContent = `Your game is: ${game.name}`;

    const players = document.createElement('p');
    players.textContent = `Players: ${game.p_min} - ${game.p_max}`;

    const time = document.createElement('p');
    time.textContent = `Average time to play: ${game.time}`

    const age = document.createElement('p');
    age.textContent = `Ages ${game.age}+`

    // checking if has platform, if it does create platform
    let platform;
    let hasPlatform = false;
    if ('platform' in game) {
        platform = document.createElement('p');
        platform.textContent = `Platform: ${game.platform}`;
        hasPlatform = true;
    }


    const gameCoopType = document.createElement('p');
    gameCoopType.textContent = `Cooperation Type: ${game['co-opType']}`

    // getting if chosen game is a base game, if it is adding game instrucitons link
    const gameName = game.name;
    let hasLink = false;
    let glink;

    if ('link' in game && game.link == ''){
        hasLink = false;
    }
    else if('link' in game){
        glink = document.createElement('a');
        glink.href = game.link;
        glink.textContent = `Learn how to play ${gameName} here!`

        hasLink = true
    }

    // creating div for h2 and closebtn and adding elements
    const dialogBar = document.createElement('div');
    dialogBar.classList.add('header-bar');
    dialogBar.appendChild(name);
    dialogBar.appendChild(closeBtn);
    
    // adding elements to dialog
    dialog.append(dialogBar);
    dialog.append(players);
    dialog.append(time);
    dialog.append(age);

    // adding platform
    if (hasPlatform) {
        dialog.append(platform);
    }

    dialog.append(gameCoopType);

    if (hasLink) {
        dialog.append(glink);
    }
}