import { setInLocalStorage } from "../functions.mjs";

export function deleteGame(allGames,dGame,gameType){
    // creating new array without the game to be deleted
    const gamesWithoutDeleted = allGames.filter(g => {
        return g.id != dGame.id; 
    });

    // fixing game ids
    fixGameIds(gamesWithoutDeleted);

    // saving new array to localStorage
    setInLocalStorage(`${gameType}Games`,gamesWithoutDeleted);
}

function fixGameIds(games){
    for (let i = 0;i < games.length; i++){
        let newID = i + 1;
        games[i].id = newID;
    }
}