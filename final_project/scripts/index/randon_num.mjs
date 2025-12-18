// this module exports a function that takes a min and max number and returns a random number

export function generateNumber(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}