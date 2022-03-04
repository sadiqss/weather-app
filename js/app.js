const API_KEY = `eb537ecf47abc22b4a72401b6936d77a`;
const searchTemperature = () => {
    const cityLat = document.getElementById('city-lat').value;
    const cityLon = document.getElementById('city-lon').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${API_KEY}&units=metric`;
    // console.log(url);

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data))
}
const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}
const displayTemperature = temperature => {
    setInnerText('city-name', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    //set weather icon
    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('weather-icon');
    imgIcon.setAttribute('src', url);
}