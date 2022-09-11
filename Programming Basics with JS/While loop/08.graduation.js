function graduation(input) {
    let index = 0;
    const name = input[index];
    index++;

    let i = 1;
    let expeled = 0;
    let sumOfGrades = 0;

    while(i <= 12) {
    let grade = Number(input[index]);
    index++;

    if (grade < 4.00) {
        expeled++;
        if (expeled === 2) {
            console.log(`${name} has been excluded at ${i} grade`);
            break;
        }
        continue;
    }
        sumOfGrades += grade;
        i++;
    }

    if (expeled < 2) {
        let avgGrade = sumOfGrades / 12; 
    console.log(`${name} graduated. Average grade: ${avgGrade.toFixed(2)}`);
    }
}
graduation(["Gosho", 
"5",
"5.5",
"6",
"5.43",
"5.5",
"6",
"5.55",
"5",
"6",
"6",
"5.43",
"5"])
