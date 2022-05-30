function bikeRace(input) {
    const numOfJuniors = Number(input[0]);
    const numOfSeniors = Number(input[1]);
    const typeOfRoute = input[2];

    let juniorsParticipationFee = 0;
    let seniorsParticipationFee = 0;
    let totalCollectedMoney = 0;
    let expenses = 0;

    switch (typeOfRoute) {
        case "trail": juniorsParticipationFee = numOfJuniors * 5.5;
        seniorsParticipationFee = numOfSeniors * 7; break;
        case "cross-country": juniorsParticipationFee = numOfJuniors * 8;
        seniorsParticipationFee = numOfSeniors * 9.5; 
        break;
        case "downhill": juniorsParticipationFee = numOfJuniors * 12.25;
        seniorsParticipationFee = numOfSeniors * 13.75; break;
        case "road": juniorsParticipationFee = numOfJuniors * 20;
        seniorsParticipationFee = numOfSeniors * 21.5; break;
    }

    if ((numOfSeniors + numOfJuniors) >= 50 && typeOfRoute === "cross-country") {
        juniorsParticipationFee -= juniorsParticipationFee * 0.25;
        seniorsParticipationFee -= seniorsParticipationFee * 0.25; 
    }

    totalCollectedMoney = juniorsParticipationFee + seniorsParticipationFee;
    expenses = totalCollectedMoney * 0.05;
    totalCollectedMoney -= expenses;
    
    console.log(`${totalCollectedMoney.toFixed(2)}`)

}

bikeRace(["3", "40", "road"])
