// Hamburger menu logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Hero-section image transition logic
const heroImages = document.querySelectorAll('.hero-images img');
let currentImageIndex = 0;

function cycleHeroImages() {
    // Remove 'active' class from all images
    heroImages.forEach((img, index) => {
        img.classList.remove('active');
    });

    // Add 'active' class to the current image
    heroImages[currentImageIndex].classList.add('active');

    // Move to the next image (loop back to the first image if at the end)
    currentImageIndex = (currentImageIndex + 1) % heroImages.length;
}

// Start the image cycling every 5 seconds
setInterval(cycleHeroImages, 5000);

// Initialize the first image as active
cycleHeroImages();

const themeToggle = document.querySelector('.theme-toggle');
themeToggle.addEventListener('click', () => {
    const currentTheme = document.body.classList.toggle('dark-theme') ? 'dark' : 'light';
    localStorage.setItem('theme', currentTheme);
});

// Apply saved theme on page load
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
}

// Update current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("lastmodified").textContent =
  "Last Modified: " + document.lastModified;