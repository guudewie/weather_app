import weather from "./modules/api";

const form = document.querySelector("form");
const input = document.querySelector("input.location");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  weather.getData(input.value);
});
