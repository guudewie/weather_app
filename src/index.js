
async function weatherCalll(location) {
    const url = `https://api.weatherapi.com/v1/forecast.json?key=e069f2b106c04ce29a1142633233108&q=${location}`;

    try {
        const response = await fetch(url);
        const data = await response.json()

        console.log(data)
    } catch (error) {
        alert(error)
    } 
}

weatherCalll("qjkhbckjb")