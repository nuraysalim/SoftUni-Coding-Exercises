function histogram(input) {
    let n = Number(input[0]);
    let p1Counter = 0;
    let p2Counter = 0;
    let p3Counter = 0;
    let p4Counter = 0;
    let p5Counter = 0;

    for(let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        
        if (num < 200) {
            p1Counter++;   
        } else if (num >= 200 && num <= 399) {
            p2Counter++;
        } else if (num >= 400 && num <= 599) {
            p3Counter++;
        } else if (num >= 600 && num <= 799) {
            p4Counter++; 
        } else {
            p5Counter++;
        }
    }

    let p1Percentage = p1Counter / n * 100;
    let p2Percentage = p2Counter / n * 100;
    let p3Percentage = p3Counter / n * 100;
    let p4Percentage = p4Counter / n * 100;
    let p5Percentage = p5Counter / n * 100;

    console.log(`${p1Percentage.toFixed(2)}%`);
    console.log(`${p2Percentage.toFixed(2)}%`);
    console.log(`${p3Percentage.toFixed(2)}%`);
    console.log(`${p4Percentage.toFixed(2)}%`);
    console.log(`${p5Percentage.toFixed(2)}%`);
}
histogram([20 ,53, 7, 56, 180, 450, 920, 12, 7, 150, 250, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65])
