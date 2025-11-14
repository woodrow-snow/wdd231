// script for converting unix
export function convertUnixTime(time){
    const newTime = new Date(time * 1000)
    return newTime;
}

export function getDayString(date){
    const dayNum = date.getDay();
    let dayStr = '';

    if(dayNum == 0){
        dayStr = 'Sunday';
    } else if(dayNum == 1) {
        dayStr = 'Monday';
    } else if(dayNum == 2) {
        dayStr = 'Tuesday';
    } else if(dayNum == 3) {
        dayStr = 'Wednesday';
    } else if(dayNum == 4) {
        dayStr = 'Thursday';
    } else if(dayNum == 5) {
        dayStr = 'Friday';
    } else if(dayNum == 6) {
        dayStr = 'Saturday';
    }

    return dayStr;
}