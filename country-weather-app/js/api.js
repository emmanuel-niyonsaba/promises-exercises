// API functions to fetch country and weather data

export async function getCountryDetails(countryName) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}`);
  if (!res.ok) throw new Error(`Country not found: ${countryName}`);
  const data = await res.json();
  return data[0]; // take first match
}

export async function getWeather(lat, lon) {
  const res = await fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`
  );
  if (!res.ok) throw new Error(`Weather data not found for coordinates: ${lat}, ${lon}`);
  const data = await res.json();

  //display the full data in console for debugging
  console.log(data);
  return data.current_weather.temperature;
}
