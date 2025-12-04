// this module gets data for any api
export async function getData(url){
    try {
        const response = await fetch(url); //getting info from url

        // testing response
        if(response.ok){
            const data = await response.json();
            console.log(data);
            return data;
        } else {
            throw Error(await response.text());
        }   
    } catch(error) {
        console.log(error);
    };
}

