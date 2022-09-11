function distance(x1, y1, x2, y2) {
     let x = x1 - x2;
     let y = y1 - y2;

     let result = Math.sqrt(x * x + y * y);
     console.log(result)
}
distance(2.34, 15.66, -13.55, -2.9985);