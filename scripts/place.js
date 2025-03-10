/*Display current year 
and Last Modified*/

const currentYear = document.getElementById('currentyear');
const today = new Date(); // Getting the current year and date

currentYear.textContent = `${today.getFullYear()}`;  // Add the current year to the HTML document

// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified');

displayContent.textContent = `Last Modification: ${dateLastModified}`;




/*Calculate Wind Chill*/

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 10 && windSpeed > 4.8) {
        // Wind chill calculation formula
        const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Returning the wind chill rounded to two decimal places
    } else {
        return "N/A";
    }
}

// Print wind chill value when the window loads
window.onload = function() {
    const temperature = 31;
    const windSpeed = 5;
    const windChillValue = calculateWindChill(temperature, windSpeed);
    document.getElementById('windChill').textContent = `${windChillValue}`;
};