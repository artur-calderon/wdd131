// Product array (example)
const products = [
	{
		id: "fc-1888",
		name: "flux capacitor",
		averagerating: 4.5,
	},
	{
		id: "fc-2050",
		name: "power laces",
		averagerating: 4.7,
	},
	{
		id: "fs-1987",
		name: "time circuits",
		averagerating: 3.5,
	},
	{
		id: "ac-2000",
		name: "low voltage reactor",
		averagerating: 3.9,
	},
	{
		id: "jj-1969",
		name: "warp equalizer",
		averagerating: 5.0,
	},
];

const select = document.getElementById("product");
products.forEach((p) => {
	const option = document.createElement("option");
	option.value = p.name;
	option.textContent = p.name;
	select.appendChild(option);
});

const span = document.getElementById("currentyear");

const currentYear = new Date().getFullYear();
span.innerHTML = `&copy${currentYear}`;

const lastModifiedSpan = document.getElementById("lastModified");
const lastModified = new Date(document.lastModified);
lastModifiedSpan.textContent = `Last Modified: ${lastModified.toLocaleDateString()} ${lastModified.toLocaleTimeString()}`;
