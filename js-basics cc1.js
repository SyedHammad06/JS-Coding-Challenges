var marksMass, marksHeight, marksBmi;
var johnMass, johnHeight, johnBmi;

marksMass = prompt('Enter Mark\'s Mass');
marksHeight = prompt('Enter Mark\'s Height');
johnMass = prompt('Enter John\'s Mass');
johnHeight = prompt('Enter John\'s Height');
marksBmi = marksMass / (marksHeight ** 2);

johnBmi = johnMass / (johnHeight ** 2);

compare = marksBmi > johnBmi;
console.log('Is Mark\'s BMI higher than John\'s?' + ' ' + compare);
console.log(marksBmi, johnBmi);