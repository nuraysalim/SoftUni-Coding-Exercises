function circleArea(param) {
    let typeOfParam = typeof(param);

    if(typeOfParam !== 'number') {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfParam}.`);
    } else {
        let area = Math.PI * (param ** 2);
        console.log(area.toFixed(2));
    }
}
circleArea('ewt')