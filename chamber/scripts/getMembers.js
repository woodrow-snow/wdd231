// getting elements from docuemnt
const cardArea = document.querySelector('#member-cards');
const url = "https://woodrow-snow.github.io/wdd231/chamber/data/members.json";
const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');

const getMembers = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data.business;
};

function deleteCards(){
    const DisplayedGrid = document.querySelectorAll('.member-card');
    const DisplayedList = document.querySelectorAll('.member-line');


    DisplayedGrid.forEach(card => {
        card.remove();
    });

    DisplayedList.forEach(card => {
        card.remove();
    });
}

const displayMembersGrid = (companies) => {
    // deleting previous cards
    deleteCards();

    companies.forEach((comp) => {

        // creating card elements
        const compCard = document.createElement('section');
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
        compCard.classList.add('member-card');

        // adding card to docuemnt
        cardArea.append(compCard);
    });
};

const displayMembersList = (companies) => {
    // deleting current elements
    deleteCards();

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

getMembers(url).then(businesses => displayMembersGrid(businesses));

gridBtn.addEventListener("click", () => {
    getMembers(url).then(businesses => displayMembersGrid(businesses));

    if(cardArea.classList.contains('card-list')){
        cardArea.classList.remove('card-list');
        cardArea.classList.add('card-grid');
    }
});

listBtn.addEventListener("click", () => {
    getMembers(url).then(businesses => displayMembersList(businesses));
    
    if(cardArea.classList.contains('card-grid')){
        cardArea.classList.remove('card-grid');
        cardArea.classList.add('card-list');
    }
});