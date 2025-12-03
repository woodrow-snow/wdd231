// creating vars for elements to be updated by js
const currentYear = document.getElementById("currentyear");
const lastModifiedDoc = document.getElementById("lastModified");

// get the current year and display
const today = new Date();
let year = today.getFullYear();

currentYear.textContent = year;

// getting last modified date and displaying
lastModifiedDoc.textContent = `Last Modified: ${document.lastModified}`;