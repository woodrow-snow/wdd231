// this script submits information and checks if it is valid
// import statements
import { checkTitle } from "./check_org_title.mjs";

export function submitForm(){
    // getting or creating needed elements
    const form = document.querySelector('form');
    const orgTitle = document.querySelector('#orgTitle');
    const errorMSG = document.querySelector('#errorMSG');

    form.addEventListener('submit', (event) => {
        if(!checkTitle(orgTitle.value)) {
            event.preventDefault(); // preventing form from submitting
            errorMSG.style.display = 'block';
            orgTitle.style.borderColor = 'var(--secondary)';
        } else {
            errorMSG.style.display = 'none';
        }

        // adding timestamp information
        const timestamp = document.querySelector('#timestamp');
        const now = new Date();
        const formattedNow = now.toLocaleString();
        timestamp.value = formattedNow;
    });
}