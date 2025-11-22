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

import { temples } from "./temples-base.js";

const container = document.querySelector(".album");

// I have to search how to do this better
function normalizeDate(str) {
	const [year, month, day] = str.replace(/,/g, "").split(" ");
	return new Date(`${month} ${day}, ${year}`);
}

renderTemples();

// Also, if I added an event for each button, I don't think it would be clean code. That's why I researched a better way to do it.
document.querySelector("ul").addEventListener("click", (event) => {
	if (event.target.closest(".oldest-button")) {
		temples.sort(
			(a, b) => normalizeDate(a.dedicated) - normalizeDate(b.dedicated)
		);
		renderTemples();
	}
	if (event.target.closest(".newest-button")) {
		temples.sort(
			(a, b) => normalizeDate(b.dedicated) - normalizeDate(a.dedicated)
		);
		renderTemples();
	}
	if (event.target.closest(".largest-button")) {
		temples.sort((a, b) => b.area - a.area);
		renderTemples();
	}
	if (event.target.closest(".smallest-button")) {
		temples.sort((a, b) => a.area - b.area);
		renderTemples();
	}

	event.preventDefault();
});

function renderTemples() {
	container.innerHTML = "";
	temples.forEach((temple) => {
		container.innerHTML += `
	<figure>
		<img
			src="${temple.imageUrl}"
			alt="${temple.templeName}" loading="lazy" />
			
			<figcaption>
				<h3>${temple.templeName}</h3>
				<p>Location: ${temple.location}</p>
				<p>Dedicated: ${temple.dedicated}</p>
				<p>Area: ${temple.area} sq ft</p>
			</figcaption>
	</figure>
	`;
	});
}
