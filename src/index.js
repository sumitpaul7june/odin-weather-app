import "./style.css";

import { fetchWeather } from "./services/weatherService";
import { createWeatherModel } from "./models/weatherModel";
import { renderWeather, renderLoading } from "./ui/weatherView";

const form = document.querySelector("#weather-form");
let currentUnit = "C";
let lastWeather = null;



form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const input = document.querySelector("#location");
    const location = input.value.trim();

    if (!location) return;

    try {
        renderLoading();

        const data = await fetchWeather(location);
        const model = createWeatherModel(data);

        lastWeather = model;
        renderWeather(model, currentUnit);
    } catch (err) {
        alert(err.message);
    }
});

const toggleBtn = document.querySelector("#unit-toggle");

if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
        currentUnit = currentUnit === "C" ? "F" : "C";
        toggleBtn.textContent = `°${currentUnit}`;

        if (lastWeather) {
            renderWeather(lastWeather, currentUnit);
        }
    });
}

