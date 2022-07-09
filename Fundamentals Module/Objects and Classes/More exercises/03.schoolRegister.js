function schoolRegister(input) {
    let sortedStudents = [];

    for(let schoolInfo of input) {
        let [studentName, grade, avgScore] = schoolInfo.split(','); 
        let score = avgScore.split(': ');

        if(score[1] >= 3.00) {
            let passedStudents = {
                studentName: studentName.split(': ').pop(),
                grade: grade.split(': ').pop(),
                avgScore: avgScore.split(': ').pop()
            };
            sortedStudents.push(passedStudents);
        }
    }

    sortedStudents.forEach(calculations => {
        calculations.grade++;
    })
    
    console.log(sortedStudents);
    sortedStudents.sort((a,b) => {
       //console.log(typeof Object.values(a)[1]).localeCompare(Object.values(b)[1]);
    })

 

}
schoolRegister([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ])