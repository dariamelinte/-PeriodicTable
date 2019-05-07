var answers = document.getElementsByClassName("varianta");
var questions = document.getElementsByClassName("question");
var forms = document.getElementsByClassName("forms");
var inputs = document.getElementsByClassName("input");

// inputs.map(key => {
//     console.log(inputs[key].value);
//     console.log(inputs[key].checked);
//     console.log(' ');
// })

// answers.map(function(answer) {
//     console.log(answer);
// });
document.getElementById('button').addEventListener('click', () => {
    let k = 0, checked = 0;
    for (let input in inputs) {
        if (inputs[input].checked === true) {
            checked++;
            if (inputs[input].value == 1) {
                k++;
            }
        }
    }
    if (checked === 3)
        document.getElementById("result").innerHTML = `Ati raspuns la ${k} intrebari din ${inputs.length / 3} corect!`
    else
        alert("Nu ai raspuns la toate intrebarile!");
})
