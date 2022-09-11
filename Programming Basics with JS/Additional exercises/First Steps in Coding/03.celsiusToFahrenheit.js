function degreesConverter(input){
    let celsiusDegrees = Number(input[0]);
    let fahrenheitDegrees = (celsiusDegrees * 9/5) + 32;
    console.log(fahrenheitDegrees.toFixed(2))

}
degreesConverter("25")