    // Hamburger menu logic
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
    

document.addEventListener('DOMContentLoaded', () => {

    // --- Smooth Scrolling for internal links ---
    const scrollLinks = document.querySelectorAll('.scroll-to');

    scrollLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent default anchor jump

            // Try getting target from data-target attribute first, then href
            const targetId = link.getAttribute('data-target') || link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Calculate offset if you have a sticky header
                const headerOffset = document.querySelector('.site-header') ? document.querySelector('.site-header').offsetHeight : 0;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 15; // Added small buffer

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            } else {
                console.warn(`Scroll target element not found for selector: ${targetId}`);
                // Optional: Fallback to default behavior if target not on this page?
                // window.location.href = targetId;
            }
        });
    });

    // --- Update Footer Year ---
    const yearSpan = document.getElementById('year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // --- Basic Gallery Interaction Placeholder ---
    // Example: Log image source on click (replace with lightbox logic)
    const galleryImages = document.querySelectorAll('.gallery-grid img');
    galleryImages.forEach(img => {
        img.addEventListener('click', () => {
            console.log(`Gallery image clicked: ${img.src}`);
            // Add your lightbox activation code here
            // Example: openLightbox(img.src, img.alt);
        });
    });
    

    // --- Mobile Navigation Toggle (Example Structure) ---
    /*
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle'); // Add this button to HTML
    const mainNav = document.querySelector('.main-nav');

    if (mobileNavToggle && mainNav) {
        mobileNavToggle.addEventListener('click', () => {
            mainNav.classList.toggle('active'); // Add .active class styles in CSS to show/hide
            mobileNavToggle.classList.toggle('is-active'); // Style the toggle button itself
        });
    }
    */


    // --- Add more interactive elements as needed ---
    // E.g., Form validation for newsletter, Workshop filtering, etc.

});

// --- Optional: Lightbox Function (Basic Example - needs more styling/features) ---
/*
function openLightbox(src, alt) {
    const lightbox = document.createElement('div');
    lightbox.id = 'lightbox';
    lightbox.style.position = 'fixed';
    lightbox.style.top = '0';
    lightbox.style.left = '0';
    lightbox.style.width = '100%';
    lightbox.style.height = '100%';
    lightbox.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
    lightbox.style.display = 'flex';
    lightbox.style.justifyContent = 'center';
    lightbox.style.alignItems = 'center';
    lightbox.style.zIndex = '2000';

    const img = document.createElement('img');
    img.src = src;
    img.alt = alt;
    img.style.maxWidth = '90%';
    img.style.maxHeight = '85%';
    img.style.boxShadow = '0 0 25px rgba(0,0,0,0.5)';

    lightbox.appendChild(img);
    document.body.appendChild(lightbox);

    lightbox.addEventListener('click', () => {
        document.body.removeChild(lightbox);
    });
}