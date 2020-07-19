
const add_area = document.querySelector('.input');
const display_notes = document.querySelector('.notes_show');
const create_new_note = document.querySelector('.create');
const submit_button = document.querySelector('button');
let i = 0;
let dataFromStorage = [];

function main() {
    console.log(localStorage.getItem("note"));
    create_new_note.addEventListener('click', createNewNotepad);
    submit_button.addEventListener('click', print);
    let jsonArray = localStorage.getItem("note");
    let notes = JSON.parse(jsonArray);
    console.log(notes);
}

function createNewNotepad() {
    const createNotepad = function(){
        const template = document.querySelector('#notepad-template');
        const clone = document.importNode(template.content, true);
        clone.querySelector('section');
        clone.querySelector('textarea').classList.add(String(i));
        clone.querySelector('button').classList.add(String(i));
        return clone;
    };
    const noteElement = createNotepad('Add note');
    document.querySelector('#parentNode').appendChild(noteElement);
}

function firstAdd() {
     let value = add_area.value;
    dataFromStorage.push(value);
}

function print() {
    let area = document.querySelector('.input');
    let tempButton = document.querySelector('button');
    if (area.classList.contains(String(i)) && tempButton.classList.contains(String(i))) {
        let value2 = area.value;
        dataFromStorage.push(value2);
    }
    console.log(dataFromStorage);
    i++;
    const toRemove = document.querySelector('section');
    toRemove.remove();
}

function addToLocalStorage() {
    /* localStorage.setItem('note', JSON.stringify({i: value}));*/
}

main();