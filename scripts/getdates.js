
// target the current year id in the HTML
const currentYear = document.getElementById('currentyear');


// Getting the current year and date
const today = new Date();

// Add the current year to the HTML document
currentYear.innerHTML = `${today.getFullYear()}`;


let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');


displayContent.textContent = `Last Modification: ${dateLastModified}`;