export function deleteMsgs(){
    const allMsgs = document.querySelectorAll('.noBoard');

    allMsgs.forEach(msg => {
        msg.remove();
    });
}