function grades(input) {
    let index = 0;
    const studentsOnExam = Number(input[index]);
    index++;

    let studentsWithF = 0;
    let studentsWithD = 0;
    let studentsWithC = 0;
    let studentsWithAOrB = 0;
    let sumOfGradesForExam = 0;


    for(let i = 1; i <= studentsOnExam; i++) {
        let grade = Number(input[index]);
        index++;
        sumOfGradesForExam += grade

        if (grade >= 2.00 && grade <= 2.99) {
            studentsWithF++;
        } else if (grade >= 3.00 && grade <= 3.99) {
            studentsWithD++;
        } else if (grade >= 4.00 && grade <= 4.99) {
            studentsWithC++;
        } else {
            studentsWithAOrB++;
        }

    }

    let topStudentsPer = studentsWithAOrB / studentsOnExam * 100;
    let cStudentsPer = studentsWithC / studentsOnExam * 100;
    let dStudentsPer = studentsWithD / studentsOnExam * 100;
    let fStudentsPer = studentsWithF / studentsOnExam * 100;
    let avgGradeForExam = sumOfGradesForExam / studentsOnExam;

    console.log(`Top students: ${topStudentsPer.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${cStudentsPer.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${dStudentsPer.toFixed(2)}%`);
    console.log(`Fail: ${fStudentsPer.toFixed(2)}%`);
    console.log(`Average: ${avgGradeForExam.toFixed(2)}`);

}

grades(["6", "2", "3", "4", "5", "6", "2.2"])