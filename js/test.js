var answers = document.getElementsByClassName("varianta");
var questions = document.getElementsByClassName("question");
var forms = document.getElementsByClassName("forms");

console.log(answers);

// answers.map(function(answer) {
//     console.log(answer);
// });

for(var answer in answers) {
    console.log(answers[answer]);
}