//Get the elements
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
let elements = document.getElementsByClassName('hoverable');

const ModalHeader = document.getElementsByClassName('modal-header')[0];
const ModalBody = document.getElementsByClassName('modal-body')[0];
const ModalFooter = document.getElementsByClassName('modal-footer')[0];


//Making the click events
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);
for(let elem of elements) {
    elem.addEventListener('click',elementClick);
}


//Opens the element's modal
function elementClick(e) {
    let element = data[e.target.title]; // Gets the object with the e.target.title key
    // console.log(element);
    openModal(element);
}

//Opens the modal
function openModal(element) {
    modal.style.display = "block";
    ModalHeader.innerHTML = `<h1>Elementul ${element.Nume}</h1>`;

    ModalBody.innerHTML = `<p>Simbolul: ${element.Simbol}</p>`;
    ModalBody.innerHTML += `<p>Clasificare: ${element.Clasificare}</p>`;
    ModalBody.innerHTML += `<p>Grupa: ${element.Grupa}</p>`;
    ModalBody.innerHTML += `<p>Perioada: ${element.Perioada}</p>`;
    ModalBody.innerHTML += `<p>Bloc: ${element.Bloc}</p>`;
    ModalBody.innerHTML += `<p>Numar Atomic: ${element["Număr atomic"]}</p>`;
    ModalBody.innerHTML += `<p>Masa Atomica: ${element["Masă atomică"]}</p>`;
    ModalBody.innerHTML += `<p>Configuratie electronica: ${element["Configurație electronică"]}</p>`;
    ModalBody.innerHTML += `<p>Numarul de protoni/electroni: ${element["Numărul de protoni/electroni"]}</p>`;
    ModalBody.innerHTML += `<p>Numarul de neutroni: ${element["Numărul de neutroni"]}</p>`;
    ModalBody.innerHTML += `<p>Densitatea la 293 K: ${element["Densitatea la 293 K"]}</p>`;
    ModalBody.innerHTML += `<p>Punctul de topire: ${element["Punctul de topire"]}</p>`;
    ModalBody.innerHTML += `<p>Punctul de fierbere: ${element["Punctul de fierbere"]}</p>`;
    ModalBody.innerHTML += `<p>Stare de agregare: ${element["Stare de agregare"]}</p>`;
    ModalBody.innerHTML += `<p>Structura cristalina: ${element["Structura cristalină"]}</p>`;
    ModalBody.innerHTML += `<p>Culoarea: ${element["Culoarea"]}</p>`;

    ModalFooter.innerHTML = "<button class='closeModal'>Inchide</button>";

    let btn = document.getElementsByClassName('closeModal')[0];
    btn.addEventListener('click',closeModal)
}

//Closes the modal
function closeModal() {
    modal.style.display = "none";
}

//Closes the modal if clicked outside of it
function outsideClick(e) {
    if(e.target == modal) {
        modal.style.display = "none";
    }
}