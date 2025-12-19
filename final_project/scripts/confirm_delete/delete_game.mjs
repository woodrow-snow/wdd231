import { setInLocalStorage } from "../functions.mjs";

export function deleteGame(allGames,dGame,gameType){
    // creating new array without the game to be deleted
    const gamesWithoutDeleted = allGames.filter(g => {
        return g.id != dGame.id; 
    });

    // saving new array to localStorage
    setInLocalStorage(`${gameType}Games`,gamesWithoutDeleted);
}