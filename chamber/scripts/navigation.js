const navButton = document.querySelector('#ham-btn');
const navLinks = document.querySelector('#nav-bar');

// toggling show class
navButton.addEventListener("click", () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show'); 
});