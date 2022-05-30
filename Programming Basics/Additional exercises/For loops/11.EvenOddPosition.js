function evenOrOddPosition(input) {
    let oddSum = 0;
    let oddMin = Number.MAX_SAFE_INTEGER;
    let oddMax = Number.MIN_SAFE_INTEGER;
    let evenSum = 0;
    let evenMin = Number.MAX_SAFE_INTEGER;
    let evenMax = Number.MIN_SAFE_INTEGER;
    let evenMinCounter = true;
    let oddMinCounter = true;

    for(let i = 1; i < input.length; i++){
        let num = Number(input[i]);
        
        
        if(i % 2 === 0) {
            evenSum += num;

            if(num > evenMax) {
                evenMax = num;
                if(evenMinCounter) {
                    evenMinCounter = false
                evenMin = num;
                }
            } else if (num < evenMin) {
                evenMin = num;
            }
        }   else {
            oddSum += num;

            if(num > oddMax) {
                oddMax = num;
                if(oddMinCounter){
                    oddMinCounter = false;
                oddMin = num;
                }
            } else if (num < oddMin) {
                oddMin = num;
            }
        }

    }

    console.log("OddSum=" + oddSum.toFixed(2) + ","); 
if(oddMin === Number.MAX_SAFE_INTEGER) {
console.log("OddMin=" + "No,");
} else {
    console.log("OddMin=" + oddMin.toFixed(2) + ",")
}
if(oddMax === Number.MIN_SAFE_INTEGER) {
    console.log("OddMax=" + "No,");
    } else {
        console.log("OddMax=" + oddMax.toFixed(2) + ",")
    }

console.log("EvenSum=" +  evenSum.toFixed(2) + ",");

if(evenMin === Number.MAX_SAFE_INTEGER) {
console.log("EvenMin=" +  "No,");
} else {
    console.log("EvenMin=" + evenMin.toFixed(2) + ",");
}

if(evenMax === Number.MIN_SAFE_INTEGER) { 
console.log("EvenMax=" + "No");
} else {
    console.log("EvenMax=" + evenMax.toFixed(2));
}
}
evenOrOddPosition(["5", "1.5", "-4.5", "7", "-8.5", "9"])
//evenOrOddPosition(["6", "2", "3", "5", "4", "2", "1"])
//evenOrOddPosition(["5", "3", "-2", "8", "11", "-3"])
evenOrOddPosition(["1", "1"])