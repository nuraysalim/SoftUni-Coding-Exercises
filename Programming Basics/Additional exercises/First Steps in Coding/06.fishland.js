function fishland(input) {
    const mackerelPrice = Number(input[0]);
    const spratPrice = Number(input[1]); 
    const kgBonito = Number(input[2]);
    const kgsafrid = Number(input[3]);
    const kgclams = Number(input[4]);

    const bonitoPrice = mackerelPrice + 0.6 * mackerelPrice;
    const safridPrice = spratPrice + 0.8 * spratPrice;
    const clamsPrice = 7.5;

    const bonitoCost = bonitoPrice * kgBonito;
    const safridCost = safridPrice * kgsafrid;
    const clamsCost = clamsPrice * kgclams;
    const totalSum = bonitoCost + safridCost + clamsCost;
    
    console.log((totalSum).toFixed(2)) 
 }

 fishland(["6.90", "4.20", "1.5", "2.5", "1"])