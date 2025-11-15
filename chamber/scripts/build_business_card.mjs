export function buildBusiness(bData, sectionIn){
    // creating elements
    const name = document.createElement('h3');
    const logo = document.createElement('img');
    const phone = document.createElement('p');
    const address = document.createElement('p');
    const website = document.createElement('p');
    const memLvl = document.createElement('p');

    // creating div for elements to go in
    const bCard = document.createElement('div');
    bCard.classList.add('business-card');

    // populating data
    name.innerHTML = bData.name;
    phone.innerHTML = `<strong>PHONE:</strong> ${bData.phone_number}`;
    address.innerHTML = `<strong>ADDRESS:</strong> ${bData.address} ${bData.city_state_zip}`;
    website.innerHTML = `<strong>URL:</strong> ${bData.url}`;
    memLvl.innerHTML = `<strong>Membership Level:</strong> ${bData.membership_lvl}`;

    // creating image element and adding attributes
    let imgLink;
    if(bData.image_file_name == ''){
        imgLink = 'business_default.svg';
    }
    else {
        imgLink = bData.image_file_name;
    }
    logo.setAttribute('src',`images/${imgLink}`); // C:\Users\Owner\Desktop\School Documents\wdd231\chamber\images\business_default.svg
    logo.setAttribute('alt', bData.name);

    // creating and adding descriptive elements to second div
    const infoDiv = document.createElement('div');
    infoDiv.classList.add('b-info');
    
    infoDiv.appendChild(phone);
    infoDiv.appendChild(address);
    infoDiv.appendChild(website);
    infoDiv.appendChild(memLvl);

    // adding elements to div
    bCard.appendChild(name);
    bCard.appendChild(logo);
    bCard.appendChild(infoDiv);

    // adding card to page
    sectionIn.append(bCard);
}