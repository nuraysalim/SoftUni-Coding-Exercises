function sumOfTwoNumber(input) {
    let start = Number(input[0]);
    let end = Number(input[1]);
    let n = Number(input[2]);
    let flag = false
    let counter = 0;


    for(let x = start; x <= end; x++) {
        for(let y = start; y <= end; y++) {
            let res = x +y
            counter++;
            if (res == n) {

                flag = true;
                console.log(`Combination N:${counter} (${x} + ${y} = ${n})`);
                break;
            }
        }
        if(flag) {
            break;
        }
    }
    if (!flag){
        console.log(`${counter} combinations - neither equals ${n}`);
    }
}
sumOfTwoNumber(["1", "10", "5"]);
