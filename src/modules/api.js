const weather = (() => {
    async function getData(location) {
        const url = `https://api.weatherapi.com/v1/current.json?key=e069f2b106c04ce29a1142633233108&q=${location}`;
        const errorDom = document.querySelector(".error");

        try {
            const response = await fetch(url);
            const data = await response.json();

            if (data.error) throw new Error(data.error.message);

            errorDom.textContent = "";

            return data;
        } catch (error) {
            errorDom.textContent = error;
            return null;
        }
    }

    return {
        getData,
    };
})();

export default weather;
