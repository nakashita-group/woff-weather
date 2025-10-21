const apiKey="0e46236d81a86b9ce16f0f39c9d45c68";

document.getElementById("search").addEventListener("click",async()=>{
    const city=document.getElementById("city").value;
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=ja&units=metric`
    
    const resData=fetch(url);
    const weatherData=await (await resData).json();
    console.log(weatherData)

    document.getElementById("name").innerText=weatherData.name;
    document.getElementById("description").innerText=weatherData.weather[0].description;
    document.getElementById("temp").innerText=weatherData.main.temp;
    document.getElementById("temp_max").innerText=weatherData.main.temp_max;
    document.getElementById("temp_min").innerText=weatherData.main.temp_min;
}
);