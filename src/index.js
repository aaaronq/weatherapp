import weather from "./modules/weather.js"
import DOMstuff from "./modules/domstuff.js"

async function displayWeather(location) {
    const APIresult = await weather.APIcall(location);
    DOMstuff.updateDOM(APIresult);
}

const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const location = document.getElementById("searchBar").value;
    if (location) displayWeather(location)
    .catch((err) => {
        console.log(err.message);
    });
});

const tempButton = document.getElementById("tempButton");
tempButton.addEventListener("click", () => {
    tempButton.innerText === "C" ? tempButton.innerText = "F" : tempButton.innerText = "C";
    DOMstuff.updateTemp();
});

displayWeather("Belfast");



