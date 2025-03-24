
// NAV MENU
const mainnav = document.querySelector ('.right-nav');
const hambutton = document.querySelector ('#menu');

hambutton.addEventListener ('click', () => {
    mainnav.classList.toggle('active');
    hambutton.classList.toggle('active');
});


// CREATE TEMPLE COLLECTIONS
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, US",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, US",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, US",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Apia Samoa Temple",
      location: "Apia, Samoa",
      dedicated: "1983, August, 5",
      area: 18691,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/apia-samoa/800x500/apia-samoa-temple-lds-460475-wallpaper.jpg"
    },
    {
      templeName: "Arequipa Peru Temple",
      location: "Arequipa Peru",
      dedicated: "2019, December, 15",
      area: 26969,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/800x500/4-48661c257177c19a0f39a3991b1a7e7aa0338487.jpeg"
    },
    {
      templeName: "Bern Switzerland Temple",
      location: "Zollikofen, Switzerland",
      dedicated: "1995, September, 15",
      area: 35546,
      imageUrl: 
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/800x500/bern-switzerland-temple-lds-653038-wallpaper.jpg"
    }
];


// CREATE TEMPLE CONTAINER AND ELEMENTS
function createTempleCard(filterTemples) {
  filterTemples.forEach(temple => {
    let card = document.createElement('section');
    let name = document.createElement('h3');
    let location = document.createElement('p');
    let dedication = document.createElement('p');
    let area = document.createElement('p');
    let img = document.createElement('img');

    name.textContent = temple.templeName;
    location.innerHTML = `<span class='label'>Location:</span> ${temple.location}`;
    dedication.innerHTML = `<span class='label'>Dedicated:</span> ${temple.dedicated}`;
    area.innerHTML = `<span class='label'>Size:</span> ${temple.area} sq ft`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading', 'lazy');

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.pic-grid').appendChild(card);
  });
}

// CALL THE createTempleCard FUNCTION
createTempleCard(temples);


//  CONDITIONAL TEMPLE DISPLAY
const home = document.querySelector("#Home");
home.addEventListener('click', () => {
  document.querySelector(".pic-grid").innerHTML = "";
  createTempleCard(temples);
});

const oldTemples = document.querySelector("#Old");
oldTemples.addEventListener('click', () => {
  document.querySelector(".pic-grid").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) < 1900));
});


const largeTemples = document.querySelector("#Large");
largeTemples.addEventListener('click', () => {
  document.querySelector(".pic-grid").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area > 90000));
});

const smallTemples = document.querySelector("#Small");
smallTemples.addEventListener('click', () => {
  document.querySelector(".pic-grid").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.area < 10000));
});

const newTemples = document.querySelector("#New");
newTemples.addEventListener('click', () => {
  document.querySelector(".pic-grid").innerHTML = "";
  createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 4) > 2000));
});







// FOOTER 
const currentYear = document.getElementById('currentyear'); // target the current year id in the HTML
const today = new Date(); // Getting the current year and date

currentYear.textContent = `${today.getFullYear()}`; // Add the current year to the HTML document

// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified').textContent = `Last Modification: ${dateLastModified}`;