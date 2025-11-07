const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// creating async function
const getProphetData = async () => {
    const response = await fetch(url); // getting data from url
    const data = await response.json(); // waiting for response to be converted to json
    displayProphets(data.prophets);
};

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        // creating card elements
        const card = document.createElement('section');
        const fullName = document.createElement('h2');
        const portrait = document.createElement('img');
        const birthDate = document.createElement('h3');
        const birthPlace = document.createElement('h3');
        

        // populating fullName
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;

        // building img element 
        portrait.setAttribute("src",prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", '320');
        portrait.setAttribute("height", "440");

        // populating data for birth information
        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        
        // adding element to card and then to cards div
        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);


        cards.append(card);
    });
}

getProphetData();