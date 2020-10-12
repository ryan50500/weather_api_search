const cityForm = document.querySelector('form');

const updateCity = async (city) => {

    const cityDets = await getCity(city);
    const weather = await getWeather(cityDets.Key);

    return {
        cityDets: cityDets,
        weather: weather
    };

}

cityForm.addEventListener('submit', e => {
    // prevent default action - doesn't refresh page
    e.preventDefault();

    // get city value
    const city = cityForm.city.value.trim();
    // clear out form fields
    cityForm.reset();

    // upadte the UI with new city
    updateCity(city)
        .then(data => console.log(data))
        .catch(err => console.log(err))

});