function  yardGreening(input){
    const pricePerSqMeter = 7.61; 
    const discount = 18 / 100; 
    let numberOfSqMeters = Number(input[0]);
    const discountPrice = (numberOfSqMeters * pricePerSqMeter) * discount;
    const finalPrice = (numberOfSqMeters * pricePerSqMeter) - discountPrice;
    console.log(`The final price is: ${finalPrice} lv.`);
    console.log(`The discount is: ${discountPrice} lv.`) 
}
yardGreening(["550"])