export function checkGameID(allGames,gid){ 
    let isValid = false;
    for (const g of allGames){
        if (g.id == gid) {
            isValid = true;
            break;
        }
    }
    return isValid;
}