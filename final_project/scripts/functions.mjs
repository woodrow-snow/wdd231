// this module will contain functions that can be transferred easily
export function getFromLocalStorage(varName){
    return JSON.parse(localStorage.getItem(varName));
}

export function setInLocalStorage(varName,dataToSave){
    localStorage.setItem(varName,JSON.stringify(dataToSave))
}

export function updateLocalNav(gameType) {
    const cardNav = document.querySelector('.card');
    const boardNav = document.querySelector('.board');
    const videoNav = document.querySelector('.video');

    if (boardNav.classList.contains('current') && gameType == 'card'){
        boardNav.classList.remove('current');
        cardNav.classList.add('current');
    }
    else if (boardNav.classList.contains('current') && gameType == 'video') {
        boardNav.classList.remove('current');
        videoNav.classList.add('current');
    }
}
