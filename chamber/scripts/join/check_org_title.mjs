// this module uses regular expression to check the organizational title
export function checkTitle(title){
    // regex requirements: alpha characters, hyphens, and spaces with a minimum of seven (7) characters
    const titleRegex = /^[A-Za-z-\s]{7,}$/g;
    const result = titleRegex.test(title);
    return result;
}
