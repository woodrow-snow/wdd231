// This module picks 2 or three bussiness to make cards for
export function pickMembers(mData) {
    const returnArry = [];
    let count = 0;
    do {
        let index = getRandomIndex(0,mData.length);
        
        // ensureing one data entry is added at start of loop
        if(count == 0){
            returnArry.push(mData[index]);
            count++;
        }

        // code for checking if item is already in the array or not

    } while (count < 3);   
}

function getRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
