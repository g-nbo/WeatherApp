// console.log("hello world");
import { weatherAPI } from "./weatherAPI.mjs";
import { userManip } from "./jsonPlaceholder.mjs"

const userInput = document.getElementById("userInput");
const submitBtn = document.getElementById("submitBtn");

const locationInfo = document.getElementById("locationInfo");
const locationName = document.getElementById("locationName");
const info = document.getElementById("info");
const imageIcon = document.getElementById("imageIcon");

submitBtn.addEventListener("click", (evt) => {
    evt.preventDefault();
    const cityName = userInput.value;
    weatherAPI(cityName);
    userManip(cityName);
})