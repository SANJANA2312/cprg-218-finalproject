fetch ('https://api.openweathermap.org/data/2.5/weather?q=Cancun&appid=9552f95518e26bb4272e314d90e09357&units=metric')
.then(response => response.json())
.then(data => {
    console.log(data);
    console.log(data.main.temp);
    temperature.textContent = "Temperature: " + data.main.temp+ "\u00b0C";
    humidity.textContent = "Humidity: " + data.main.humidity + " \u0025";
    wind.textContent = "Wind Speed: " + data.wind.speed + " m/s";
    description.textContent = "Current: " + data.weather[0].description;
})