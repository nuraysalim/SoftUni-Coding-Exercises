function trapeziodArea1(input){
    let b1 = Number(input[0]);
    let b2 = Number(input[1]);
    let h = Number(input[2]);

    const trapeziodArea = (b1 + b2) * h / 2;
    console.log(trapeziodArea.toFixed(2));
}
trapeziodArea1(["8", "13", "7"])