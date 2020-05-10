var i;
var john = {
    billAmt: [124, 48, 268, 180, 42],
    tip: [],
    totalAmt: [],
    calcTip: function() {
            for (i = 0; i < this.billAmt.length; i ++){
                if (this.billAmt[i] < 50){
                    this.tip[i] = 0.2 * this.billAmt[i];
                } else if (this.billAmt[i] >= 50 && this.billAmt[i] < 200){
                    this.tip[i] = 0.15 * this.billAmt[i];
                } else {
                    this.tip[i] = 0.1 * this.billAmt[i];
                }
                this.totalAmt[i] = this.tip[i] + this.billAmt[i]; 
            }
        }
};
john.calcTip();
var mark = {
    billAmt: [77, 475, 110, 45],
    tip: [],
    totalAmt: [],
    calcTip: function() {
            for (i = 0; i < this.billAmt.length; i ++){
                if (this.billAmt[i] < 100){
                    this.tip[i] = 0.2 * this.billAmt[i];
                } else if (this.billAmt[i] >= 100 && this.billAmt[i] < 300){
                    this.tip[i] = 0.1 * this.billAmt[i];
                } else {
                    this.tip[i] = 0.25 * this.billAmt[i];
                }
                this.totalAmt[i] = this.tip[i] + this.billAmt[i]; 
            }
        }
};
mark.calcTip();
var johnSum = 0, markSum = 0;
var johnAvg, markAvg;
function calcAvg(){
    for(i = 0; i < john.billAmt.length; i ++){
        johnSum = johnSum + john.tip[i];
    }
    johnAvg = johnSum / john.billAmt.length;
    for(i = 0; i < mark.billAmt.length; i ++){
        markSum = markSum + mark.tip[i];
    }
    markAvg = markSum / mark.billAmt.length;
}
calcAvg();
johnAvg > markAvg ? console.log('John\'s tip average is higher ' + johnAvg) : console.log('Mark\'s tip average is higher ' + markAvg);