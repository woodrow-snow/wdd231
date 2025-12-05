// this module will contain functions that can be transferred easily
export function getFromLocalStorage(varName){
    return JSON.parse(localStorage.getItem(varName));
}

export function setInLocalStorage(varName,dataToSave){
    localStorage.setItem(varName,JSON.stringify(dataToSave))
}