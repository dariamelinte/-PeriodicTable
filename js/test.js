var answers = document.getElementsByClassName("varianta");
var questions = document.getElementsByClassName("question");
var forms = document.getElementsByClassName("forms");
var inputs = document.getElementsByClassName("input");
document.getElementById('button').addEventListener('click', () => {
    let k = 0, checked = 0;
    for (let input in inputs) {
        if (inputs[input].checked === true) {
            checked++;
            if (inputs[input].value == 1) {
                k++;
                answers[input].className += " valid";
            }
            else 
            {
                answers[input].className += " invalid";
                for(let input in inputs)
                if(inputs[input].value == 1)
                    answers[input].className += " valid";
            }
        }
    }
    if (checked === 5)
    {
        if( k === 0 )
            document.getElementById("result").innerHTML = `Nu ați răspuns corect la nicio întrebare :(`
        else if( k === 1 )
            document.getElementById("result").innerHTML = `Ați răspuns la o întrebare corect :)`
        else if( k === 5 )
            document.getElementById("result").innerHTML = `Ați răspuns corect la toate întrebările ! Felicitări !`
        else
            document.getElementById("result").innerHTML = `Ați răspuns la ${k} întrebări din ${inputs.length / 3} corect :)`
    }
    else
        alert("Nu ați răspuns la toate întrebările!");
        
})