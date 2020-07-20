const add_area = document.querySelector('.input');
const create_new_note = document.querySelector('.create');
const submit_button = document.querySelector('button');
let i = 0;
let dataToStorage = [];

function main() {
    create_new_note.addEventListener('click', createNewNotepad);
    submit_button.addEventListener('click', getInputValue);
    addToLocalStorage();
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
    dataToStorage.push(value);
}

function getInputValue() {
    let area = document.querySelector('.input');
    let tempButton = document.querySelector('button');
    if (area.classList.contains(String(i)) && tempButton.classList.contains(String(i))) {
        let value2 = area.value;
        dataToStorage.push(value2);
    }
    i++;
    const toRemove = document.querySelector('section');
    toRemove.remove();
    addToLocalStorage();
}

function addToLocalStorage() {
    const item = dataToStorage.length > 0 ? JSON.stringify(dataToStorage) : [];
    localStorage.setItem('note', item);
    getNotesFromStorage();
}

function getNotesFromStorage() {
    const notesShow =  document.querySelector('.notes_show');
    let notesFromStorage = localStorage.getItem("note");
    let notes = JSON.parse(notesFromStorage);
    if (notes){
        notesShow.innerHTML = "";
        for (let j=0; j<notes.length; j++) {
            const p = document.createElement("p");
            p.innerHTML = notes[j];
            notesShow.appendChild(p);
        };
    }
}

main();