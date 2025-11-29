export function createCard(info, section){
    // creating section for card
    const card = document.createElement('div');
    card.classList.add('poi-card');

    
    //     <button>Learn More!</button>
    // `;

    // creating elements for card
    // creating h2
    const header = document.createElement('h2');
    header.textContent = info.name;

    // creating figure
    const figure = document.createElement('figure');

    const poiPic = document.createElement('img');
    poiPic.setAttribute('src',`images/discover/${info.imageName}`);
    poiPic.setAttribute('alt',`Picture of ${info.name}`);

    const caption = document.createElement('figcaption');
    caption.textContent = info.name;

    figure.appendChild(poiPic);
    figure.appendChild(caption);

    // creating address
    const addy = document.createElement('address');
    addy.textContent = info.address;

    // creating p
    const descript = document.createElement('p');
    descript.textContent = info.description;

    // creating button
    const learnBtn = document.createElement('button');
    learnBtn.textContent = 'Learn More';
    
    // adding elements to section
    card.appendChild(header);
    card.appendChild(figure);
    card.appendChild(addy);
    card.appendChild(descript);
    card.appendChild(learnBtn);

    // adding new card to section
    section.append(card);
}