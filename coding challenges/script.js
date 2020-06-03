//Coding challenge 1
/*
var JohnHeight, JohnMass, JohnBMI;
JohnMass=prompt("enter john's Mass");
JohnHeight=prompt("enter john's Height");
JohnBMI=JohnMass/(JohnHeight**2);
console.log(JohnBMI);


var MarkHeight, MarkMass, MarkBMI;
MarkHeight=prompt("Enter Marks height");
MarkMass=prompt("Enter Marks mass");
MarkBMI=MarkMass/(MarkHeight**2);
console.log(MarkBMI);
var highBMI
if
(highBMI=MarkBMI>JohnBMI){
alert('mark is bulky af')
}else{
    alert("john is bulky bitch")
}


// if else statements

var firstName=prompt("enter your name");
var personality=prompt("do you have a caring personality","yes or no");
var attitude=personality==="yes"?'caring':'asshole';
alert(attitude);
*/
//switch statements

/*
var firstNAme=prompt("enter your name");
alert("what do you specialize in");
var job=prompt("","frontend, backend, system-architecture")
switch(job){
    case 'frontend':
        alert(firstNAme+" is a front end developer");
        break;
    case 'backend':
        alert(firstNAme+" is a backend developer");
        break;
    case 'system-architecture':
        alert(firstNAme+"designs system architecture");
        break;
    default:
        alert(firstNAme+" is unassigned");
}
*/
//Coding challenge 2
/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.

1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)

4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
*/
/*
var john1, john2, john3, johnAvg;
john1=999;
john2=999;
john3=999;
johnAvg=(john1+john2+john3)/3;

var mark1, mark2, mark3, markAvg;
mark1=999;
mark2=999;
mark3=999;
markAvg=(mark1+mark2+mark3)/3;

var mary1, mary2, mary3, maryAvg;
mary1=999;
mary2=999;
mary3=999;
maryAvg=(mary1+mary2+mary3)/3;

if(johnAvg>markAvg && johnAvg>maryAvg){
    console.log("john has the greatest score"+johnAvg);
}else if(markAvg>johnAvg&& markAvg>maryAvg){
    console.log("mark"+markAvg);
}else if(maryAvg>johnAvg&&maryAvg>markAvg){
    console.log("mary"+maryAvg);
}else if(johnAvg>=markAvg&&johnAvg>maryAvg){
    console.log("john and mark have same scores"+johnAvg+' '+markAvg)
}else if(johnAvg>=maryAvg&& johnAvg>markAvg){
    console.log("john and mary have same scores"+ ' '+johnAvg+' '+maryAvg);
}else if(markAvg>=maryAvg&&markAvg>johnAvg){
    console.log("mark and mary have same scores"+' '+maryAvg+' '+markAvg);
}else{
    console.log("all three have some scores" +' '+johnAvg+' '+johnAvg+' '+johnAvg);
}
*/
//functions
/*
function calcAge(birthYear) {
    return 2020 - birthYear;
}
var age = calcAge(prompt("what year were you born"));

function retirement(name) {
    var retire = 70 - age;
    if (retire > 0) {
        alert(name + " retires in " + retire + " years");
    } else {
        alert(name + " is already retired");
    }
}
retirement( prompt("what is your name"));
*/
//coding challenge 3
/*
var tip;
function tipCalculator(amt){
    if(amt<50){
        return tip=0.2*amt;
    }else if(amt>50&&amt<200){
        return tip=0.15*amt;
    }else{
        return tip=0.1*amt
    }
}
var billAmt=[124, 48, 268];
var tip=[
    tipCalculator(billAmt[0]),
    tipCalculator(billAmt[1]),
    tipCalculator(billAmt[2])
]
var fullAmt=[
    (tip[0]+billAmt[0]),
    (tip[1]+billAmt[1]),
    (tip[2]+billAmt[2])
]
console.log(tip);
console.log(fullAmt);
*/
//Objects and functions
/*
var saif={
    name:'saif',
    job:'programmer',
    birthYear:2002,
    family:['umar', 'arfa'],
    //function
    calcAge:function(birthYear){
        return 2021-this.birthYear
    }//when function is written in object its a method  
}

console.log(saif.calcAge());
*/

//coding challenge 4
/*
var saif={
    fullName:'SaifKhan',
    mass:prompt("what is saifs mass"),
    height:prompt("what is saifs height"),
    calcBMI:function(){
        this.bmi=this.mass/(this.height**2);
        return this.bmi
    }
}
var umar={
    fullName:'UmarKhan',
    mass:prompt("what is umars mass"),
    height:prompt("what is umars height"),
    calcBMI:function(){
        this.bmi=this.mass/(this.height**2);
        return this.bmi
    }
}
saif.calcBMI();
umar.calcBMI();

console.log(saif);
console.log(umar);

if(saif.bmi>umar.bmi){
    alert("saif has a greater bmi "+saif.bmi)
}
else if(umar.bmi>saif.bmi){
    alert("umar has greater bmi "+umar.bmi)
}
else{
    alert("both have equal bmi "+saif.bmi+' '+umar.bmi)
}
*/



//Loops and iteration
/*
for(i=1;i<=20;i+=5){
    console.log(i);
}

var pc=['gpu', 'cpu', 'ram',30000, 'mb', 'psu'];
for (var i=0;i< pc.length;i++){
    if(typeof pc[i] === 'string')continue
    console.log(pc[i]);
}
*/
//continue and break statements

//coding challenge 5
var i;
var john={
    billAmt:[124,48, 180, 42 ],
    tip:[],
    totalAmt:[],
    calcTip:function(){
        for(i=0;i<this.billAmt.length;i++){
            if(this.billAmt[i]<50){
                this.tip[i]=this.billAmt[i]*0.2;
            }else if(this.billAmt[i]>50&&this.billAmt[i]<200){
                this.tip[i]=this.billAmt[i]*0.15;
            }else{
                this.tip[i]=this.billAmt[i]*0.1;
            }
            this.totalAmt[i]=this.billAmt[i]+this.tip[i];
        }
    }
}
john.calcTip();
console.log(john);
var i;
var mark={
    billAmt:[77, 375, 110, 45],
    tip:[],
    totalAmt:[],
    calcTip:function(){
        for(i=0;i<this.billAmt.length;i++){
            if(this.billAmt[i]<50){
                this.tip[i]=this.billAmt[i]*0.2;
            }else if(this.billAmt[i]>50&&this.billAmt[i]<200){
                this.tip[i]=this.billAmt[i]*0.15;
            }else{
                this.tip[i]=this.billAmt[i]*0.1;
            }
            this.totalAmt[i]=this.billAmt[i]+this.tip[i];
        }
    }
}
mark.calcTip();
console.log(mark);


var johnAvg, markAvg;
var johnTip, markTip;
function calcAvg(){
    for(i=0;i<john.billAmt.length;i++){
        johnAvg=john.tip[i]/john.billAmt.length;
    }johnAvg=johnTip/john.billAmt.length;
}   for(i=0; mark.billAmt.length;i++){
    marAvg=mark.tip[i]/mark.billAmt.length;
}
calcAvg();
if(johnAvg>markAvg){
    console.log("john has greater average "+johnAvg)
}else{
    console.log("mark has greater average "+markAvg)
}
