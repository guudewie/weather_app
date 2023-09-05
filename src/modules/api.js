const weather = (() => {
    async function getData(location) {
        const url = `https://api.weatherapi.com/v1/current.json?key=e069f2b106c04ce29a1142633233108&q=${location}`;
        const errorDom = document.querySelector(".error");

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) {
                errorDom.textContent = data.error.message;
                return null;
            }

            errorDom.textContent = "";

            return data;
        } catch (error) {
            alert("There seems to be an issue. Let´s try it one more time.");
            return null;
        }
    }

    return {
        getData,
    };
})();

export default weather;
