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

        // adding td elements to table row
        tableRow.appendChild(id);
        tableRow.appendChild(name);
        tableRow.appendChild(pMin);
        tableRow.appendChild(pMax);
        tableRow.appendChild(time);
        tableRow.appendChild(age);

        // adding tr to table
        table.append(tableRow);
    });
}