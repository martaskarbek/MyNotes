const add_area = document.querySelector('.input');
const submit_button = document.querySelector('.submit');
const display_notes = document.querySelector('.notes_show');

function main() {
    console.log(localStorage.getItem("note"));
    submit_button.addEventListener('click', print);
    let x = localStorage.getItem("note");
    display_notes.innerHTML = x;
}

function print() {
    console.log('dupa');
    let value = add_area.value;
    localStorage.setItem("note", value);
}

main();