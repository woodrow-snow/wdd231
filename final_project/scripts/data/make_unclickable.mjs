// this function makes an object provided unclickable
export function makeUnclickable(obj){
    obj.style.pointerEvents = 'none';
    obj.textcontent = '';
    obj.innerHTML = `&check;`;
}