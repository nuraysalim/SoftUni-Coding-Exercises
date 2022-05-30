function trekkingMania(input) {
    let index = 0;
    const numOfTrekkingGroups = Number(input[index]);
    index++;
    
    let peopleClimbingMusala = 0;
    let peopleClimbingMontblanc = 0;
    let peopleClimbingKilimanjaro = 0;
    let peopleClimbingK2 = 0;
    let peopleClimbingEverest = 0;

    for(let i = 0; i < numOfTrekkingGroups; i++) {
        let peopleInAGroup = Number(input[index]);
        index++;

        if (peopleInAGroup >= 1 && peopleInAGroup <= 5) {
            peopleClimbingMusala += peopleInAGroup;
        } else if (peopleInAGroup >= 6 && peopleInAGroup <= 12) {
            peopleClimbingMontblanc += peopleInAGroup;
        } else if (peopleInAGroup >= 13 && peopleInAGroup <= 25) {
            peopleClimbingKilimanjaro += peopleInAGroup;
        } else if (peopleInAGroup >= 26 && peopleInAGroup <= 40) {
            peopleClimbingK2 += peopleInAGroup;
        } else {
            peopleClimbingEverest += peopleInAGroup;
        }
    }

    let allPeople = peopleClimbingMusala + peopleClimbingMontblanc + peopleClimbingKilimanjaro + peopleClimbingK2 + peopleClimbingEverest;

    let perForMusala = peopleClimbingMusala / allPeople * 100;
    let perForMontblanc = peopleClimbingMontblanc / allPeople * 100;
    let perForKilimanjaro = peopleClimbingKilimanjaro / allPeople * 100;
    let perForK2 = peopleClimbingK2 / allPeople * 100;
    let perForEverest = peopleClimbingEverest / allPeople * 100;
    
    console.log(`${perForMusala.toFixed(2)}%`);
    console.log(`${perForMontblanc.toFixed(2)}%`);
    console.log(`${perForKilimanjaro.toFixed(2)}%`);
    console.log(`${perForK2.toFixed(2)}%`);
    console.log(`${perForEverest.toFixed(2)}%`);
}

trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])
