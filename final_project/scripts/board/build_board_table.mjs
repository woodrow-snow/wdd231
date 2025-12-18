// this function builds the table rows for the board games table
export function buildBTableRows(games){
    // getting table from document
    const table = document.querySelector('table');

    games.forEach(game => {
        // creating row
        const tableRow = document.createElement('tr');

        // creating td elements in order and adding data to them
        const id = document.createElement('td');
        id.textContent = game.id;

        const name = document.createElement('td');
        name.textContent = game.name;

        const pMin = document.createElement('td');
        pMin.textContent = game.p_min;

        const pMax = document.createElement('td');
        pMax.textContent = game.p_max;

        const time = document.createElement('td');
        time.textContent = game.time;

        const age = document.createElement('td');
        age.textContent = game.age;

        const coopType = document.createElement('td');
        // checking to see if blank, if it is set null in textContent
        if (game['co-opType'] == '' || !('co-opType' in game)){
            coopType.innerHTML = '<i>NULL</i>';
        } else {
            coopType.textContent = game['co-opType'];
        }

        // creating link table row
        const link = document.createElement('td');

        // checking for link
        if (!("link" in game)) {
            link.textContent = 'No Link';
        }
        else {
            link.innerHTML = `<a href="${game.link}" class="tdLink">Click Here</a>`;
        }

        
        // adding td elements to table row
        tableRow.appendChild(id);
        tableRow.appendChild(name);
        tableRow.appendChild(pMin);
        tableRow.appendChild(pMax);
        tableRow.appendChild(time);
        tableRow.appendChild(age);
        tableRow.appendChild(coopType);
        tableRow.appendChild(link);

        // adding tr to table
        table.append(tableRow);
    });
}