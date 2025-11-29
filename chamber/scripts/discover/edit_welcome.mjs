// this module edits the welcome sign at the top of the discover page
import { getLastLogin, createVar } from "./login_functions.mjs";

// global vars
const LOGIN = 'LastLogin';
const msToDays = 86400000; // might not need

export function editWelcome(){
    // getting elements from document
    const welcome = document.querySelector('#welcome-sign');

    let lastLogin;
    let first = false;

    // getting last login
    lastLogin = getLastLogin(LOGIN);

    if (lastLogin == null){
        console.log(`${LOGIN} did not exist creating login and setting last login to now`);
        first = true;
        createVar(LOGIN,new Date);
    } else if (lastLogin != null) {
        lastLogin = new Date(lastLogin);
    }

    // getting tomorrow time
    const today = new Date;
    const tomorrow = new Date(today);
    tomorrow.setDate(today.getDate() + 1);

    // test logs
    console.log(`Today: ${today}ms`);
    console.log(`Tomorrow: ${tomorrow}ms`);
    console.log(`Testing else if statement results: ${lastLogin - today}`);
    console.log(lastLogin - today < 24)


    if(first) {
        welcome.textContent = 'Welcome! Let us know if you have any questions.';
    }
    else if(lastLogin - today < 24){
        welcome.textContent = 'Back so soon! Awesome!'
    }
    else {
        const daysSinceLastLog = lastLogin.getDate() - today.getDate();

        if(daysSinceLastLog == 1) {
            welcome.textContent = `You last visited ${daysSinceLastLog} day ago.`
        }
        else {
            welcome.textContent = `You last visited ${daysSinceLastLog} days ago.`
        }
    }
}