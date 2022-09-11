function footballLeage(input) {
    let index = 0;
    const stadiumCapacity = Number(input[index]);
    index++;
    const totalFans = Number(input[index]);
    index++;

    let sectorACounter = 0;
    let sectorBCounter = 0;
    let sectorVCounter = 0;
    let sectorGCounter = 0;


    
    for(let i = 1; i <= totalFans; i++) {
        let sectorOfFan = input[index];
        index++
        switch (sectorOfFan) {
            case "A": sectorACounter++; break;
            case "B": sectorBCounter++; break;
            case "V": sectorVCounter++; break;
            case "G": sectorGCounter++; break;
        } 
    }

    let percOfSectorAFans = sectorACounter / totalFans * 100;
    let percOfSectorBFans = sectorBCounter / totalFans * 100;
    let percOfSectorVFans = sectorVCounter / totalFans * 100;
    let percOfSectorGFans = sectorGCounter / totalFans * 100;
    let percentOfFans = totalFans / stadiumCapacity * 100;

    console.log(`${percOfSectorAFans.toFixed(2)}%`);
    console.log(`${percOfSectorBFans.toFixed(2)}%`);
    console.log(`${percOfSectorVFans.toFixed(2)}%`);
    console.log(`${percOfSectorGFans.toFixed(2)}%`);
    console.log(`${percentOfFans.toFixed(2)}%`);

}

footballLeage(["1000", "12", "A", "A", "V", "V", "A", "G", "A",  "A", "V", "G", "V", "A"])