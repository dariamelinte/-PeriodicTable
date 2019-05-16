let btn = document.getElementById("button");
let inputs = document.getElementsByClassName('input-edit');
let divInputs = document.getElementsByClassName('input-div');
let tableRows = document.getElementsByClassName('table-row');
let genders = document.getElementsByClassName('gender');
let form = document.getElementsByClassName('form')[0];
let mins = document.getElementsByClassName('min');
let maxs = document.getElementsByClassName('max');

form.addEventListener('change', (event) => {
   let gender = event.target.value;
   console.log(gender);
   for(let input in inputs) {
        let name = inputs[input].name;
        let analiza = data[name];
        if(!analiza)
            continue;
        if(analiza.matters === 'yes') {
            mins[input].innerHTML = name === "male" ? analiza.minText.male : analiza.minText.female;
            maxs[input].innerHTML = name === "male" ? analiza.maxText.male : analiza.maxText.female;
        }
   }
});

btn.addEventListener('click', (event) => {
    event.preventDefault();
    // console.log(inputs);
    for (let input in inputs) {
        //Checks if the field is given
        if (inputs[input].value) {

            //Gets the gender
            let gender = '';
            if (genders[0].checked) {
                gender = 'male';
            } else {
                gender = 'female';
            }


            //Getting all the fields and data needed
            let name = inputs[input].name;
            let analiza = data[name];
            let value = inputs[input].value;
            let divInput = divInputs[input];
            let tableRow = tableRows[input];

            if (analiza.matters === "no") {
                let max = analiza.maxValue;
                let min = analiza.minValue;
                if (value >= min && value <= max) {
                    //true
                    inputs[input].style.display = "none";
                    divInput.innerHTML += `<p>${value}</p>`;

                    // tableRow.classList.add("valid");

                    tableRow.className += " valid";

                    console.log(true);
                } else {
                    //false
                    console.log(false);
                    inputs[input].style.display = "none";
                    divInput.innerHTML += `<p>${value}</p>`;

                    // tableRow.classList.add("invalid");
                    
                    tableRow.className += " invalid";
                }

                divInput.className += " align";
                maxs[input].className += " visible";
                mins[input].className += " visible";
                divInput.className +=" visible";

            } else {
                let maxFemale = analiza.maxValue.female;
                let minFemale = analiza.minValue.female;

                let maxMale = analiza.maxValue.male;
                let minMale = analiza.minValue.male;

                if(gender === 'male') {
                    if(value >=minMale && value <= maxMale) {
                        inputs[input].style.display = "none";
                        divInput.innerHTML += `<p>${value}</p>`;
                        tableRow.classList.add("valid");
                    } else {
                        inputs[input].style.display = "none";
                        divInput.innerHTML += `<p>${value}</p>`;
                        tableRow.classList.add("invalid");
                    }
                } else {
                    if(value >= minFemale && value <= maxFemale) {
                        inputs[input].style.display = "none";
                        divInput.innerHTML += `<p>${value}</p>`;
                        tableRow.classList.add("valid");
                    } else {
                        inputs[input].style.display = "none";
                        divInput.innerHTML += `<p>${value}</p>`;
                        tableRow.classList.add("invalid");
                    }
                }
            }
        } else {
            tableRows[input].className += " hidden";
        }
    }
});
