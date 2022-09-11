function hotelRoom(input) {
  const month = input[0];
  const nights = Number(input[1]);

  const mayAndOctomberStudioPrice = 50;
  const mayAndOctomberApartmentPrice = 65;
  const juneAndSeptemberStudioPrice = 75.2;
  const juneAndSeptemberApartmentPrice = 68.7;
  const julyandAugustStudioPrice = 76;
  const julyandAugustApartmentPrice = 77;

  let totalMoneyForStudio = 0;
  let totalMoneyForApartment = 0;

  switch (month) {
    case "May":
    case "October":  totalMoneyForStudio = nights * mayAndOctomberStudioPrice;
    totalMoneyForApartment = nights * mayAndOctomberApartmentPrice;
    if (nights > 7 && nights < 14) {
        totalMoneyForStudio -= totalMoneyForStudio * 0.05;
    } else if (nights > 14) {
        totalMoneyForStudio -= totalMoneyForStudio * 0.3;
    }
      break;
    case "June":
    case "September": totalMoneyForStudio = nights * juneAndSeptemberStudioPrice ;
        totalMoneyForApartment = nights * juneAndSeptemberApartmentPrice;
    if (nights > 14) {
        totalMoneyForStudio -= totalMoneyForStudio * 0.2;
    }
      break;
    case "July":
    case "August": totalMoneyForStudio = nights * julyandAugustStudioPrice;
    totalMoneyForApartment = nights * julyandAugustApartmentPrice;
      break;
  }

  if (nights > 14) {
 totalMoneyForApartment -= totalMoneyForApartment * 0.1;
  }
  
  console.log(`Apartment: ${totalMoneyForApartment.toFixed(2)} lv.`);
  console.log(`Studio: ${totalMoneyForStudio.toFixed(2)} lv.`)
}
hotelRoom(["August",
"20"])

