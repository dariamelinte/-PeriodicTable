let btn = document.getElementsByClassName("submit")[0];
let inputs = document.getElementsByClassName('input-edit');
let divInputs = document.getElementsByClassName('input-div');
let tableRows = document.getElementsByClassName('table-row');
let genders = document.getElementsByClassName('gender');
let form = document.getElementsByClassName('form')[0];
let mins = document.getElementsByClassName('min');
let maxs = document.getElementsByClassName('max');
var warning = document.getElementsByClassName("warning")[0];

form.addEventListener('change', (event) => {
    let gender = event.target.value;
    console.log(gender);
    // for (let input in inputs) {
    //     let name = inputs[input].name;
    //     let analiza = data[name];
    //     if (!analiza)
    //         continue;
    //     if (analiza.matters === 'yes') {
    //         mins[input].innerHTML = name === "male" ? analiza.minText.male : analiza.minText.female;
    //         maxs[input].innerHTML = name === "male" ? analiza.maxText.male : analiza.maxText.female;
    //     }
    // }
});

btn.addEventListener('click', (event) => {
    if (btn.classList.contains('again')) {
        //Reloads the whole page
        location.reload();

        warning.className += " warning";
    } else {


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

                    //Shows mins and maxs
                    divInput.className += " align";
                    maxs[input].textContent = analiza.maxText;
                    mins[input].textContent = analiza.minText;
                    maxs[input].className += " visible";
                    mins[input].className += " visible";
                    divInput.className += " visible";


                } else {
                    let maxFemale = analiza.maxValue.female;
                    let minFemale = analiza.minValue.female;

                    let maxMale = analiza.maxValue.male;
                    let minMale = analiza.minValue.male;

                    if (gender === 'male') {
                        if (value >= minMale && value <= maxMale) {
                            inputs[input].style.display = "none";
                            divInput.innerHTML += `<p>${value}</p>`;
                            tableRow.classList.add("valid");
                        } else {
                            inputs[input].style.display = "none";
                            divInput.innerHTML += `<p>${value}</p>`;
                            tableRow.classList.add("invalid");
                        }

                        //Adds mins and maxs

                        divInput.className += " align";
                        maxs[input].textContent = analiza.maxText.male;
                        mins[input].textContent = analiza.minText.male;
                        maxs[input].className += " visible";
                        mins[input].className += " visible";
                        divInput.className += " visible";



                    } else {
                        if (value >= minFemale && value <= maxFemale) {
                            inputs[input].style.display = "none";
                            divInput.innerHTML += `<p>${value}</p>`;
                            tableRow.classList.add("valid");
                        } else {
                            inputs[input].style.display = "none";
                            divInput.innerHTML += `<p>${value}</p>`;
                            tableRow.classList.add("invalid");
                        }

                        divInput.className += " align";
                        maxs[input].textContent = analiza.maxText.female;
                        mins[input].textContent = analiza.minText.female;
                        maxs[input].className += " visible";
                        mins[input].className += " visible";
                        divInput.className += " visible";
                    }
                }
            } else {
                tableRows[input].className += " hidden";
                //hides the warning
                warning.className += " hidden";
            }
        }

        btn.innerHTML = "Refaceți !";
        btn.className += " again";
        btn.classList.remove("submit");
    }
});


