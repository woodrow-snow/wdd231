// this is the script where everything is pulled together
// import code
import { addListenerToMemLvl } from "./open_member_modal.mjs";
import { submitForm } from "./submit_form.mjs";

// adding event listeners to membership levels learn more button
addListenerToMemLvl();

// checking at submission to see if org title is correct
submitForm();