let allNotes = [];

(() => {
    getDataFromStorage();
    createNewNotepad();
    showNotes();
    initializeRemoveButtons();
    showEditHolders();
})();

function getDataFromStorage() {
    if (localStorage.getItem('notes') == null) {
        localStorage.setItem('notes', JSON.stringify({}))
    }
    else if (localStorage.getItem('notes').value == null) {
        localStorage.clear();
        localStorage.setItem('notes', JSON.stringify({}));
    }
    else {
        let notess = JSON.parse(localStorage.getItem('notes'));
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
    const addButton = document.querySelector(".create");
    notepadHolder.appendChild(noteSheet);
    addButton.classList.add("hide")
}

function getNewNote() {
    const toRemove = document.querySelector('section');
    const noteTitle = document.querySelector('.note-name');
    const noteContent = document.querySelector('.input');
    const addButton = document.querySelector(".create");
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
    addButton.classList.remove("hide")
}

function showNotes() {
    if (allNotes) {
        for (let i = 0; i < allNotes.length; i++) {
            const title = allNotes[i].title;
            const content = allNotes[i].content;
            createSingleNote(title, content);
        }
    }
}

function createSingleNote(title, content) {
    const noteTemplate = document.querySelector('#single-note-template');
    const notesHolder = document.querySelector('.notes_show');
    const singleNote = document.importNode(noteTemplate.content, true);
    singleNote.querySelector('.note-title').innerHTML = title.toUpperCase();
    singleNote.querySelector('.note-content').innerHTML = content;
    const button = singleNote.querySelector(".remove");
/*    button.addEventListener("click", ()=> removeNote(button))*/
    button.addEventListener("click", function() {
        let con = confirm("Are you shure You want to remove this note?");
        if (con === true){
        removeNote(button)}
    else {
        alert("Got it!")
        }});
    notesHolder.appendChild(singleNote);
}

function removeNote(button) {
    button.parentElement.remove();
    const title = button.parentElement.children.item(0).children.item(0).textContent.toString();
    const content = button.parentElement.children.item(0).children.item(1).textContent.toString();
    for (let i = 0; i < allNotes.length; i++) {
        const titleName = allNotes[i].title;
        const contentName = allNotes[i].content;
        if (titleName.toUpperCase() === title && contentName === content ) {
            allNotes.splice(i, 1);
        }
    }
    setDataToStorage();
}

function initializeRemoveButtons() {
    const remove_buttons = document.querySelectorAll('.remove');
    remove_buttons.forEach(button => button.addEventListener('click', ()=> removeNote(button)
    ));
}

function showEditHolders() {
    const editButtons = document.querySelectorAll('.edit');
    editButtons.forEach(button => button.addEventListener('click', function () {
        this.parentElement.parentElement.children.item(1).classList.add("show");
        const title = this.parentElement.children.item(0).children.item(0).textContent;
        const content = this.parentElement.children.item(0).children.item(1).textContent.toString();
        console.log(this.parentElement.parentElement.children.item(1).children.item(0));
       /* let new_title = this.parentElement.parentElement.children.item(1).children.item(0).textContent.toString();
        let new_note = this.parentElement.parentElement.children.item(1).children.item(1).textContent.toString();*/
        const new_title = document.querySelector(".note-update").value;
        const new_note = document.querySelector(".input-update").value;
        const save_button = this.parentElement.parentElement.children.item(1).children.item(2);
        save_button.classList.add("show_button");
        save_button.addEventListener('click', function() {
            for (let i = 0; i < allNotes.length; i++) {
                if (allNotes[i].title.toUpperCase() === title.toUpperCase()) {
                    console.log("got it");
                    allNotes[i].title = new_title;
                }
                if (allNotes[i].content === content) {
                    allNotes[i].content = new_note.innerHTML;
                }
            };
            setDataToStorage();
            showNotes();
        })
    }));
}
