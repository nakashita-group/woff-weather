const apiKey = "0e46236d81a86b9ce16f0f39c9d45c68";

async function searchWeather(cityName) {
    if (!cityName) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&lang=ja&units=metric`;
    try {
        const res = await fetch(url);
        if (!res.ok) {
            throw new Error("天気データの取得に失敗しました");
        }
        const weatherData = await res.json();

        document.getElementById("name").innerText = weatherData.name || "--";
        document.getElementById("description").innerText = weatherData.weather?.[0]?.description || "--";
        document.getElementById("temp").innerText = weatherData.main?.temp ?? "--";
        document.getElementById("temp_max").innerText = weatherData.main?.temp_max ?? "--";
        document.getElementById("temp_min").innerText = weatherData.main?.temp_min ?? "--";
    } catch (error) {
        console.error(error);
        alert("天気情報の取得に失敗しました");
    }
}

function init() {
    const params = new URLSearchParams(window.location.search);
    const cityParam = params.get("city"); 

    if (cityParam) {
        const select = document.getElementById("city");
        select.value = cityParam;

        searchWeather(cityParam);
    }
}


document.getElementById("search").addEventListener("click", () => {
    const city = document.getElementById("city").value;
    searchWeather(city);
});

window.addEventListener("load", init);
