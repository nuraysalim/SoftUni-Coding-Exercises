function schoolRegister(input) {
  let studentsObj = {};

  for (const line of input) {
    let [name, grade, score] = line.split(", ");
    name = name.split(" ").pop();
    grade = Number(grade.split(" ").pop());
    score = score.split(" ").pop();

    if (score > 3) {
      grade += 1;

      if (!studentsObj.hasOwnProperty(grade)) {
        studentsObj[grade] = {};
      }

      studentsObj[grade][name] = score;
    }
  }

  for (const grade in studentsObj) {
    let listOfStudents = [];
    let sumOfAnnualScore = 0;

    for (const student in studentsObj[grade]) {
      listOfStudents.push(student);
      sumOfAnnualScore += Number(studentsObj[grade][student]);
    }

    let numInClass = listOfStudents.length;
    let avgAnnualScore = sumOfAnnualScore / numInClass;

    console.log(`${grade} Grade`);
    console.log(`List of students: ${listOfStudents.join(", ")}`);
    console.log(
      `Average annual score from last year: ${avgAnnualScore.toFixed(2)}\n`
    );
  }
}
schoolRegister([
  "Student name: George, Grade: 5, Graduated with an average score: 2.75",
  "Student name: Alex, Grade: 9, Graduated with an average score: 3.66",
  "Student name: Peter, Grade: 8, Graduated with an average score: 2.83",
  "Student name: Boby, Grade: 5, Graduated with an average score: 4.20",
  "Student name: John, Grade: 9, Graduated with an average score: 2.90",
  "Student name: Steven, Grade: 2, Graduated with an average score: 4.90",
  "Student name: Darsy, Grade: 1, Graduated with an average score: 5.15",
]);
