const yearElement = document.getElementById("currentyear");
const currentYear = new Date().getFullYear();
yearElement.textContent = currentYear;

const modifiedElement = document.getElementById("lastmodified");
modifiedElement.textContent = document.lastModified;

const T = 30; // Temperatura em Celsius
const V = 10; // Velocidade do vento em km/h

function calculateWindChill(temp, speed) {
	return (
		13.12 +
		0.6215 * temp -
		11.37 * Math.pow(speed, 0.16) +
		0.3965 * temp * Math.pow(speed, 0.16)
	);
}

const windChillOutput = document.getElementById("wind-chill");

if (T <= 10 && V > 4.8) {
	const windChillValue = calculateWindChill(T, V);

	windChillOutput.textContent = windChillValue.toFixed(1) + " °C";
} else {
	windChillOutput.textContent = "N/A";
}
