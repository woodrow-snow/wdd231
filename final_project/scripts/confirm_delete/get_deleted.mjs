export function getDeletedGame(games,gid){
    let returnGame;
    for(const g of games) {
        if(g.id == gid){
            returnGame = g;
            break;
        }
    }
    return returnGame;
}