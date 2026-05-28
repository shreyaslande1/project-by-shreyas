const apiKey = "9aef77a48452cd9a0265c81a5414041d"

const searchBtn = document.querySelector("button")
const cityInput = document.querySelector("input")

const temperature = document.querySelector(".weather-box h2")
const cityName = document.querySelector(".weather-box h3")
const humidity = document.querySelector(".weather-box p")
const weatherIcon = document.querySelector(".weather-box img")

searchBtn.addEventListener("click", () => {

    const city = cityInput.value.trim()

    if(city === ""){
        alert("Please enter city name")
        return
    }

    const apiUrl =
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`

    fetch(apiUrl)
    .then(response => response.json())

    .then(data => {

        console.log(data)

        if(data.cod == "404"){
            alert("City not found")
            return
        }

        temperature.innerHTML = `${Math.round(data.main.temp)}°C`

        cityName.innerHTML = data.name

        humidity.innerHTML =
        `Humidity : ${data.main.humidity}%`

        const weatherMain = data.weather[0].main

        if(weatherMain === "Clouds"){
            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/414/414825.png"
        }

        else if(weatherMain === "Clear"){
            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/869/869869.png"
        }

        else if(weatherMain === "Rain"){
            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/3351/3351979.png"
        }

        else if(weatherMain === "Snow"){
            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/642/642102.png"
        }

        else{
            weatherIcon.src =
            "https://cdn-icons-png.flaticon.com/512/1779/1779940.png"
        }

    })

    .catch(error => {
        console.log(error)
        alert("Something went wrong")
    })

})