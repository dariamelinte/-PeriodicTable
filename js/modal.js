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
    ModalHeader.innerHTML = `<h1 class="modal-header-content">Elementul ${element.Nume}</h1>`;

    ModalBody.innerHTML = `<p class="top-element">Simbolul: ${element.Simbol}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Clasificare: ${element.Clasificare}</p>`;
    ModalBody.innerHTML += `<p class="elements">Grupa: ${element.Grupa}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Perioada: ${element.Perioada}</p>`;
    ModalBody.innerHTML += `<p class="elements">Bloc: ${element.Bloc}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Numar Atomic: ${element["Număr atomic"]}</p>`;
    ModalBody.innerHTML += `<p class="elements">Masa Atomica: ${element["Masă atomică"]}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Configuratie electronica: ${element["Configurație electronică"]}</p>`;
    ModalBody.innerHTML += `<p class="elements">Numarul de protoni/electroni: ${element["Numărul de protoni/electroni"]}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Numarul de neutroni: ${element["Numărul de neutroni"]}</p>`;
    ModalBody.innerHTML += `<p class="elements">Densitatea la 293 K: ${element["Densitatea la 293 K"]}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Punctul de topire: ${element["Punctul de topire"]}</p>`;
    ModalBody.innerHTML += `<p class="elements">Punctul de fierbere: ${element["Punctul de fierbere"]}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Stare de agregare: ${element["Stare de agregare"]}</p>`;
    ModalBody.innerHTML += `<p class="elements">Structura cristalina: ${element["Structura cristalină"]}</p>`;
    ModalBody.innerHTML += `<p class="elements even">Culoarea: ${element["Culoare"]}</p>`;

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