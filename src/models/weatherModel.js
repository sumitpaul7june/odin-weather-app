function createWeatherModel(data) {
    const condition = data.currentConditions.conditions;

    return {
        city: data.address,
        condition,
        temperature: data.currentConditions.temp,
        humidity: data.currentConditions.humidity,
        description: data.description,
        icon: getWeatherIcon(condition),
    };
}

function getWeatherIcon(condition) {
    const text = condition.toLowerCase();

    if (text.includes("cloud")) return "☁️";
    if (text.includes("rain")) return "🌧️";
    if (text.includes("clear") || text.includes("sun")) return "☀️";
    if (text.includes("snow")) return "❄️";
    if (text.includes("storm")) return "⛈️";

    return "🌡️";
}

export { createWeatherModel };
