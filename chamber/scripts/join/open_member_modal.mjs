// This module adds an event listener to the learn more button of the membership levels
export function addListenerToMemLvl(){
    // getting elements from docuemnt
    const lvlArray = document.querySelectorAll('.level-card');

    // adding event listern to each button
    lvlArray.forEach(card => {
        // getting elements from card
        const button = card.querySelector('button');
        const modal = card.querySelector('dialog');

        button.addEventListener("click", () => {
            modal.showModal();
        });

        // adding close button to each modal that works
        const closeBtn = document.createElement('button');
        closeBtn.classList.add('close-btn');
        closeBtn.textContent = 'Close';

        closeBtn.addEventListener('click', () => {
            modal.close();
        });

        modal.appendChild(closeBtn);
    });
}