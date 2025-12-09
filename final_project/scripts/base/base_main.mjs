// this is the main js file for base games display page
import { buildBTableRows } from "../board/build_board_table.mjs";
import { fillBaseGames } from "../index/get_random_game.mjs";
import { getData } from "../get_data.mjs";

// creating url for base games
const siteURL = 'https://woodrow-snow.github.io/wdd231/final_project/data/base_games.json';

const baseGames = [];
// getData(siteURL).then(games => fillBaseGames(baseGames,games));

async function build() {
    const data = await getData(siteURL)
    fillBaseGames(baseGames,data);
    console.log(baseGames);
    buildBTableRows(baseGames);
}

build();