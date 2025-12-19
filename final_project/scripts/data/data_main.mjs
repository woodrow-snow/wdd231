// this is the main js file for the data page
// import statements
import { createDownloadFile } from "./create_file.mjs";
import { makeUnclickable } from "./make_unclickable.mjs";
import { setInLocalStorage } from "../functions.mjs";
import { getGameType } from "../index/get_random_game.mjs";
import { getDataFromFile } from "./get_from_file.mjs";
import { addSuccessMessage } from "./add_success.mjs";

// ---------- handling downloading of data ----------
const cardLink = document.querySelector('#cardDownload');
const boardLink = document.querySelector('#boardDownload');
const videoLink = document.querySelector('#videoDownload');
// const bothLink = document.querySelector('#bothDownload');

// creating links
const cardURL = createDownloadFile(cardLink,'card');
const boardURL = createDownloadFile(boardLink,'board');
const videoURL = createDownloadFile(videoLink,'video');
// const bothURL = [createDownloadFile(cardLink,'card'), createDownloadFile(boardLink,'board')];
let cardClicked = false;
let boardClicked = false;
let videoClicked = false;
// let bothClicked = false;

// creating event listeners to make sure links get removed after download
cardLink.addEventListener('click', () => {
    makeUnclickable(cardLink);
    cardClicked = true;
});

boardLink.addEventListener('click', () => {
    makeUnclickable(boardLink);
    boardClicked = true;
});

videoLink.addEventListener('click', () => {
    makeUnclickable(videoLink);
    boardClicked = true;
});

// bothLink.addEventListener('click',() => {
//     makeUnclickable(cardLink);
//     makeUnclickable(boardLink);
//     makeUnclickable(bothLink);
//     bothClicked = true;
// });

if (cardClicked) {
    window.URL.revokeObjectURL(cardURL);
}

if (boardClicked){
    window.URL.revokeObjectURL(boardURL);
}

if (videoClicked){
    window.URL.revokeObjectURL(videoURL);
}

// if (bothClicked){
//     window.URL.revokeObjectURL(bothURL);
// }


// ---------- handing form information and uploading of data ----------
let uploadedData;

// getting file from user
const fileInput = document.querySelector('#datafile');
fileInput.addEventListener('change', async (event) => {
    uploadedData = await getDataFromFile(event);
});

// adding eventlistener to upload button to finalizie saving data
const uploadBtn = document.querySelector('#upload');

uploadBtn.addEventListener('click', () => {
    // getting radio value
    const types = document.getElementsByName('uploadType');

    const uploadType = getGameType(types);

    // saving data
    setInLocalStorage(`${uploadType}Games`,uploadedData);

    // adding success message
    addSuccessMessage(uploadType);
});