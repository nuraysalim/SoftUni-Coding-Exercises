function hospital(input) {
    let index = 0;
    let period = Number(input[index]);
    index++;
    
    let hiredDoctors = 7;
    let treatedPatients = 0;
    let untreatedPatients = 0;

    for(let i = 1; i <= period; i++) {
        
        if ((i % 3 === 0) && (untreatedPatients > treatedPatients)) {
            hiredDoctors++;
        }

        let patients = Number(input[index]);
        index++;

        if (patients <= hiredDoctors) {
            treatedPatients += patients
        } else {
             untreatedPatients += patients - hiredDoctors;
             treatedPatients += hiredDoctors
        }

    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${untreatedPatients}.`)

}

hospital(["3", "7", "7", "7"])