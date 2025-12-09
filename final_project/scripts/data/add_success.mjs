export function addSuccessMessage(gameType){
    // getting elements form doc
    const messageSpace = document.querySelector('#message');
    
    messageSpace.textContent = `Your ${gameType} data has been uploaded!`;

}