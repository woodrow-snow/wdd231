// This is main file to be used that will have all import statements

// import statments
import pointsOfInterest from '../../data/points_of_interest.mjs'; // importing points of interest info
import { createCard } from './build_poi_cards.mjs';
import { editWelcome } from './edit_welcome.mjs';

// getting elements from document
const poiSection = document.querySelector('#allcards');

// creating cards
const poiInfo = pointsOfInterest.points;

poiInfo.forEach((poi) => {
    createCard(poi,poiSection);
});

// updating welcome sign
editWelcome();