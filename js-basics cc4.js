var John = {
    fullName: 'John Smith',
    mass: 95,
    height: 1.95,
    calcBmi: function() {
        this.bmi = (this.mass / (this.height ** 2)).toPrecision(4);
        return this.bmi;
    }
}
var Mark = {
    fullName: 'Mark Doe',
    mass: 78,
    height: 1.69,
    calcBmi: function() {
        this.bmi =(this.mass / (this.height ** 2)).toPrecision(4);
        return this.bmi;
    }
}

John.calcBmi();
Mark.calcBmi();

console.log(John);
console.log(Mark);

if (John.bmi > Mark.bmi){
    console.log('John\'s BMI is greater ' + John.bmi);
} else if (Mark.bmi > John.bmi){
    console.log('Mark\'s BMI is greater ' + Mark.bmi);
} else {
    console.log('Both have the same BMI\'s ');
}