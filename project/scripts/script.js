const movies = [
	{
		title: "Spider-Man",
		year: 2002,
		duration: "2h 1m",
		rating: "7.3/10",
		cover: "images/spiderman1.jpg",
		description:
			"Peter Parker becomes Spider-Man and faces the Green Goblin while learning the responsibility that comes with power.",
	},
	{
		title: "Spider-Man 2",
		year: 2004,
		duration: "2h 7m",
		rating: "7.4/10",
		cover: "images/spiderman2.jpg",
		description:
			"Peter struggles to balance his life as Spider-Man while battling Doctor Octopus.",
	},
	{
		title: "Spider-Man 3",
		year: 2007,
		duration: "2h 19m",
		rating: "6.3/10",
		cover: "images/spiderman3.jpg",
		description:
			"Peter faces new enemies, including Venom and Sandman, while dealing with the darkness inside him.",
	},
	{
		title: "Avengers: Infinity War",
		year: 2018,
		duration: "2h 29m",
		rating: "8.4/10",
		cover: "images/avengersinfinity.jpg",
		description:
			"The Avengers unite to stop Thanos from collecting the Infinity Stones and wiping out half of all life.",
	},
	{
		title: "Avengers: Endgame",
		year: 2019,
		duration: "3h 1m",
		rating: "8.4/10",
		cover: "images/vingadores-endgame.jpg",
		description:
			"The remaining Avengers attempt to undo Thanos' actions in an emotional final battle.",
	},
	{
		title: "Inception",
		year: 2010,
		duration: "2h 28m",
		rating: "8.8/10",
		cover: "images/inception.jpg",
		description:
			"A skilled thief enters dreams to steal secrets but faces a dangerous mission involving multiple dream layers.",
	},
];

const container = document.getElementById("movie-container");

movies.forEach((movie) => {
	const card = `
<div class="movie-card">
<img src="${movie.cover}" alt="${movie.title} poster" loading="lazy">
<h3>${movie.title}</h3>
<p><strong>Year:</strong> ${movie.year}</p>
<p><strong>Duration:</strong> ${movie.duration}</p>
<p><strong>Rating:</strong> ${movie.rating}</p>
<p>${movie.description}</p>
</div>
`;
	container.innerHTML += card;
});
