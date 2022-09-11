function trainTheTrainers(input) {
    let index = 0
    let jury = Number(input[index]);
    index++;
    let nameOfPresentation = input[index];
    index++;
    let sumGrade = 0

    let gradeCounter = 0;
    let sumOfAllGrades = 0

    while(nameOfPresentation !== "Finish") {
        let numOfJury = Number(jury);

        for(let i = 1; i <= numOfJury; i++) {
            gradeCounter++;
            let grade = Number(input[index]);
            index++;
            sumGrade += grade;
            sumOfAllGrades += grade
        }

        let avgGrade = sumGrade / numOfJury;
        console.log(`${nameOfPresentation} - ${avgGrade.toFixed(2)}.`);
        sumGrade = 0;
        
        nameOfPresentation = input[index];
        index++;

    }

    console.log(`Student's final assessment is ${(sumOfAllGrades / gradeCounter).toFixed(2)}.`);
}
//trainTheTrainers(["2", "While-Loop", "6.00", "5.50", "For-Loop", "5.84", "5.66", "Finish"]);
 trainTheTrainers(["2", "Objects and Classes", "5.77", "4.23", "Dictionaries", "4.62", "5.02", "RegEx", "2.88", "3.42", "Finish"]) 