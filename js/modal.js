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

    ModalBody.innerHTML = 
    `<div class="elements">
        <div class="centered">Simbolul</div> 
        <div class="centered">${element.Simbol}</div>
    </div>

    <div class="elements even">
        <div class="centered">Clasificare</div>
        <div class="centered">${element.Clasificare}</div>
    </div>

    <div class="elements">
        <div class="centered">Grupa</div>
        <div class="centered">${element.Grupa}</div>
    </div>
    
    <div class="elements even">
        <div class="centered">Perioada</div>
        <div class="centered">${element.Perioada}</div>
    </div>
    
    <div class="elements">
        <div class="centered">Bloc</div>
        <div class="centered">${element.Bloc}</div>
    </div>
    
    <div class="elements even">
        <div class="centered">Număr Atomic</div>
        <div class="centered">${element["Număr atomic"]}</div>
    </div>
    
    <div class="elements">
        <div class="centered">Masa Atomică</div>
        <div class="centered">${element["Masă atomică"]}</div>
    </div>
    
    <div class="elements even">
        <div class="centered">Configurație electronică</div>
        <div class="centered">${element["Configurație electronică"]}</div>
    </div>

    <div class="elements">
        <div class="centered">Numărul de protoni/electroni</div>
        <div class="centered">${element["Numărul de protoni/electroni"]}</div>
    </div>

    <div class="elements even">
        <div class="centered">Numărul de neutroni</div>
        <div class="centered">${element["Numărul de neutroni"]}</div>
    </div>

    <div class="elements">
        <div class="centered">Densitatea la 293 K</div>
        <div class="centered">${element["Densitatea la 293 K"]}</div>
    </div>

    <div class="elements even">
        <div class="centered">Punctul de topire</div>
        <div class="centered">${element["Punctul de topire"]}</div>
    </div>

    <div class="elements">
        <div class="centered">Punctul de fierbere</div>
        <div class="centered">${element["Punctul de fierbere"]}</div>
    </div>

    <div class="elements even">
        <div class="centered">Stare de agregare</div>
        <div class="centered">${element["Stare de agregare"]}</div>
    </div>

    <div class="elements">
        <div class="centered">Structura cristalină</div>
        <div class="centered">${element["Structura cristalină"]}</div>
    </div>

    <div class="elements even">
        <div class="centered">Culoarea</div>
        <div class="centered">${element["Culoare"]}</div>
    </div>`;

    ModalFooter.innerHTML = "<button class='closeModal'>Închide</button>";

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