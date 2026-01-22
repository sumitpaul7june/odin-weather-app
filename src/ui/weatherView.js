function renderLoading() {
    const display = document.querySelector("#display");
    display.innerHTML = `
      <div class="loader">
        <div class="spinner"></div>
        <p>Fetching weather…</p>
      </div>
    `;
}

function renderWeather(weather, unit = "C") {
    const display = document.querySelector("#display");

    const tempValue =
        unit === "C"
            ? `${weather.temperature.toFixed(1)} °C`
            : `${((weather.temperature * 9) / 5 + 32).toFixed(1)} °F`;

    display.innerHTML = `
      <div class="weather-card">
        <div class="weather-icon">${weather.icon}</div>
        <div class="city">${weather.city}</div>
        <div class="condition">${weather.condition}</div>
  
        <div class="stats">
          <div class="stat">
            <div class="label">Temp</div>
            <div class="value">${tempValue}</div>
          </div>
          <div class="stat">
            <div class="label">Humidity</div>
            <div class="value">${weather.humidity}%</div>
          </div>
        </div>
  
        <div class="description">${weather.description}</div>
      </div>
    `;
}


export { renderWeather, renderLoading };
