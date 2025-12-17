import { getGameType } from "../index/get_random_game.mjs";
import { setInLocalStorage } from "../functions.mjs";

export function displaySelectedGame(gamesArray,gid,LSName){
    // getting game by game id
    let selected;
    for (const g of gamesArray){
        if(g.id == gid){
            selected = g;
            break;
        }
    }

    // getting main element
    const main = document.querySelector('main');

    // adding h1 element
    const h1 = document.createElement('h1');
    h1.textContent = ` Editing: ${selected.name}`

    main.append(h1);

    // need to create form with values in inputs already
    console.log(selected); // for testing
    createEditForm(selected,main);

    // creating button to edit information and save data
    const saveBtn = document.createElement('button');
    saveBtn.textContent = `Save: ${selected.name}`;
    saveBtn.classList.add('save');
    
    main.append(saveBtn);

    // add event listener to saveBtn to save data 
    saveBtn.addEventListener('click',() => {
        // getting information for game
        const updatedGame = {
            id: gid,
            name: document.querySelector('#name').value,
            p_min: document.querySelector('#pMin').value,
            p_max: document.querySelector('#pMax').value,
            time: document.querySelector('#length').value,
            age: document.querySelector('#age').value,
            "co-opType": getGameType(document.getElementsByName('coopType'))
        };

        // update the game in its array
        updateGame(gamesArray,gid,updatedGame,LSName);

        // adding confirmation of save
        const confirmation = document.createElement('p');
        confirmation.textContent = `${updatedGame.name} has been saved!`;
        confirmation.classList.add('saved');
        main.append(confirmation);

    });
}

function updateGame(allGames,gid,newGame,gamesType){
    // first getting id from allGames for udpated game
    let gameID = -1;

    

    for (let i = 0; i < allGames.length; i++) {
        if (allGames[i].id == gid) {
            gameID = i;
            break;
        }
    }

    // updating game
    allGames[gameID] = newGame;

    // saving in localStorage
    setInLocalStorage(gamesType,allGames);   
}

function createEditForm(g, container){
    const editForm = document.createElement('form');
    editForm.innerHTML = `
        <div class="firstSet">
            <label>Name:<input type="text" id="name" name="name" required value="${g.name}"></label>
            <label for="length">Length:<input type="text" id="length" name="length" required value="${g.time}" pattern="\\d+\\smin"></label>
            <label for="pMin">Min Players:<input type="number" id="pMin" name="pMin" required value="${g.p_min}"></label>
            <label for="pMax">Max Players:<input type="number" id="pMax" name="pMax" required value="${g.p_max}"></label>
            <label for="age">Youngest Age:<input type="number" min="2" id="age" name="age" value="${g.age}" required></label>
        </div>
        <fieldset class="coopTypeField">
            <legend>Co-op Type: </legend>
            <label for="coop"><input type="radio" id="coop" name="coopType" value="coop" ${getCoopType(g,'Co-op')}>Co-op</label>
            <label><input type="radio" id="comp" name="coopType" value="comp" ${getCoopType(g,'Competitive')}>Competitive</label>
        </fieldset>
    `

    container.append(editForm);
}

function getCoopType(game,radioType){
    if (game['co-opType'] == radioType){
        return 'checked';
    }
    else {
        return '';
    }
}