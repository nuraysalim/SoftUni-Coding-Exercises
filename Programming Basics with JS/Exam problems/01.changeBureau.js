function changeBureau(input) {
    const numOfBitcoins = Number(input[0]);
    const numOfChineseOana = Number(input[1]);
    const commission = Number(input[2]);

    const bitcoin = 1168; //lv
    const oan = 0.15 //$
    const dollar = 1.76; //lv
    const euro = 1.95; // lv

    let moneyFromBitcoin = numOfBitcoins * bitcoin; // lv
    let moneyFromOana = numOfChineseOana * oan // $
    let lvDollarMoney = moneyFromOana * dollar;
    let dollarToEuro = lvDollarMoney / euro
    let euroMoney = moneyFromBitcoin / euro;
    let total = dollarToEuro + euroMoney;

    let moneyForCommision = total * (commission / 100);
    let finalSum = total - moneyForCommision;

    console.log(finalSum.toFixed(2));

}
changeBureau(["1",
"5",
"5"])
changeBureau(["20",
"5678",
"2.4"])
changeBureau(["7",
"50200.12",
"3"])
