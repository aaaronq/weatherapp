const DOMstuff = (() => {

    let weatherobj; 

    function updateDOM (APIresult) {
        weatherobj = APIresult;

        const cityName = document.querySelector(".header h1");
        const time = document.querySelector(".header h2");
        const conditionImg = document.querySelector(".condition img");
        const condition = document.querySelector(".condition h2");

        if (weatherobj.location.slice(-1) === "s") {
            cityName.innerText = `${weatherobj.location}' Weather`;
        }
        else {
            cityName.innerText = `${weatherobj.location}'s Weather`;
        }
        
        time.innerText = `Time: ${weatherobj.time}`;
        conditionImg.src = `https://${weatherobj.icon}`;
        condition.innerText = weatherobj.condition;

        updateTemp();
        document.getElementById("searchBar").value = "";
    }

    function updateTemp() {
        const temperature = document.querySelector(".temperature h1");
        const feelsLike = document.querySelector(".temperature h2");

        let tempSelection;

        const tempButton = document.getElementById("tempButton");
        tempButton.innerText === "C" ? tempSelection = "F" : tempSelection = "C";

        if (tempSelection === "C") {
            temperature.innerText = `${Math.round(weatherobj.tempC)} C`;
            feelsLike.innerText = `Feels like ${Math.round(weatherobj.feelsLikeC)} C`;
        }
        else {
            temperature.innerText = `${Math.round(weatherobj.tempF)} F`;
            feelsLike.innerText = `Feels like ${Math.round(weatherobj.feelsLikeF)} F`;
        }
    }


    return {
        updateDOM,
        updateTemp,
    }
})();

export default DOMstuff;