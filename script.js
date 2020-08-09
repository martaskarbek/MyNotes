let allNotes = [];

(() => {
    getDataFromStorage();
    createNewNotepad();
    showNotes();
})();

function getDataFromStorage() {
    let notess = JSON.parse(localStorage.getItem("notes"));
    for (let i =0; i<notess.length; i++) {
        allNotes.push(notess[i]);
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
    const notesShow =  document.querySelector('.notes_show');
    if (allNotes) {
        for (let i = 0; i < allNotes.length; i++) {
            const p = document.createElement('p');
            const value = document.createElement('p');
            p.innerHTML = (allNotes[i].title).toUpperCase() + ' :'
            value.innerHTML = allNotes[i].content;
            value.style.marginLeft = '3.5%';
            notesShow.appendChild(p);
            notesShow.appendChild(value);
        };
    };
}
