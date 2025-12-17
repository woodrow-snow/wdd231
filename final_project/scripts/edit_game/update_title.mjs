export function updateTitle(gameType){
    // getting title element from docuemnt
    const title = document.querySelector('title');

    // upper casing first letter
    const fristLet = gameType[0].toUpperCase();
    const restOfWord = gameType.slice(1);

    title.textContent = `Edit ${fristLet}${restOfWord} Game`;
}