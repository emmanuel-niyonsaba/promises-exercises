// UI functions to update the DOM

const resultDiv = document.getElementById("result");

export function showResult(countryName, capital, temperature) {
  resultDiv.innerHTML = `
    <p><strong>Country:</strong> ${countryName}</p>
    <p><strong>Capital:</strong> ${capital}</p>
    <p><strong>Current Temperature:</strong> ${temperature}°C</p>
  `;
}

export function showError(message) {
  resultDiv.innerHTML = `<p style="color: red;">${message}</p>`;
}

export function clearResult() {
  resultDiv.innerHTML = '';
}
