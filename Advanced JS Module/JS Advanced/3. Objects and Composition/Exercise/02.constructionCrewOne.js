function constructionCrewOne(workerObj) {
    if(workerObj.dizziness) {
        let amountOfWater = (0.1 * workerObj.weight) * workerObj.experience;
        workerObj.levelOfHydrated += amountOfWater;
        workerObj.dizziness = false;
    }

    return workerObj;
}
console.log(constructionCrewOne({ weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false }))