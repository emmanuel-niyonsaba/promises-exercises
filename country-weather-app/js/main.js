import { getCountryDetails, getWeather } from "./api.js";
import { showResult, showError, clearResult } from "./ui.js";

const input = document.getElementById("countryInput");
const searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", async () => {
  const countryName = input.value.trim();
  if (!countryName) return showError("Please enter a country name");

  clearResult();

  try {
    // 1️⃣ Fetch country details
    const country = await getCountryDetails(countryName);
    const capital = country.capital[0];
    const [lat, lon] = country.capitalInfo.latlng;

    // 2️⃣ Fetch weather
    const temperature = await getWeather(lat, lon);

    // 3️⃣ Display result
    showResult(country.name.common, capital, temperature);
  } catch (err) {
    showError(err.message);
  }
});
