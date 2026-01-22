const API_KEY = "3EDS5MZTV5QCXLLA38TVWTGT9";
const BASE_URL =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";

async function fetchWeather(location) {
    const url = `${BASE_URL}${encodeURIComponent(
        location
    )}?unitGroup=metric&contentType=json&key=${API_KEY}`;

    const response = await fetch(url);

    if (!response.ok) {
        throw new Error("Location not found");
    }

    return response.json();
}

export { fetchWeather };
