function thePyramidofKingDjoser(base, increment) {
        let stone = 0;
        let marble = 0;
        let stepsCounterHeigth = 1;
        let lapis = 0;
        let gold = 0;

        while (base > 0) {
           if (base <= 2) {
                gold += (base * base) * increment;
                break;
            }
            stone += (base - 2) * (base - 2) * increment;

            if (stepsCounterHeigth % 5 === 0) {
            lapis += (base * 4 - 4) * increment;
            } else {
             marble += (base * 4 - 4) * increment;
            }

            base -= 2;
            stepsCounterHeigth++;
        
    }

    let height = stepsCounterHeigth * increment;
    console.log(`Stone required: ${Math.ceil(stone)}\n Marble required: ${Math.ceil(marble)}\n Lapis Lazuli required: ${Math.ceil(lapis)}\n Gold required: ${Math.ceil(gold)}\n Final pyramid height: ${Math.floor(height)}`);
}
thePyramidofKingDjoser(11, 1)
//thePyramidofKingDjoser(11, 0.75)
//thePyramidofKingDjoser(12, 1)
//thePyramidofKingDjoser(23, 0.5)