const API_KEY = '69bd5ea57054d08c3205e7cdf6d83b37';
const limit = 5;
const units = 'imperial'

locationName.textContent = 'Your City';
imageIcon.setAttribute("src", `https://openweathermap.org/img/wn/10d@2x.png`)
info.innerHTML = `
                Feels like:  <br/> <br/>
                Humidity:  <br/> <br/>
                Temperature:  <br/> <br/>
                Max Temp:  <br/> <br/>
                Min Temp:  <br/> <br/>
                `
// Get request
async function weatherAPI(cityName) {

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

                    console.log(data);
                    locationName.textContent = data.name;
                    imageIcon.setAttribute("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`)
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
            locationName.textContent = 'Check spelling?';
            imageIcon.setAttribute("src", `https://openweathermap.org/img/wn/10n@2x.png`)
            info.innerHTML = `
                Feels like:  <br/> <br/>
                Humidity:  <br/> <br/>
                Temperature:  <br/> <br/>
                Max Temp:  <br/> <br/>
                Min Temp:  <br/> <br/>
                `
            console.log(err);
        })
}

export { weatherAPI }