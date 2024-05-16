const API_KEY = '69bd5ea57054d08c3205e7cdf6d83b37';
const limit = 5;
const units = 'imperial'

async function weatherAPI(cityName) {
    // Get request
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`, {
        method: "GET"
    })
        .then(response => response.json())
        .then((data) => {
            // console.log(data[0]);
            let lat = data[0].lat;
            let lon = data[0].lon;

            fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=${API_KEY}`, {

            })
                .then(response => response.json())
                .then((data) => {

                    // console.log(data);
                    locationName.textContent = data.name;
                    info.innerHTML = `
                    Feels like: ${data.main.feels_like} <br/> <br/>
                    Humidity: ${data.main.humidity} <br/> <br/>
                    Temperature: ${data.main.temp} <br/> <br/>
                    Max Temp: ${data.main.temp_max} <br/> <br/>
                    Min Temp: ${data.main.temp_min} <br/> <br/>
                    `
                })
        })
        .catch((err) => {
            console.log(err);
        })
}

export { weatherAPI }