function triangle(input){
    let a = Number(input[0]);
    let h = Number(input[1]);
    const triangleArea = a * h / 2;
    console.log(triangleArea.toFixed(2));
}
triangle(["20", "30"])