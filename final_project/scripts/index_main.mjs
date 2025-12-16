// This is the main file referenced by the index.html page
// import statements
import { getRandomGame } from "./index/get_random_game.mjs";
import { checkForm } from "./index/check_form.mjs";

// creating url for base card game data
const siteURL = 'https://woodrow-snow.github.io/wdd231/final_project/data/base_games.json';

// adding event listener to form submittion button
const gameBtn = document.querySelector('#roll');



gameBtn.addEventListener('click', () => {
    const isFormGood = checkForm();

    if (isFormGood == false) {
        getRandomGame(siteURL);
    }
});