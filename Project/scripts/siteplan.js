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