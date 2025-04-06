
const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

// j

const selectElement = document.querySelector("#productName");

products.forEach(index => {
    let newOption = document.createElement("option");
    newOption.value = index.id;
    newOption.textContent = index.name;

    selectElement.appendChild(newOption);
});







// -------------DYNAMIC FOOTER---------------------- 

const today = new Date(); // Getting the current year and date
  
// target the current year id in the HTML
// Add the current year to the HTML document
const currentYear = document.getElementById('currentyear').textContent = `${today.getFullYear()}`;


// dynamically show the last date modified
let dateLastModified = document.lastModified;
let displayContent = document.getElementById('lastmodified').innerHTML = `Last Modification: ${dateLastModified}`;
 