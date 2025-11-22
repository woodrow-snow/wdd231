const info = new URLSearchParams(window.location.search);

const clientInfo = document.querySelector('#client-info');
const header = document.querySelector('h1');

// setting header information
header.textContent = `Thank you for joining us ${info.get('fname')}!`;


// getting membership level to display properly
const memLvl = info.get('memberLvl');
let displayLvl;

if (memLvl === 'np') {
    displayLvl = 'Non-Profit';
} else if(memLvl === 'bronze') {
    displayLvl = 'Bronze';
} else if(memLvl === 'silver') {
    displayLvl = 'Silver';
} else if(memLvl === 'gold'){
    displayLvl = 'Gold';
}

// setting up client information
clientInfo.innerHTML = `
    <h2 class='member-info'>Your information</h2>
    <p>Name: ${info.get('fname')} ${info.get('lname')}</p>
    <p>Phone Number: ${info.get('phone')}</p>
    <p>Email: ${info.get('email')}</p>

    <h2 class='orgInfo'>Organiztion Information</h2>
    <p>Your title: ${info.get('orgTitle')}</p>
    <p>Your Busniness Name: ${info.get('orgName')}</p>
    <p>Description of your business: ${info.get('description')}</p>
    <p>The membership level you chose: ${displayLvl}</p>
    <p>Your registration date and time: ${info.get('timestamp')}</p>
`;