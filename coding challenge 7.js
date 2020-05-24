(function() {
    var score = 0;

    var Question = function (ques, arr, correctAns) {
        this.ques = ques;
        this.ans = arr;
        this.correctAns = correctAns;
        this.displayQues = function (){
            console.log('Q.' + this.ques + ' ?');
            for(let i = 0; i < this.ans.length; i ++){
                console.log(i + '. ' + this.ans[i]);
            }
        }
    }
    
    var que1 = new Question('What is the capital of India', ['Delhi', 'Mumbai', 'Bangalore'], 0);
    var que2 = new Question('India is the ___ largest country', ['4', '10', '8', '7'], 3);
    var que3 = new Question('How many states are there in India', ['27', '29', '28'], 1);
    
    var questions = [que1, que2, que3];
    
    for (let k = 0; ; k++){
    var qno = Math.floor(Math.random() * 3);
    questions[qno].displayQues();
    
    var entry = prompt('Enter the correct answer', 'Enter the option');

    if (entry === 'exit'){
        console.log('');
        console.log('********************************************************');
        console.log('Your Final Score is : ' + score);
        console.log('********************************************************');
        break;
    }
    
    function checkAns(ele, ent) {
        if (ent == ele.correctAns){
            score++;
            console.log('');
            console.log('Correct Answer!!' + '\n' + 'Your Score is: ' + score);
            console.log('---------------------------------------------------');
            console.log('');
        } else {
            console.log('');
            console.log('Wrong Answer!!' + '\n' + 'Your Score is: ' + score);
            console.log('---------------------------------------------------');
            console.log('');
        }
    }
    
    checkAns(questions[qno], entry);
}
})();

// (function() {
//     function Question(question, answers, correct) {
//         this.question = question;
//         this.answers = answers;
//         this.correct = correct;
//     }

//     Question.prototype.displayQuestion = function() {
//         console.log(this.question);

//         for (var i = 0; i < this.answers.length; i++) {
//             console.log(i + ': ' + this.answers[i]);
//         }
//     }

//     Question.prototype.checkAnswer = function(ans, callback) {
//         var sc;
        
//         if (ans === this.correct) {
//             console.log('Correct answer!');
//             sc = callback(true);
//         } else {
//             console.log('Wrong answer. Try again :)');
//             sc = callback(false);
//         }
        
//         this.displayScore(sc);
//     }

//     Question.prototype.displayScore = function(score) {
//         console.log('Your current score is: ' + score);
//         console.log('------------------------------');
//     }
    
    
//     var q1 = new Question('Is JavaScript the coolest programming language in the world?',
//                           ['Yes', 'No'],
//                           0);

//     var q2 = new Question('What is the name of this course\'s teacher?',
//                           ['John', 'Micheal', 'Jonas'],
//                           2);

//     var q3 = new Question('What does best describe coding?',
//                           ['Boring', 'Hard', 'Fun', 'Tediuos'],
//                           2);
    
//     var questions = [q1, q2, q3];
    
//     function score() {
//         var sc = 0;
//         return function(correct) {
//             if (correct) {
//                 sc++;
//             }
//             return sc;
//         }
//     }
//     var keepScore = score();
    
    
//     function nextQuestion() {

//         var n = Math.floor(Math.random() * questions.length);
//         questions[n].displayQuestion();

//         var answer = prompt('Please select the correct answer.');

//         if(answer !== 'exit') {
//             questions[n].checkAnswer(parseInt(answer), keepScore);
            
//             nextQuestion();
//         }
//     }
    
//     nextQuestion();
    
// })();