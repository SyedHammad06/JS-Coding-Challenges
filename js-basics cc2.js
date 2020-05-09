var match1John, match2John, match3John, avgJohn;

match1John = 89;
match2John = 120;
match3John = 103;
avgJohn = (match1John + match2John + match3John) / 3;

var match1Mike, match2Mike, match3Mike, avgMike;

match1Mike = 116;
match2Mike = 94;
match3Mike = 123;
avgMike = (match1Mike + match2Mike + match3Mike) / 3;

var match1Mary, match2Mary, match3Mary, avgMary;

match1Mary = 97;
match2Mary = 134;
match3Mary = 105;
avgMary = (match1Mary + match2Mary + match3Mary) / 3;

console.log(avgJohn, avgMike, avgMary)

if (avgJohn > avgMike && avgJohn > avgMary){
    console.log('John\'s average score is greater than Mike\'s and Mary\'s ' + avgJohn);
} else if (avgMike > avgJohn && avgMike > avgMary){
    console.log('Mike\'s average score is greater than John\'s and Mary\'s ' + avgMike);
} else if (avgMary > avgJohn && avgMary > avgMike){
    console.log('Mary\'s average score is greater than John\'s and Mike\'s ' + avgMary);
} else if (avgJohn > avgMike && avgJohn === avgMary){
    console.log('There is a tie between John\'s and Mary\'s average at the top ' + avgJohn, avgMary);
} else if (avgMike > avgJohn && avgMike === avgMary){
    console.log('There is a tie between Mike\'s and Mary\'s average at the top ' + avgMike, avgMary);
} else if (avgJohn > avgMary && avgJohn === avgMike){
    console.log('There is a tie between John\'s and Mike\'s average at the top ' + avgJohn, avgMike);
} else {
    console.log('All the three teams have the same scores');
}