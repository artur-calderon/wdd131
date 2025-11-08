const span = document.getElementById("currentyear");

const currentYear = new Date().getFullYear();
span.innerHTML = `&copy${currentYear}`;

const lastModifiedSpan = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;

// menu toggle

const menuIcon = document.querySelector(".menu-icon");

const header = document.querySelector("header");
const navMenu = document.querySelector("nav");

menuIcon.addEventListener("click", () => {
	header.classList.toggle("open");
	navMenu.classList.toggle("show");
});
