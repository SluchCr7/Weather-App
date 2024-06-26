let searchInput = document.getElementById("searchInput")
let searchBtn = document.getElementById("searchBtn")
let temp = document.querySelector(".temp")
let city = document.querySelector(".city")
let date = document.querySelector(".date")
let program = document.getElementById("program")
let icon = document.getElementById("icon")
let searchtxt = searchInput.value
let wind = document.querySelector("#wind")
let humidity = document.querySelector("#humidity")
let pressure = document.querySelector("#pressure")
let cloud = document.querySelector("#cloud")

// let api = `http://api.weatherapi.com/v1/current.json?key=ca44eb6301e84237a4541005242206&q=${searchInput.value}&aqi=no`

searchBtn.addEventListener("click", () => {
    console.log(searchInput.value)
    fetch(`http://api.weatherapi.com/v1/current.json?key=ca44eb6301e84237a4541005242206&q=${searchInput.value}&aqi=no`)
        .then(response => response.json())
        .then(data => {
            city.innerHTML = data.location.name
            date.innerHTML = data.current.last_updated
            icon.src = data.current.condition.icon
            temp.innerHTML = data.current.temp_c + "°C"
            humidity.innerHTML = data.current.humidity + " %"
            pressure.innerHTML = data.current.pressure_mb + " mb"
            wind.innerHTML = data.current.wind_kph + " km/h"
            cloud.innerHTML = data.current.cloud + " %"
            console.log(data)
        })
        .catch(error => console.log(error))
        .finally(() => {
            searchInput.value = ""
        })
})

function chBg() {
    if (icon.src == "https://cdn.weatherapi.com/weather/64x64/night/113.png") {
        program.style.backgroundImage = "url('/Night/photo-1548232979-6c557ee14752.avif')"
    }
    else if(icon.src == "https://cdn.weatherapi.com/weather/64x64/night/113.png"){  
        program.style.backgroundImage = "url('/day/photo-1536244636800-a3f74db0f3cf.avif')"
    }
}
chBg()


