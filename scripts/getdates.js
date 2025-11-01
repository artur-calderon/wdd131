const span = document.getElementById("currentyear");

const currentYear = new Date().getFullYear();
span.innerHTML = `&copy${currentYear}`;

const lastModifiedSpan = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
