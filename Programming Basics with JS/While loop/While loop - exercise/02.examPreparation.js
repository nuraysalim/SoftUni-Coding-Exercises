function examPreparation(input) {
    let index = 0;
    const numOfBadGrades = Number(input[index]);
    index++;
    let command = input[index];

    let sumOfGrades = 0;
    let exerciseCounter = 0;
    let badGradesCounter = 0;
    let lastProblemName = "";


    while(command !== "Enough") {
        lastProblemName = command = input[index];
        exerciseCounter++;
        index++;
        let currentGrade = Number(input[index]);
        sumOfGrades += currentGrade;

        if(currentGrade <= 4) {
            badGradesCounter++;
        }
        if(badGradesCounter >= numOfBadGrades) {
            console.log(`You need a break, ${numOfBadGrades} poor grades.`);
            break;
        }
        index++;
        command = input[index];

        
    }

    if(command === "Enough") {
     let avgGrade = (sumOfGrades / exerciseCounter).toFixed(2);
     console.log(`Average score: ${avgGrade}`);
     console.log(`Number of problems: ${exerciseCounter}`);
     console.log(`Last problem: ${lastProblemName}`);
     
    }

}

examPreparation(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
