async function getInfo() {
    const infoElement = document.getElementById('stopId');
    const stopId = infoElement.value;
    const url = `http://localhost:3030/jsonstore/bus/businfo/${stopId}`;
    const stopName = document.getElementById('stopName');
    const ulElement = document.getElementById('buses');

    ulElement.innerHTML = "";
    infoElement.value = "";

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        stopName.textContent = data.name;
        Object.entries(data.buses).forEach(([bus, arivalTime]) => {
            const li = document.createElement('li');
            li.textContent = `Bus ${bus} arrives in ${arivalTime} minutes`;
            ulElement.appendChild(li);
        });
    } catch (e) {
        stopName.textContent = "Error";
    };
}