// Hamburger menu logic
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Update current year
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Update last modified date
document.getElementById("lastmodified").textContent =
  "Last Modified: " + document.lastModified;