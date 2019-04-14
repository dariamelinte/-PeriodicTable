//Get the elements
const modal = document.getElementById('modal');
const closeBtn = document.getElementsByClassName('close')[0];
let elements = document.getElementsByClassName('hoverable');


//Making the click events
closeBtn.addEventListener('click',closeModal);
window.addEventListener('click',outsideClick);
for(let elem of elements) {
    elem.addEventListener('click',elementClick);
}


//Opens the element's modal
function elementClick(e) {
    let element = data[e.target.title]; // Gets the object with the e.target.title key
    console.log(element);
    openModal();
}

//Opens the modal
function openModal() {
    modal.style.display = "block";
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