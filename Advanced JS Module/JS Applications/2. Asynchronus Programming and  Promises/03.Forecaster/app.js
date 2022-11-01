function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
    
    
async function getWeather() {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    let townName = document.getElementById('location').value;

    const response = await fetch(url);
    let data = await response.json();

    let info = data.find(x => x.name === townName);

    createForcast(info.code);
    }

    async function createForcast(code) {
        const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;


        const responseToday = await fetch(urlToday);
        const dataToday = await responseToday.json();
        const responseThreeDays = await fetch(urlThreeDays);
        const dataThreeDays = await responseThreeDays.json();
        

    }
}

attachEvents();