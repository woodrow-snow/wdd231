// this is the main js file for the thank you page for adding board and card games

// name=test length=test pMin=1 pMax=3 age=2 gameType=board

// getting elements from docuemnt
const thankYou = document.querySelector('#thank-you-message');

// getting info from browser
const data = new URLSearchParams(window.location.search);

// creating message
thankYou.innerHTML = `
    <h1>Thank you!</h1>
    <h2>Your ${data.gameType.toUpperCase()} Game has been added!</h2>
    
`;