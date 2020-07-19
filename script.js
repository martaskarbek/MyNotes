const add_area = document.querySelector('.input');
const submit_button = document.querySelector('.submit');
const display_notes = document.querySelector('.notes_show');
const create_new_note = document.querySelector('.create');
let i = 0;

function main() {
    console.log(localStorage.getItem("note"));
    submit_button.addEventListener('click', print);
    create_new_note.addEventListener('click', function() {
        const createNotepad = function(button_name){
            let toRemove = document.querySelector('section');
            toRemove.remove();
            const template = document.querySelector('#notepad-template');
            const clone = document.importNode(template.content, true);
            clone.querySelector('section');
            clone.querySelector('textarea');
            clone.querySelector('button').textContent = button_name;
            return clone;
        };
        const rowElement = createNotepad('Add note');
        document.querySelector('#parentNode').appendChild(rowElement);
    })
    let jsonArray = localStorage.getItem("note");
    let notes = JSON.parse(jsonArray);
    console.log(notes);

}
function print() {
    let data = [];
    let value = add_area.value;
    localStorage.setItem('note', JSON.stringify({i: value}));
    console.log('dupa');

}

main();