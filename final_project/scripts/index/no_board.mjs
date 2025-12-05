// this function handles the event there are no board games entered by the user
import { deleteMsgs } from "./delete_error_msg.mjs";

export function handleNoBoard(){
    //checking if message already exists
    deleteMsgs();

    // getting elements from document
    const picker = document.querySelector('.gamePicker');

    // creating text element
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'There are no board games!';
    errorMessage.classList.add('noBoard');

    picker.append(errorMessage);
}