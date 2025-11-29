// this module contains function that are used for login information
export function getLastLogin(varName){
    return JSON.parse(localStorage.getItem(varName));
}

export function createVar(varName,data){
    localStorage.setItem(varName,JSON.stringify(data));
}