function harvest(input) {

const x = Number(input[0]);
const y = Number(input[1]);
const z = Number(input[2]);
const numberOfWorkers = Number(input[3]);

const grapesKg = x * y;
const litersGrapesForWine = (grapesKg * 0.4) / 2.5;
const neededOrLeftWine = Math.abs(litersGrapesForWine - z); 

if (litersGrapesForWine < z) {
 console.log(`It will be a tough winter! More ${Math.floor(neededOrLeftWine)} liters wine needed.`);
} else if (litersGrapesForWine >= z) {
    console.log(`Good harvest this year! Total wine: ${Math.floor(litersGrapesForWine)} liters.`);
    const wineForEachWorker = neededOrLeftWine / numberOfWorkers;
    console.log(`${Math.ceil(neededOrLeftWine)} liters left -> ${Math.ceil(wineForEachWorker)} liters per person.`);
}

}
harvest(["650", "2", "175", "3"])
harvest(["1020", "1.5", "425", "4"])