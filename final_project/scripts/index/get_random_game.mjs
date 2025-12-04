// this module is dedicated to the choosing of a random game. This is the main hub for the button on the index page
// import statements
import { generateNumber } from "./randon_num.mjs";
import { getData } from '../get_data.mjs';

// global vars
const DEFAULT_GAMES_COUNT = 10;

export async function getRandomGame(baseURL){
    // check what game type
    // selecting all radio buttons from DOM
    const gameTypes = document.getElementsByName('gameType');
        
    // finding which button was checked
    const type = getGameType(gameTypes);
    console.log(type); // testing

    // getting information form users localStorage
    // ----- need to add code -----

    // getting highest index number based on game type and creating array of all needed games
    const allGames = [];
    let highestIndex = 0;

    // creating array for all games to go in then filling in if statement

    if (type == 'all'){
        highestIndex += DEFAULT_GAMES_COUNT;
        // ----- need to add code -----

        const gameData = await getData(baseURL);
        fillBaseGames(allGames,gameData)
    }
    else if (type == 'board') {
        // ----- need to add code -----
    }
    else if (type == 'card'){
        highestIndex += DEFAULT_GAMES_COUNT;
        // ----- need to add code -----
        const gameData = await getData(baseURL);
        fillBaseGames(allGames,gameData)
    }
    // removing one from highestIndex to make 0 based
    highestIndex -= 1;

    // select random game
    let chosenGame = chooseGame(allGames,highestIndex) 

    // getting player amount
    const playerAmount = document.querySelector('#playerCount').value;

    // check to make sure it fits player amount
    while(true){
        // getting choosen games min and mix
        let player_max = chosenGame.p_max;
        let player_min = chosenGame.p_min;

        if (playerAmount < player_min || playerAmount > player_max ){
            chosenGame = chooseGame(allGames,highestIndex);
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
    let chosenNum = generateNumber(1,index);
    return games[chosenNum]; 
}

function getGameType(types){
    let gt;  // gt = game type
    for (const t of types) {
            if (t.checked) {
                gt = t.value;
                break;
            }
        }
    
    return gt;
}

function fillBaseGames(games,data) {
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
}