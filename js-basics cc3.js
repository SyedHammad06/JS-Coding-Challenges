var tip;
function tipCalculator(amt){
    if (amt < 50){
        return tip = .2 * amt;
    } else if (amt >= 50 && amt < 200){
        return tip = .15 * amt;
    } else {
        return tip = .1 * amt;
    }
}
var billAmt = [124, 48, 268];
var tips = [
    tipCalculator(billAmt[0]),
    tipCalculator(billAmt[1]),
    tipCalculator(billAmt[2])
]
var finalAmt = [
    (tips[0] + billAmt[0]), 
    (tips[1] + billAmt[1]),
    (tips[2] + billAmt[2])
];
console.log(tips, finalAmt);