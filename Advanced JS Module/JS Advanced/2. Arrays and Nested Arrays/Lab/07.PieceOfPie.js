function PieceOfPie(arr, pieOne, pieTwo) {
    let firstIndex = arr.indexOf(pieOne);
    let secondIndex = arr.indexOf(pieTwo);

    let result = arr.slice(firstIndex, secondIndex + 1);
    return result;
}
console.log(PieceOfPie(['Pumpkin Pie',
'Key Lime Pie',
'Cherry Pie',
'Lemon Meringue Pie',
'Sugar Cream Pie'],
'Key Lime Pie',
'Lemon Meringue Pie'))