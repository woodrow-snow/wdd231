// This module picks 2 or three bussiness to make cards for
export function pickMembers(mData) {
    const businessList = mData.business;
    const returnArry = [];

    while(returnArry.length < 3){
        let candidate;

        do {
            candidate = chooseMember(businessList);
        } while (
            candidate.membership_lvl === 1 || // reject level-1
            returnArry.some(b => b.name === candidate.name) // reject dupliacate
        );

        returnArry.push(candidate);
    }

    console.log('Final:', returnArry)
    return returnArry;
}

function getRandomIndex(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function chooseMember(bList){
    let index = getRandomIndex(0, bList.length - 1);
    return bList[index];
}



//  -------------- notes ---------------
// getData(chamberURL).then(members => {
//     console.log(members.business[0].name); <-- this is how to get name 
// });

//  1 = member
//  2 = silver
//  3 = gold