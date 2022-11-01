let enumIcon = {
    "Sunny": "&#x2600",
    "Partly sunny":	"&#x26C5",
    "Overcast": "&#x2601",
    "Rain":	"&#x2614",
    "Degrees": "&#176"
}

const forecastContainer = document.getElementById('forecast');

function attachEvents() {
    document.getElementById('submit').addEventListener('click', getWeather);
    
}

async function getWeather() {
    const url = `http://localhost:3030/jsonstore/forecaster/locations`;
    let townName = document.getElementById('location').value;

    try {
        const response = await fetch(url);
        let data = await response.json();
    
        let info = data.find(x => x.name === townName);
    
        createForcast(info.code);
    } catch {
        forecastContainer.textContent = 'Error';
        forecastContainer.style.display = 'block';
    }
    }

    async function createForcast(code) {
        const urlToday = `http://localhost:3030/jsonstore/forecaster/today/${code}`;
        const urlThreeDays = `http://localhost:3030/jsonstore/forecaster/upcoming/${code}`;
        const currentSection = document.getElementById('current');
        const upcomingSection = document.getElementById('upcoming');
        

        try {
            const responseToday = await fetch(urlToday);
            const dataToday = await responseToday.json();
    
            const responseThreeDays = await fetch(urlThreeDays);
            const dataThreeDays = await responseThreeDays.json();
            
           let conditionContainerHTML = createToday(dataToday);
           currentSection.appendChild(conditionContainerHTML);
            forecastContainer.style.display = 'block';
    
            let upcomingHTML = createUpcoming(dataThreeDays);
            upcomingSection.appendChild(upcomingHTML);
        } catch {
            forecastContainer.textContent = 'Error';
            forecastContainer.style.display = 'block';
        }
    }

    function createToday(data) {
        const {condition, high, low} = data.forecast;
        const conditionContainer = document.createElement('div');
        conditionContainer.classList.add('forecasts');

        const conditionSymbol = document.createElement('span');
        conditionSymbol.classList.add('condition');
        conditionSymbol.classList.add('symbol');
        conditionSymbol.innerHTML = enumIcon[condition];

        const conditionSpan = document.createElement('span');
        conditionSpan.classList.add('condition');

        const nameSpan = document.createElement('span');
        nameSpan.classList.add('forecast-data');
        nameSpan.textContent = data.name;

        const tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.innerHTML = `${low}${enumIcon.Degrees}/${high}${enumIcon.Degrees}`;

        const wheatherSpan = document.createElement('span');
        wheatherSpan.classList.add('forecast-data');
        wheatherSpan.textContent = condition;

        conditionSpan.appendChild(nameSpan);
        conditionSpan.appendChild(tempSpan);
        conditionSpan.appendChild(wheatherSpan);

        conditionContainer.appendChild(conditionSymbol);
        conditionContainer.appendChild(conditionSpan);

        return conditionContainer;
    }

    function createUpcoming(data) {
        let container = document.createElement('div');
        container.classList.add('forecast-info');

        data.forecast.forEach(data => {
            const spanHolder = generateSpans(data);
            container.appendChild(spanHolder);
        });

        return container;
    }

    function generateSpans(data) {
        let {condition, high, low} = data;
        const spanHolder = document.createElement('span');
        spanHolder.classList.add('upcoming');

        const symbolSpan = document.createElement('span');
        symbolSpan.classList.add('symbol');
        symbolSpan.innerHTML = enumIcon[condition];
        
        const tempSpan = document.createElement('span');
        tempSpan.classList.add('forecast-data');
        tempSpan.innerHTML = `${low}${enumIcon.Degrees}/${high}${enumIcon.Degrees}`;

        const wheatherSpan = document.createElement('span');
        wheatherSpan.classList.add('forecast-data'); 
        wheatherSpan.textContent = condition;

        spanHolder.appendChild(symbolSpan);
        spanHolder.appendChild(tempSpan);
        spanHolder.appendChild(wheatherSpan);
        
        return spanHolder;
    }

attachEvents();