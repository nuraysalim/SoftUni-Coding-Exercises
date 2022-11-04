function solve() {
    let id = 'depot';
    let stopData;
    const infoBox = document.querySelector(".info");
    const departBtn = document.getElementById('depart');
    const arriveBtn = document.getElementById('arrive');

   async function depart() {
    
    const url = `http://localhost:3030/jsonstore/bus/schedule/${id}`;

    try {
        let response = await fetch(url);
        let data = await response.json();
        id = data.next;
        stopData = data;
    
        updateInfo(stopData);
    } catch {
        infoBox.textContent = "Error";
        departBtn.disabled = true;
        arriveBtn.disabled = true;
    }
    }

    function updateInfo(stopData) {
        infoBox.textContent = `Next stop ${stopData.name}`;

        departBtn.disabled = true;
        arriveBtn.disabled = false;

    }
    
    function arrive() {
        infoBox.textContent = `Arriving at ${stopData.name}`;

        departBtn.disabled = false;
        arriveBtn.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();