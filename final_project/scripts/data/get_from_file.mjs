export function getDataFromFile(event){
    return new Promise((resolve, reject) => {
        // getting file from user
        const file = event.target.files[0];

        // getting data off file
        if(file){
            const reader = new FileReader();

            reader.onload = function(e) {
                const gamesString = e.target.result;
                // now parse the json string

                try {
                    const gamesData = JSON.parse(gamesString);
                    resolve(gamesData);
                }
                catch (error){
                    console.error("Error parsing data:", error);
                    reject(error);
                }
            };

            reader.onerror = function(e) {
                console.error('Error reading file:',e.target.error);
            };

            reader.readAsText(file);
        } else {
            console.log('No file selected');
        }
    });
}