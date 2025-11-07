// getting elements from docuemnt
const cardArea = document.querySelector('#member-cards');
const url = "https://woodrow-snow.github.io/wdd231/chamber/data/members.json";
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

const getMembers = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    return data.business;
};

const businesses = getMembers();

// getting data using fetch


function deleteCards(bool){
    let currentlyDisplayed = [];
    
    if(bool){
        currentlyDisplayed = document.querySelectorAll('.member-card');
    }
    else{
        currentlyDisplayed = document.querySelectorAll('.member-line');
    }

    currentlyDisplayed.forEach(card => {
        card.remove();
    });
}

const displayMembersGrid = (companies) => {
    // deleting previous cards
    deleteCards(true);

    companies.forEach(comp => {

        // creating card elements
        const compCard = document.createElemet('section');
        const name = document.createElement('a');
        const address = document.createElement('h3');
        const address2 = document.createElement('h3');
        const phone = document.createElement('h3');
        // image maybe??? idk the things they are wanting are confusing
        const memberLvl = document.createElement('h4');

        // populating information
        name.textContent = comp.name;
        name.setAttribute("href",comp.url);
        address.textContent = comp.address;
        address2.textContent = comp.address2;
        phone.textContent = comp.phone_number;
        memberLvl.textContent = `Member Level: ${comp.memberLvl}`;        

        // adding elements to card
        compCard.appendChild(name);
        compCard.appendChild(address);
        compCard.appendChild(address2);
        compCard.appendChild(phone);
        // compCard.appendChild();
        compCard.appendChild(memberLvl);

        // adding class to card
        cardArea.classList.add('member-card');

        // adding card to docuemnt
        cardArea.append(compCard);
    });
};

const displayMembersList = (companies) => {
    // deleting current elements
    deleteCards(false);

    companies.forEach(comp => {

        // creating list items
        const compLine = document.createElement('div');
        const name = document.createElement('p');
        const phone = document.createElement('p');
        const site = document.createElement('a');
        
        // populating info
        name.textContent = comp.name;
        phone.textContent = comp.phone_number;
        site.textContent = 'View Their Site!';
        site.setAttribute('href', comp.url);

        // adding elements to card
        compLine.appendChild(name);
        compLine.appendChild(phone);
        compLine.appendChild(site);

        // adding class to line
        compLine.classList.add('member-line');

        // adding card to document
        cardArea.append(compLine);
    });
};

displayMembersGrid(businesses);

gridBtn.addEventListener(() => {
    displayMembersGrid(businesses);
});

listBtn.addEventListener(() => {
    displayMembersList(businesses);
});