const weather = (() => {
    async function APIcall(location) {
        const APIkey = "c7a6021464d24003b5b143107233003";
        const response = await fetch(
            `https://api.weatherapi.com/v1/current.json?key=${APIkey}&q=${location}`,
            { mode: "cors" }
        );
        if (!response.ok) {
            throw new Error("Network response was not OK");
        }
        const data = await response.json();
        return convertData(data);
    }

    function convertData(data) {
        const location = data.location.name;
        const time = data.current.last_updated.split(" ")[1];
        const icon = data.current.condition.icon;
        const condition = data.current.condition.text;
        const tempC = data.current.temp_c;
        const feelsLikeC = data.current.feelslike_c;
        const tempF = data.current.temp_f;
        const feelsLikeF = data.current.feelslike_f;

        return {
            location,
            time,
            icon,
            condition,
            tempC,
            feelsLikeC,
            tempF,
            feelsLikeF,
        };
    }

    return {
        APIcall
    }
})();

export default weather;


