const add_area = document.querySelector('.input');
const submit_button = document.querySelector('.submit');
const display_notes = document.querySelector('.notes_show');
let i = 0;

function main() {
    console.log(localStorage.getItem("note"));
    submit_button.addEventListener('click', print);

    let jsonArray = localStorage.getItem("note");
    let notes = JSON.parse(jsonArray);
    console.log(notes);
    let p = display_notes.insertAdjacentElement('.notes_show', 'p');
    p.innerHTML(notes.note);
        /*  display_notes.innerHTML = x;*/

}
function print() {
    let value = add_area.value;
    localStorage.setItem('note', JSON.stringify({i: value}));
    console.log('dupa');

}

main();