async function start() {
  const WeatherPromise = await fetch(
    "https://api.weather.gov/gridpoints/MFL/110,50/forecast"
  );
  const WeatherData = await WeatherPromise.json();
  const ourTemperature = WeatherData.properties.periods[2].temperature;

  document.querySelector("#temprature-output").textContent = ourTemperature;
}
start();

async function petsArea() {
  const petsPromise = await fetch(
    "https://learnwebcode.github.io/bootcamp-pet-data/pets.json"
  );
  const petsData = await petsPromise.json();
  petsData.forEach((pet) => {
    console.log(pet.name);
  });
}
petsArea();
