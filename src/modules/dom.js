import weather from "./api";

const dom = (() => {
    const form = document.getElementById("weathersearch");
    const input = document.querySelector("input.location");
    const conditionDom = document.querySelector(".condition");
    const city = document.querySelector(".city");
    const country = document.querySelector(".country");
    const feelsLike = document.querySelector(".feelslike.number");
    const tempButton = document.querySelector(".temp-button");
    const feelsLikeUnit = document.querySelector(".feelslike.sign");

    // One means current unit is Celsius, null means Fahrenheit
    let tempUnit = 1;

    function switchTemp(degrees) {
        if (!tempUnit) return ((degrees - 32) * 5) / 9;
        return (degrees * 9) / 5 + 32;
    }

    function tempUnitListner() {
        tempButton.addEventListener("click", () => {
            feelsLike.textContent =
                Math.round(switchTemp(feelsLike.textContent) * 10) / 10;

            if (tempUnit) {
                feelsLikeUnit.textContent = "F";
                tempButton.textContent = "F";
                tempUnit = 0;
            } else {
                feelsLikeUnit.textContent = "C";
                tempButton.textContent = "C";
                tempUnit = 1;
            }
        });
    }

    function populateApp(data) {
        conditionDom.textContent = data.current.condition.text;
        city.textContent = data.location.name + ",";
        country.textContent = data.location.country;
        feelsLike.textContent = data.current.feelslike_c;
    }

    function searchListener() {
        form.addEventListener("submit", async (e) => {
            e.preventDefault();

            if (!input.value) return;

            const data = await weather.getData(input.value);

            if (!data) return;
            populateApp(data);
        });
    }

    return {
        searchListener,
        tempUnitListner,
        populateApp,
    };
})();

export default dom;
