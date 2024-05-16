// console.log("hello world");
import { weatherAPI } from "./weatherAPI.mjs";

const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");

const locationInfo = document.getElementById("locationInfo");
const locationName = document.getElementById("locationName");
const info = document.getElementById("info");

submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const cityName = userInput.value;
    weatherAPI(cityName);
    userManip(cityName)
})