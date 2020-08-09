let allNotes = [];

(() => {
    getDataFromStorage();
    createNewNotepad();
    showNotes();
    removeNote();
})();

function getDataFromStorage() {
    if (localStorage.getItem('notes') == null) {
        localStorage.setItem('notes', []);
    }
    else {
        let notess = JSON.parse(localStorage.getItem("notes"));
        for (let i =0; i<notess.length; i++) {
            allNotes.push(notess[i]);
        }
    }
}

function setDataToStorage() {
    const parsedNotes = allNotes.length > 0 ? JSON.stringify(allNotes) : [];
    localStorage.setItem('notes', parsedNotes);
}

function createNewNotepad() {
    const notepad = document.querySelector('.create');
    notepad.addEventListener('click', cloneNoteSheet);
}

function cloneNoteSheet() {
    const noteTemplate = document.querySelector('#notepad-template');
    const notepadHolder = document.querySelector('#parentNode');
    const noteSheet = document.importNode(noteTemplate.content, true);
    notepadHolder.appendChild(noteSheet);
}

function getNewNote() {
    const toRemove = document.querySelector('section');
    const noteTitle = document.querySelector('.note-name');
    const noteContent = document.querySelector('.input');
    let note = {
        title: `${noteTitle.value}`,
        content: `${noteContent.value}`
    };
    allNotes.push(note);
    toRemove.remove();
    const notesShow =  document.querySelector('.notes_show');
    notesShow.innerHTML = "";
    setDataToStorage();
    showNotes();
}

function showNotes() {
    if (allNotes) {
        for (let i = 0; i < allNotes.length; i++) {
            const title = allNotes[i].title;
            const content = allNotes[i].content;
            createSingleNote(title, content);
        };
    };
}

function createSingleNote(title, content) {
    const noteTemplate = document.querySelector('#single-note-template');
    const notesHolder = document.querySelector('.notes_show');
    const singleNote = document.importNode(noteTemplate.content, true);
    singleNote.querySelector('.note-title').innerHTML = title.toUpperCase();
    singleNote.querySelector('.note-content').innerHTML = content;
    notesHolder.appendChild(singleNote);
}

function removeNote() {
    let remove_buttons = document.querySelectorAll('.remove');
    remove_buttons.forEach(buttonn => buttonn.addEventListener('click', function () {
        this.parentElement.remove();
        const title = this.parentElement.children.item(0).children.item(0).textContent.toString();
        const content = this.parentElement.children.item(0).children.item(1).textContent.toString();
        for (let i = 0; i < allNotes.length; i++) {
            const titleName = allNotes[i].title;
            const contentName = allNotes[i].content;
            if (titleName.toUpperCase() === title && contentName === content ) {
                allNotes.splice(i, 1);
            }
        }
        setDataToStorage();
    }));
}
