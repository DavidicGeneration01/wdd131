// Select the hamburger menu and navigation links
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

// Add a click event listener to toggle the menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// target the current year id in the HTML
const currentYear = document.getElementById('currentyear');


// Getting the current year and date
const today = new Date();

// Add the current year to the HTML document
currentYear.innerHTML = `${today.getFullYear()}`;


let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');


displayContent.textContent = `Last Modification: ${dateLastModified}`;

document.querySelectorAll('.learn-more-btn').forEach(button => {
    button.addEventListener('click', () => {
        alert('More information coming soon!');
    });
});

// Hero image slideshow
let currentImageIndex = 0;
const heroImages = document.querySelectorAll('.hero-images img');

function showNextImage() {
    heroImages[currentImageIndex].classList.remove('active');
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
    heroImages[currentImageIndex].classList.add('active');
}

setInterval(showNextImage, 3000); // Change image every 3 seconds