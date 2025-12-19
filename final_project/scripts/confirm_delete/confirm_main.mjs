// main js file for confirm main page
import { displayConfirmation } from "./display_confirmation.mjs";
import { getFromLocalStorage } from "../functions.mjs";
import { getDeletedGame } from "./get_deleted.mjs";
import { deleteGame } from "./delete_game.mjs";
import { makeUnclickable } from "../data/make_unclickable.mjs";

// ---------- getting info from url ----------
const data = new URLSearchParams(window.location.search);

// getting data from local storage
const games = getFromLocalStorage(`${data.get('gameType')}Games`);

// getting game to be deleted
const gameToDelete = getDeletedGame(games,data.get('gid'));


// displaying confirmation message
const main = document.querySelector('main');
main.innerHTML = `
    <h1>Are You Sure You Want to Delete "${gameToDelete.name}"?</h1>
    <span class="info">This action cannot be undone!</span>
    <button class="submitDelete">Delete: ${gameToDelete.name}</button>
`;

main.classList.add('confirmMain');

// delete the game
const deleteBtn = document.querySelector('.submitDelete');

deleteBtn.addEventListener('click', () => {
    deleteGame(games,gameToDelete,data.get('gameType'));

    // displaying confirmation
    makeUnclickable(deleteBtn);
    deleteBtn.textContent = '';
    deleteBtn.textContent = 'Game Deleted';
});

