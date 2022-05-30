function marketPlace(input){
     const pricePerKgVegitables = Number(input[0]);
     const pricePerKgFruits = Number(input[1]);
     const kgOfVegitables = Number(input[2]);
     const kgOfFruits = Number(input[3]);
     let oneEuro = 1.94;
     const moneyForVegitables = pricePerKgVegitables * kgOfVegitables;
     const moneyForFruits = pricePerKgFruits * kgOfFruits;
     const finalSum = moneyForVegitables + moneyForFruits;
     const incomeInEuro = finalSum / oneEuro;
     console.log(incomeInEuro.toFixed(2))
}
marketPlace(["0.194", "19.4", "10", "10"])